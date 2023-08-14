import React from "react";

import PageWrapper from '../../../../components/PageWrapper'

import CollapseWrapper from '../../../../components/CollapseWrapper'

import {Input} from 'antd'

const { TextArea } = Input

import { turnItems } from '../../../../utils/utils.js'

import Module01 from './Modules/Module01'
import Module02 from "./Modules/Module02";

const Book01 = (props) => {

    const baseItems = [
        {
          title: '关键字、保留字的定义，以及一览',
          component: <Module01></Module01>,
        },
        {
          title: '标识符，及命名规则',
          component: <Module02></Module02>,
        },
    ];

    let items = turnItems(baseItems)

    return (
        <PageWrapper
            title={'关键字、保留字、标识符'}
        >
            <CollapseWrapper
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    );
}

export default Book01