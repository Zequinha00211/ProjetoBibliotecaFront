<template>
    <li grupo-menu v-if="exibir"  ref="grupo-menu">
        <slot name="groupTitle" >
            <a @click="active != active" style="color:#a7b1c2">
                <i :class="icon"></i>
                <span class="nav-label" >{{ name }}</span>
                <span class="fa arrow"></span>
            </a>
        </slot>
        <ul class="nav nav-second-level" ref="second-level">
            <slot/>
        </ul>
    </li>
</template>

<script>
export default {
    props: {'name': {default: ''}, 'icon':{default: 'fa fa-doc'}, 'to': {default: '/'}},
    data(){
        return{
            active: false,
            exibir: true,
        }
    },
    mounted(){
        let componentsSlot = this.$slots.default.filter(item => {
            return item.componentInstance.checkPermissao
        })

        if(componentsSlot.length > 0){
            this.exibir = true;
        }
        else{
            this.exibir = false;
        }
    },
    methods:{

    }

}
</script>

<style >
.mini-navbar .mm-collapse{
    display: none !important
}
.mini-navbar .mm-show{
    display: block !important
}
</style>