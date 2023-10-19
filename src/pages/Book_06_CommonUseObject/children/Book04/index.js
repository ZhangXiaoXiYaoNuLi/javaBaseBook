import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import Module04 from "./Modules/Module04";

const Book01 = () => {

    const baseItems = [
        {
            title: 'System 类',
            component: <Module01></Module01>,
        },
        {
            title: 'Math 类',
            component: <Module02></Module02>,
        },
        {
            title: 'BigInteger 类',
            component: <Module03></Module03>,
        },
        {
            title: 'BigDecimal 类',
            component: <Module04></Module04>,
        },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'System、Math、BigInteger、BigDecimal'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01