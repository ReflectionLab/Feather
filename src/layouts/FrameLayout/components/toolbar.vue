<script setup lang="ts">
import TabBar from './tabbar.vue';
import ToolbarAction from '@/components/feather/toolbar-action.vue';

interface Props {
  logoBackgroundColor?: string | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  logoBackgroundColor: '#f6f9fb',
});
</script>

<template>
  <div class="toolbar flex items-center justify-between">
    <!--    <div class="toolbar-logo flex items-center" :style="{ backgroundColor: props.logoBackgroundColor || '#f6f9fb' }">-->
    <div class="toolbar-logo flex items-center">
      <img
        class="toolbar-logo-icon rounded-full"
        src="../../../assets/icons/feather-icon-96.png"
        alt="feather-icon-96.png"
      />
      <div class="toolbar-logo-search flex items-center">
        <svg class="toolbar-logo-search-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M416 192C537.6 192 640 294.4 640 416S537.6 640 416 640 192 537.6 192 416 294.4 192 416 192M416 128C256 128 128 256 128 416S256 704 416 704 704 576 704 416 576 128 416 128L416 128z"
            fill="#949597"
          ></path>
          <path
            d="M832 864c-6.4 0-19.2 0-25.6-6.4l-192-192c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l192 192c12.8 12.8 12.8 32 0 44.8C851.2 864 838.4 864 832 864z"
            fill="#949597"
          ></path>
        </svg>
        <span class="toolbar-logo-search-content">搜索</span>
      </div>
    </div>
    <div class="toolbar-tabs flex items-center justify-center">
      <tab-bar />
    </div>
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
  .toolbar-logo {
    width: 240px;
    height: 100%;
    padding: 14px 16px;
    .toolbar-logo-icon {
      width: 28px;
      height: 28px;
      margin-right: 16px;
      //-webkit-app-region: no-drag;
      -webkit-user-drag: none;
    }
    .toolbar-logo-search {
      width: 164px;
      height: 36px;
      border-radius: 8px;
      cursor: pointer;
      -webkit-app-region: no-drag;
      background-color: #e9f0f4;
      .toolbar-logo-search-icon {
        width: 16px;
        height: 16px;
        margin: 0 8px 0 16px;
      }
      .toolbar-logo-search-content {
        color: #949597;
        font-size: 13px;
        font-weight: 500;
      }
    }
  }
  .toolbar-tabs {
    width: calc(100% - 440px);
    min-width: 328px;
    height: 100%;
    //background-color: #42b983;
  }
  .toolbar-actions {
    width: 200px;
    height: 100%;
  }
}
</style>
