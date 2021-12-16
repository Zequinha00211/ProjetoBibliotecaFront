<template>
  <FormS2210 v-model="formEsocial" @handleSubmit="handleSubmit"/>
</template>

<script>
import FormS2210 from "@/components/esocial/FormS2210";
import axios from "axios";
export default {
  data() {
    return {
      formEsocial: {
        name: "",
        cnpj: "",
      },
    };
  },
   components:{
    FormS2210
  },
  methods: {
    async handleSubmit(data) {
      await axios.post("esocial/s-2210", data);
      this.$Message.success("Alterado com Sucesso!");
    },
  },
  created() {
  },
};
</script>
