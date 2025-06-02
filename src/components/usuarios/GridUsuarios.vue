<template>
  <row :gutter="20">
    <i-col :sm="24">
      <dx-data-grid
        id="gridContainer"
        :columnFixing="{ enable: true }"
        :show-borders="true"
        :data-source="usuarios"
        :allow-column-reordering="true"
        :allow-column-resizing="true"
        :export="{ enabled: exportExcel }"
        :column-auto-width="true"
        :column-hiding-enabled="false"
        :row-alternation-enabled="true"
      >
        <dx-column cell-template="btns-actions" :width="110" />
        <dx-column
          data-field="id"
          data-type="string"
          caption="ID"
          :width="100"
        />
        <dx-column
          data-field="name"
          data-type="string"
          caption="NAME"
          :width="500"
        />
        <dx-column
          data-field="email"
          data-type="string"
          caption="EMAIL"
          :width="500"
        />
        <ButtonGroup slot="btns-actions" slot-scope="data" :width="10">
          <Button
            style="margin-left: 5px"
            size="small"
            title="Editar Usuário"
            @click="editar(data.key)"
          >
            <i class="fa fa-edit" style="color: #034281"></i>
          </Button>
          <Button
            style="margin-left: 5px"
            size="small"
            @click="excluir(data.key)"
            title="Excluir Usuário"
          >
            <i class="fa fa-times" style="color: #034281"></i>
          </Button>
        </ButtonGroup>
        <dx-header-filter :visible="true" />
        <dx-paging :page-size="pageSize" />
        <dx-filter-row :visible="true" apply-filter="auto" />
        <dx-group-panel :visible="true" />
        <dx-paging :page-size="20" />
        <dx-pager
          :show-page-size-selector="true"
          :allowed-page-sizes="[5, 10, 20, 50, 100]"
          :show-info="true"
        />

        <dx-grouping :auto-expand-all="true" />
        <dx-search-panel :visible="true" :highlight-case-sensitive="true" />
      </dx-data-grid>
    </i-col>
  </row>
</template>

<script>
import {
  DxDataGrid,
  DxColumn,
  DxGroupPanel,
  DxPaging,
  DxGrouping,
  DxPager,
  DxSearchPanel,
  DxFilterRow,
  DxHeaderFilter,
} from "devextreme-vue/data-grid";
export default {
  props: {
    exportExcel: {
      default: true,
    },
    pageSize: {
      deafult: 50,
    },
    value: {},
  },
  data() {
    return {
      enabled: true,
      showModal: false,
      usuarios: {},
    };
  },
  components: {
    DxColumn,
    DxGroupPanel,
    DxPaging,
    DxDataGrid,
    DxGrouping,
    DxPager,
    DxSearchPanel,
    DxFilterRow,
    DxHeaderFilter,
  },
  computed: {},
  watch: {
    value(newValue) {
      this.usuarios = newValue || {};
    },
    usuarios(newValue) {
      this.$emit("input", newValue || {});
    },
  },
  methods: {
    editar(usuario) {
      this.$emit("editarUsuario", usuario);
    },
    excluir(usuario) {
      this.$emit("deleteUsuario", usuario);
    },
  },
  created() {
    this.usuarios = this.newValue || {};
  },
};
</script>


