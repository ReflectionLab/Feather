import type { WebPreferences } from 'electron';

interface CreateWindowParams {
  title: string;
  dev: boolean;
  width: number;
  height: number;
  url: string;
  icon?: string;
  frame?: boolean;
  devTool?: boolean;
  webPreferences?: WebPreferences;
}
