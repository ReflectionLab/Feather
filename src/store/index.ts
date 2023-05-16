import { createPinia } from 'pinia';
import type { Pinia } from 'pinia';

const store: Pinia = createPinia();

export * from './modules/resize';
export * from './modules/themes';
export * from './modules/window';
export { store };
