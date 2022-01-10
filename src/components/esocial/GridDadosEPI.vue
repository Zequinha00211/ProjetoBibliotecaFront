<template>
  <DxDataGrid
    :data-source="epis"
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
    <DxColumn :width="600" data-field="caoudoc" caption="Documento de Avaliação" />
    <DxColumn :width="600" data-field="descepi" caption="Descrição do EPI" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
        @click="editar3(data.key)"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteItem3(data.key)" size="small">
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
      epis: {},
    };
  },
  watch: {
    value(newValue) {
      this.epis = newValue || [];
    },
  },
  methods: {
    deleteItem3(data) {
      this.$emit("deleteItem3", data);     
    },
     editar3(data) {
      this.$emit("editar3", data);     
    },
  },
  created() {
    this.epis = this.value || [];
  },
};
</script>
