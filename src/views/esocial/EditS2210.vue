<template>
  <EditS2210 v-model="formEsocial" @handleSubmit="handleSubmit"/>
</template>

<script>

import EditS2210 from "@/components/esocial/FormS2210"
import axios from "axios";
export default {
  data() {
    return {
      idCadastroS2210:this.$route.params.id,
      formEsocial: {},
    };
  },
  components:{
    EditS2210
  },
  methods: {
    async BuscarCadastroS2210() {
      const { data } = await axios.get("esocial/s-2210/"+this.idCadastroS2210);
      this.formEsocial = data.data;
    },
    async handleSubmit(data) {
       await axios.put("esocial/s-2210", data);
      this.$Message.success("Alterado com Sucesso!");
    },
  },
  created() {
    this.BuscarCadastroS2210();
  },
};
</script>
