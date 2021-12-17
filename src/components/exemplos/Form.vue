<template>
  <Form ref="formCompany" :model="formCompany" :rules="ruleCompany" inline>
    <row :gutter="20">
      <i-col :sm="12">
        <FormItem prop="name" label="Nome">
          <Input
            type="text"
            v-model="formCompany.name"
            placeholder="Razão Social"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem prop="cnpj" label="CNPJ">
          <Input type="text" v-model="formCompany.cnpj" placeholder="CNPJ" v-mask="`##.###.###/####-##`">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="24">
        <FormItem>
          <Button type="primary" @click="salvar()">{{stringBtn}}</Button>
        </FormItem>
      </i-col>
    </row>
  </Form>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  props: {
    value: {},
  },
  directives: {
    mask,
  },
  data() {
    return {
      stringBtn : this.$route.params.id != undefined ? 'Atualizar': 'Salvar',
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
         
        ],
      },
    };
  },
  watch: {
    value(newValue) {
      this.formCompany = newValue || {}; 
      
    },
  },
  methods: {
    salvar() {
      this.$refs["formCompany"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit", this.formCompany); 
           this.formCompany = { name: "" , cnpj: ""}        
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.formCompany = this.value || {};  
  },
};
</script>
