<script lang="ts" setup>
import Title from "@/modules/示例/首页/child/Title.vue";
import {reactive} from "vue";
import DemoApiModel from "@/modules/示例/首页/DemoApiModel";

const api = reactive(new DemoApiModel()) as DemoApiModel

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
      demoId:{{ api.data.demoId }}
    </div>
    <div>
      demoName:{{ api.data.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
