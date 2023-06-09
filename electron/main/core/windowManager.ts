import { BrowserWindow, WebPreferences } from 'electron';
import { join } from 'node:path';
import { CreateWindowParams } from '../types/window';

export interface WindowItem {
  id: number;
  window: BrowserWindow;
}

const defaultWebPreferences: WebPreferences = {
  preload: join(__dirname, '../preload/index.js'),
  webSecurity: false,
  webviewTag: true,
  nodeIntegration: true,
  contextIsolation: false,
};

export default class WindowManager {
  private static instance: WindowManager;
  private static windowMap: Map<string, WindowItem> = new Map<string, WindowItem>();

  private constructor() {}

  static makeInstance() {
    if (!WindowManager.instance) {
      WindowManager.instance = new WindowManager();
    }

    return WindowManager.instance;
  }

  private registerWindowId(key: string, windowItem: WindowItem) {
    WindowManager.windowMap.set(key, windowItem);
  }

  private removeWindowId(key: string) {
    WindowManager.windowMap.delete(key);
  }

  getWindowById(key: string): WindowItem {
    return WindowManager.windowMap.get(key);
  }

  getFirstWindow(): BrowserWindow {
    return WindowManager.windowMap.values().next().value.window;
  }

  getFocusedWindow(): BrowserWindow {
    return BrowserWindow.getFocusedWindow();
  }

  length(): number {
    return WindowManager.windowMap.size;
  }

  createWindow(params: CreateWindowParams) {
    // eslint-disable-next-line prefer-const
    let { title, dev, width, height, url, icon, frame, transparent, devTool, webPreferences } = params;
    webPreferences = webPreferences || defaultWebPreferences;
    icon = icon || join(process.env.PUBLIC, 'assets/icons/feather-icon-256.ico');

    if (devTool == undefined) devTool = dev;
    if (frame == undefined) frame = true;
    if (transparent == undefined) transparent = false;

    const currentWindowItem: WindowItem = WindowManager.instance.getWindowById(title);
    if (currentWindowItem) {
      const currentWindow = currentWindowItem.window;
      if (currentWindow.isMinimized()) currentWindow.restore();
      currentWindow.focus();
      return currentWindow;
    }

    const window = new BrowserWindow({
      title,
      width,
      height,
      icon,
      frame,
      transparent,
      webPreferences,
    });

    if (dev) {
      window.loadURL(url);
    } else {
      window.loadFile(url);
    }

    if (devTool) {
      window.webContents.openDevTools();
    }

    window.webContents.on('did-finish-load', () => {
      this.registerWindowId(title, {
        id: window.webContents.id,
        window,
      });
    });

    window.webContents.on('destroyed', () => {
      this.removeWindowId(title);
    });

    window.webContents.on('will-navigate', (event, url) => {
      event.preventDefault();
      // shell.openExternal(url);
    });

    return window;
  }
}
