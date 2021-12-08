<template>
  <Form ref="formUsuario" :model="formUsuario" :rules="ruleUsuario" inline>
    <row :gutter="20">
      <i-col :sm="24">
        <FormItem prop="email"  label="E-mail">
          <Input
            type="text"
            v-model="formUsuario.email"
            placeholder="E-Mail"
            :disabled="true"
           
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem prop="name" label="Nome">
          <Input type="text" v-model="formUsuario.name" placeholder="Nome">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem prop="password"  label="Senha">
          <Input
            type="password"
            v-model="formUsuario.password"
            placeholder="Senha"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="24">
        <FormItem>
          <Button type="primary" @click="handleSubmit()">Alterar</Button>
        </FormItem>
      </i-col>
    </row>
  </Form>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      formUsuario: {
        email: "",
        password: "",
        name: "",
      },
      ruleUsuario: {
        email: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        name: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 6,
            message: "Tamanho minimo de 6 caracteres!",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async BuscarUsuario() {
      const { data } = await axios.get("auth/user-profile");
      this.formUsuario = data.data;
    },
    async handleSubmit() {
      this.$refs["formUsuario"].validate(async (valid) => {
        if (valid) {
          await axios.post("auth/update", this.formUsuario);
          this.$Message.success("Senha Altera com Sucesso!");
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.BuscarUsuario();
  },
};
</script>
