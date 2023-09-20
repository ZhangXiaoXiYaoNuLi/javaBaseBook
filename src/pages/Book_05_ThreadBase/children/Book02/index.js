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

const Book01 = () => {

    const baseItems = [
        {
            title: '线程的生命周期',
            component: <Module01></Module01>,
        },
        {
            title: '线程安全问题',
            component: <Module02></Module02>,
        },
        {
            title: '处理线程安全问题',
            component: <Module03></Module03>,
        },
        {
            title: '线程安全的懒汉式单例模式',
            component: <Module04></Module04>,
        },
        {
            title: '死锁问题，及解决方式',
            component: <Module05></Module05>,
        },
        {
            title: 'sleep() 和 await() 的异同',
            component: <Module06></Module06>,
        },
        {
            title: '多线程创建方式三：实现 callable 接口',
            component: <Module07></Module07>,
        },
        {
            title: '多线程创建方式四：使用线程池',
            component: <Module08></Module08>,
        },
    ]

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

export default Book01