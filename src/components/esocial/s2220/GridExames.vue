<template>

  <DxDataGrid
    :data-source="cadastross2220exame || []"
    :show-borders="true"
    :allow-column-reordering="true"
    :allow-column-resizing="true"
    :column-auto-width="true"
    :row-alternation-enabled="true"
  >
    <DxExport
      ref="dataGrid"
      :enabled="true"
      :allow-export-selected-data="false"
    />
    <dx-header-filter :visible="true" />
    <DxFilterRow :visible="true" apply-filter="auto" />
    <DxSearchPanel :visible="true" />
    <DxColumn cell-template="btn-actions" width="70" caption="#" />
    <!-- <DxColumn data-field="id" caption="ID" /> -->
    <DxColumn :width="200" data-field="codexame" caption="Código do Exame" />
    <DxColumn :width="200" data-field="dataexame" data-type="date" caption="Data do Exame" />
    <DxColumn :width="200" data-field="ordemexame" caption="Ordem do Exame" />
    <DxColumn data-field="indicacaoresultado" caption="Indicação do Exame" /> 
    <DxColumn data-field="obsexame" caption="Observações do Exame" /> 
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
       @click="editar(data)"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteItemExame(data)" size="small">
        <Icon type="md-close" />
      </Button>
    </ButtonGroup>
    <DxPaging :page-size="10" />
    <DxPager
      :show-page-size-selector="true"
      :allowed-page-sizes="[1, 10, 20, 50, 100]"
      :show-info="true"
    />
  </DxDataGrid>
</template>
<script>
import "devextreme/data/odata/store";
import {
  DxDataGrid,
  DxColumn,
  DxExport,
  DxHeaderFilter,
  DxFilterRow,
  DxSearchPanel,
  DxPager,
  DxPaging,
} from "devextreme-vue/data-grid";

export default {
  props: {
    value: {},
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxExport,
    DxHeaderFilter,
    DxFilterRow,
    DxSearchPanel,
    DxPager,
    DxPaging,
  },
  data() {
    return {
      cadastross2220exame: [],
    };
  },
  watch: {
    value(newValue) {
      this.cadastross2220exame = newValue || [];   
    },
  },
  methods: {
    deleteItemExame(data) {
      this.$emit("deleteItemExame", data);     
    },
    editar(data){ 
      this.$emit("editarItemExame", data);     
    }
  },
  created() {
    this.cadastross2220exame = this.value || [];
    
  },
};
</script>
