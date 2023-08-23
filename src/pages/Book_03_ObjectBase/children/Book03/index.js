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

const Book03 = () => {

    const baseItems = [
        {
            title: '封装性基础',
            component: <Module01></Module01>,
        },
        {
            title: '四种权限修饰符',
            component: <Module02></Module02>,
        },
        {
            title: '构造器',
            component: <Module03></Module03>,
        },
        {
            title: 'JavaBean 的使用',
            component: <Module04></Module04>,
        },
        {
            title: 'this 关键字',
            component: <Module05></Module05>,
        },
        {
            title: 'package 关键字',
            component: <Module06></Module06>,
        },
        {
            title: 'MVC设计模式的理解',
            component: <Module07></Module07>,
        },
        {
            title: 'import 关键字',
            component: <Module08></Module08>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'Section-3'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book03