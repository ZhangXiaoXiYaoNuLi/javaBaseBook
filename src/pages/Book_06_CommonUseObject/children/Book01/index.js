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

const Book01 = () => {

    const baseItems = [
        {
            title: 'String 类概述',
            component: <Module01></Module01>,
        },
        {
            title: 'String 的不可变性',
            component: <Module02></Module02>,
        },
        {
            title: 'String 不同实例化方式的对比',
            component: <Module03></Module03>,
        },
        {
            title: 'String 不同拼接方式的对比',
            component: <Module04></Module04>,
        },
        {
            title: 'String 的常用方法',
            component: <Module05></Module05>,
        },
        {
            title: 'String 与其它类型的转换',
            component: <Module06></Module06>,
        },
        {
            title: 'StringBuffer 和 StringBuilder',
            component: <Module07></Module07>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'字符串相关'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01