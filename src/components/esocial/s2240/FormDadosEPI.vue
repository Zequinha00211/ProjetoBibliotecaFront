<template>
  <Form ref="FormDadosEPI" :model="FormDadosEPI" :rules="rule4Esocial" inline>
    <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="caoudocumentoavaliacao" label="CA ou documento de avaliação de EPI">
              <Input
                type="text"
                v-model="FormDadosEPI.caoudocumentoavaliacao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="descepi" label="Descrição do EPI">
              <Input
                type="text"
                v-model="FormDadosEPI.descepi"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
         <row :gutter="20">
      <i-col :sm="12">
        <FormItem>
          <Button @click="$emit('cancelarDadosEPI')" class="btnFormDadosEPI"
            >Cancelar</Button
          >
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem>
          <Button type="primary" @click="adicionar()" class="btnFormDadosEPI">{{
            stringBtn
          }}</Button>
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
      stringBtn:'Adicionar',
      FormDadosEPI: {
      },
      rule4Esocial: {
      },
    };
  },
  watch: {
    value(newValue) {
      this.FormDadosEPI = newValue || {}; 
      this.stringBtn =  this.FormDadosEPI.index !=undefined ? 'Atualizar' : "Adicionar"
    },
  },
  methods: {
    adicionar() {
      this.$refs["FormDadosEPI"].validate((valid) => {
        if (valid) {
          this.$emit("adicionarDadosEPI", this.FormDadosEPI);       
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.FormDadosEPI = this.value || {};  
    this.stringBtn =  this.FormDadosEPI.index !=undefined ? 'Atualizar' : "Adicionar"
  },
};
</script>
<style scoped>
.btnFormDadosEPI{
  width: 100%;
}
</style>
