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

const Book05 = () => {

    const baseItems = [
        {
            title: '向下转型的使用',
            component: <Module01></Module01>,
        },
        {
            title: 'instanceof关键字',
            component: <Module02></Module02>,
        },
        {
            title: '向下转型的几个常见问题',
            component: <Module03></Module03>,
        },
        {
            title: '多态性练习',
            component: <Module03></Module03>,
        },
        {
            title: 'Object类的结构剖析',
            component: <Module03></Module03>,
        },
        {
            title: 'equal()方法与 == 运算符',
            component: <Module03></Module03>,
        },
        {
            title: 'toString()方法',
            component: <Module03></Module03>,
        },
        {
            title: '包装类相关',
            component: <Module03></Module03>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'Section-5'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book05