<template>
  <Form ref="FormDadosAgenteNocivo" :model="FormDadosAgenteNocivo" :rules="rule2Esocial" inline>
    <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="codagentenocivo" label="Código do Agente Nocivo">           
              <Select v-model="FormDadosAgenteNocivo.codagentenocivo" filterable>
                <Option
                  v-for="codagentenocivo in codigoagentenocivo"
                  :value="codagentenocivo.codigo"
                  :key="codagentenocivo.codigo"
                  >{{ codagentenocivo.codigo }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem
              prop="descagentenocivo"
              label="Descrição do Agente Nocivo"
            >
              <Input
                type="text"
                v-model="FormDadosAgenteNocivo.descagentenocivo"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="tipoavaliacao" label="Tipo de Avaliação">
              <Select v-model="FormDadosAgenteNocivo.tipoavaliacao" filterable>
                <Option :value="1">Critério quantitativo</Option>
                <Option :value="2">Critério qualitativo</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="doseexposicao" label="Dose da Exposição">
              <Input
                type="number"
                v-model="FormDadosAgenteNocivo.doseexposicao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
       <row :gutter="20">
      <i-col :sm="12">
        <FormItem>
          <Button @click="$emit('cancelarDadosAgenteNocivo')" class="btnFormDadosAgenteNocivo"
            >Cancelar</Button
          >
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem>
          <Button type="primary" @click="adicionar()" class="btnFormDadosAgenteNocivo">{{
            stringBtn
          }}</Button>
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
      codigoagentenocivo: {},
      stringBtn : 'Adicionar',
      FormDadosAgenteNocivo: {
      },
      rule2Esocial: {
         codagentenocivo: [
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
      this.FormDadosAgenteNocivo = newValue || {}; 
      this.FormDadosAgenteNocivo.codagentenocivo = parseInt(this.FormDadosAgenteNocivo.codagentenocivo);
      this.stringBtn =  this.FormDadosAgenteNocivo.index !=undefined ? 'Atualizar' : "Adicionar"
    },
  },
  methods: {
    adicionar() {
      this.$refs["FormDadosAgenteNocivo"].validate((valid) => {
        if (valid) {
          this.$emit("adicionarDadosAgentesNocivos", this.FormDadosAgenteNocivo); 
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
     async buscarCodigoAgenteNocivo() {
      const { data } = await axios.get("/esocial/tabela/27");
      this.codigoagentenocivo = data.data.data;
    },
  },
  created() {
    this.buscarCodigoAgenteNocivo();
    this.FormDadosAgenteNocivo = this.value || {};  
    this.FormDadosAgenteNocivo.codagentenocivo = parseInt(this.FormDadosAgenteNocivo.codagentenocivo);
    this.stringBtn =  this.FormDadosAgenteNocivo.index !=undefined ? 'Atualizar' : "Adicionar"
  },
};
</script>
<style scoped>
.btnFormDadosAgenteNocivo{
  width: 100%;
}
</style>
