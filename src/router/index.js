import Vue from 'vue';
import VueRouter from 'vue-router';

import userAuth from '@/router/routes/auth/index';
import postTweet from '@/router/routes/tweet/index';

Vue.use(VueRouter);

// login
// create
// modify-user
const routes = [
    ...userAuth,
    ...postTweet,
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
