import { ipcRenderer } from 'electron';
import { defineStore } from 'pinia';

export const useWindowStore = defineStore('window', () => {
  const windowMinimize = async () => {
    await ipcRenderer.invoke('WINDOW_MINIMIZE');
  };

  const windowMaximize = async () => {
    await ipcRenderer.invoke('WINDOW_MAXIMIZE');
  };

  const windowClose = async () => {
    await ipcRenderer.invoke('WINDOW_CLOSE');
  };

  return { windowMinimize, windowMaximize, windowClose };
});
