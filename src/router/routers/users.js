import RegisterUser from '@/views/auth/Register';
import UpdateUser from '@/views/users/EditUser';
export default [
    {
        path: '/register',
        name: 'registerUser',
        component: RegisterUser,
        meta: { auth: false, title: "Registro Usuário" },
    },
    {
        path: '/usuario/update',
        name: 'updateuser',
        component: UpdateUser,
        meta: { auth: true, title: "Atualizar senha do Usuário" },
    },

];
