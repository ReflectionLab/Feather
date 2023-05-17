<script setup lang="ts">
import ToolbarAction from '@/components/feather/toolbar-action.vue';
import FeatherLogo from '@/assets/icons/feather-icon-96.png';
</script>

<template>
  <div class="toolbar flex items-center justify-between">
    <div class="toolbar-logo flex items-center">
      <img class="toolbar-logo-image" :src="FeatherLogo" alt="FeatherLogo" />
      <span class="toolbar-logo-content">Feather</span>
    </div>
    <div class="toolbar-tabs flex items-center justify-center"></div>
    <div class="toolbar-actions flex flex-row-reverse">
      <toolbar-action />
    </div>
  </div>
</template>

<style scoped lang="less">
.toolbar {
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
  &-logo {
    width: 160px;
    height: 100%;
    padding: 14px 16px;
    &-image {
      width: 32px;
      height: 32px;
    }
    &-content {
      margin: 8px 0 0 8px;
      font-size: 24px;
      line-height: 32px;
      font-family: AlexBrush, sans-serif;
    }
  }
  &-tabs {
    width: calc(100% - 440px);
    min-width: 328px;
    height: 100%;
  }
  &-actions {
    width: 168px;
    height: 100%;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 28px;
      left: 0;
      height: 16px;
      width: 1px;
      background-color: #e3e5e7;
    }
  }
}
</style>
