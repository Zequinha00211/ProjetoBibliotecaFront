<template>
    <div class="row header-breadcrumb">
        <h2>{{ $route.meta.title || "Biblioteca"}}</h2>
        <Breadcrumb>
            <BreadcrumbItem :to="{name: 'home'}"> Home </BreadcrumbItem>
            <BreadcrumbItem v-for="(item, index) in routesBreadcrumb" :key="index" :to="($auth.check(item.meta.auth) || item.meta.auth ===true) ? {name: item.name} : null">{{ item.resumePath }}</BreadcrumbItem>
        </Breadcrumb>
    </div>
</template>

<script>
export default {
    computed:{
        routesBreadcrumb(){
            let routesInBreadcrumb = [];
            let pathParcial = "";
            this.$route.fullPath.split('/').forEach(itemPath => {
                if(itemPath != ''){
                    pathParcial += `/${itemPath}`;
                    this.$router.options.routes.forEach(route =>{
                        if(route.path == `${pathParcial}` || route.path == `${pathParcial}/`){
                            routesInBreadcrumb.push({ ... route, resumePath: itemPath });
                        }
                    })
                }
            })

            return routesInBreadcrumb;
        }
    },
    created(){

    }
}
</script>


<style scoped>
.header-breadcrumb{
    min-height: 90px;
    background-color: #FFF;
    padding: 5px 15px 0 15px;
    display: block;
}
</style>

