import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";

const Book04 = () => {

    const baseItems = [
        {
            title: 'Module01',
            component: <Module01></Module01>,
        },
        {
            title: 'Module02',
            component: <Module02></Module02>,
        },
        {
            title: 'Module03',
            component: <Module03></Module03>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'数组中的常见异常'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book04