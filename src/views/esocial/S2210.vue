<template>
  <FormS2210 v-model="formEsocial" @handleSubmit="handleSubmit"/>
</template>

<script>
import FormS2210 from "@/components/esocial/FormS2210";
import axios from "axios";
export default {
  data() {
    return {
      formEsocial: {
       inscricaoempresa: "",
        nameempregado: "",
        cpfempregado: "",
        matriculaempregado: "",
        codigodecategoriatrabalhador: "",
        datadoacidente: "",
        tipodoacidente: "",
        horadoacidente: "",
        horastrabalhadasantes: "",
        tipocat: "",
        houveobito: "",
        datadoobito: "",
        comunicacaoaautoridade: "",
        iniciativacat: "",
        codigodasituacaogeradoradoacidente: "",
        tipodolocal: "",
        desclocal: "",
        observacoes: "",
        pais: "",
        cep: "",
        tipodologradouro: "",
        numerodologradouro: "",
        bairro: "",
        desclogradouroradouro: "",
        codmunicipionicipio: "",
        codpostal: "",
        complementologradouroradouro: "",
        uf: "",
        tipoinsclocal: "",
        nmrinsc: "",
        codigoparteatingida: "",
        lateralidade: "",
        codagentecausadoracidente: "",
        dataatendimento: "",
        horaatendimento: "",
        namedomedico: "",
        houveinternacao: "",
        duracaodotratamento: "",
        orgaodeclasse: "",
        ufdoorgaoclasse: "",
        houveafastamento: "",
        desclesao: "",
        nmrinscdoorgaodeclasse: "",
        desccomplementardalesao: "",
        nmrdoreciboultimacat: "",
        diagnosticoprovavel: "",
        coddatabelacid: "",
      },
    };
  },
   components:{
    FormS2210
  },
  methods: {
    async handleSubmit(data) {
      await axios.post("esocial/s-2210", data);
      this.$Message.success("Alterado com Sucesso!");
    },
  },
  created() {
  },
};
</script>
