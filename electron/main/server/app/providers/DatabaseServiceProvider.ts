import { app } from 'electron';
import { join } from 'node:path';
import { Sequelize, Model } from 'sequelize-typescript';
import { MigrationMeta, SequelizeStorage, Umzug } from 'umzug';

const BASE_PATH: string = join(app.getPath('home'), 'Feather');
const DATABASE_PATH: string = join(BASE_PATH, 'db');

type MigrationsImportItem = { default: MigrationMeta };
type ModelsImportItem = { default: Model };

export default class DatabaseServiceProvider {
  public async boot() {
    const migrations = [];
    const models = [];
    const migrationsImport: Record<string, MigrationsImportItem> = import.meta.globEager(
      '../../database/migrations/*_table.ts',
    );
    const modelsImport: Record<string, ModelsImportItem> = import.meta.globEager('../models/*.ts');

    Object.keys(migrationsImport).map((key: string) => {
      migrations.push({
        name: key.match(/migrations\/(.*?).ts/)[1],
        ...migrationsImport[key].default,
      });
    });
    Object.values(modelsImport).map((item: ModelsImportItem) => models.push(item.default));

    const sequelize: Sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: join(DATABASE_PATH, 'feather.sqlite'),
      models,
    });

    const umzug: Umzug = new Umzug({
      migrations,
      context: sequelize.getQueryInterface(),
      storage: new SequelizeStorage({ sequelize }),
      logger: console,
    });

    await umzug.up();
  }
}
