import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";
import SmallTitle from "@/components/SmallTitle";

import BottomFloatButtonGroup from '@/components/BottomFloatButtonGroup'

const Book02 = (props) => {
    return (<>
        <PageWrapper
            title={'常见算法'}
        >
            <SmallTitle>
                暂时 略~
            </SmallTitle>

            {/* 抽取的底部右侧悬浮按钮组 */}
            <BottomFloatButtonGroup
                {...props}
            ></BottomFloatButtonGroup>
        </PageWrapper>
    </>)
}

export default Book02