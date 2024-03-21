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

const Book01 = (props) => {

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
        {
            title: '注解基础',
            component: <Module05></Module05>,
        },
        {
            title: '3个内置基本注解',
            component: <Module06></Module06>,
        },
        {
            title: '自定义注解',
            component: <Module07></Module07>,
        },
        {
            title: 'jdk的4个元注解',
            component: <Module08></Module08>,
        },
        {
            title: 'jdk8的注解新特性',
            component: <Module09></Module09>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'枚举'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01