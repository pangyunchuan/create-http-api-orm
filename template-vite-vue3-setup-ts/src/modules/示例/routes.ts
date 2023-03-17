import type {RouteRecordRaw} from "vue-router";

export default <RouteRecordRaw[]>[
    {
        name: '',
        path: '/demo',
        component: ()=>import('./首页/Demo.vue'),
    }
]
