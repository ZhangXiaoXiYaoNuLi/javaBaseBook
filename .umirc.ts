import { defineConfig } from '@umijs/max';
import { routerData } from './src/utils/router';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'java基础',
    logout: null,
  },
  routes: routerData,
  npmClient: 'yarn',
});

