import { existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

export function featherMkdirSync(dirName: string) {
  if (existsSync(dirName)) {
    return true;
  } else {
    if (featherMkdirSync(dirname(dirName))) {
      mkdirSync(dirName);
      return true;
    }
  }
}

export function featherMkdirListSync(dirList: string[]) {
  dirList.forEach((dir: string) => {
    featherMkdirSync(dir);
  });
}
