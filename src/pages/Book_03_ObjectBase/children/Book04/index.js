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

const Book04 = (props) => {

    const baseItems = [
        {
            title: '继承性的理解与使用',
            component: <Module01></Module01>,
        },
        {
            title: 'Object类的理解',
            component: <Module02></Module02>,
        },
        {
            title: '方法重写',
            component: <Module03></Module03>,
        },
        {
            title: '测试四种不同的权限修饰符',
            component: <Module04></Module04>,
        },
        {
            title: 'super关键字',
            component: <Module05></Module05>,
        },
        {
            title: '多态性的理解与使用',
            component: <Module06></Module06>,
        },
        {
            title: '虚拟方法调用的再理解',
            component: <Module07></Module07>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'Section-4'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book04