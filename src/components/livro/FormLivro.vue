<template>
  <div style="padding-right: 20px; padding-left: 20px">
    <Form
      :model="livro"
      :rules="ruleLivro"
      ref="formLivro"
      @submit.native.prevent
    >
      <row :gutter="20">
        <i-col :sm="8">
          <FormItem label="NOME" prop="NOMELIVRO">
            <i-input v-model="livro.NOMELIVRO" style="width: 100%"></i-input>
          </FormItem>
        </i-col>
        <i-col :sm="8">
          <FormItem label="EDITORA DO LIVRO" prop="EDITORA">
            <Select v-model="livro.EDITORA" filterable style="width: 100%">
              <Option
                v-for="(item, index) in editoras"
                :value="item.NOMEEDITORA"
                :key="index"
                >{{ item.NOMEEDITORA }}</Option
              >
            </Select>
          </FormItem>
        </i-col>
        <i-col :sm="8">
          <FormItem label="NÚMERO DE REGISTRO" prop="NUMEROREGISTRO">
            <i-input
              v-model="livro.NUMEROREGISTRO"
              :disabled="true"
              style="width: 100%; background: #f5f5f5"
            ></i-input>
          </FormItem>
        </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="12">
          <FormItem label="GENERO" prop="IDGENERO">
            <Select v-model="livro.IDGENERO" filterable style="width: 100%">
              <Option
                v-for="(item, index) in generos"
                :value="item.ID"
                :key="index"
                >{{ item.GENERO }}</Option
              >
            </Select>
          </FormItem>
        </i-col>
        <i-col :sm="12">
          <FormItem label="AUTOR DO LIVRO" prop="IDAUTOR">
            <Select v-model="livro.IDAUTOR" filterable style="width: 100%">
              <Option
                v-for="(item, index) in autores"
                :value="item.ID"
                :key="index"
                >{{ item.NOME }}</Option
              >
            </Select>
          </FormItem>
        </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="12">
          <FormItem label="SITUAÇÃO DO LIVRO" prop="SITUACAOLIVRO">
            <Select v-model="livro.SITUACAOLIVRO" style="width: 100%">
              <Option :value="1">EMPRESTADO</Option>
              <Option :value="0">DISPONÍVEL</Option>
            </Select>
          </FormItem>
        </i-col>
        <i-col :sm="12">
          <FormItem label="QTD. LIVROS" prop="QTDLIVROS">
            <i-input v-model="livro.QTDLIVROS" style="width: 100%"></i-input>
          </FormItem>
        </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="24">
          <Button type="primary" long @click="salvarLivro">Cadastrar</Button>
        </i-col>
      </row>
    </Form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    isEditar: {},
    value: { default: "" },
  },
  data() {
    return {
      autores: [],
      generos: [],
      editoras: [],
      livro: {
        NOMELIVRO: "",
        EDITORA: "",
        IDGENERO: "",
        IDAUTOR: "",
        SITUACAOLIVRO: "",
        NUMEROREGISTRO: "",
        QTDLIVROS: 0,
      },
      ruleLivro: {
        NOMELIVRO: {
          required: true,
          message: "Campo requerido",
        },
        IDAUTOR: {
          required: true,
          message: "Campo requerido",
        },
        IDGENERO: {
          required: true,
          message: "Campo requerido",
        },
        SITUACAOLIVRO: {
          required: true,
          message: "Campo requerido",
        },
        QTDLIVROS: {
          required: true,
          message: "Campo requerido",
        },
      },
    };
  },
  components: {},
  watch: {
    value(newValue) {
      this.livro = newValue || {};
      if (newValue?.id === undefined) {
        this.isExibFaculdade = false;
        setTimeout(() => {
          this.isExibFaculdade = true;
        }, 200);
      }
    },
    livro(newValue) {
      this.$emit("input", newValue || {});
    },
  },
  computed: {},
  methods: {
    salvarLivro() {
      this.$refs["formLivro"].validate((valid) => {
        if (valid) {
          this.$emit("salvarLivro", this.livro);
        }
      });
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
    gerarNumeroRegistro() {
      return Math.floor(10000000 + Math.random() * 90000000).toString(); // 8 dígitos
    },
  },
  created() {
    this.livro = this.value || {};
    if (!this.livro.NUMEROREGISTRO) {
      this.livro.NUMEROREGISTRO = this.gerarNumeroRegistro();
    }
    this.buscarAutores();
    this.buscarGeneros();
    this.buscarEditoras();
  },
};
</script>
