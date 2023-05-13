import { Server } from '@overnightjs/core';
import { app } from 'electron';
import bodyParser from 'body-parser';
import multer from 'multer';
import { join } from 'node:path';

const TEMP_PATH: string = join(app.getPath('home'), 'Feather/Temp');

export default class AppServiceProvider {
  public async boot() {
    return new Promise((resolve) => {
      const server: Server = new Server();

      server.app.use(bodyParser.urlencoded({ extended: false }));
      server.app.use(bodyParser.json());
      server.app.use(multer({ dest: TEMP_PATH }).any());

      this.registerController(server);

      server.app.listen(3000, () => resolve(server));
    });
  }

  private registerController(server: Server) {
    const controllerImport: Record<string, { default: any }> = import.meta.globEager('../controllers/*.ts');
    Object.values(controllerImport).map((item: { default: any }) => {
      server.addControllers(new item.default());
    });
  }
}
