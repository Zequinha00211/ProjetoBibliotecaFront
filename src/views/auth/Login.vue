<template>
  <div
    class="background-radom-img body-sst"
    ref="body-login"
    style="margin: 0"
  >
    <div class="pre-load-img" ref="pre-load-img"></div>
    <img class="imagem-sst-carrossel" />
    <div class="login-sst">
      <h1>Seja bem-vindo(a) ao SST!</h1>

      <p class="desc-sst">
        Tudo que você precisa está aqui. <br />
        Completo, prático, eficaz e com <br />
        mais agilidade para seu dia a dia. <br />
      </p>

      <p class="instrucoes-acesso">
        Insira seu e-mail e senha <br />
        para acessar ao sistema.
      </p>
      <Form
        ref="form"
        class="form_login"
        @submit="login"
        :model="user"
        :rules="rules"
      >
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem label="E-mail" prop="email">
              <i-input
                v-model="user.email"
                type="email"
                @on-enter="login"
              ></i-input>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem label="Senha" prop="password">
              <i-input
                v-model="user.password"
                type="password"
                @on-enter="login"
              ></i-input>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <Button long @click="login">Login</Button>
          </i-col>
        </row>
        <br />
        <router-link :to="`/register`">← Ir para tela de login</router-link>
      </Form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {},
      rules: {
        email: [
          { required: true, message: "CAMPO OBRIGATÓRIO", trigger: "blur" },
        ],
        password: [
          { required: true, message: "CAMPO OBRIGATÓRIO", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.$auth.login({
            params: this.user,
            success() {},
            error() {
              this.$Notice.error({
                title: "Senha ou Usuário inválidas",
                desc: "Tente novamente",
              });
            },
            rememberMe: true,
            redirect: "/",
          });
        }
      });
    },
  },
  mounted() {
    setTimeout(() => {
      // document.body.style.background = "linear-gradient(rgba(29, 15, 46,.5), rgba(98, 42, 94,.5)),url('/img/login/back-vertical.png')";

      document.body.style.backgroundSize = "150%";
      //document.body.style.backgroundSize = "cover";
      // document.body.style.height = "100%";
      document.body.style.backgroundRepeat = "no";
    }, 0.00003);
  },
  destroyed() {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundRepeat = "";
    document.body.style.backgroundSize = "";
  },
};
</script>  
<style >
.form_login .ivu-form-item-label {
  color: #000000 !important;
}
.form_login input {
  -webkit-text-fill-color: #ccfc4f !important;
}

.background-radom-img {
  background-repeat: no-repeat;
  background-size: 100% auto;
  background-position: center;
  transition: background 2s linear;
}

.pre-load-img {
  width: 0;
  height: 0;
}

#login-page {
  position: relative;
  width: 400px;
}

.login-content {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
}

.body-sst {
  color: #fff;
  padding-top: 50px;
  font-family: sans-serif, "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
    sans-serif;
  font-weight: 900;
}

.login-sst {
  width: 500px;
  min-height: 650px;
  background-color: #fff;
  color: #154733;
  border-radius: 15px;
  margin: auto;
  padding: 10px; 
}
.login-sst > .sst-content-img {
  width: 100%;
  height: 80px;
}

.login-sst > .sst-content-img > img {
  top: -100px;
  width: 100%;
  position: relative;
  left: -28px;
}

.login-sst > h1 {
  text-align: center;
  font-weight: 900;
  font-size: 45px;
  padding: 10px;
}

.login-sst > .desc-sst {
  font-size: 18px;
  padding: 5px 40px 5px 40px;
  text-align: center;
}
.login-sst > .instrucoes-acesso {
  margin-top: 20px;
  color: #154733;
  font-size: 18px;
  text-align: center;
}

/* Change the white to any color ;) */
Chrome .login-sst input:-webkit-autofill {
  box-shadow: 0 0 0 30px #ffff inset !important;
  -webkit-box-shadow: 0 0 0 30px #154733 inset !important;
  -webkit-text-fill-color: #ccfc4f !important;
}
Firefox .login-sst input:-moz-autofill {
  box-shadow: 0 0 0 30px #ffff inset !important;
  -moz-box-shadow: 0 0 0 30px #154733 inset !important;
  -moz-text-fill-color: #ccfc4f !important;
}
Opera .login-sst input:-o-autofill {
  box-shadow: 0 0 0 30px #ffff inset !important;
  -o-box-shadow: 0 0 0 30px #154733 inset !important;
  -o-text-fill-color: #ccfc4f !important;
}
Microsoft Edge/Explore .login-sst input:-ms-autofill {
  box-shadow: 0 0 0 30px #ffff inset !important;
  -ms-box-shadow: 0 0 0 30px #154733 inset !important;
  -ms-text-fill-color: #ccfc4f !important;
}

.login-sst input {
  box-shadow: 0 0 0 30px #154733 inset !important;
  border: 0.8px solid #ccfc4f !important;
  color: #ccfc4f !important;
  border-radius: 10px;
  padding: 25px;
  font-weight: 1000;
}
.login-sst input::placeholder {
  color: #ccfc4f !important;
}

.login-sst [type="submit"] {
  color: #154733;
  background-color: #fff;
  border: 0.8px solid #ccfc4f;
  font-weight: 900;
}
.login-sst .form-control {
  padding-left: 15px;
  padding-right: 15px;
}

.imagem-sst-carrossel {
   background-image: url("https://picsum.photos/1920/1080/?random"); /* The image used */
  z-index: -100;
  min-height: 100%;
  min-width: 1024px;
  width: 100%;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
}
@media screen and (max-width: 1024px) {
  /* Specific to this particular image */
  .imagem-sst-carrossel {
    left: 50%;
    margin-left: -512px; /* 50% */
  }
}

@media screen and (max-width: 500px) {
  /* Specific to this particular image */
  .login-sst {
    width: 100%;
  }
  .login-sst > h1 {
    font-size: 25px;
  }

  .login-sst > .desc-sst {
    font-size: 15px;
  }
  .login-sst > .instrucoes-acesso {
    font-size: 15px;
  }
}
</style>
