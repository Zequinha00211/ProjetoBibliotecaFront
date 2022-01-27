<template>
  <div>
    <ti-form-s2210 v-model="eventoS2210" @atualizar="atualizar" />
  </div>
</template>

<script>
import TiFormS2210 from "@/components/esocial/s2210/Form";
import axios from "axios";
export default {
  data() {
    return {
      eventoS2210: {},
      idCadastroS2210: this.$route.params.id,
    };
  },
  components: {
    TiFormS2210,
  },
  methods: {
    async buscarCadastroS2210() {
      const { data } = await axios.get(
        "esocial/s-2210/" + this.idCadastroS2210
      );

       let datadoacidente = data?.data?.datadoacidente;

      if (typeof datadoacidente === "string" && datadoacidente) {
        datadoacidente = new Date(datadoacidente);
      }
       let datadoatendimento = data?.data?.datadoatendimento;

      if (typeof datadoatendimento === "string" && datadoatendimento) {
        datadoatendimento = new Date(datadoatendimento);
      }
       let datadoobito = data?.data?.datadoobito;

      if (typeof datadoobito === "string" && datadoobito) {
        datadoobito = new Date(datadoobito);
      }
      
      this.eventoS2210 = data.data;
      this.eventoS2210.datadoacidente = datadoacidente;
      this.eventoS2210.datadoatendimento = datadoatendimento;
      this.eventoS2210.datadoobito = datadoobito;
    },
    async atualizar(data) {
       await axios.put("esocial/s-2210", data);
       this.$Message.success("Alterado com Sucesso!");
       this.$router.push({ name: 'listS2210' })
    },
  },
  created() {
    this.buscarCadastroS2210();
  },
};
</script>
