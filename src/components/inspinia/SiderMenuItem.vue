<template>
    <li :class="classLink" ref="menuItem" v-if="checkPermissao" style="width: 100%" @click="handleClick">

        <router-link   :to="to">
           <i :class="icon"></i> <span  v-if="!isGroup">{{ name }}</span> <b  v-else>{{ name }}</b>
        </router-link>
        
    </li>
</template>

<script>

export default {
    props: {'name': {default: ''}, 'icon':{default: 'fa fa-doc'}, 'to': {default: '/'}, isGroup: {default: true, type: Boolean}},
    data(){
        return {
            classLink: '',
        }
    },
    computed:{
        route(){
            return this.$route;
        },
        checkPermissao(){
            let isOk = false;
            this.$router.options.routes.forEach(route => {
                if(typeof this.to == 'string'){
                    if(this.to === route.path
                            || `/${this.to}` === route.path
                            || `/${this.to}/` === route.path
                            || `${this.to}/` === route.path){
                        if(typeof route.meta.auth == 'boolean'){
                            isOk = true;
                        }
                        else{
                            isOk = this.$auth.check(route.meta.auth);
                        }

                    }
                }
                else{
                    if(this.to.name == route.name){
                         if(typeof route.meta.auth == 'boolean'){
                            isOk = true;
                        }
                        else{
                            isOk = this.$auth.check(route.meta.auth);
                        }
                    }
                }

            });

            return isOk;
        }
    },
    methods:{
        verficaAtivo(){
            if(typeof this.to == 'string'){
                return (this.to === this.route.fullPath || `/${this.to}` === this.route.fullPath || `/${this.to}/` === this.route.fullPath || `${this.to}/` === this.route.fullPath);
            }
            else if(typeof this.to == 'object'){
                return this.to.name === this.route.name
            }
        },

        setClassActiveMenu(){
            if(this.verficaAtivo()){
                $('[grupo-menu]').removeClass('active');
                $(this.$refs['menuItem']).parents('[grupo-menu]').addClass('active')
                this.classLink = 'active';
            }
            else{
                this.classLink = '';
            }
        },
        handleClick(){
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
    watch:{
        route(){
            this.setClassActiveMenu();
        },
    },
    mounted(){
        this.setClassActiveMenu();
    },
}
</script>

<style scoped>
.pointer-cursor{
    cursor: pointer;
}
</style>

