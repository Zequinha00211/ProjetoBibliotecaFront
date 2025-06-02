import ListaUsuarios from '@/views/usuarios/Usuarios';
import EditarUsuario from '@/views/usuarios/EditarUsuario';
export default [

    {
        path: '/usuarios/',
        name: 'listaUsuarios',
        component: ListaUsuarios,
        meta: { auth: true, title: "Usuários" },
    },
    {
        path: '/usuarios/editar/:id',
        name: 'editarUsuario',
        component: EditarUsuario,
        meta: { auth: true }
    }


];
