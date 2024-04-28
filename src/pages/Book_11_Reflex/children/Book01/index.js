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

const Book01 = (props) => {

    const baseItems = [
        {
            title: '反射的概述',
            component: <Module01></Module01>,
        },
        {
            title: '反射的强大，调用类的私有结构',
            component: <Module02></Module02>,
        },
        {
            title: '如何看待封装性和反射，是否矛盾？',
            component: <Module03></Module03>,
        },
        {
            title: 'Class 类的理解',
            component: <Module04></Module04>,
        },
        {
            title: '获取类实例的4种方法',
            component: <Module05></Module05>
        },
        {
            title: '理解类的加载过程 及 ClassLoader',
            component: <Module06></Module06>
        },
        {
            title: '通过反射，创建运行时类的实例对象',
            component: <Module07></Module07>
        }
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'反射'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01