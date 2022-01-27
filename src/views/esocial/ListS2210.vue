<template>
  <div>
    <GridS2210 v-model="cadastross2210" @modalDeleteS2210="modalDeleteS2210" />
    <Modal v-model="showModal" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>Deseja deletar {{s2210.inscricaoempresa}} ?</span>
      </p>
      <div style="text-align: center">
        <p>
          Está ação depois de realizada não poderá ser desfeita.
        </p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteS2210()">Deletar</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import GridS2210 from "@/components/esocial/s2210/Grid";
import axios from "axios";
export default {
  data() {
    return {
      cadastross2210: [],
      showModal: false,
      s2210: {},
    };
  },
  components: {
    GridS2210,
  },
  methods: {
    async buscarCadastrosS2210() {
      const { data } = await axios.get("esocial/s-2210");
      this.cadastross2210 = data.data;
    },
    modalDeleteS2210(data) {
      this.s2210 = data;
      this.showModal = true;    
    },
    async deleteS2210(){
      await axios.delete("esocial/s-2210/"+this.s2210.id);
      this.showModal = false;
      this.buscarCadastrosS2210();
    }
  },
  created() {
    this.buscarCadastrosS2210();
  },
};
</script>
