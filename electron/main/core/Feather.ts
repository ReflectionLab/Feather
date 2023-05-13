import { app, BrowserWindow, Menu } from 'electron';
import { join } from 'node:path';
import { release } from 'node:os';
import WindowManager from './windowManager';
import { setDefaultHeaders } from '../utils/cors';
import { featherMkdirListSync } from '../utils/filesystem';
import { registerSchemesAsPrivileged } from './protocol';
import ipcEvent from '../events';
import serverStart from '../server/app';

export default class Feather {
  private mainWindow: BrowserWindow | null = null;
  private windowManagerInstance: WindowManager;

  private BASE_PATH: string = join(app.getPath('home'), 'Feather');
  private DATABASE_PATH: string = join(this.BASE_PATH, 'db');
  private DOCUMENT_PATH: string = join(this.BASE_PATH, 'Documents');
  private CACHE_PATH: string = join(this.BASE_PATH, 'Caches');
  private TEMP_PATH: string = join(this.BASE_PATH, 'Temp');
  private LIB_PATH: string = join(this.DOCUMENT_PATH, 'libs');
  private RULE_PATH: string = join(this.DOCUMENT_PATH, 'rules');
  private PLUGIN_PATH: string = join(this.RULE_PATH, 'js');

  constructor() {
    this.windowManagerInstance = WindowManager.makeInstance();

    // Disable GPU Acceleration for Windows 7
    if (release().startsWith('6.1')) app.disableHardwareAcceleration();

    // Set application name for Windows 10+ notifications
    if (process.platform === 'win32') app.setAppUserModelId(app.getName());
  }

  private async onCreated() {
    registerSchemesAsPrivileged();
    await serverStart();
    this.initFileSystem();
    ipcEvent.listen();
  }

  private onLaunch() {
    app.whenReady().then(() => {
      Menu.setApplicationMenu(null);
      setDefaultHeaders();
      this.createWindow();
    });

    app.on('second-instance', (event, argv) => {
      if (this.mainWindow) {
        if (this.mainWindow.isMinimized()) this.mainWindow.restore();
        this.mainWindow.focus();
      }

      if (argv.length > 2) {
        // const path = argv[2];
      }
    });

    app.on('open-file', async (event, path) => {});

    app.on('open-url', async (event, path) => {});

    app.on('activate', () => {
      if (this.windowManagerInstance.length() > 0) {
        this.windowManagerInstance.getFirstWindow().focus();
      } else {
        this.createWindow();
      }
    });
  }

  private onQuit() {
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });
  }

  private createWindow() {
    try {
      const dev = !app.isPackaged;
      const devTool = true;
      const url = dev ? process.env.VITE_DEV_SERVER_URL : join(process.env.DIST, 'index.html');
      const preload = join(process.env.DIST_ELECTRON, 'preload/index.js');

      this.mainWindow = this.windowManagerInstance.createWindow({
        title: 'Feather',
        dev,
        width: 1280,
        height: 720,
        url,
        devTool,
        frame: false,
        icon: join(process.env.PUBLIC, 'assets/icons/feather-icon-256.ico'),
        webPreferences: {
          preload,
          webSecurity: false,
          webviewTag: true,
          nodeIntegration: true,
          contextIsolation: false,
        },
      });
    } catch (e) {
      console.error('Failed create window:', e);
    }
  }

  private initFileSystem() {
    featherMkdirListSync([
      this.BASE_PATH,
      this.DATABASE_PATH,
      this.DOCUMENT_PATH,
      this.CACHE_PATH,
      this.TEMP_PATH,
      this.LIB_PATH,
      this.RULE_PATH,
      this.PLUGIN_PATH,
    ]);
  }

  async linkStart() {
    if (!app.requestSingleInstanceLock()) {
      app.quit();
      process.exit(0);
    } else {
      await this.onCreated();
      this.onLaunch();
      this.onQuit();
    }
  }
}
