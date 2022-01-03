<template>
  <Form ref="form4Esocial" :model="form4Esocial" :rules="rule4Esocial" inline>
    <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="caoudoc" label="CA ou documento de avaliação de EPI">
              <Input
                type="text"
                v-model="form4Esocial.caoudoc"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="descepi" label="Descrição do EPI">
              <Input
                type="text"
                v-model="form4Esocial.descepi"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        <i-col :sm="12">
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
      form4Esocial: {
        caoudoc: "",
        descepi: "",
      },
      rule4Esocial: {
      },
    };
  },
  watch: {
    value(newValue) {
      this.form4Esocial = newValue || {}; 
      
    },
  },
  methods: {
    salvar() {
      this.$refs["form4Esocial"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit3", this.form4Esocial); 
           this.form4Esocial = { caoudoc: "", descepi: "",}        
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.form4Esocial = this.value || {};  
  },
};
</script>
