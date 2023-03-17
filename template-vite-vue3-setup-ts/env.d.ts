/// <reference types="vite/client" />

/// <reference types="@types/baidumap-web-sdk" />


import {DefineComponent} from "vue";

declare module '*.vue' {
    import { DefineComponent } from 'vue'
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>
    export default component
}
