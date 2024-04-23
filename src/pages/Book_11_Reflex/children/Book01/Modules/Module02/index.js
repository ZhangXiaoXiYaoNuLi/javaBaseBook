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
import img701 from '@/assets/images/img701.png'
import img702 from '@/assets/images/img702.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>通过反射，调用类的私有接口（私有属性，私有方法）</SmallTitle>
            <P><Blue>主要思路是通过特定方法，打破私有限制</Blue>。</P>
            <ImagesGroup
                srcArr={[img701]}
            ></ImagesGroup>
            <P>可以看到，这里调用了“<Blue>setAccessible</Blue>”，打破了私有化的限制，然后可以使用 set 方法进行属性设置。由输出可以看出，设置成功。</P>
                
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <Bold>下面看看私有方法，反射如何调用，以及传参：</Bold>
            <ImagesGroup
                srcArr={[img702]}
            ></ImagesGroup>
            <P>和调用 public 方法是类似的，只是调用了 setAccessible 打破了其私有性才可以调用。</P>
        </div>
    </>)
}

export default Module