import ListarLivros from '@/views/livro/ListarLivros';
export default [

    {
        path: '/livros/',
        name: 'listarLivros',
        component: ListarLivros,
        meta: { auth: true, title: "Livros" },
    },

];
