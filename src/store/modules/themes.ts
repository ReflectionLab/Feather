import { defineStore } from 'pinia';
import { useLocalStorage } from 'v3hooks';

export const useThemeStore = defineStore('theme', () => {
  const themeState = useLocalStorage('theme', 'light');

  const switchTheme = () => {
    themeState.value = themeState.value === 'light' ? 'dark' : 'light';
    loadTheme();
  };

  const loadTheme = () => {
    if (themeState.value === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.removeAttribute('theme-mode');
    }
  };

  return { theme: themeState, switchTheme, loadTheme };
});
