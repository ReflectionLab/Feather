import type { WebPreferences } from 'electron';

export interface CreateWindowParams {
  title: string;
  dev?: boolean;
  width: number;
  height: number;
  url: string;
  icon?: string;
  frame?: boolean;
  transparent?: boolean;
  devTool?: boolean;
  webPreferences?: WebPreferences;
}
