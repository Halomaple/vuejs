import Vue from 'vue';
import Router from 'vue-router';
import HelloWrold from '../pages/HelloWorld/HelloWorld';
import AboutPage from '../pages/About/AboutPage';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWrold',
            component: HelloWrold
        },
        {
            path: '/about',
            name: 'AboutPage',
            component: AboutPage
        }
    ]
});
