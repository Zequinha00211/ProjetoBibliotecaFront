<template>
  <div class="dropdown profile-element">
    <img
      alt="image"
      class="rounded-circle"
      :src="hasErrorIMG ? '/img/icons/favicon-96x96.png' : srcIMG"
      style="height: 55px; width: 55px"
      @error="hasErrorIMG = true"
    />
    <a data-toggle="dropdown" class="dropdown-toggle" href="#">
      <span class="block m-t-xs font-bold">{{ $auth.user().name }}</span>
      <span
        class="block m-t-xs font-bold"
        style="font-size: 80%; font-style: italic"
        ><b>ACL: </b></span
      >
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