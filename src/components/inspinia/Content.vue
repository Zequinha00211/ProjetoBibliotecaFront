<template>
    <div id="wrapper">
        <ti-sider-menu/>
        <div id="page-wrapper" class="gray-bg dashbard-1">
            <ti-top-menu/>
            <ti-header-breadcrumb/>
            <div style="margin-top: 20px; padding: 15px; background-color:#ffffff">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
import TiSiderMenu from './SiderMenu';
import TiTopMenu from './TopMenu';
import TiHeaderBreadcrumb from './HeaderBreadcrumb'
export default {
  components:{
      TiSiderMenu,
      TiTopMenu,
      TiHeaderBreadcrumb
  },
  methods:{
    outsideclick(){
      const body = document.body;

      if(body.classList.contains('mini-navbar')){
        const elementsMenuOpened = Array.from(document.getElementsByClassName('mm-active')) || [];

        elementsMenuOpened.forEach(element =>{
          element.classList.remove("mm-active");
        })

        const elementsMenuItemsOpened = Array.from(document.getElementsByClassName('mm-show')) || [];

        elementsMenuItemsOpened.forEach(element =>{
          element.classList.remove("mm-show");
        })
      }
    }
  },
  mounted(){
    document.getElementById('page-wrapper').addEventListener('click', this.outsideclick)
  },
  destroyed(){
    document.getElementById('page-wrapper')?.removeEventListener('click', this.outsideclick)
  }
}
</script>

<style >
.ivu-form-inline .ivu-form-item {
    width: 100%!important;
}
</style>