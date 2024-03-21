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

const Book03 = (props) => {

    const baseItems = [
        {
            title: '算数运算符的使用',
            component: <Module01></Module01>,
        },
        {
            title: '赋值运算符的使用',
            component: <Module02></Module02>,
        },
        {
            title: '比较运算符的使用',
            component: <Module03></Module03>,
        },
        {
            title: '逻辑运算符的使用',
            component: <Module04></Module04>,
        },
        {
            title: '位运算符',
            component: <Module05></Module05>,
        },
        {
            title: '三元运算符',
            component: <Module06></Module06>,
        },
        {
            title: '运算符的优先级',
            component: <Module07></Module07>,
        },
    ];

    let items = turnItems(baseItems)

    return (
        <PageWrapper
            title={'运算符'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    );
}

export default Book03