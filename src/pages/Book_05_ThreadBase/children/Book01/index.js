import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import Module04 from "./Modules/Module04";
import Module05 from "./Modules/Module05";

const Book01 = () => {

    const baseItems = [
        {
            title: '线程概述',
            component: <Module01></Module01>,
        },
        {
            title: '多线程创建方式一：继承Thread类',
            component: <Module02></Module02>,
        },
        {
            title: '线程的常用方法',
            component: <Module03></Module03>,
        },
        {
            title: '线程优先级的设置',
            component: <Module04></Module04>,
        },
        {
            title: '多线程创建方式二：继承Runnable类',
            component: <Module05></Module05>,
        },
    ]

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