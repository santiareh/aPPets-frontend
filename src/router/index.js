import {
    createRouter,
    createWebHistory
} from "vue-router";
import Home from "../views/Home.vue";
import taskView from "../views/View.vue";
import Callback from '@/views/Callback';
import ErrorPage from '@/views/Error';
const routes = [{
    path: "/",
    name: "Home",
    component: Home
}, {
    path: '/callback',
    name: 'Callback',
    component: Callback
}, {
    path: '/error',
    name: 'Error',
    component: ErrorPage,
}, {
    path: '/task/:id',
    name: 'task',
    component: taskView
}];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;