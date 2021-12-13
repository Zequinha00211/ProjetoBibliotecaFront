<template>
  <Form ref="formS2210" :model="formS2210" :rules="ruleS2210" inline>
    <Tabs value="tab1">
    <TabPane label="A" name="tab1">
    <row :gutter="20">
      <i-col :sm="12">
        <FormItem prop="tipo" label="TipoDeInscricao">
          <Input
            type="text"
            v-model="formS2210.cnpjFormat"
            placeholder="Tipo de Inscrição"
          >
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem prop="cnpj" label="CNPJ">
          <Input type="text" v-model="formS2210.cnpjFormat" placeholder="Inscrição da Empresa" v-mask="`##.###.###/####-##`">
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
    </TabPane>
    </Tabs>
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
      this.formCompany.cnpj = newValue.cnpjFormat;
    },
  },
  methods: {
    salvar() {
      this.$refs["formCompany"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit", this.formCompany);         
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.formCompany = this.value || {};
    this.formCompany.cnpj = this.value.cnpjFormat;
  },
};
</script>
