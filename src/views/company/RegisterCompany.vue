<template>
  <Form ref="formCompany" :model="formCompany" :rules="ruleCompany" inline>
    <row :gutter="20">
      <i-col :sm="12">
        <FormItem prop="name" label="Nome">
          <Input type="text" v-model="formCompany.name" placeholder="Razão Social">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem prop="cnpj"  label="CNPJ">
          <Input
            type="text"
            v-model="formCompany.cnpj"
            placeholder="CNPJ"
          >
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="24">
        <FormItem>
          <Button type="primary" @click="handleSubmit()">Criar</Button>
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
      formCompany: {
        name: "",
        cnpj: "",
      },
      ruleCompany: {
        name: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        cnpj: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
          {
            type: "string",
            min: 13,
            message: "É preciso inserir 13 caracteres!",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async handleSubmit() {
      this.$refs["formCompany"].validate(async (valid) => {
        if (valid) {
          await axios.post("company/register", this.formCompany);
          this.$Message.success("Empresa cadastrada com Sucesso!");
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
  },
};
</script>
