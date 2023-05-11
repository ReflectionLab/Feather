import { protocol } from 'electron';

export function registerSchemesAsPrivileged() {
  protocol.registerSchemesAsPrivileged([{ scheme: 'feather', privileges: { secure: true, standard: true } }]);
}
