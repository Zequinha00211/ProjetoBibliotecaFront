<template>
  <div class="content-default-body">
    <h2>FILTRO</h2>
    <hr />
    <br />
    <Form :rules="rules" ref="formFiltro" :model="filtro">
      <div style="padding: 25px; background-color: #ffffff; width: 100%">
        <row :gutter="20">
          <i-col :sm="8">
            <FormItem label="AUTOR">
              <Select v-model="filtro.IDAUTOR" filterable>
                <Option
                  v-for="item in autores"
                  :value="item.ID"
                  :key="item.ID"
                  >{{ item.NOME }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem label="GENÊRO">
              <Select v-model="filtro.IDGENERO" filterable>
                <Option
                  v-for="item in generos"
                  :value="item.ID"
                  :key="item.ID"
                  >{{ item.GENERO }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem label="EDITORA">
              <Select v-model="filtro.EDITORA" filterable>
                <Option
                  v-for="item in editoras"
                  :value="item.NOMEEDITORA"
                  :key="item.ID"
                  >{{ item.NOMEEDITORA }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20"> </row>
        <row :gutter="20">
          <i-col :sm="12">
            <label></label>
          </i-col>
          <i-col :sm="6">
            <Button long @click="cancelar()" style="margin-top: 15px"
              >Limpar</Button
            >
          </i-col>
          <i-col :sm="6">
            <Button
              type="info"
              long
              @click="filtrarPorPeriodo"
              style="margin-top: 15px"
              >Buscar</Button
            >
          </i-col>
        </row>
      </div>
    </Form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    value: {},
  },
  data() {
    return {
      filtro: {
        EDITORA: "",
        IDGENERO: "",
        IDAUTOR: "",
      },
      rules: {},
      autores: [],
      generos: [],
      editoras: [],
    };
  },
  watch: {
    value(newValue) {
      this.filtro = newValue || {};
    },
    filtro(newValue) {
      this.$emit("input", newValue || {});
    },
  },

  methods: {
    filtrarPorPeriodo() {
      this.$emit("filtrarPorPeriodo", this.filtro);
    },
    cancelar() {
      this.filtro = {};
    },
    async buscarAutores() {
      const { data } = await axios.get("autor/listar-autores");
      this.autores = data.data;
    },
    async buscarGeneros() {
      const { data } = await axios.get("livro/listar-generos");
      this.generos = data.data;
    },
    async buscarEditoras() {
      const { data } = await axios.get("livro/listar-editoras");
      this.editoras = data.data;
    },
  },
  mounted() {},
  created() {
    this.livro = this.value || {};
    this.buscarAutores();
    this.buscarGeneros();
    this.buscarEditoras();
  },
};
</script>

