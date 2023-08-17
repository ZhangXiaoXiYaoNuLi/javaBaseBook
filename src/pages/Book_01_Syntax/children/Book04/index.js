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

const Book04 = (props) => {

    const baseItems = [
        {
            title: '流程控制简述',
            component: <Module01></Module01>,
        },
        {
            title: '使用Scannner从键盘获取数据',
            component: <Module02></Module02>,
        },
        {
            title: 'if-else 语句',
            component: <Module03></Module03>,
        },
        {
            title: 'switch-case 语句',
            component: <Module04></Module04>,
        },
        {
            title: 'for 循环语句',
            component: <Module05></Module05>,
        },
        {
            title: 'while 循环语句',
            component: <Module06></Module06>,
        },
        {
            title: 'do while 循环语句',
            component: <Module07></Module07>,
        },
        {
            title: 'break 和 continue 的使用',
            component: <Module08></Module08>,
        },
        {
            title: '例题',
            component: <Module09></Module09>,
        },
    ];

    let items = turnItems(baseItems)

    return (
        <PageWrapper
            title={'流程控制'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    );
}

export default Book04