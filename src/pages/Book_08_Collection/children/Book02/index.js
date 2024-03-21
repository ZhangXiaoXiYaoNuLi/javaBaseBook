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

const Book02 = (props) => {

    const baseItems = [
        {
            title: 'HashSet中元素的添加过程',
            component: <Module01></Module01>,
        },
        {
            title: '关于hashCode()和equals()的重写',
            component: <Module02></Module02>,
        },
        {
            title: 'LinkedHashSet的使用',
            component: <Module03></Module03>,
        },
        {
            title: 'TreeSet的自然排序、定制排序',
            component: <Module03></Module03>,
        },
        {
            title: 'LinkedHashSet的使用',
            component: <Module03></Module03>,
        },
        {
            title: 'LinkedHashSet的使用',
            component: <Module03></Module03>,
        },
        {
            title: 'LinkedHashSet的使用',
            component: <Module03></Module03>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'流程控制'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book02