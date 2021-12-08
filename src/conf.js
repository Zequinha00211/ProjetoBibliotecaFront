import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'
import iView from 'iview';
import locale from 'iview/dist/locale/pt-BR';
import router from './router'

const exibirErrorRequest = (resp) => {
    try {
        if (resp) {
            if (typeof resp.data === 'object') {
                if (typeof resp.data.success != 'undefined') {
                    if (!resp.data.success) {
                        let erros = [];
                        if (resp.data.erros)
                            erros = resp.data.erros
                        else
                            erros = ['Não foi possivel realizar está operação'];

                        erros.forEach(item => {
                            iView.Notice.error({
                                title: 'Error! ',
                                desc: item
                            });
                        })
                    }
                }
                else if(resp.status === 500 || resp.status === 404){
                    iView.Notice.error({
                        title: 'Error! ',
                        desc: 'Resposta não esperada do servidor'
                    });
                }
            }
        } else {
            iView.Notice.error({
                title: 'Error! ',
                desc: 'Resposta não esperada do servidor'
            });
        }
    } catch (e) { console.log(e) }
}

export class Conf {
    requests() {
       /*  let urlAplicacao =  window.location.protocol + "//" +  window.location.host+'/'
        axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/' : urlAplicacao+'api/api/'; */
        let urlAplicacao = "";
        axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8005/api/' : urlAplicacao; 
        axios.interceptors.request.use(function (config) {
            iView.LoadingBar.start();
            return config;
        }, function (error) {
            iView.LoadingBar.error();
            return Promise.reject(error);
        });

        axios.interceptors.response.use(function (resp) {
            exibirErrorRequest(resp);
            iView.LoadingBar.finish();
            return resp;
        }, function (error) {
            if (axios.isCancel(error)) {
                console.log('Request canceled', error.message);
            }
            else {
                exibirErrorRequest(error.response);
                iView.LoadingBar.error();
                return Promise.reject(error);
            }

        });

        return this;
    }
    auth() {
        Vue.use(VueAxios, axios);
        Vue.use(VueAuth, {
            auth: {
                request(req, token) {
                    this.options.http._setHeaders.call(this, req, { Authorization: 'Bearer ' + token })
                },
                response(res) {
                    return (res.data.data || {}).access_token
                }
            },
            http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
            router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
            tokenDefaultName: 'token',
            rolesVar: 'permissoes',
            registerData: {url: "auth/register", method: 'POST', redirect: '/login'},
            loginData: { url: 'auth/login', method: 'POST', fetchUser: true },
            fetchData: { url: 'auth/user-profile', method: 'GET', enabled: true },
            refreshData: { url: 'refresh', method: 'GET', atInit: false, enabled: false },
            logoutData: { url: 'logout', method: 'POST', redirect: '/login', makeRequest: false }
        });

        return this;
    }
    iView() {
        Vue.use(iView, { locale });

        router.beforeEach((to, from, next) => {
            iView.LoadingBar.start();
            document.title = `SST | ${to.meta.title || 'SST'}`
            next();
        });

        router.afterEach(() => {
            iView.LoadingBar.finish();
        });

        return this;
    }
   
}