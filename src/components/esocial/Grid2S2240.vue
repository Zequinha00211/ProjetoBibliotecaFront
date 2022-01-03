<template>
  <DxDataGrid
    :data-source="agentesnocivos"
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
    <DxColumn :width="100" data-field="codagentenocivo" caption="Código do Agente Nocivo" />
    <DxColumn :width="400" data-field="descagentenocivo" caption="Descrição do Agente Nocivo" />
    <DxColumn :width="300" data-field="tipoavaliacao" caption="Tipo de Avaliação" />
    <DxColumn :width="400" data-field="doseexpo" caption="Dose da Exposição" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
        @click="editar(data.key)"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteItem(data.key)" size="small">
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
      agentesnocivos: {},
    };
  },
  watch: {
    value(newValue) {
      this.agentesnocivos = newValue || [];
    },
  },
  methods: {
    deleteItem(data) {
      this.$emit("deleteItem", data);     
    },
     editar(data) {
      this.$emit("editar", data);     
    },
  },
  created() {
    this.agentesnocivos = this.value || [];
  },
};
</script>
