<template>
  <DxDataGrid
    :data-source="cadastrosepi"
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
    <DxColumn data-field="codepi" caption="Código do Equipamento" />
    <DxColumn data-field="descepi" caption="Descrição do Equipamento" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
        :to="{ name: 'editEpi', params: { id: data.key.id } }"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteEpi(data.key)" size="small">
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
      cadastrosepi: {},
    };
  },
  watch: {
    value(newValue) {
      this.cadastrosepi = newValue || [];
    },
  },
  methods: {
    deleteEpi(data) {
      this.$emit("modalDeleteEpi", data);     
    },
  },
  created() {
    this.cadastrosepi = this.value || [];
  },
};
</script>
