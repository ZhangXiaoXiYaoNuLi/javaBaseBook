import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import Module04 from "./Modules/Module04";

const Book01 = () => {

    const baseItems = [
        {
            title: 'java 比较器概述',
            component: <Module01></Module01>,
        },
        {
            title: 'Comparable 自然排序',
            component: <Module02></Module02>,
        },
        {
            title: '自定义类实现 Comparable 自然排序',
            component: <Module03></Module03>,
        },
        {
            title: '使用 Comparator 实现定制排序',
            component: <Module04></Module04>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'比较器'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01