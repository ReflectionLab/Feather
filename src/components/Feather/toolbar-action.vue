<script setup lang="tsx">
import { useWindowStore, useThemeStore } from '@/store';
import { storeToRefs } from 'pinia';
import IconButton from '@/components/Feather/IconButton.vue';

const windowStore = useWindowStore();
const themeStore = useThemeStore();

const windowStoreRef = storeToRefs(windowStore);

const MinimizeSvg = () => {
  return (
    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M923 571H130.7c-27.6 0-50-22.4-50-50s22.4-50 50-50H923c27.6 0 50 22.4 50 50s-22.4 50-50 50z"
        fill={themeStore.theme === 'light' ? '#000000' : '#ffffff'}
      ></path>
    </svg>
  );
};

const MaximizeSvg = () => {
  return windowStoreRef.screenMaxState.value ? (
    <svg class="button-group-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M812.2 65H351.6c-78.3 0-142.5 61.1-147.7 138.1-77 5.1-138.1 69.4-138.1 147.7v460.6c0 81.6 66.4 148 148 148h460.6c78.3 0 142.5-61.1 147.7-138.1 77-5.1 138.1-69.4 138.1-147.7V213c0-81.6-66.4-148-148-148z m-45.8 746.3c0 50.7-41.3 92-92 92H213.8c-50.7 0-92-41.3-92-92V350.7c0-50.7 41.3-92 92-92h460.6c50.7 0 92 41.3 92 92v460.6z m137.8-137.7c0 47.3-35.8 86.3-81.8 91.4V350.7c0-81.6-66.4-148-148-148H260.2c5.1-45.9 44.2-81.8 91.4-81.8h460.6c50.7 0 92 41.3 92 92v460.7z"
        fill={themeStore.theme === 'light' ? '#000000' : '#ffffff'}
      ></path>
    </svg>
  ) : (
    <svg class="button-group-item-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M812.3 959.4H213.7c-81.6 0-148-66.4-148-148V212.9c0-81.6 66.4-148 148-148h598.5c81.6 0 148 66.4 148 148v598.5C960.3 893 893.9 959.4 812.3 959.4zM213.7 120.9c-50.7 0-92 41.3-92 92v598.5c0 50.7 41.3 92 92 92h598.5c50.7 0 92-41.3 92-92V212.9c0-50.7-41.3-92-92-92H213.7z"
        fill={themeStore.theme === 'light' ? '#000000' : '#ffffff'}
      ></path>
    </svg>
  );
};

const CloseSvg = () => {
  return (
    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M109.9 935.8c-19.5-19.5-19.5-51.2 0-70.7l759.3-759.3c19.5-19.5 51.2-19.5 70.7 0s19.5 51.2 0 70.7L180.6 935.8c-19.6 19.6-51.2 19.6-70.7 0z"
        fill={themeStore.theme === 'light' ? '#000000' : '#ffffff'}
      ></path>
      <path
        d="M869.1 935.8L109.9 176.5c-19.5-19.5-19.5-51.2 0-70.7s51.2-19.5 70.7 0l759.3 759.3c19.5 19.5 19.5 51.2 0 70.7-19.6 19.6-51.2 19.6-70.8 0z"
        fill={themeStore.theme === 'light' ? '#000000' : '#ffffff'}
      ></path>
    </svg>
  );
};
</script>

<template>
  <div class="button-group">
    <icon-button class="button-group-item" :icon-svg="MinimizeSvg" @click="windowStore.windowMinimize"></icon-button>
    <icon-button class="button-group-item" :icon-svg="MaximizeSvg" @click="windowStore.windowMaximize"></icon-button>
    <icon-button class="button-group-item" :icon-svg="CloseSvg" @click="windowStore.windowClose"></icon-button>
  </div>
</template>

<style scoped lang="less">
.button-group {
  height: 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  &-item {
    margin: 0 8px;
    &-icon {
      width: 16px;
      height: 16px;
    }
  }
}
</style>
