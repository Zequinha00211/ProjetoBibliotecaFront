<template>
  <div style="padding-right: 20px; padding-left: 20px">
    <Form
      :model="usuario"
      :rules="formRules"
      ref="formUsuario"
      @submit.native.prevent
    >
      <row :gutter="20">
        <i-col :sm="24">
          <FormItem label="Nome: " prop="name">
            <i-input v-model="usuario.name"></i-input>
          </FormItem>
        </i-col>
      </row>

      <row :gutter="20">
        <i-col :sm="24">
          <FormItem label="Email: " prop="email">
            <i-input v-model="usuario.email" type="email"></i-input>
          </FormItem>
        </i-col>
      </row>

      <row :gutter="20">
        <i-col :sm="24">
          <FormItem label="Senha:">
            <i-input v-model="usuario.password" type="password"></i-input>
          </FormItem>
        </i-col>
      </row>

      <row :gutter="20">
        <i-col :sm="24">
          <FormItem label="Privilégio:">
            <Select v-model="usuario.privilegio_id" filterable>
              <Option
                v-for="item in privilegios"
                :value="item.ID"
                :key="item.ID"
              >{{ item.DESCRICAO }}</Option>
            </Select>
          </FormItem>
        </i-col>
      </row>

      <row :gutter="20">
        <i-col :sm="24">
          <Button type="success" long @click="salvar">Salvar</Button>
        </i-col>
      </row>
    </Form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    isEditar: {},
    value: {},
  },
  data() {
    return {
      usuario: {
        name: "",
        email: "",
        password: "",
        privilegio_id: "",
      },
      privilegios: [],
      formRules: {
        name: {
          required: true,
          message: "Campo requerido",
        },
        email: {
          required: true,
          type: "email",
          message: "Campo requerido",
        },
      },
    };
  },
  watch: {
    value(newValue) {
      this.usuario = newValue || {};
    },
    usuario(newValue) {
      this.$emit("input", newValue || {});
    },
  },
  methods: {
    salvar() {
      this.$refs.formUsuario.validate((valid) => {
        if (!valid) return;

        if (this.usuario.id == undefined) {
          this.$Message.error("Senha é obrigatória para novo usuário");
          return;
        }
        if (this.usuario.password && this.usuario.password.length < 6) {
          this.$Message.error("Senha deve ter no mínimo 6 caracteres");
          return;
        }

        this.$emit("salvarUsuario", this.usuario);
      });
    },
    async buscarPrivilegio() {
      const { data } = await axios.get("usuarios/buscar/privilegios");
      this.privilegios = data.data;
    },
  },
  created() {
    this.usuario = this.value || {};
    this.buscarPrivilegio();
  },
};
</script>
