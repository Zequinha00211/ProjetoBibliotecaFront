<template>
  <Form ref="formEsocialData" :model="formEsocialData" :rules="ruleEsocial" inline>
    <row :gutter="20">
      <i-col :sm="24">
        <FormItem
          prop="datainicio"
          label=""
        >
          <DatePicker
            type="date"
            format="dd/MM/yyyy"
            v-model="formEsocialData.datainicio"
            style="width: 100%"
          ></DatePicker>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        
      <i-col :sm="12">
        <FormItem>
          <Button @click="$emit('cancelarDadosData')" class="btnFormDadosData">Cancelar</Button>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem>
          <Button type="primary" @click="adicionar()" class="btnFormDadosData">{{ stringBtn }}</Button>
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
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Adicionar",
      formEsocialData: {
      },
      ruleEsocial: {
        datainicio: [
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
      this.formEsocialData = newValue || {};
       if(newValue.id !=undefined) {
         let datainicio =newValue?.datainicio;
          if (typeof datainicio === "string" && datainicio) {
            datainicio = new Date(datainicio);
          }
        
          this.formEsocialData.datainicio = datainicio;   
       }
    },
  },
  methods: {
    adicionar() {
      this.$refs["formEsocialData"].validate((valid) => {
        if (valid) {
          this.$emit("adicionarDadosDatas", this.formEsocialData);
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.formEsocialData = this.value || {};
    if( this.value.id !=undefined) {
         let datainicio = this.value?.datainicio;
          if (typeof datainicio === "string" && datainicio) {
            datainicio = new Date(datainicio);
          }
        
          this.formEsocialData.datainicio = datainicio;   
       }
  },
};
</script>
<style scoped>
.btnFormDadosData{
  width: 100%;
}
</style>
