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
  // base: '/Java学习笔记/1、Java核心基础/java基础学习笔记/javaBaseBooks/dist',
  // publicPath: '/Java学习笔记/1、Java核心基础/java基础学习笔记/javaBaseBooks/dist/',
});

