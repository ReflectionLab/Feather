import { app } from 'electron';
import { join } from 'node:path';
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';

const TEMP_PATH = join(app.getPath('home'), 'Feather/Temp');

export default async function serverStart() {
  return new Promise((resolve, reject) => {
    try {
      const app = express();

      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json());
      app.use(multer({ dest: TEMP_PATH }).any());

      app.listen(3000, resolve);
    } catch (e) {
      reject(e);
    }
  });
}
