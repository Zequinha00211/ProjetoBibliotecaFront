<template>
  <div style="padding: 20px">
    <row :gutter="20" class="menu-row">
      <Menu theme="light" mode="horizontal">
        <menu-item name="1">
          <Button type="primary" icon="md-add" @click="abrirModalCadastro">
            Adicionar Usuário
          </Button>
        </menu-item>
      </Menu>
    </row>

    <row :gutter="20" class="grid-row">
      <i-col :sm="24">
        <Card shadow>
          <TiGridUsuarios
            v-model="usuarios"
            @editarUsuario="modalEditar"
            @deleteUsuario="modalExcluir"
          />
        </Card>
      </i-col>
    </row>

    <Modal
      v-model="showModal"
      :title="
        usuario.id === undefined ? 'ADICIONAR USUÁRIO' : 'ATUALIZAR USUÁRIO'
      "
      :styles="{ width: '700px', top: '100px' }"
      :mask-closable="false"
    >
      <TiFormUsuarios
        v-if="showModal"
        v-model="usuario"
        @salvarUsuario="salvarUsuario"
      />
      <div slot="footer"></div>
    </Modal>

    <Modal
      v-model="showModalExcluir"
      :title="'Exclusão: ' + usuario.name"
      :mask-closable="false"
    >
      <p>Essa operação não poderá ser desfeita. Deseja realmente excluir?</p>
      <div style="margin-top: 20px">
        <Button type="error" long @click="deleteUsuario(usuario.id)"
          >Excluir</Button
        >
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import TiGridUsuarios from "@/components/usuarios/GridUsuarios";
import TiFormUsuarios from "@/components/usuarios/Form";
import axios from "axios";

export default {
  data() {
    return {
      usuarios: [],
      showModal: false,
      showModalExcluir: false,
      usuario: {},
    };
  },
  components: {
    TiGridUsuarios,
    TiFormUsuarios,
  },
  methods: {
    async buscarUsuarios() {
      const { data } = await axios.get("usuarios/");
      this.usuarios = data.data;
    },
    abrirModalCadastro() {
      this.usuario = {};
      this.showModal = true;
    },
    modalExcluir(data) {
      this.usuario = data;
      this.showModalExcluir = true;
    },
    modalEditar(usuario) {
      this.showModal = false;
      this.usuario = { ...usuario };
      this.showModal = true;
    },
    async salvarUsuario() {
      this.$Spin.show();
      try {
        if (this.usuario.id !== undefined) {
          await this.update();
        } else {
          await this.save();
        }
      } finally {
        this.showModal = false;
        this.usuario = {};
        this.$Spin.hide();
        await this.buscarUsuarios();
      }
    },
    async deleteUsuario(id) {
      this.$Spin.show();
      try {
        await axios.delete(`usuarios/delete/${id}`);
      } finally {
        this.showModalExcluir = false;
        this.buscarUsuarios();
        this.$Spin.hide();
      }
    },
    async update() {
      await axios.put(`/usuarios/`, this.usuario);
    },
    async save() {
      await axios.post(`/auth/register`, this.usuario);
    },
  },
  created() {
    this.buscarUsuarios();
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
</style>
