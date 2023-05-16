<script setup lang="ts">
import { computed } from 'vue';
import FeatherLogo from '@/assets/icons/feather-icon-96.png';

interface Props {
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  height: 72,
});

const logoHeight = computed(() => {
  return props.height > 0 ? props.height + 'px' : 0;
});
</script>

<template>
  <div class="toolbar">
    <div
      class="toolbar-logo flex justify-center items-center"
      :style="{
        height: logoHeight,
      }"
    >
      <img class="toolbar-logo-image" :src="FeatherLogo" alt="FeatherLogo" />
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
