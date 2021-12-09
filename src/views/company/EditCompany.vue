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
      idCompany:this.$route.params.id,
      formCompany: {
        name: "",
        cnpj: "",
      },
    };
  },
  methods: {
    async BuscarCompany() {
      const { data } = await axios.get("company/"+this.idCompany);
      this.formCompany = data.data;
    },
    async handleSubmit() {
      this.$refs["formCompany"].validate(async (valid) => {
        if (valid) {
          await axios.post("company/update", this.formCompany);
          this.$Message.success("Alterado com Sucesso!");
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.BuscarCompany();
  },
};
</script>
