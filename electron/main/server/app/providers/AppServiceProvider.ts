import { Server } from '@overnightjs/core';
import { app } from 'electron';
import { addControllers } from '../main';
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

      addControllers(server);

      server.app.listen(3000, () => resolve(server));
    });
  }
}
