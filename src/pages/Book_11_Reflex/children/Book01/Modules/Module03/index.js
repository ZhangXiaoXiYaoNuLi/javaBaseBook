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
    Tp,
} from '@/components/index.js'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P><Blue>{`这两者并不矛盾。`}</Blue>封装性相当于是建议其他类去调用当前类的公共方法，而私有方法不建议去调用，因为公共的方法可能比私有的方法更好，公共方法里面可能添加了一些逻辑。如果非要调用私有的方法，也可以调用，那我们就通过反射的方式去调用。</P>
            <P><Dot></Dot>封装性：其主要体现是将属性和方法设置为私有的使其在其他类中调用时无法访问该类中内部的私有属性和私有方法，隐藏了内部的细节，保证了代码的安全性。如果我们要想使用其私有属性和私有方法则应该使用该类内部的public方法进行调用。</P>
            <P><Dot></Dot>反射：指的是我们在程序运行期间可以借助于反射的API获取任意对象的属性和方法，并且能够操作任意类的属性和方法。这种动态获取的信息以及动态调用对象的方法的功能称为java语言的反射机制。</P>
            <P><Dot></Dot>通过直接new的方式和反射的方式都可以调用公用的结构，那么我们在开发中用哪个？</P>
            <P><Tp></Tp><Blue>建议用new的方式</Blue>（编译的时候就确定了要初始化的对象）。</P>
            <P><Tp></Tp>什么时候用反射的方式：反射的特征：动态性。不确定要去new那个对象就可以用反射的方式。</P>
        </div>
    </>)
}

export default Module