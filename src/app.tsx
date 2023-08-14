// 运行时配置
import './app.css';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
}> {
  return {
    name: '@umijs/max1',
  };
}

export const layout = () => {
  return {
    logo: null,
    menu: {
      locale: false,
    },
    onPageChange: () => {
      console.log(location.pathname);
    },
    footerRender: false,
    // 去除底部的登录人icon和登录头像展示，值要设置为false，而不能是null
    rightContentRender: false,
  };
};
