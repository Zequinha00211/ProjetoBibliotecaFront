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
      let dataaprovacao = data?.data?.dataaprovacao;

      if (typeof dataaprovacao === "string" && dataaprovacao) {
        dataaprovacao = new Date(dataaprovacao);
      }
      let datavalidade = data?.data?.datavalidade;

      if (typeof datavalidade === "string" && datavalidade) {
        datavalidade = new Date(datavalidade);
      }

      this.eventoEpi = data.data;
      this.eventoEpi.dataaprovacao = dataaprovacao;
      this.eventoEpi.datavalidade = datavalidade;
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
