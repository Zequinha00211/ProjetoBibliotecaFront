<template>
  <div>
    <ti-form-s2240 v-model="eventoS2240" @atualizar="atualizar" />
  </div>
</template>

<script>
import TiFormS2240 from "@/components/esocial/s2240/Form";
import axios from "axios";
export default {
  data() {
    return {
      eventoS2240: {},
      idCadastroS2240: this.$route.params.id,
    };
  },
  components: {
    TiFormS2240,
  },
  methods: {
    async buscarCadastroS2240() {
      const { data } = await axios.get(
        "esocial/s-2240/" + this.idCadastroS2240
      );

      this.eventoS2240 = data.data;
    },
    async atualizar(data) {
      await axios.put("esocial/s-2240", data);
      this.$Message.success("Alterado com Sucesso!");      
      this.$router.push({ name: 'listS2240' })
    },
  },
  created() {
    this.buscarCadastroS2240();
  },
};
</script>
