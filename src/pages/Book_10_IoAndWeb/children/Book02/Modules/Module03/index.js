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

import img693 from '@/assets/images/img693.png'
import img694 from '@/assets/images/img694.png'
import img695 from '@/assets/images/img695.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>下面，我们尝试对自定义的类实例，进行序列化和反序列化操作。</P>
            <P>根据之前说的，要想自定义类实例可以序列化，必须要其实现 <Bold>Serializable</Bold>
                <span>接口，且 拥有全局唯一的 <Bold>serialVersionUID</Bold>。</span>
            </P>
            <P>另外，需要保证这个类中的属性，包括属性对象的属性，“一系列”下去，都是可序列化的。</P>

            <ComLine></ComLine>
            <P>下面我们上代码：</P><P>首先，我们实现一个可序列化的 Person 类。</P>
            <ImagesGroup
                srcArr={[img693]}
            ></ImagesGroup>
            <P>然后，我们尝试对改类进行序列化和反序列化操作：</P>
            <ImagesGroup
                srcArr={[img694]}
            ></ImagesGroup>
            <P>然后末尾接着把 输出的对象，从文件 myTest.txt 中反序列化回来：</P>
            <ImagesGroup
                srcArr={[img695]}
            ></ImagesGroup>
            <P>哈哈，这里偷懒了，没有 close 流。</P>
        </div>
    </>)
}

export default Module