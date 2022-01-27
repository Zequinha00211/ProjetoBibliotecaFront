<template>
  <div>
    <ti-form-s2210 v-model="eventoS2210" @salvar="salvar" />
  </div>
</template>

<script>
import TiFormS2210 from "@/components/esocial/s2210/Form";
import axios from "axios";
export default {
  data() {
    return {
      eventoS2210: {},
    };
  },
  components:{
    TiFormS2210,
  },
  methods: {
    async salvar(data) {
      await axios.post("esocial/s-2210", data);
      this.$Message.success("Salvo com Sucesso!");
      this.$router.push({ name: 'listS2210' })
    },
  },
  created() {
  },
};
</script>
