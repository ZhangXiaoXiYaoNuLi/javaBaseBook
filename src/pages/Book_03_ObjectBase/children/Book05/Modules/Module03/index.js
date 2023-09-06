import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'

import {
    ParagraphWrapper,
    ComSpace,
    ImagesGroup,
    CodeShowWrapper,
    CardWrapper,
    SmallTitle,
    Red,
    Blue,
    ComLine,
    Dot,
    Green,
    Bold,
} from '@/components/index.js'

import img227 from '@/assets/images/img227.png'
import img228 from '@/assets/images/img228.png'

import img229 from '@/assets/images/img229.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>来看几个常见的开发中会遇到的，关于“向下转型”的例子：</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>问题一：</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img227]}
            ></ImagesGroup>

            <ParagraphWrapper>
                前面一节已经演示过这个例子，也就是我们为什么要使用 instanceof 关键字判断原型链，防止类型转化错误。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Bold>问题二：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                来一个，编译时通过，且运行时通过的问题
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img228]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实这个例子不是一个问题，不过是给我们看一个奇葩的强转例子，然后可以注意到，控制台输出的是 Woman 类的结果。
            </ParagraphWrapper>

            <ParagraphWrapper>
                本身 new 了一个 Woman，然后向上转型（多态）成了 Object，此时再强转回 Woman，当然是可以的，所以更别说是强转成 Person 了。也可以理解为，你本身是个 女人，那当然也就是个 人类。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>问题三：</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img229]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这个代码会运行报错，注意一开始 new 的就是 Person ，是不能向下强转为 Man 类型的。只有<Red>一开始 new 的是 Man 或者是 Man 的子类，然后用了 Person 类型接收，才可以把 实例强转为 Man 类型</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                其实想想也不合适，我 new 了一个 Person ，内存里哪里有加载过你 Man 类型的 earnMoney 方法，还有 isSmoking 属性呢？你强转成 Man 类型，调这些内存中都没有的成员，那么还得了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>总的来说，类的向下转型，用的非常少，百分之90都是用多态（向上转型）。所以这个作为知识点了解下就行。</Green>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module