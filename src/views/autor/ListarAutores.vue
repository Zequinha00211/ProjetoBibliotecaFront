<template>
  <div style="padding: 20px">
    <!-- Ação de adicionar -->
    <row :gutter="20" class="menu-row">
      <Menu theme="light" mode="horizontal">
        <menu-item name="1">
          <Button type="primary" icon="md-add" @click="abrirModalCadastro">
            Adicionar Autor
          </Button>
        </menu-item>
      </Menu>
    </row>

    <!-- Lista de autores -->
    <row :gutter="20" class="grid-row">
      <i-col :sm="24">
        <Card shadow>
          <TiGridAutor
            v-model="autores"
            @editarAutor="modalEditar"
            @deleteAutor="modalExcluir"
          />
        </Card>
      </i-col>
    </row>

    <!-- Modal de adicionar/editar -->
    <Modal
      v-model="showModal"
      :title="autor.ID === undefined ? 'ADICIONAR AUTOR' : 'ATUALIZAR AUTOR'"
      :styles="{ width: '700px', top: '100px' }"
      :mask-closable="false"
    >
      <TiFormAutor
        v-if="showModal"
        v-model="autor"
        @salvarAutor="salvarAutor"
      />
      <div slot="footer"></div>
    </Modal>

    <!-- Modal de exclusão -->
    <Modal
      v-model="showModalExcluir"
      :title="'Exclusão: ' + autor.NOME"
      :mask-closable="false"
    >
      <p>Essa operação não poderá ser desfeita. Deseja realmente excluir?</p>
      <div style="margin-top: 20px">
        <Button type="error" long @click="deleteAutor(autor.ID)"
          >Excluir</Button
        >
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import TiGridAutor from "@/components/autor/GridAutor";
import TiFormAutor from "@/components/autor/FormAutor";
import axios from "axios";

export default {
  data() {
    return {
      autores: [],
      showModal: false,
      showModalExcluir: false,
      autor: {},
    };
  },
  components: {
    TiGridAutor,
    TiFormAutor,
  },
  methods: {
    async buscarAutores() {
      const { data } = await axios.get("autor/listar-autores");
      this.autores = data.data;
    },
    modalExcluir(data) {
      this.autor = data;
      this.showModalExcluir = true;
    },
    modalEditar(autor) {
      this.showModal = false;
      this.autor = { ...autor };
      this.showModal = true;
    },
    abrirModalCadastro() {
      this.autor = {};
      this.showModal = true;
    },
    async salvarAutor() {
      this.$Spin.show();
      try {
        if (this.autor.ID !== undefined) {
          await this.update();
        } else {
          await this.save();
        }
      } finally {
        this.showModal = false;
        this.autor = {};
        this.$Spin.hide();
        await this.buscarAutores();
      }
    },
    async deleteAutor(id) {
      this.$Spin.show();
      try {
        await axios.delete("autor/deletar-autor/" + id);
        this.$Message.success("Autor excluído com sucesso.");
        this.buscarAutores();
      } catch (error) {
        if (error.response && error.response.status === 400) {
          const msg =
            error.response.data.erros?.[0] ||
            "Não foi possível excluir o autor.";
          this.$Message.error(msg);
        } else {
          this.$Message.error("Erro ao excluir o autor.");
        }
      } finally {
        this.showModalExcluir = false;
        this.buscarAutores();
        this.$Spin.hide();
      }
    },
    async update() {
      await axios.put("/autor/atualizar-autor", this.autor);
    },
    async save() {
      await axios.post("/autor/save-autor", this.autor);
    },
  },
  created() {
    this.buscarAutores();
  },
};
</script>

<style scoped>
.menu-row {
  margin-bottom: 10px;
}

.grid-row {
  margin-top: 10px;
}

.Card {
  padding: 20px;
}
</style>
