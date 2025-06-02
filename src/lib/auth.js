import { createAuth } from '@websanova/vue-auth/src/v3.js';
/* import driverAuthBearer      from '@websanova/vue-auth/src/drivers/auth/bearer.js'; */
import driverHttpAxios from '@websanova/vue-auth/src/drivers/http/axios.1.x.js';
import driverRouterVueRouter from '@websanova/vue-auth/src/drivers/router/vue-router.2.x.js';


export default (app) => {
    app.use(createAuth({
        plugins: {
            http: app.axios,
            router: app.router,
        },
        drivers: {
            http: driverHttpAxios,
            /* auth: driverAuthBearer, */
            auth: {

                request: function (req, token) {
                    this.drivers.http.setHeaders.call(this, req, {
                        Authorization: 'Bearer ' + token
                    });
                },

                response: function (res) {
                    return (res.data.data || {}).access_token
                }
            },
            router: driverRouterVueRouter,
            oauth2: {

            }

        },
        options: { 
            tokenDefaultKey: 'token',
            loginData: { url: '/auth/login', method: 'POST', redirect: '/', fetchUser: true },
            logoutData: { url: '/auth/logout', method: 'POST', redirect: '/auth/login', makeRequest: true },
            fetchData: { url: '/auth/user-profile', method: 'GET', enabled: true },
            refreshData: { url: '/auth/refresh', method: 'GET', enabled: false, interval: 30 },
            rolesKey: 'privilegio',
            notFoundRedirect: { name: 'user-account' },
        },
    }));
}