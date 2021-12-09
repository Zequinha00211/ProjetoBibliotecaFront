<template>
  <EditCompany v-model="formCompany" @handleSubmit="handleSubmit"/>
</template>

<script>
import EditCompany from "@/components/company/FormCompany"
import axios from "axios";
export default {
  data() {
    return {
      formCompany: {
        name: "",
        cnpj: "",
      },
    };
  },
   components:{
    EditCompany
  },
  methods: {
    async handleSubmit(data) {
      await axios.post("company/register", data);
      this.$Message.success("Alterado com Sucesso!");
    },
  },
  created() {
  },
};
</script>
