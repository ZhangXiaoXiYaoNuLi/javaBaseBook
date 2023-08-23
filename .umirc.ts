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
          name: '数组基础',
          path: '/base_array/book01',
          component: './Book_02_ArrayBase/children/Book01',
        },
        {
          name: '常见算法',
          path: '/base_array/book02',
          component: './Book_02_ArrayBase/children/Book02',
        },
        {
          name: '数组工具类的使用',
          path: '/base_array/book03',
          component: './Book_02_ArrayBase/children/Book03',
        },
        {
          name: '数组中的常见异常',
          path: '/base_array/book04',
          component: './Book_02_ArrayBase/children/Book04',
        },
      ]
    },
    {
      name: '3、面向对象',
      path: '/base_object',
      routes: [
        {
          name: 'Section-1',
          path: '/base_object/book1',
          component: './Book_03_ObjectBase/children/Book01',
        },
        {
          name: 'Section-2',
          path: '/base_object/book2',
          component: './Book_03_ObjectBase/children/Book02',
        },
        {
          name: 'Section-3',
          path: '/base_object/book3',
          component: './Book_03_ObjectBase/children/Book03',
        },
        {
          name: 'Section-4',
          path: '/base_object/book4',
          component: './Book_03_ObjectBase/children/Book04',
        },
        {
          name: 'Section-5',
          path: '/base_object/book5',
          component: './Book_03_ObjectBase/children/Book05',
        },
        {
          name: 'Section-6',
          path: '/base_object/book6',
          component: './Book_03_ObjectBase/children/Book06',
        },
        {
          name: 'Section-7',
          path: '/base_object/book7',
          component: './Book_03_ObjectBase/children/Book07',
        },
      ]
    },
  ],
  npmClient: 'yarn',
});

