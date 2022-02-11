import SalvarEpiUpload from '@/views/exemplos/Index';
export default [
    {
        path: '/esocial/epi/upload',
        name: 'salvarEpiUpload',
        component: SalvarEpiUpload,
        meta: { auth: true, title: "Upload de Arquivos" },
    },

];
