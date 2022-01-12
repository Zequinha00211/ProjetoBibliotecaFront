<template>
  <div>
    <ti-form-s2220 v-model="eventoS2220" @atualizar="atualizar" />
  </div>
</template>

<script>
import TiFormS2220 from "@/components/esocial/s2220/Form";
import axios from "axios";
export default {
  data() {
    return {
      eventoS2220: {},
      idCadastroS2220: this.$route.params.id,
    };
  },
  components: {
    TiFormS2220,
  },
  methods: {
    async buscarCadastroS2220() {
      const { data } = await axios.get(
        "esocial/s-2220/" + this.idCadastroS2220
      );
      let dataemissaoatestado = data?.data?.dataemissaoatestado;

      if (typeof dataemissaoatestado === "string" && dataemissaoatestado) {
        dataemissaoatestado = new Date(dataemissaoatestado);
      }

      this.eventoS2220 = data.data;
      this.eventoS2220.dataemissaoatestado = dataemissaoatestado;
    },
    async atualizar(data) {
      await axios.put("esocial/s-2220", data);
      this.$Message.success("Alterado com Sucesso!");      
      this.$router.push({ name: 'listS2220' })
    },
  },
  created() {
    this.buscarCadastroS2220();
  },
};
</script>
