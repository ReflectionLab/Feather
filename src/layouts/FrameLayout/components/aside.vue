<script setup lang="tsx">
import { computed } from 'vue';
import { useThemeStore } from '@/store';
import IconButton from '@/components/Feather/IconButton.vue';

const themeStore = useThemeStore();

interface Props {
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: 72,
});

const logoHeight = computed(() => {
  return props.height > 0 ? props.height + 'px' : 0;
});

const BackSvg = () => {
  return (
    <svg class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M759.48 52.38c19.53 19.53 19.53 51.18 0 70.71L370.58 512l388.91 388.91c19.53 19.53 19.53 51.18 0 70.71-19.53 19.53-51.18 19.53-70.71 0L264.52 547.36c-19.53-19.53-19.53-51.18 0-70.71L688.78 52.38c19.51-19.53 51.18-19.53 70.7 0z"
        fill={themeStore.theme === 'light' ? '#000000' : '#ffffff'}
      ></path>
    </svg>
  );
};
</script>

<template>
  <div class="toolbar">
    <div
      class="toolbar-logo flex justify-center items-center"
      :style="{
        height: logoHeight,
      }"
    >
      <icon-button :icon-svg="BackSvg"></icon-button>
    </div>
    <div
      class="toolbar-actions flex flex-col items-center"
      :style="{
        height: `calc(100% - ${logoHeight})`,
      }"
    >
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style scoped lang="less">
.toolbar {
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
  &-logo {
    width: 100%;
    &-image {
      width: 32px;
    }
  }
  &-actions {
    padding: 8px 0;
    justify-content: space-between;
  }
}
</style>
