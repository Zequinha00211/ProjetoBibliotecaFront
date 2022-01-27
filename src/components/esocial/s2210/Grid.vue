<template>
  <DxDataGrid
    :data-source="cadastross2210"
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
    <DxColumn :width="250" data-field="empresa.cnpjFormat" caption="Inscrição da Empresa" />
    <DxColumn data-field="nameempregado" caption="Nome do Empregado" />
    <DxColumn data-field="cpfempregado" caption="CPF do Empregado" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
        :to="{ name: 'editS2210', params: { id: data.key.id } }"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteS2210(data.key)" size="small">
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
      cadastross2210: {},
    };
  },
  watch: {
    value(newValue) {
      this.cadastross2210 = newValue || [];
    },
  },
  methods: {
    deleteS2210(data) {
      this.$emit("modalDeleteS2210", data);     
    },
  },
  created() {
    this.cadastross2210 = this.value || [];
  },
};
</script>
