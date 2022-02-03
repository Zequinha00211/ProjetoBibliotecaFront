<template>
  <div>
    <GridEpi v-model="cadastrosepi" @modalDeleteEpi="modalDeleteEpi" />
    <Modal v-model="showModal" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>Deseja deletar {{epi.descepi}} ?</span>
      </p>
      <div style="text-align: center">
        <p>
          Está ação depois de realizada não poderá ser desfeita.
        </p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteEpi()">Deletar</Button>
      </div>
    </Modal>
  </div>
</template>

<script>
import GridEpi from "@/components/esocial/epi/Grid";
import axios from "axios";
export default {
  data() {
    return {
      cadastrosepi: [],
      showModal: false,
      epi: {},
    };
  },
  components: {
    GridEpi,
  },
  methods: {
    async buscarCadastrosEpi() {
      const { data } = await axios.get("esocial/epi");
      this.cadastrosepi = data.data;
    },
    modalDeleteEpi(data) {
      this.epi = data;
      this.showModal = true;    
    },
    async deleteEpi(){
      await axios.delete("esocial/epi/"+this.epi.id);
      this.showModal = false;
      this.buscarCadastrosEpi();
    }
  },
  created() {
    this.buscarCadastrosEpi();
  },
};
</script>
