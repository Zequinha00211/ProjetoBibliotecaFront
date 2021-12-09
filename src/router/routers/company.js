

import RegisterCompany from '@/views/company/RegisterCompany';
import EditCompany from '@/views/company/EditCompany';
import ListCompany from '@/views/company/ListCompany';
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
    }

];
