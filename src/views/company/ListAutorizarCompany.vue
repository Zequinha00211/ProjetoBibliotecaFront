<template>
  <div>
    <ListAutorizarCompany v-model="companys" @modalAutorizaCompany="modalAutorizaCompany"  @cancelar="cancelar" />
      <Modal v-model="showModalAutoriza" width="400">
      <p slot="header" style="color: #f60; text-align: center">
        <Icon type="ios-information-circle"></Icon>
        <span> {{ company.status === false ? "Autorizar para uso"  : "Não autorizar" }} </span>
      </p>
      <div style="text-align: center" v-if="company.status === false">
        <p>Após essa ação, {{company.name}} terá total acesso á empresa com cnpj {{company.cnpjFormat}}.</p>
      </div>
       <div style="text-align: center" v-else>
        <p>Após essa ação, {{company.name}} terá seu acesso retirado da empresa com cnpj {{company.cnpjFormat}}.</p>
      </div>
      <div slot="footer">
        <row :gutter="20">
          <i-col :sm="12">
            <Button long @click="cancelar()">Cancelar</Button>
          </i-col>
          <i-col :sm="12">
            <Button type="primary" long @click="autorizaCompany()">
          {{ company.status === false ? "Autorizar" : "Não Autorizar" }}</Button>
          </i-col>
        </row>
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
      this.company = {...data};
      this.company.status = data.status === 1 ? true : false;
      this.showModalAutoriza = true;
    },
     cancelar() {
      this.company = {};
      this.showModalAutoriza = false;
    },
     async autorizaCompany() {
      const params = {
        ...this.company,
        status: !this.company.status,
      }
      await axios.put("company/usuario/autorizacao/" + this.company.idempresausuario, params);
      this.showModalAutoriza = false;
      this.buscarCompanys();
    },
  },
  created() {
    this.buscarCompanys();
  },
};
</script>

