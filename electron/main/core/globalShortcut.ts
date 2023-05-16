import { BrowserWindow, globalShortcut } from 'electron';
import WindowManager from './windowManager';

const windowManager = WindowManager.makeInstance();

export function registerGlobalShortcut() {
  globalShortcut.register('Alt+CommandOrControl+I', devTools);
  globalShortcut.register('F11', fullScreen);
}

function devTools() {
  const currentWindow: BrowserWindow = windowManager.getFocusedWindow();
  currentWindow.webContents.isDevToolsOpened()
    ? currentWindow.webContents.closeDevTools()
    : currentWindow.webContents.openDevTools();
}

function fullScreen() {
  const currentWindow: BrowserWindow = windowManager.getFocusedWindow();
  currentWindow.isFullScreen() ? currentWindow.setFullScreen(false) : currentWindow.setFullScreen(true);
}
