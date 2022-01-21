<template>
  <div>
    <ti-form-s2240 v-model="eventoS2240" @salvar="salvar" />
  </div>
</template>

<script>
import TiFormS2240 from "@/components/esocial/s2240/Form";
import axios from "axios";
export default {
  data() {
    return {
      eventoS2240: {}, 
    };
  },
  components: {
    TiFormS2240,
  },
  methods: {
    async salvar(data) {
      await axios.post("esocial/s-2240", data);
      this.$Message.success("Salvo com Sucesso!");
      this.$router.push({ name: 'listS2240' })
    },
  },
  created() {
  },
};
</script>
