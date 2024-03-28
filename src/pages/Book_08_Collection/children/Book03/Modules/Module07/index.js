import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper as P,
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

import img609 from '@/assets/images/img609.png'
import img610 from '@/assets/images/img610.png'
import img611 from '@/assets/images/img611.png'
import img612 from '@/assets/images/img612.png'
import img614 from '@/assets/images/img614.png'
import img615 from '@/assets/images/img615.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>Map 的 key 为了保持不重复性，所以 key 得是同一个类的实例对象。而 TreeMap 也就可以类比于 TreeSet，有“自然排序”和“定制排序”两种方式添加 key-value。</P>

            <ComLine></ComLine>
            <P>
                <Dot></Dot><Bold>自然排序：TreeMap 的所有的 Key 必须实现 Comparable 接口，且实现 compareTo 方法，而且所有的 Key 应该是同一个类的对象，否则将会抛出 ClasssCastException</Bold>
            </P>

            <P>
                首先，我们想要使用自定义类的实例作为 key 值，现在我们有<Blue>一个实现了 Comparable 接口，且重写了 compareTo 方法的 Person 类，可以直接拿这个类的实例作为 key 值</Blue>。
            </P>
            <ImagesGroup
                srcArr={[img614]}
            ></ImagesGroup>
            <P>尝试用 Person 作为 key 值定义一个 TreeMap ：</P>
            <ImagesGroup
                srcArr={[img615]}
            ></ImagesGroup>

            <ComLine></ComLine>
            <P>
                <Dot ></Dot><Bold>定制排序：创建 TreeMap 时，传入一个 Comparator 对象，该对象负责对TreeMap 中的所有 key 进行排序。此时不需要 Map 的 Key 实现Comparable 接口</Bold>
            </P>
            <P>首先我们把 Person 类清理干净：</P>
            <ImagesGroup
                srcArr={[img611]}
            ></ImagesGroup>
            <P>然后来到 main 方法中，<Blue>定义一个 Comparator 实例，且实现 compare 方法，然后将这个实例，作为 TreeMap 构造参数传入</Blue>：</P>
            <ImagesGroup
                srcArr={[img612]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module