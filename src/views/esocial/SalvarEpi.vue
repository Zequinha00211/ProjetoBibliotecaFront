<template>
  <div>
    <ti-form-epi v-model="eventoEpi" @salvar="salvar" />
  </div>
</template>

<script>
import TiFormEpi from "@/components/esocial/epi/FormEpi";
import axios from "axios";
export default {
  data() {
    return {
      eventoEpi: {},
    };
  },
  components:{
    TiFormEpi,
  },
  methods: {
    async salvar(data) {
      await axios.post("esocial/epi", data);
      this.$Message.success("Salvo com Sucesso!");
     /*  this.$router.push({ name: 'listS2210' }) */
    },
  },
  created() {
  },
};
</script>
