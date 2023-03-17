import {fileURLToPath, URL} from 'node:url'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dayjs from "dayjs";
import vitePluginZipDist from "vite-plugin-dist-zip";
import vitePluginMockjsServer from "vite-plugin-mockjs-server";

import {name} from "./package.json";

const daytime = dayjs().format("YYMMDD_HHmm");
const assetsDir = `${name}${daytime}`;

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    let env = loadEnv(mode, "");
    return {
        plugins: [
            vue(),
            vueJsx(),
            vitePluginMockjsServer({mockDir: "mock"}),
            vitePluginZipDist({zipName:name}),
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
        },
        base: "/demo/",
        server: {
            host: "0.0.0.0",
            hmr: true,
            proxy: {
                "^(?!/demo/)": {
                    target: 'http://10.112.175.196:9091/',
                    changeOrigin: true
                }
            }
        },
    }
})
