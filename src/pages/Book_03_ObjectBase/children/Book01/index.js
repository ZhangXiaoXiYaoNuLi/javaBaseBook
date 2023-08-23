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

const Book01 = () => {

    const baseItems = [
        {
            title: '理解面向过程与面向对象',
            component: <Module01></Module01>,
        },
        {
            title: '两个要素：类和对象',
            component: <Module02></Module02>,
        },
        {
            title: '类的结构：属性和方法',
            component: <Module03></Module03>,
        },
        {
            title: '类和对象的创建',
            component: <Module04></Module04>,
        },
        {
            title: '对象的内存解析',
            component: <Module05></Module05>,
        },
        {
            title: '属性与局部变量',
            component: <Module06></Module06>,
        },
        {
            title: '方法基础、方法声明',
            component: <Module07></Module07>,
        },
        {
            title: 'return 关键字',
            component: <Module08></Module08>,
        },
        {
            title: '方法使用中的注意点',
            component: <Module09></Module09>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'Section-1'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01