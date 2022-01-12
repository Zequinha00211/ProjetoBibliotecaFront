import S2210Esocial from '@/views/esocial/S2210'; 
import S2240Esocial from '@/views/esocial/S2240';
import SalvarS2220Esocial from '@/views/esocial/SalvarS2220';
import EditS2210 from '@/views/esocial/EditS2210';
import ListS2210 from '@/views/esocial/ListS2210'; 
import EditarS2220 from '@/views/esocial/EditarS2220';
import ListS2220 from '@/views/esocial/ListS2220'; 
export default [
    {
        path: '/esocial/s-2210/adicionar',
        name: 's2210Esocial',
        component: S2210Esocial,
        meta: { auth: true, title: "Cadastro S-2210" },
    },
    {
        path: '/esocial/s-2210/edit/:id',
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
        name: 's2240Esocial',
        component: S2240Esocial,
        meta: { auth: true, title: "Cadastro S-2240" },
    },

];
