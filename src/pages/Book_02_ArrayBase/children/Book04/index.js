import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";

const Book04 = (props) => {

    const baseItems = [
        {
            title: '两个常见数组异常',
            component: <Module01></Module01>,
        },
    ];

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'数组中的常见异常'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book04