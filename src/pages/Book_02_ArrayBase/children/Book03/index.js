import React from "react";

import PageWrapper from '@/components/PageWrapper'

import CollapseWrapper from '@/components/CollapseWrapper'

import {turnItems} from '@/utils/utils.js'

import { Card } from 'antd';

import ParagraphWrapper from '@/components/ParagraphWrapper'
import ComSpace from '@/components/ComSpace'
import ImagesGroup from '@/components/ImagesGroup'
// 代码展示组件，输入值为转化后的字符串数组
import CodeShowWrapper from '@/components/CodeShowWrapper'
// 卡片组件
import CardWrapper from '@/components/CardWrapper'
// 小标题
import SmallTitle from '@/components/SmallTitle'
// 红字wrapper
// import RedFontWrapper from '@/components/RedFontWrapper'
import Red from '@/components/RedFontWrapper'

import Module01 from "./Modules/Module01";
import Module02 from "./Modules/Module02";
import Module03 from "./Modules/Module03";

import img90 from '@/assets/images/img90.png'
import img91 from '@/assets/images/img91.png'
import img92 from '@/assets/images/img92.png'
import img93 from '@/assets/images/img93.png'
import img94 from '@/assets/images/img94.png'
import img95 from '@/assets/images/img95.png'

import img96 from '@/assets/images/img96.png'
import img97 from '@/assets/images/img97.png'

const Book03 = () => {

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
            title={'数组工具类的使用'}
        >
            <Card
                title={null}
                bodyStyle={{
                    padding: '16px'
                }}
            >
                <SmallTitle>
                    Arrays工具类的使用：
                </SmallTitle>
                <ParagraphWrapper>
                    这个Arrays，注意后面的s，以后会经常遇到类似名称的类，其实前面是个类型，后面加个 s，通常就是操作这个类型的工具类，又或者叫 xxxUtil 等等。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    Arrays提供了很多操作数组的 api，下面我们来认识几个常用的。
                </ParagraphWrapper>
                <ImagesGroup
                    srcArr={[img90]}
                ></ImagesGroup>

                <SmallTitle>
                    equals：
                </SmallTitle>
                <ImagesGroup
                    srcArr={[img91]}
                ></ImagesGroup>
                <ParagraphWrapper>
                    equals方法的比对方式是，先判断两个数组是不是同一个，即是不是可以==，然后再判断是否都不为null，否则返回false。接着是比对length，最后才是遍历一个个元素用 == 比较。
                </ParagraphWrapper>

                <SmallTitle>
                    toString：
                </SmallTitle>
                <ImagesGroup
                    srcArr={[img92, img93]}
                ></ImagesGroup>
                
                <ParagraphWrapper>
                    可以发现，输出的是一个按一定规则拼接的字符串类型。甚至贴心地在左右两边拼上了数组的中括号。元素间的逗号和空格，都是toSting方法拼上去的。
                </ParagraphWrapper>

                <SmallTitle>
                    fill：
                </SmallTitle>
                <ImagesGroup
                    srcArr={[img94, img95]}
                ></ImagesGroup>
                <ParagraphWrapper>
                    即使原有数组中元素已经全部都有值，也会覆盖掉。
                </ParagraphWrapper>

                <SmallTitle>
                    sort：
                </SmallTitle>
                <ImagesGroup
                    srcArr={[img96, img97]}
                ></ImagesGroup>
                <ParagraphWrapper>
                    从第二张图可以看的出来，sort方法常用的，可以对各种数值类型进行排序，底层是使用快排的原理。
                </ParagraphWrapper>
            </Card>
        </PageWrapper>
    </>)
}

export default Book03