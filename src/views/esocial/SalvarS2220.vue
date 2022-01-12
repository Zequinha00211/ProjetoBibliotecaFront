<template>
  <div>
    <ti-form-s2220 v-model="eventoS2220" @salvar="salvar" />
  </div>
</template>

<script>
import TiFormS2220 from "@/components/esocial/s2220/Form";
import axios from "axios";
export default {
  data() {
    return {
      eventoS2220: {}, 
    };
  },
  components: {
    TiFormS2220,
  },
  methods: {
    async salvar(data) {
      await axios.post("esocial/s-2220", data);
      this.$Message.success("Salvo com Sucesso!");
      this.$router.push({ name: 'listS2220' })
    },
  },
  created() {
  },
};
</script>
