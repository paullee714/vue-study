export default [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/userLogin.vue'),
    },
    {
        path: '/create',
        name: 'create',
        component: () => import('@/views/auth/userCreate.vue'),
    },
    {
        path: '/modify-user',
        name: 'modify-user',
        component: () => import('@/views/auth/userModify.vue'),
    },
];
