<template>
  <div id="app" v-if="!$auth.check()">
    <router-view />
  </div>
  <ti-inspinia-content  v-else>
      <router-view /> 
  </ti-inspinia-content>

</template>

<script>
import TiInspiniaContent from '@/components/inspinia/Content';
import inspiniaConfig from '@/lib/inspiniaConfig';
export default {
  data(){
    return {
     
    }
  },
 components: {
    TiInspiniaContent, 
  },
   watch: {
    check(newValue) {
      if (newValue) {
        //this.$connect()
        this.$connect;
      } else {
        //this.$disconnect()
        this.$disconnect;
      }
    }
  },
  computed: {
    check () { return this?.$auth.check() },
    user () { return this?.$auth.user() }
  },
  mounted(){
    inspiniaConfig();
     document.addEventListener('keydown', function(event) {
      /**
       * 33: PAGE UP
       * 34: PAGE DOWN
       */
      if(event.keyCode == 33 || event.keyCode == 34) {
        document.activeElement.blur();
      }
    });
  }
}
</script>


<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
