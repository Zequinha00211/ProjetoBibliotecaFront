<template>
  <div>
    <ListAutorizarCompany v-model="companys" @modalAutorizaCompany="modalAutorizaCompany" />
      <Modal v-model="showModalAutoriza" width="360">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span>Deseja dar acesso para {{ company.name }} ?</span>
      </p>
      <div style="text-align: center">
        <p>Após essa ação, {{company.name}} terá total acesso á empresa com cnpj {{company.cnpjFormat}}.</p>
        <i-switch v-model="company.status"/>
      </div>
      <div slot="footer">
        <Button type="error" size="large" long @click="autorizaCompany()"
          >Autorizar</Button
        >
      </div>
    </Modal>
  </div>
</template>

<script>
import ListAutorizarCompany from "@/components/company/GridAutorizarCompany";
import axios from "axios";
export default {
  data() {
    return {
      companys: [],
      showModalAutoriza: false,
      showModalNaoAutoriza: false,
      company: {},
    };
  },
  components: {
    ListAutorizarCompany,
  },
  methods: {
    async buscarCompanys() {
      const { data } = await axios.get("company/usuario/autorizacao", {
        params: { listarTodos: true },
      });
      this.companys = data.data;
    },
    modalAutorizaCompany(data) {
      this.company = data;
      this.company.status = data.status === 1 ? true : false;
      this.showModalAutoriza = true;
    },
     async autorizaCompany() {
      await axios.put("company/usuario/autorizacao/" + this.company.idempresausuario, this.company);
      this.showModal = false;
      this.buscarCompanys();
    },
  },
  created() {
    this.buscarCompanys();
  },
};
</script>
