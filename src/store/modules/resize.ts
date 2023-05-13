import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useResizeStore = defineStore('resize', () => {
  const width = ref(0);
  const height = ref(0);

  const resize = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  return { width, height, resize };
});
