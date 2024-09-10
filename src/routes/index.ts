import Home from "@/routes/home.vue"
import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


const routerOptions = {
    routes,
}

////////////////////////////////////////////////////////////////////////
// IMPORTANT NOTICE
// The code above will be updated via the `yarn add-route` command
// Be cautious when you make custom modifications (it should just work, 
// but just pay extra attention during your commits)
//
// - Jeffrey Arts, August 2024
////////////////////////////////////////////////////////////////////////

export { routerOptions }
export default router
