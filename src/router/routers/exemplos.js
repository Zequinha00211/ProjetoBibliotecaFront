import ExemplosIndex from '@/views/exemplos/Index';
export default [
    {
        path: '/exemplos/listagem/dinamica',
        name: 'exemplosIndex',
        component: ExemplosIndex,
        meta: { auth: true, title: "Exemplo  - Lista Dinâmica" },
    },

];
