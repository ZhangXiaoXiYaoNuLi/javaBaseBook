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

const Book02 = () => {

    const baseItems = [
        {
            title: '对象数组的内存解析',
            component: <Module01></Module01>,
        },
        {
            title: '匿名对象的使用',
            component: <Module02></Module02>,
        },
        {
            title: '自定义数组的工具类',
            component: <Module03></Module03>,
        },
        {
            title: '方法重载',
            component: <Module04></Module04>,
        },
        {
            title: '可变形参个数的方法（新特性）',
            component: <Module05></Module05>,
        },
        {
            title: '变量的赋值与值传递机制',
            component: <Module06></Module06>,
        },
        {
            title: '递归方法',
            component: <Module07></Module07>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'Section-2'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book02