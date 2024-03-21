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


const Book01 = (props) => {

    const baseItems = [
        {
            title: 'System类中获取时间戳的方法',
            component: <Module01></Module01>,
        },
        {
            title: 'Java中两个Date类的使用',
            component: <Module02></Module02>,
        },
        {
            title: 'SimpleDateFormat的使用',
            component: <Module03></Module03>,
        },
        {
            title: 'Calendar日历类的使用',
            component: <Module04></Module04>,
        },
        {
            title: 'JDK8中日期时间API的介绍',
            component: <Module05></Module05>,
        },
        {
            title: 'LocalDate、LocalTime、LocalDateTime',
            component: <Module06></Module06>,
        },
        {
            title: 'Instant类的使用',
            component: <Module07></Module07>,
        },
        {
            title: 'DateTimeFormatter的使用',
            component: <Module08></Module08>,
        },
        // {
        //     title: '其它日期时间相关API的使用',
        //     component: <Module09></Module09>,
        // },
    ]

    let items = turnItems(baseItems)

    return (<>
        <PageWrapper
            title={'日期相关'}
        >
            <CollapseWrapper
                {...props}
                items={items}
            ></CollapseWrapper>
        </PageWrapper>
    </>)
}

export default Book01