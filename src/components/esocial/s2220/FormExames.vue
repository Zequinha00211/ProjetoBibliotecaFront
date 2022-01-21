<template>
  <Form ref="formEsocialExame" :model="formEsocialExame" :rules="ruleEsocial" inline>
    <row :gutter="20">
      <i-col :sm="8">
        
        <FormItem prop="codexame" label="Código do Exame">
         <Select v-model="formEsocialExame.codexame" filterable>
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
                v-model="formEsocialExame.dataexame"
                style="width: 100%"
              ></DatePicker>
        </FormItem>
      </i-col>
      <i-col :sm="8">
        <FormItem prop="ordemexame" label="Ordem do Exame">
           <Select v-model="formEsocialExame.ordemexame" filterable>
                  <Option :value="1">Inicial</Option>
                  <Option :value="2">Sequencial</Option>
              </Select>
        </FormItem>
      </i-col>
      </row>
     <row :gutter="20">
      <i-col :sm="24">
        <FormItem prop="indicacaoresultado" label="Indicação do Resultado">
           <Select v-model="formEsocialExame.indicacaoresultado" filterable>
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
        <FormItem prop="obsexame" label="Observações">
          <Input
            type="text"
            v-model="formEsocialExame.obsexame"
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
          <Button type="primary" @click="adicionar()" class="btnFormDadosExames">{{stringBtn}}</Button>
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
      codigoprocedimento: [],
      indicacaoderesultado: [],
      stringBtn : this.$route.params.id != undefined ? 'Atualizar': 'Adicionar',
      formEsocialExame: {},
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
      },
    };
  },
  watch: {
    value(newValue) {

       this.formEsocialExame = newValue || {};
       if(newValue.id !=undefined) {
         let dataemissaoatestado =newValue?.dataemissaoatestado;
          if (typeof dataemissaoatestado === "string" && dataemissaoatestado) {
            dataemissaoatestado = new Date(dataemissaoatestado);
          }
        
          this.formEsocialExame.dataemissaoatestado = dataemissaoatestado;   
       }
          
      
    },
  },
  methods: {
      
    adicionar() {
      this.$refs["formEsocialExame"].validate((valid) => {
        if (valid) { 
          this.$emit("adicionarDadosExames", this.formEsocialExame);     
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
    this.formEsocialExame = this.value || {}; 
      if( this.value.id !=undefined) {
         let dataemissaoatestado = this.value?.dataemissaoatestado;
          if (typeof dataemissaoatestado === "string" && dataemissaoatestado) {
            dataemissaoatestado = new Date(dataemissaoatestado);
          }
        
          this.formEsocialExame.dataemissaoatestado = dataemissaoatestado;   
       }
  },
};
</script>
<style scoped>
.btnFormDadosExames{
  width: 100%;
}
</style>
