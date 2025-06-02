<template>
  <div style="padding: 20px">
    <row :gutter="20" class="menu-row">
      <Menu theme="light" mode="horizontal">
        <menu-item name="1">
          <Button type="primary" icon="md-add" @click="abrirModalCadastro">
            Adicionar Livro
          </Button>
        </menu-item>
      </Menu>
    </row>
    <row :gutter="20" class="filtro-row">
      <i-col :sm="24">
        <Card shadow>
          <ti-filtro @filtrarPorPeriodo="filtrarPorPeriodo" />
        </Card>
      </i-col>
    </row>
    <row :gutter="20" class="grid-row">
      <i-col :sm="24">
        <Card shadow>
          <TiGridLivro
            v-model="livros"
            @editarLivro="modalEditar"
            @deleteLivro="modalExcluir"
            @emprestarDevolverLivro="modalEmprestar"
          />
        </Card>
      </i-col>
    </row>
    <Modal
      v-model="showModal"
      :title="livro.ID === undefined ? 'ADICIONAR LIVRO' : 'ATUALIZAR LIVRO'"
      :styles="{ width: '700px', top: '100px' }"
      :mask-closable="false"
    >
      <TiFormLivro
        v-if="showModal"
        v-model="livro"
        @salvarLivro="salvarLivro"
      />
      <div slot="footer"></div>
    </Modal>
    <Modal
      v-model="showModalExcluir"
      :title="'Exclusão: ' + livro.NOMELIVRO"
      :mask-closable="false"
    >
      <p>Essa operação não poderá ser desfeita. Deseja realmente excluir?</p>
      <div style="margin-top: 20px">
        <Button type="error" long @click="deleteLivro(livro.ID)"
          >Excluir</Button
        >
      </div>
      <div slot="footer"></div>
    </Modal>
     <Modal
      v-model="showModalEmprestar"
      :title="livro.SITUACAOLIVRO == 0 ? 'Pegar ' + livro.NOMELIVRO + 'emprestado' : 'Devolver ' + livro.NOMELIVRO + 'emprestado'"
      :mask-closable="false"
    >
      <p>Ao pegar esse livro, você se responsabiliza por entregar ele completo!</p>
      <div style="margin-top: 20px">
        <Button type="error" long @click="emprestarDevolverLivro(livro)"
          >{{livro.SITUACAOLIVRO == 0 ? 'Pegar' : 'Devolver'}}</Button
        >
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import TiGridLivro from "@/components/livro/GridLivro";
import TiFormLivro from "@/components/livro/FormLivro";
import TiFiltro from "@/components/livro/Filtro";
import axios from "axios";

export default {
  data() {
    return {
      livros: [],
      showModal: false,
      showModalExcluir: false,
      showModalEmprestar: false,
      livro: {},
    };
  },
  components: {
    TiGridLivro,
    TiFormLivro,
    TiFiltro,
  },
  methods: {
    abrirModalCadastro() {
      this.livro = {};
      this.showModal = true;
    },
    modalExcluir(data) {
      this.livro = data;
      this.showModalExcluir = true;
    },
    modalEditar(livro) {
      this.showModal = false;
      this.livro = { ...livro };
      this.showModal = true;
    },
    modalEmprestar(livro) {
      this.livro = livro;
      this.showModalEmprestar = true;
    },
    async salvarLivro() {
      this.$Spin.show();
      try {
        if (this.livro.ID !== undefined) {
          await this.update();
        } else {
          await this.save();
        }
      } finally {
        this.showModal = false;
        this.livro = {};
        this.$Spin.hide();
        this.filtrarPorPeriodo();
      }
    },
    async deleteLivro(id) {
      this.$Spin.show();
      try {
        await axios.delete("livro/deletar-livro/" + id);
      } finally {
        this.showModalExcluir = false;
        this.filtrarPorPeriodo();
        this.$Spin.hide();
      }
    },
    async update() {
      await axios.put("/livro/atualizar-livro", this.livro);
    },
    async save() {
      await axios.post("/livro/save-livro", this.livro);
    },
    async filtrarPorPeriodo(dados) {
      const { data } = await axios.get("livro/listar-livros", {
        params: dados,
      });
      this.livros = data.data;
    },
    async emprestarDevolverLivro(livro) {
      this.$Spin.show();
      try {
        const userId = Number(localStorage.getItem("userId")); 
        livro.IDUSUARIO = userId;
        await axios.put(`/livro/emprestar-livro/`, livro);
        this.filtrarPorPeriodo();
      } catch (e) {
        this.$Message.error("Erro ao emprestar livro");
      } finally {
        this.showModalEmprestar = false;
        this.$Spin.hide();
      }
    },
  },
  created() {
    this.filtrarPorPeriodo();
  },
};
</script>

<style scoped>
.menu-row {
  margin-bottom: 10px;
}

.filtro-row,
.grid-row {
  margin-top: 10px;
  margin-bottom: 20px;
}

.Card {
  padding: 20px;
}
</style>
