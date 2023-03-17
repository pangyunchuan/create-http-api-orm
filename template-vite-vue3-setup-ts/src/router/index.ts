import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import loginCheck from "@/router/beforeEach/loginCheck";
import {CancelMan} from "http-api-orm";

const autoRouteFileMap = import.meta.glob<{ default: RouteRecordRaw[] }>("/**/routes.ts", {eager: true});
const autoRoutes: RouteRecordRaw[] = [];
for (const index in autoRouteFileMap) {
    autoRoutes.push(...autoRouteFileMap[index].default);
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...autoRoutes]
})

router.beforeEach(() => {
    //取消请求
    CancelMan.cancel()
})
router.beforeEach(loginCheck)

export default router
