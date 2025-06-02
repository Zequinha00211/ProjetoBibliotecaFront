<template>
  <div class="dropdown profile-element">
    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
      <span class="text-muted text-xs block"
        >Perfil
        <b class="caret"></b>
      </span>
    </a>
    <ul class="dropdown-menu animated fadeInRight m-t-xs">
      <li>
        <router-link class="dropdown-item" :to="`/usuario/update`"
          >Atualizar Usuário</router-link
        >
      </li>
      <li class="dropdown-divider"></li>
      <li>
        <a class="dropdown-item" @click="$auth.logout()">Sair</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hasErrorIMG: false,
      srcIMG: "",
    };
  },
  watch: {
    /*   srcIMG(){
                this.hasErrorIMG = false;
            } */
  },
  computed: {
    /*  srcIMG(){
                return this.$auth.user().photo;
            } */
  },
};
</script>

<style scoped>
</style>