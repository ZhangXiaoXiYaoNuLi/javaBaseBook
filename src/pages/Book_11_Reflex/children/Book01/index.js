import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";

const Book01 = (props) => {

    const baseItems = [
        {
            title: '1',
            component: <Module01></Module01>,
        },
        {
            title: '2',
            component: <Module02></Module02>,
        },
        {
            title: '3',
            component: <Module03></Module03>,
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