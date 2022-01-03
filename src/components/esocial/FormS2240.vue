<template>
  <Form ref="formEsocial" :model="formEsocial" :rules="ruleEsocial" inline>
    <row :gutter="20">
      <i-col :sm="24">
        <FormItem prop="datainicio" label="Data de Início nas Condições de Risco">
         <DatePicker
                type="date"
                format="DD/MM/yyyy"
                v-model="formEsocial.datainicio"
                style="width: 100%"
              ></DatePicker>
        </FormItem>
      </i-col>
      </row>
         <row :gutter="20">
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
      formEsocial: {
        datainicio: "",
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
      this.formEsocial = newValue || {}; 
      
    },
  },
  methods: {
    salvar() {
      this.$refs["formEsocial"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit", this.formEsocial); 
           this.formEsocial = { datainicio: ""}        
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.formEsocial = this.value || {};  
  },
};
</script>
