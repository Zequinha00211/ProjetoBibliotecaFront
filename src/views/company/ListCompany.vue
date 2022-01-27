<template>
  <div>
    <ListCompany v-model="companys" @modalDeleteCompany="modalDeleteCompany" />
    <Modal v-model="showModal" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>Deseja deletar {{ company.name }} ?</span>
      </p>
      <div style="text-align: center">
        <p>Está ação depois de realizada não poderá ser desfeita.</p>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="deleteCompany()"
          >Deletar</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import ListCompany from "@/components/company/GridCompany";
import axios from "axios";
export default {
  data() {
    return {
      companys: [],
      showModal: false,
      company: {},
    };
  },
  components: {
    ListCompany,
  },
  methods: {
    async buscarCompanys() {
      const { data } = await axios.get("company/all", {
        params: { listarTodos: true },
      });
      this.companys = data.data;
    },
    modalDeleteCompany(data) {
      this.company = data;
      this.showModal = true;
    },
    async deleteCompany() {
      await axios.delete("company/" + this.company.id);
      this.showModal = false;
      this.buscarCompanys();
    },
  },
  created() {
    this.buscarCompanys();
  },
};
</script>
