<template>
  <DxDataGrid
    :data-source="cadastross2240agentenocivo"
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
    <DxColumn :width="420" data-field="descagentenocivo" caption="Descrição do Agente Nocivo" />
    <DxColumn :width="250" data-field="tipoavaliacao" caption="Tipo de Avaliação" />
    <DxColumn :width="300" data-field="doseexposicao" caption="Dose da Exposição" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
        @click="editar(data)"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteItemAgenteNocivo(data)" size="small">
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
      cadastross2240agentenocivo: [],
    };
  },
  watch: {
    value(newValue) {
      this.cadastross2240agentenocivo = newValue || [];
    },
  },
  methods: {
    deleteItemAgenteNocivo(data) {
      this.$emit("deleteItemAgenteNocivo", data);     
    },
     editar(data) {
      this.$emit("editarItemAgenteNocivo", data);     
    },
  },
  created() {
    this.cadastross2240agentenocivo = this.value || [];
  },
};
</script>
