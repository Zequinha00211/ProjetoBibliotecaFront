<template>
  <div><ListCompany v-model="companys"/></div>
</template>

<script>

import ListCompany from "@/components/company/GridCompany"
import axios from "axios";
export default {
  data() {
    return { 
      companys: {},
    };
  },
  components:{ 
      ListCompany
  },
  methods: {
    async buscarCompanys() {
      const { data } = await axios.get("company/all");
      this.companys = data.data;
    },
  },
  created() {
    this.buscarCompanys();
  },
};
</script>
