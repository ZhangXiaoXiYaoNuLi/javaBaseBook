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
import Module11 from "./Modules/Module11";
import Module12 from "./Modules/Module12";
import Module13 from "./Modules/Module13";


const Book02 = (props) => {

    const baseItems = [
        {
            title: '变量',
            component: <Module01></Module01>,
        },
        {
            title: '数据类型',
            component: <Module02></Module02>,
        },
        {
            title: '整型、浮点型变量的使用说明',
            component: <Module03></Module03>,
        },
        {
            title: 'char型变量的使用说明',
            component: <Module04></Module04>,
        },
        {
            title: '乱码的情况和字符集的说明',
            component: <Module05></Module05>,
        },
        {
            title: '布尔型变量的使用说明',
            component: <Module06></Module06>,
        },
        {
            title: '自动类型提升',
            component: <Module07></Module07>,
        },
        {
            title: '强制类型转换',
            component: <Module08></Module08>,
        },
        {
            title: '变量运算规则的两个特殊情况',
            component: <Module09></Module09>,
        },
        {
            title: 'String类型变量的使用',
            component: <Module10></Module10>,
        },
        {
            title: '两个关于String的练习题',
            component: <Module11></Module11>,
        },
        {
            title: 'String使用的强化说明',
            component: <Module12></Module12>,
        },
        {
            title: '补充内容：关于进制',
            component: <Module13></Module13>,
        },
    ];

    let items = turnItems(baseItems)

    return (
        <PageWrapper
            title={'变量、数据类型'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    );
}

export default Book02