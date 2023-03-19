<script lang="ts" setup>
import Title from "@/modules/示例/首页/child/Title.vue";
import {reactive} from "vue";
import DemoApiModel from "@/modules/示例/首页/DemoApiModel";

const api = reactive(new DemoApiModel().proxyData()) as DemoApiModel & DemoApiModel['data']
// const api = reactive(new DemoApiModel().proxyData()) as DemoApiModel & DemoApiModel['data'];
// const temp  = new DemoApiModel().proxyData()
// const api = reactive(temp) as typeof temp

setTimeout(() => {
  api.getResData().then(() => {
    console.log(123, api.data.demoId, api.data.name)
  });
}, 1000)

</script>

<template>
  <div>
    <Title/>
    <div>
      demoId:{{ api.demoId }}
    </div>
    <div>
      demoName:{{ api.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
