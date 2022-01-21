<template>
  <div>
    <GridS2240 v-model="cadastross2240" @modalDeleteS2240="modalDeleteS2240" />
    <Modal v-model="showModal" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>Deseja deletar {{s2240.inscricaoempresa}} ?</span>
      </p>
      <div style="text-align: center">
        <p>
          Está ação depois de realizada não poderá ser desfeita.
        </p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteS2240()">Deletar</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import GridS2240 from "@/components/esocial/s2240/Grid";
import axios from "axios";
export default {
  data() {
    return {
      cadastross2240: [],
      showModal: false,
      s2240: {},
    };
  },
  components: {
    GridS2240,
  },
  methods: {
    async buscarCadastrosS2240() {
      const { data } = await axios.get("esocial/s-2240");
      this.cadastross2240 = data.data;
    },
    modalDeleteS2240(data) {
      this.s2240 = data;
      this.showModal = true;    
    },
    async deleteS2240(){
      await axios.delete("esocial/s-2240/"+this.s2240.id);
      this.showModal = false;
      this.buscarCadastrosS2240();
    }
  },
  created() {
    this.buscarCadastrosS2240();
  },
};
</script>
