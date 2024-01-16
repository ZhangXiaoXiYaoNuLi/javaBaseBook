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
            title: '自定义枚举类',
            component: <Module01></Module01>,
        },
        {
            title: '使用关键字 enum 定义枚举类',
            component: <Module02></Module02>,
        },
        {
            title: 'enum 类的主要方法',
            component: <Module03></Module03>,
        },
        {
            title: '实现接口的枚举类',
            component: <Module04></Module04>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'枚举'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01