<template>
  <DxDataGrid :data-source="companys" :show-borders="true">
    <DxColumn data-field="id" caption="ID"/>
    <DxColumn :width="250" data-field="name" caption="RAZÃO SOCIAL" />
    <DxColumn data-field="cnpj" caption="CNPJ EMPRESA" />
  </DxDataGrid>
</template>
<script>
import "devextreme/data/odata/store";
import { DxDataGrid, DxColumn } from "devextreme-vue/data-grid";

export default {
  props: {
    value: {},
  },
  components: {
    DxDataGrid,
    DxColumn,
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
  created() {
    this.companys = this.value || [];
  },
};
</script>
