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
import Module11 from "./Modules/Module11";
import Module12 from "./Modules/Module12";

const Book01 = (props) => {

    const baseItems = [
        {
            title: '集合框架与数组的对比及概述',
            component: <Module01></Module01>,
        },
        {
            title: 'Collection 接口中的常用方法',
            component: <Module02></Module02>,
        },
        {
            title: '迭代器 Iterator',
            component: <Module03></Module03>,
        },
        {
            title: '新特性 foreach 遍历（增强for循环）',
            component: <Module04></Module04>,
        },
        {
            title: 'List 接口常用实现类的对比',
            component: <Module05></Module05>,
        },
        {
            title: 'ArrayList 的源码分析',
            component: <Module06></Module06>,
        },
        {
            title: 'LinkedList 的源码分析',
            component: <Module07></Module07>,
        },
        {
            title: 'Vector 的源码分析',
            component: <Module08></Module08>,
        },
        {
            title: 'List 接口的常用方法',
            component: <Module09></Module09>,
        },
        {
            title: 'List 接口的遍历及方法总结',
            component: <Module10></Module10>,
        },
        {
            title: 'Set接口实现类的对比',
            component: <Module11></Module11>,
        },
        {
            title: 'Set的无序性与不可重复性的理解',
            component: <Module12></Module12>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'集合-第一章'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01