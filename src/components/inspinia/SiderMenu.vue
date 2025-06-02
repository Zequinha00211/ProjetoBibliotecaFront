<template>
  <nav class="navbar-default navbar-static-side" role="navigation" ref="menu">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <ti-perfil-usuario-resumo />
          <div class="logo-element">BIBLIOTECA</div>
        </li>

        <ti-sider-menu-item
          name="Home"
          to="/"
          icon="fa fa-home"
          :isGroup="false"
        />

        <ti-menu-grupo name="Autores" icon="fa fa-building">
          <ti-sider-menu-item
            name="Listar"
            :to="{ name: 'listarAutores' }"
            icon="fa fa-list"
          />
        </ti-menu-grupo>

        <ti-menu-grupo name="Livros" icon="fa fa-building">
          <ti-sider-menu-item
            name="Listar"
            :to="{ name: 'listarLivros' }"
            icon="fa fa-list"
          />
        </ti-menu-grupo>

        <ti-menu-grupo name="Usuários" icon="fa fa-users">
          <ti-sider-menu-item
            name="Usuários"
            v-if="isAdmin"
            :to="{ name: 'listaUsuarios' }"
            icon="fa fa-users"
          />
          {{userId}}
          <ti-sider-menu-item
            name="Meu Usuário"
            :to="{ name: 'editarUsuario', params: { id: userId } }"
            icon="fa fa-users"
          />
        </ti-menu-grupo>
      </ul>
    </div>
  </nav>
</template>

<script>
import TiMenuGrupo from "./MenuGrupo";
import TiSiderMenuItem from "./SiderMenuItem";
import TiPerfilUsuarioResumo from "./PerfilUsuarioResumo";

export default {
  components: {
    TiSiderMenuItem,
    TiPerfilUsuarioResumo,
    TiMenuGrupo,
  },
  data() {
    return {
      usuarios: null,
    };
  },
  computed: {
    userId() {
      return localStorage.getItem("userId");
    },
    isAdmin() {
      return localStorage.getItem("userGroup") === "admin";
    },
  },
  methods: {
    fix_height() {
      let heightWithoutNavbar = $("body > #wrapper").height() - 62;
      $(".sidebar-panel").css("min-height", heightWithoutNavbar + "px");

      let navbarheight = $("nav.navbar-default").height();
      let wrapperHeight = $("#page-wrapper").height();

      if (navbarheight > wrapperHeight) {
        $("#page-wrapper").css("min-height", navbarheight + "px");
      }

      if (navbarheight < wrapperHeight) {
        $("#page-wrapper").css("min-height", $(window).height() + "px");
      }

      if ($("body").hasClass("fixed-nav")) {
        if (navbarheight > wrapperHeight) {
          $("#page-wrapper").css("min-height", navbarheight + "px");
        } else {
          $("#page-wrapper").css("min-height", $(window).height() - 60 + "px");
        }
      }
    },
    metisMenu() {
      let menu = $(this.$refs.menu).metisMenu();
      menu.on("shown.metisMenu", () => {
        this.fix_height();
      });

      $(window).bind("load resize scroll", () => {
        setTimeout(() => {
          if (!$("body").hasClass("body-small")) {
            this.fix_height();
          }
        });
      });
    },
  },
  mounted() {
    this.metisMenu();
  },
  updated() {
    this.metisMenu();
  },
  created() {},
};
</script>
