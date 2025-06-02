<template>
  <div>
    <Tabs v-model="abaAtiva">
      <TabPane label="Livros Disponíveis" name="disponiveis" />
      <TabPane label="Livros Emprestados" name="emprestados" />
      <TabPane label="Livros Atrasados" name="atrasados" />
    </Tabs>

    <row :gutter="20">
      <i-col :sm="24">
        <dx-data-grid
          id="gridContainer"
          :columnFixing="{ enable: true }"
          :show-borders="true"
          :data-source="livrosFiltrados"
          :allow-column-reordering="true"
          :allow-column-resizing="true"
          :export="{ enabled: exportExcel }"
          :column-auto-width="true"
          :column-hiding-enabled="false"
          :row-alternation-enabled="true"
        >
          <dx-column cell-template="btns-actions" :width="200" />
          <dx-column
            data-field="NOMELIVRO"
            caption="Nome do Livro"
            :width="300"
          />
          <dx-column data-field="NOMEAUTOR" caption="Autor" :width="200" />
          <dx-column
            data-field="NUMEROREGISTRO"
            caption="N.Registro"
            :width="100"
          />
          <dx-column data-field="SITUACAO" caption="Situação" :width="120" />
          <dx-column data-field="NOMEGENERO" caption="Genêro" :width="200" />
          <dx-column data-field="EDITORA" caption="Editora" :width="200" />
          <dx-column
            data-field="DATADEVOLUCAO"
            caption="Data Devolução"
            :width="200"
            v-if="abaAtiva === 'emprestados' || abaAtiva === 'atrasados'"
          />

          <ButtonGroup slot="btns-actions" slot-scope="data">
            <Button
              v-if="isAdmin"
              size="small"
              title="Editar Livro"
              @click="editar(data.key)"
            >
              <i class="fa fa-edit" style="color: #034281" />
            </Button>
            <Button
              v-if="isAdmin"
              size="small"
              title="Excluir Livro"
              @click="excluir(data.key)"
            >
              <i class="fa fa-times" style="color: #034281" />
            </Button>
            <Button
              size="small"
              title="Pegar Emprestado"
              @click="pegarEmprestado(data.key)"
              :disabled="data.key.SITUACAOLIVRO == 1 || data.key.SITUACAOLIVRO == 2"
            >
              <i class="fa fa-arrow-circle-down" style="color: green" />
            </Button>
            <Button
              size="small"
              title="Devolver Livro"
              @click="devolverLivro(data.key)"
              :disabled="data.key.SITUACAOLIVRO == 0 || data.key.IDUSUARIO !== userId"
            >
              <i class="fa fa-arrow-circle-up" style="color: orange" />
            </Button>
          </ButtonGroup>

          <dx-header-filter :visible="true" />
          <dx-paging :page-size="pageSize" />
          <dx-filter-row :visible="true" apply-filter="auto" />
          <dx-group-panel :visible="true" />
          <dx-pager
            :show-page-size-selector="true"
            :allowed-page-sizes="[5, 10, 20, 50, 100]"
            :show-info="true"
          />
          <dx-grouping :auto-expand-all="true" />
          <dx-search-panel :visible="true" :highlight-case-sensitive="true" />
        </dx-data-grid>
      </i-col>
    </row>
  </div>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxGroupPanel,
  DxPaging,
  DxGrouping,
  DxPager,
  DxSearchPanel,
  DxFilterRow,
  DxHeaderFilter,
} from "devextreme-vue/data-grid";

export default {
  props: {
    exportExcel: {
      default: true,
    },
    pageSize: {
      default: 50,
    },
    value: {},
  },
  data() {
    return {
      livros: [],
      abaAtiva: "disponiveis",
      userId: Number(localStorage.getItem("userId")),
    };
  },
  computed: {
    livrosFiltrados() {
      if (!Array.isArray(this.livros)) return [];
      const userId = Number(localStorage.getItem("userId"));
      const isAdmin = localStorage.getItem("userGroup") === "admin";
      
      switch (this.abaAtiva) {
        case "disponiveis":
          return this.livros.filter((l) => l.SITUACAOLIVRO === 0);
        case "emprestados":
          return isAdmin
        ? this.livros.filter((l) => l.SITUACAOLIVRO === 1)
        : this.livros.filter((l) => l.SITUACAOLIVRO === 1 && l.IDUSUARIO === userId);
        case "atrasados":
          return isAdmin
        ? this.livros.filter((l) => l.SITUACAOLIVRO === 2)
        : this.livros.filter((l) => l.SITUACAOLIVRO === 2 && l.IDUSUARIO === userId);
        default:
          return this.livros;
      }
    },
    isAdmin() {
      return localStorage.getItem("userGroup") === "admin";
    },
  },
  components: {
    DxColumn,
    DxGroupPanel,
    DxPaging,
    DxDataGrid,
    DxGrouping,
    DxPager,
    DxSearchPanel,
    DxFilterRow,
    DxHeaderFilter,
  },
  watch: {
    value(newValue) {
      this.livros = Array.isArray(newValue) ? newValue : [];
    },
    livros(newValue) {
      this.$emit("input", newValue);
    },
  },
  methods: {
    editar(livro) {
      this.$emit("editarLivro", livro);
    },
    excluir(livro) {
      this.$emit("deleteLivro", livro);
    },
    pegarEmprestado(livro) {
      this.$emit("emprestarDevolverLivro", livro);
    },
    devolverLivro(livro) {
      this.$emit("emprestarDevolverLivro", livro);
    },
  },
  created() {
    this.livros = Array.isArray(this.value) ? this.value : [];
  },
};
</script>
