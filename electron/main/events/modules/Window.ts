import { ipcMain } from 'electron';
import type { IpcMainInvokeEvent } from 'electron';
import WindowManager from '#/core/windowManager';
import * as EVENT from '#/constants/events';
import { CreateWindowParams } from '#/types/window';

const windowManagerInstance: WindowManager = WindowManager.makeInstance();

export default {
  listen() {
    ipcMain.handle(EVENT.GET_WINDOW, (event: IpcMainInvokeEvent, arg: string) => {
      return windowManagerInstance.getWindowById(arg);
    });

    ipcMain.handle(EVENT.OPEN_WINDOW, (event: IpcMainInvokeEvent, arg: CreateWindowParams) => {
      windowManagerInstance.createWindow(arg);
    });

    ipcMain.handle(EVENT.WINDOW_MAXIMIZE, () => {
      const currentWindow = windowManagerInstance.getFocusedWindow();
      if (currentWindow) {
        if (currentWindow.isMaximized()) {
          currentWindow.restore();
        } else currentWindow.maximize();
      }
    });

    ipcMain.handle(EVENT.WINDOW_MINIMIZE, () => {
      const currentWindow = windowManagerInstance.getFocusedWindow();
      if (currentWindow) {
        if (!currentWindow.isMinimized()) currentWindow.minimize();
      }
    });

    ipcMain.handle(EVENT.WINDOW_CLOSE, () => {
      const currentWindow = windowManagerInstance.getFocusedWindow();
      if (currentWindow) {
        currentWindow.close();
      }
    });
  },
};
