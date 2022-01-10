<template>
  <li  v-if="exibir" ref="grupo-menu" style="width: 100%;">
    <slot name="groupTitle">
      <a @click="active != active" style="color: #a7b1c2">
        <i :class="icon"></i>
        <span class="nav-label">{{ name }}</span>
        <span class="fa arrow" style="margin-left: auto"></span>
      </a>
    </slot>
    <ul class="nav nav-third-level">
      <slot />
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    name: { default: "" },
    icon: { default: "fa fa-doc" },
    to: { default: "/" },
  },
  data() {
    return {
      active: false,
      exibir: true,
    };
  },
  computed: {
    checkPermissao(){
      let componentsSlot = this.$slots.default.filter((item) => {
        return item?.componentInstance?.checkPermissao;
      });

      return componentsSlot.length > 0; 
    }
  },
  mounted() {
    this.exibir = this.checkPermissao;
  },
  methods: {},
};
</script>

<style >
.mini-navbar .mm-collapse {
  display: none !important;
}

.mini-navbar .mm-show {
  display: block !important;
}


.nav.nav-third-level > li.active {
    border-left: 0 !important;
}
</style>
