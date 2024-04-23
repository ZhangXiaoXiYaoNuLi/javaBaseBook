import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import Module04 from "./Modules/Module04";

const Book01 = (props) => {

    const baseItems = [
        {
            title: '反射的概述',
            component: <Module01></Module01>,
        },
        {
            title: '反射的强大，调用类的私有结构',
            component: <Module02></Module02>,
        },
        {
            title: '如何看待封装性和反射，是否矛盾？',
            component: <Module03></Module03>,
        },
        {
            title: 'Class 类的理解',
            component: <Module04></Module04>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'反射'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01