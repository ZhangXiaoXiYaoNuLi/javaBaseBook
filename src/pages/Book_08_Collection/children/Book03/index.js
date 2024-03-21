import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import Module04 from "./Modules/Module04";
import Module05 from "./Modules/Module05";
import Module06 from "./Modules/Module06";
import Module07 from "./Modules/Module07";
import Module08 from "./Modules/Module08";
import Module09 from "./Modules/Module09";
import Module10 from "./Modules/Module10";

const Book02 = (props) => {

    const baseItems = [
        {
            title: 'Map 接口及其多个实现类的对比',
            component: <Module01></Module01>,
        },
        {
            title: 'Map 中存储的 key-value 的特点',
            component: <Module02></Module02>,
        },
        {
            title: 'HashMap 在 JDK7、8 中的底层实现原理',
            component: <Module03></Module03>,
        },
        {
            title: 'HashMap 在 JDK7、8 中的源码分析',
            component: <Module04></Module04>,
        },
        {
            title: 'LinkedHashMap 的底层实现',
            component: <Module05></Module05>,
        },
        {
            title: 'Map 中的常用方法',
            component: <Module06></Module06>,
        },
        {
            title: 'TreeMap两种添加方式的使用',
            component: <Module07></Module07>,
        },
        {
            title: 'Properties处理属性文件',
            component: <Module08></Module08>,
        },
        {
            title: 'Collections工具类常用方法的测试',
            component: <Module09></Module09>,
        },
        {
            title: 'java 数据结构简述',
            component: <Module10></Module10>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'流程控制'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book02