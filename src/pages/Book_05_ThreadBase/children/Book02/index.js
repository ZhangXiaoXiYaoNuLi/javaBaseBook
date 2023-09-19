import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";

const Book01 = () => {

    const baseItems = [
        {
            title: '线程安全问题',
            component: <Module01></Module01>,
        },
        {
            title: '处理线程安全问题',
            component: <Module02></Module02>,
        },
        {
            title: '线程安全的懒汉式单例模式',
            component: <Module03></Module03>,
        },
        {
            title: '4',
            component: <Module03></Module03>,
        },
        {
            title: '5',
            component: <Module03></Module03>,
        },
        {
            title: '6',
            component: <Module03></Module03>,
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