<template>
  <DxDataGrid
    :data-source="companys"
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
    <DxColumn cell-template="btn-actions" width="100" caption="AUTORIZAR" />
    <!-- <DxColumn data-field="id" caption="ID" /> -->
    <DxColumn :width="250" data-field="name" caption="Usuário" />
    <DxColumn data-field="cnpjFormat" caption="CNPJ EMPRESA" />
    <DxColumn data-field="statusautorizacao" caption="STATUS" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button @click="autorizaCompany(data.key)" size="small">
        <Icon type="md-open" />
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
      companys: {},
    };
  },
  watch: {
    value(newValue) {
      this.companys = newValue || [];
    },
  },
  methods: {
    autorizaCompany(data) {
      this.$emit("modalAutorizaCompany", data);
    },
  },
  created() {
    this.companys = this.value || [];
  },
};
</script>
