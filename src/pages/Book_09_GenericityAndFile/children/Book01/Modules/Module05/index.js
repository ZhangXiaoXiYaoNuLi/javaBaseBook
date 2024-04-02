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
import img652 from '@/assets/images/img652.png'
import img653 from '@/assets/images/img653.png'
import img654 from '@/assets/images/img654.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                <Bold>特点：</Bold>
            </P>
            <P>
                <Red>1、{`虽然类 A 是类 B 的父类，但是 G<A> 和 G<B>二者不具备子父类关系，二者是并列关系。`}</Red>
            </P>
            <P>
                <Red>2、相对的：{`类 A 是类 B 的父类，A<G> 就是 B<G> 的父类。`}</Red>
            </P>
            <P>
                <Blue>（不同泛型类的同类，是并列关系。而相同泛型类的继承关系不同类，是继承关系）</Blue>
            </P>
            <P>小口诀：异泛同类是并列，同泛异类是继承。（<Red>继不继承看类不看泛型</Red>）</P>
            <ImagesGroup
                srcArr={[img652]}
            ></ImagesGroup>
            <P>
                在不具有父子类关系的同时，又根据泛型判断，不是相同的泛型，所以下面的那段赋值是编译不通过的。
            </P>
            <ImagesGroup
                srcArr={[img653]}
            ></ImagesGroup>

            <ImagesGroup
                srcArr={[img654]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module