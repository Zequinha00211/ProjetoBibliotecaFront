<template>
  <div>
    <ti-form-epi v-model="eventoEpi" @atualizar="atualizar" />
  </div>
</template>

<script>
import TiFormEpi from "@/components/esocial/epi/FormEpi";
import axios from "axios";
export default {
  data() {
    return {
      eventoEpi: {},
      idCadastroEpi: this.$route.params.id,
    };
  },
  components: {
    TiFormEpi,
  },
  methods: {
    async buscarCadastroEpi() {
      const { data } = await axios.get(
        "esocial/epi/" + this.idCadastroEpi
      );

      this.eventoEpi = data.data;
    },
    async atualizar(data) {
       await axios.put("esocial/epi", data);
       this.$Message.success("Alterado com Sucesso!");
       this.$router.push({ name: 'listEpi' })
    },
  },
  created() {
    this.buscarCadastroEpi();
  },
};
</script>
