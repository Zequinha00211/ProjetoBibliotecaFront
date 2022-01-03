<template>
  <DxDataGrid
    :data-source="responsaveis"
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
    <DxColumn :width="200" data-field="cpfresponsavel" caption="CPF do responsável" />
    <DxColumn :width="200" data-field="orgclasse" caption="Órgão de Classe" />
    <DxColumn :width="100" data-field="uforgao" caption="UF do Órgão de classe" />
    <DxColumn :width="200" data-field="descorgaoclase" caption="Descrição do Órgão de Classe" />
    <DxColumn :width="300" data-field="nmrinscorgao" caption="Número de inscrição do Órgão de classe" />
    <ButtonGroup slot="btn-actions" slot-scope="data">
      <Button
        @click="editar2(data.key)"
        size="small"
      >
        <Icon type="md-create" />
      </Button>
      <Button @click="deleteItem2(data.key)" size="small">
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
      responsaveis: {},
    };
  },
  watch: {
    value(newValue) {
      this.responsaveis = newValue || [];
    },
  },
  methods: {
    deleteItem2(data) {
      this.$emit("deleteItem2", data);     
    },
     editar2(data) {
      this.$emit("editar2", data);     
    },
  },
  created() {
    this.responsaveis = this.value || [];
  },
};
</script>
