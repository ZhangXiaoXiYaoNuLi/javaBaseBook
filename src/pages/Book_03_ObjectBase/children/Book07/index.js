import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";

const Book06 = () => {

    const baseItems = [
        {
            title: '抽象类与抽象方法的使用',
            component: <Module01></Module01>,
        },
        {
            title: '接口的定义与使用',
            component: <Module02></Module02>,
        },
        {
            title: 'java8中接口的新特性',
            component: <Module03></Module03>,
        },
        {
            title: '内部类的分类',
            component: <Module03></Module03>,
        },
        {
            title: '成员内部类的特点以及实例化',
            component: <Module03></Module03>,
        },
        {
            title: '成员内部类中调用外部类的结构',
            component: <Module03></Module03>,
        },
        {
            title: '局部内部类的使用',
            component: <Module03></Module03>,
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