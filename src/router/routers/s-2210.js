import RegisterS from '@/views/s2210/RegisterS';
export default [
    {
        path: '/e-social/s-2210',
        name: 'registerS',
        component: RegisterS,
        meta: { auth: true, title: "Registro de Empregador" },
    },

];
