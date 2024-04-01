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
import Module10 from "./Modules/Module10";

const Book01 = (props) => {

    const baseItems = [
        {
            title: '为什么要使用泛型',
            component: <Module01></Module01>,
        },
        {
            title: '集合中使用泛型',
            component: <Module02></Module02>,
        },
        {
            title: '自定义泛型类、接口、方法',
            component: <Module03></Module03>,
        },
        {
            title: '泛型和泛型方法的使用情境',
            component: <Module04></Module04>,
        },
        {
            title: '泛型在继承方面的体现',
            component: <Module05></Module05>,
        },
        {
            title: '通配符的使用',
            component: <Module06></Module06>,
        },
        {
            title: 'File类的实例化',
            component: <Module07></Module07>,
        },
        {
            title: 'File类的常用方法',
            component: <Module08></Module08>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'泛型与File'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01