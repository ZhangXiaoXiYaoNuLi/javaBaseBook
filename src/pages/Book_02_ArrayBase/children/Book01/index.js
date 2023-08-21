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

const Book01 = () => {

    const baseItems = [
        {
            title: '数组的概述',
            component: <Module01></Module01>,
        },
        {
            title: '一维数组的初始化，',
            component: <Module02></Module02>,
        },
        {
            title: '数组元素的调用',
            component: <Module03></Module03>,
        },
        {
            title: '数组的长度与遍历',
            component: <Module04></Module04>,
        },
        {
            title: '数组元素的默认初始值',
            component: <Module05></Module05>,
        },
        {
            title: '内存结构的简单说明',
            component: <Module06></Module06>,
        },
        {
            title: '一维数组的内存解析',
            component: <Module07></Module07>,
        },
        {
            title: '二维数组的理解和初始化',
            component: <Module08></Module08>,
        },
        {
            title: '二维数组的调用',
            component: <Module09></Module09>,
        },
        {
            title: '二维数组的长度和遍历',
            component: <Module10></Module10>,
        },
        {
            title: '二维数组元素默认初始值',
            component: <Module11></Module11>,
        },
        {
            title: '二维数组的内存解析',
            component: <Module12></Module12>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'数组基础'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01