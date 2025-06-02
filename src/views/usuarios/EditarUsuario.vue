<template>
  <div style="padding: 20px">
    <row :gutter="20" class="menu-row">
      <i-col :sm="24">
        <Card shadow>
          <Form
            :model="usuario"
            :rules="formRules"
            ref="formUsuario"
            @submit.native.prevent
          >
            <row :gutter="20">
              <i-col :sm="24">
                <FormItem label="Nome: " prop="name">
                  <i-input v-model="usuario.name" />
                </FormItem>
              </i-col>
            </row>

            <row :gutter="20">
              <i-col :sm="24">
                <FormItem label="Email: " prop="email">
                  <i-input v-model="usuario.email" type="email" />
                </FormItem>
              </i-col>
            </row>

            <row :gutter="20">
              <i-col :sm="24">
                <FormItem label="Senha:">
                  <i-input v-model="usuario.password" type="password" />
                </FormItem>
              </i-col>
            </row>
            <row :gutter="20">
              <i-col :sm="24">
                <Button type="success" long @click="salvarUsuario">
                  Salvar
                </Button>
              </i-col>
            </row>
          </Form>
        </Card>
      </i-col>
    </row>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      usuario: {},
      formRules: {}
    };
  },
  components: {
  },
  computed: {
    isAdmin() {
      return localStorage.getItem("userGroup") === "admin";
    },
  },
  methods: {
    async buscarUsuario() {
      const { id } = this.$route.params;
      const { data } = await axios.get(`/usuarios/${id}`);
      this.usuario = data.data;
    },
    async salvarUsuario() {
      this.$Spin.show();
      try {
        if (this.usuario.id) {
          await axios.put(`/usuarios/atualizar-proprio-usuario`, this.usuario);
        }
        this.$Message.success("Usuário atualizado com sucesso");
        this.$router.push("/");
      } catch (error) {
        this.$Message.error("Erro ao salvar");
      } finally {
        this.$Spin.hide();
      }
    }
  },
  created() {
    this.buscarUsuario();
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
