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

const Book06 = () => {

    const baseItems = [
        {
            title: 'static关键字相关',
            component: <Module01></Module01>,
        },
        {
            title: '设计模式与单例设计模式',
            component: <Module02></Module02>,
        },
        {
            title: '理解main方法的语法',
            component: <Module03></Module03>,
        },
        {
            title: '类中代码块的使用',
            component: <Module04></Module04>,
        },
        {
            title: '属性赋值的先后顺序（完结篇）',
            component: <Module05></Module05>,
        },
        {
            title: 'final关键字',
            component: <Module06></Module06>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'Section-6'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book06