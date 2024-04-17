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

const Book02 = () => {

    const baseItems = [
        {
            title: '对象序列化机制的理解',
            component: <Module01></Module01>,
        },
        {
            title: '对象流序列化 和 反序列化 字符串操作',
            component: <Module02></Module02>,
        },
        {
            title: '自定义类实现序列化和反序列化操作',
            component: <Module03></Module03>,
        },
        {
            title: 'serialVersionUID的理解',
            component: <Module04></Module04>,
        },
        {
            title: '自定义类可序列化的其它要求',
            component: <Module05></Module05>,
            hidden: true,
        },
        {
            title: 'RandomAccessFile 的读写和插入数据操作',
            component: <Module06></Module06>,
        },
        {
            title: 'NIO介绍及NIO2中Path、Paths、Files的介绍',
            component: <Module07></Module07>,
            hidden: true,
        },
        {
            title: '使用第三方jar包实现数据读写',
            component: <Module08></Module08>,
            hidden: true,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'IO流 Section-2'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book02