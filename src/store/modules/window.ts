import { ipcRenderer } from 'electron';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWindowStore = defineStore('window', () => {
  const screenMaxState = ref<boolean>(false);
  const screenFullState = ref<boolean>(false);

  const windowMinimize = async () => {
    await ipcRenderer.invoke('WINDOW_MINIMIZE');
  };

  const windowMaximize = async () => {
    await ipcRenderer.invoke('WINDOW_MAXIMIZE');
    screenMaxState.value = !screenMaxState.value;
  };

  const windowClose = async () => {
    await ipcRenderer.invoke('WINDOW_CLOSE');
  };

  return {
    screenMaxState,
    screenFullState,
    windowMinimize,
    windowMaximize,
    windowClose,
  };
});
