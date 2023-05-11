import { ipcMain, IpcMainInvokeEvent } from 'electron';
import WindowManager from '#/core/windowManager';
import { GET_WINDOW, OPEN_WINDOW } from '#/constants/events';
import { CreateWindowParams } from '#/types/window';

const windowManagerInstance: WindowManager = WindowManager.makeInstance();
export default {
  listen() {
    ipcMain.handle(GET_WINDOW, (event: IpcMainInvokeEvent, arg: string) => {
      return windowManagerInstance.getWindowById(arg);
    });

    ipcMain.handle(OPEN_WINDOW, (event: IpcMainInvokeEvent, arg: CreateWindowParams) => {
      windowManagerInstance.createWindow(arg);
    });
  },
};
