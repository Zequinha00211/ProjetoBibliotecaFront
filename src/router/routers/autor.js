import ListarAutores from '@/views/autor/ListarAutores';
export default [

    {
        path: '/autor/',
        name: 'listarAutores',
        component: ListarAutores,
        meta: { auth: true, title: "Autores" },
    },

];
