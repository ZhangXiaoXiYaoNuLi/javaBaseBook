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

const Book06 = () => {

    const baseItems = [
        {
            title: '抽象类与抽象方法的使用',
            component: <Module01></Module01>,
        },
        {
            title: '接口（上）',
            component: <Module02></Module02>,
        },
        {
            title: '接口（下）',
            component: <Module03></Module03>,
        },
        {
            title: 'java8中接口的新特性',
            component: <Module04></Module04>,
        },
        {
            title: '内部类的分类',
            component: <Module05></Module05>,
        },
        {
            title: '成员内部类的特点以及实例化',
            component: <Module06></Module06>,
        },
        {
            title: '成员内部类中调用外部类的结构',
            component: <Module07></Module07>,
        },
        {
            title: '局部内部类的使用',
            component: <Module08></Module08>,
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