import RegisterCompany from '@/views/company/RegisterCompany';
import EditCompany from '@/views/company/EditCompany';
import ListCompany from '@/views/company/ListCompany';
import ListAutorizarCompany from '@/views/company/ListAutorizarCompany';
export default [
    {
        path: '/company/register',
        name: 'registerCompany',
        component: RegisterCompany,
        meta: { auth: true, title: "Registro de Empresa" },
    },
    {
        path: '/company/edit/:id',
        name: 'editCompany',
        component: EditCompany,
        meta: { auth: true, title: "Atualização da Empresa" },
    },
    {
        path: '/company/',
        name: 'listCompany',
        component: ListCompany,
        meta: { auth: true, title: "Empresas" },
    },
    {
        path: '/company/autorizacao',
        name: 'listAutorizarCompany',
        component: ListAutorizarCompany,
        meta: { auth: true, title: "Empresas" },
    },

];
