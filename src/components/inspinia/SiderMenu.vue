<template>
  <nav class="navbar-default navbar-static-side" role="navigation" ref="menu">
    <div class="sidebar-collapse">
      <ul class="nav metismenu" id="side-menu">
        <li class="nav-header">
          <ti-perfil-usuario-resumo />
          <div class="logo-element">TT</div>
        </li>
        <ti-sider-menu-item
          name="Home"
          to="/"
          icon="fa fa-home"
          :isGroup="false"
        />
        <ti-menu-grupo name="Empresas" icon="fa fa-building">
          <ti-sider-menu-item
            name="Listar"
            :to="{ name: 'listCompany' }"
            icon="fa fa-list"
          />
          <ti-sider-menu-item
            name="Adicionar"
            :to="{ name: 'registerCompany' }"
            icon="fa fa-plus"
          />
        </ti-menu-grupo>

        <ti-menu-grupo name="Esocial" icon="fa fa-building">
          <ti-menu-grupo-level3 name="S-2210" icon="fa fa-circle">
             <ti-sider-menu-item
            name="Listar"
            :to="{ name: 'listS2210' }"
            icon="fa fa-list"
          />
            <ti-sider-menu-item
              name="Adicionar"
              :to="{ name: 's2210Esocial' }"
              icon="fa fa-plus"
            />
          </ti-menu-grupo-level3>
          <ti-menu-grupo-level3 name="S-2220" icon="fa fa-circle">
             <ti-sider-menu-item
            name="Listar"
            :to="{ name: 'listS2220' }"
            icon="fa fa-list"
          />
            <ti-sider-menu-item
              name="Adicionar"
              :to="{ name: 'salvarS2220Esocial' }"
              icon="fa fa-plus"
            />
          </ti-menu-grupo-level3>

            <ti-menu-grupo-level3 name="S-2240" icon="fa fa-circle">
          <ti-sider-menu-item
            name="Listar"
            :to="{ name: 'listS2240' }"
            icon="fa fa-list"
          />
            <ti-sider-menu-item
              name="Adicionar"
              :to="{ name: 'salvarS2240Esocial' }"
              icon="fa fa-plus"
            />
          </ti-menu-grupo-level3>
        </ti-menu-grupo>
      </ul>
    </div>
  </nav>
</template>

<script>
import TiMenuGrupo from "./MenuGrupo";
import TiSiderMenuItem from "./SiderMenuItem";
import TiPerfilUsuarioResumo from "./PerfilUsuarioResumo";
import TiMenuGrupoLevel3 from "./MenuGrupoLevel3";

export default {
  components: {
    TiSiderMenuItem,
    TiPerfilUsuarioResumo,
    TiMenuGrupoLevel3,
    TiMenuGrupo,
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
        // Full height of sidebar
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
};
</script>
