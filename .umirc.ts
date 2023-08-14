import { defineConfig } from '@umijs/max';

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
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    // 多子级别路由示例
    {
      name: '1、基础语法',
      path: '/base_syntax',
      routes: [
        {
          name: '1、关键字、保留字、标识符',
          path: '/base_syntax/book01',
          component: './Book_01_Syntax/children/Book01',
        },
        {
          name: '2、变量、数据类型',
          path: '/base_syntax/book02',
          component: './Book_01_Syntax/children/Book02',
        },
        {
          name: '3、运算符',
          path: '/base_syntax/book03',
          component: './Book_01_Syntax/children/Book03',
        },
        {
          name: '4、流程控制',
          path: '/base_syntax/book04',
          component: './Book_01_Syntax/children/Book04',
        },
      ]
    },
    {
      name: '2、数组',
      path: '/base_array',
      routes: [
        {
          name: '1、排序算法',
          path: '/base_array/test01',
          component: './Book_02_ArrayBase/children/Test01',
        },
        {
          name: '2、数据结构',
          path: '/base_array/test02',
          component: './Book_02_ArrayBase/children/Test02',
        },
      ]
    },
  ],
  npmClient: 'yarn',
});

