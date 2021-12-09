<template>
  <EditCompany v-model="formCompany" @handleSubmit="handleSubmit"/>
</template>

<script>

import EditCompany from "@/components/company/FormCompany"
import axios from "axios";
export default {
  data() {
    return {
      idCompany:this.$route.params.id,
      formCompany: {},
    };
  },
  components:{
    EditCompany
  },
  methods: {
    async BuscarCompany() {
      const { data } = await axios.get("company/"+this.idCompany);
      this.formCompany = data.data;
    },
    async handleSubmit(data) {
       await axios.post("company/update", data);
      this.$Message.success("Alterado com Sucesso!");
    },
  },
  created() {
    this.BuscarCompany();
  },
};
</script>
