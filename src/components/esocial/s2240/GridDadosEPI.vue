<template>
  <DxDataGrid
    :data-source="cadastross2240epi"
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
    <DxColumn :width="600" data-field="caoudocumentoavaliacao" caption="Documento de Avaliação" />
    <DxColumn :width="600" data-field="descepi" caption="Descrição do EPI" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
        @click="editar(data)"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteItemEpi(data)" size="small">
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
      cadastross2240epi: [],
    };
  },
  watch: {
    value(newValue) {
      this.cadastross2240epi = newValue || [];
    },
  },
  methods: {
    deleteItemEpi(data) {
      this.$emit("deleteItemEpi", data);     
    },
     editar(data) {
      this.$emit("editarItemEpi", data);     
    },
  },
  created() {
    this.cadastross2240epi = this.value || [];
  },
};
</script>
