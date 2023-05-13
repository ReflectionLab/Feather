<script setup lang="ts">
import { ref } from 'vue';
import { ipcRenderer } from 'electron';

const maximizeState = ref(false);

const windowMinimizeIpc = () => {
  ipcRenderer.send('window-minimize');
};
const windowMaximizeIpc = () => {
  ipcRenderer.send('window-maximize');
  maximizeState.value = !maximizeState.value;
};
const windowCloseIpc = () => {
  ipcRenderer.send('window-close');
};
</script>

<template>
  <div class="button-group">
    <div class="button" @click="windowMinimizeIpc">
      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M863.7 552.5H160.3c-10.6 0-19.2-8.6-19.2-19.2v-41.7c0-10.6 8.6-19.2 19.2-19.2h703.3c10.6 0 19.2 8.6 19.2 19.2v41.7c0 10.6-8.5 19.2-19.1 19.2z"
        ></path>
      </svg>
    </div>
    <div class="button" title="最大化" @click="windowMaximizeIpc">
      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M770.9 923.3H253.1c-83.8 0-151.9-68.2-151.9-151.9V253.6c0-83.8 68.2-151.9 151.9-151.9h517.8c83.8 0 151.9 68.2 151.9 151.9v517.8c0 83.8-68.1 151.9-151.9 151.9zM253.1 181.7c-39.7 0-71.9 32.3-71.9 71.9v517.8c0 39.7 32.3 71.9 71.9 71.9h517.8c39.7 0 71.9-32.3 71.9-71.9V253.6c0-39.7-32.3-71.9-71.9-71.9H253.1z"
        ></path>
      </svg>
    </div>
    <div class="button" title="关闭应用" @click="windowCloseIpc">
      <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M897.6 183.5L183 898.1c-7.5 7.5-19.6 7.5-27.1 0l-29.5-29.5c-7.5-7.5-7.5-19.6 0-27.1L841 126.9c7.5-7.5 19.6-7.5 27.1 0l29.5 29.5c7.5 7.4 7.5 19.6 0 27.1z"
        ></path>
        <path
          d="M183 126.9l714.7 714.7c7.5 7.5 7.5 19.6 0 27.1l-29.5 29.5c-7.5 7.5-19.6 7.5-27.1 0L126.4 183.5c-7.5-7.5-7.5-19.6 0-27.1l29.5-29.5c7.4-7.5 19.6-7.5 27.1 0z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="less">
.button-group {
  height: 100%;
  margin-right: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-app-region: no-drag;

  .button {
    margin-left: 32px;
    width: 16px;
    height: 16px;
    cursor: pointer;

    .icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
