import SalvarS2210Esocial from '@/views/esocial/SalvarS2210';
import SalvarS2220Esocial from '@/views/esocial/SalvarS2220';
import SalvarS2240Esocial from '@/views/esocial/SalvarS2240';
import SalvarEpiEsocial from '@/views/esocial/SalvarEpi';
import EditS2210 from '@/views/esocial/EditS2210';
import ListS2210 from '@/views/esocial/ListS2210';
import EditarS2220 from '@/views/esocial/EditarS2220';
import ListS2220 from '@/views/esocial/ListS2220';
import EditarS2240 from '@/views/esocial/EditarS2240';
import ListS2240 from '@/views/esocial/ListS2240';
import EditEpi from '@/views/esocial/EditEpi';
import ListEpi from '@/views/esocial/ListEpi';
export default [
    {
        path: '/esocial/s-2210/adicionar',
        name: 'salvarS2210Esocial',
        component: SalvarS2210Esocial,
        meta: { auth: true, title: "Cadastro S-2210" },
    },
    {
        path: '/esocial/s-2210/editar/:id',
        name: 'editS2210',
        component: EditS2210,
        meta: { auth: true, title: "Atualização S-2210" },
    },
    {
        path: '/esocial/s-2210',
        name: 'listS2210',
        component: ListS2210,
        meta: { auth: true, title: "S-2210" },
    },

    {
        path: '/esocial/s-2220/adicionar',
        name: 'salvarS2220Esocial',
        component: SalvarS2220Esocial,
        meta: { auth: true, title: "Cadastro S-2220" },
    },

    {
        path: '/esocial/s-2220/editar/:id',
        name: 'editarS2220',
        component: EditarS2220,
        meta: { auth: true, title: "Atualização S-2220" },
    },
    {
        path: '/esocial/s-2220',
        name: 'listS2220',
        component: ListS2220,
        meta: { auth: true, title: "S-2220" },
    },
    {
        path: '/esocial/s-2240/adicionar',
        name: 'salvarS2240Esocial',
        component: SalvarS2240Esocial,
        meta: { auth: true, title: "Cadastro S-2240" },
    },
    {
        path: '/esocial/s-2240/editar/:id',
        name: 'editarS2240',
        component: EditarS2240,
        meta: { auth: true, title: "Atualização S-2240" },
    },
    {
        path: '/esocial/s-2240',
        name: 'listS2240',
        component: ListS2240,
        meta: { auth: true, title: "S-2240" },
    },
    {
        path: '/esocial/epi/adicionar',
        name: 'salvarEpiEsocial',
        component: SalvarEpiEsocial,
        meta: { auth: true, title: "Cadastro Epi" },
    },
    {
        path: '/esocial/epi/editar/:id',
        name: 'editEpi',
        component: EditEpi,
        meta: { auth: true, title: "Atualização Epi" },
    },
    {
        path: '/esocial/epi',
        name: 'listEpi',
        component: ListEpi,
        meta: { auth: true, title: "EPI" },
    },

];
