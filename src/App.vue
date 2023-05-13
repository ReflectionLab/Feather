<script setup lang="ts">
import { useThemeStore } from '@/store';

const themeStore = useThemeStore();
themeStore.loadTheme();
</script>

<template>
  <router-view v-slot="{ Component, route }">
    <transition>
      <component :is="Component" :key="route.name" />
    </transition>
  </router-view>
</template>

<style lang="less"></style>
