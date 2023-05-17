<script setup lang="ts">
import type { Component } from 'vue';
import { useThemeStore } from '@/store';
const themeStore = useThemeStore();

interface Props {
  iconSvg?: Component;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="icon-button">
    <component :is="props.iconSvg" class="icon-button-item"></component>
  </div>
</template>

<style scoped lang="less">
.icon-button {
  width: 32px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  -webkit-app-region: no-drag;
  &:hover {
    background-color: #e3e5e7;
  }
  &-item {
    width: 16px;
    height: 16px;
  }
}
.dark {
  .icon-button {
    &:hover {
      background-color: #2f3134;
    }
  }
}
</style>
