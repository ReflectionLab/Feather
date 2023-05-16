<script setup lang="ts">
import LayoutAside from './components/aside.vue';
import Toolbar from './components/toolbar.vue';
import { ref } from 'vue';

const height = ref<number>(72);
</script>

<template>
  <t-layout class="full-page">
    <t-aside width="60px">
      <layout-aside :height="height" />
    </t-aside>
    <t-layout>
      <t-header :height="`${height}px`">
        <toolbar />
      </t-header>
      <t-content>
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <transition>
              <component :is="Component" :key="route.name" />
            </transition>
          </keep-alive>
        </router-view>
      </t-content>
    </t-layout>
  </t-layout>
</template>

<style scoped lang="less">
.full-page {
  width: 100%;
  height: 100%;
  .el-header {
    padding: 0;
  }
  .el-main {
    padding: 0;
  }
}
</style>
