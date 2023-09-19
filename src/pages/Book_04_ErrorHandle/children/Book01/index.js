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
import Module09 from "./Modules/Module09";

const Book01 = () => {

    const baseItems = [
        {
            title: '异常概述以及分类',
            component: <Module01></Module01>,
        },
        {
            title: '常见异常举例',
            component: <Module02></Module02>,
        },
        {
            title: '异常处理方式概述',
            component: <Module03></Module03>,
        },
        {
            title: '处理异常 try-catch 方式',
            component: <Module04></Module04>,
        },
        {
            title: 'finally 的使用',
            component: <Module05></Module05>,
        },
        {
            title: '编译时异常和运行时异常的不同处理',
            component: <Module06></Module06>,
        },
        {
            title: '异常处理方式：throw',
            component: <Module07></Module07>,
        },
        {
            title: '手动抛出异常对象',
            component: <Module08></Module08>,
        },
        {
            title: '如何自定义异常',
            component: <Module09></Module09>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'异常处理'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01