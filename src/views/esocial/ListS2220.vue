<template>
  <div>
    <GridS2220 v-model="cadastross2220" @modalDeleteS2220="modalDeleteS2220" />
    <Modal v-model="showModal" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>Deseja deletar {{s2220.inscricaoempresa}} ?</span>
      </p>
      <div style="text-align: center">
        <p>
          Está ação depois de realizada não poderá ser desfeita.
        </p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteS2220()">Deletar</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import GridS2220 from "@/components/esocial/s2220/Grid";
import axios from "axios";
export default {
  data() {
    return {
      cadastross2220: [],
      showModal: false,
      s2220: {},
    };
  },
  components: {
    GridS2220,
  },
  methods: {
    async buscarCadastrosS2220() {
      const { data } = await axios.get("esocial/s-2220");
      this.cadastross2220 = data.data;
    },
    modalDeleteS2220(data) {
      this.s2220 = data;
      this.showModal = true;    
    },
    async deleteS2220(){
      await axios.delete("esocial/s-2220/"+this.s2220.id);
      this.showModal = false;
      this.buscarCadastrosS2220();
    }
  },
  created() {
    this.buscarCadastrosS2220();
  },
};
</script>
