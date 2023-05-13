<script setup lang="ts">
import Toolbar from './components/toolbar.vue';
</script>

<template>
  <t-layout class="full-page">
    <t-header height="64px">
      <toolbar logo-background-color="#fff" />
    </t-header>
    <t-layout>
      <router-view v-slot="{ Component, route }">
        <transition>
          <component :is="Component" :key="route.name" />
        </transition>
      </router-view>
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
