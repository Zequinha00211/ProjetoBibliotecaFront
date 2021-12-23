import S2210Esocial from '@/views/esocial/S2210';
import S2220Esocial from '@/views/esocial/S2220';
export default [
    {
        path: '/esocial/s-2210',
        name: 's2210Esocial',
        component: S2210Esocial,
        meta: { auth: true, title: "Cadastro S-2210" },
    },
    {
        path: '/esocial/s-2220',
        name: 's2220Esocial',
        component: S2220Esocial,
        meta: { auth: true, title: "Cadastro S-2220" },
    },

];
