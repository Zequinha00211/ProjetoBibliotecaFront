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
    async handleSubmit(empresa) {
      const {data} = await axios.post("company/register", empresa);
      this.$Message.success(data.data);
    },
  },
  created() {
  },
};
</script>
