<template>
  <Form ref="formEsocial" :model="formEsocial" :rules="ruleEsocial" inline>
    <row :gutter="20">
      <i-col :sm="8">
        <FormItem prop="codexame" label="Código do Exame">
         <Select v-model="formEsocial.codexame" filterable>
                <Option
                  v-for="codexame in codigoprocedimento"
                  :value="codexame.codigo"
                  :key="codexame.id"
                  >{{ codexame.codigo }}</Option
                >
              </Select>
        </FormItem>
      </i-col>
      <i-col :sm="8">
        <FormItem prop="dataexame" label="Data do Exame">
         <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEsocial.dataexame"
                style="width: 100%"
              ></DatePicker>
        </FormItem>
      </i-col>
      <i-col :sm="8">
        <FormItem prop="ordemexame" label="Ordem do Exame">
           <Select v-model="formEsocial.ordemexame" filterable>
                  <Option value="1">Inicial</Option>
                  <Option value="2">Sequencial</Option>
              </Select>
        </FormItem>
      </i-col>
      </row>
     <row :gutter="20">
      <i-col :sm="24">
        <FormItem prop="indicacaoresultado" label="Indicação do Resultado">
           <Select v-model="formEsocial.indicacaoresultado" filterable>
                <Option
                  v-for="indicacaoresultado in indicacaoderesultado"
                  :value="indicacaoresultado.codigo"
                  :key="indicacaoresultado.id"
                  >{{ indicacaoresultado.descricao }}</Option
                >
              </Select>
        </FormItem>
      </i-col>
        </row>
      <row :gutter="20">
      <i-col :sm="24">
        <FormItem prop="obs" label="Observações">
          <Input
            type="text"
            v-model="formEsocial.obs"
          >
          </Input>
        </FormItem>
      </i-col>
      </row>
      <row :gutter="20">
       <i-col :sm="12">
        <FormItem>
          <Button @click="$emit('cancelarDadosExames')" class="btnFormDadosExames"
            >Cancelar</Button
          >
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem>
          <Button type="primary" @click="salvar()" class="btnFormDadosExames">{{stringBtn}}</Button>
        </FormItem>
      </i-col>
    </row>
  </Form>
</template>

<script>
import { mask } from "vue-the-mask";
import axios from "axios";
export default {
  props: {
    value: {},
  },
  directives: {
    mask,
  },
  data() {
    return {
      codigoprocedimento: {},
      indicacaoderesultado: {},
      stringBtn : this.$route.params.id != undefined ? 'Atualizar': 'Salvar',
      formEsocial: {
        codexame: "",
        dataexame: "",
        ordemexame: "",
        obs: "",
      },
      ruleEsocial: {
        codexame: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },       
        ],
          dataexame: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },       
        ],
         ordemexame: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },       
        ],
         obs: [
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
      this.formEsocial = newValue || {}; 
      
    },
  },
  methods: {
    salvar() {
      this.$refs["formEsocial"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit", this.formEsocial); 
          this.formEsocial = { codexame: "",dataexame: "", ordemexame: "", indicacaoresultado: "", obs: ""}       
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
    async buscarCodigoProcedimento(){
      const { data } = await axios.get("/esocial/tabela/27")
      this.codigoprocedimento = data.data.data;
    },
    async buscarIndicacaodeResultado(){
      const { data } = await axios.get("/esocial/atributos/indicacao-resultado")
      this.indicacaoderesultado = data.data.data;
    },
  },
  created() {
    this.buscarCodigoProcedimento();
    this.buscarIndicacaodeResultado();
    this.formEsocial = this.value || {};  
  },
};
</script>
<style scoped>
.btnFormDadosExames{
  width: 100%;
}
</style>
