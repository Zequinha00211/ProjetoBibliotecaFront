<template>
  <div>
    <ti-form-upload v-model="eventoUpload" @salvar="salvar" />
  </div>
</template>

<script>
import TiFormUpload from "@/components/esocial/s2240/FormUpload";
import axios from "axios";
export default {
  data() {
    return {
      eventoUpload: {},
    };
  },
  components:{
    TiFormUpload,
  },
  methods: {
    async salvar(data) {
      await axios.post("esocial/s-2240/upload", data);
      this.$Message.success("Salvo com Sucesso!");
    },
  },
  created() {
  },
};
</script>
