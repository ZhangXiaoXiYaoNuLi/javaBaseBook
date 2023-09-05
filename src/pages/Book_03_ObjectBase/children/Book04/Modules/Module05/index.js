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
} from '@/components/index.js'

import img186 from '@/assets/images/img186.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>super的作用</SmallTitle>
            <ParagraphWrapper>
                <Dot></Dot>在Java类中使用super来调用父类中的指定操作：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、super可用于访问父类中定义的属性。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、super可用于调用父类中定义的成员方法。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、super可用于在子类构造器中调用父类的构造器。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                注意点：
            </SmallTitle>
            <ParagraphWrapper>
                1、尤其当子父类出现同名成员时，可以用super表明调用的是父类中的成员。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Blue>super的追溯不仅限于直接父类，也包括间接父类</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、super和this的用法相像，this代表本类对象的引用，super代表父类的内存空间的标识。
            </ParagraphWrapper>
            
            <ComLine></ComLine>

            <SmallTitle>
                关于super调用父类的构造器：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>子类中<Blue>所有的</Blue>构造器<Blue>默认</Blue>都<Blue>会访问父类中空参数的构造器</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>当父类中没有空参数的构造器时，子类的构造器必须通过this（参数列表）或者super（参数列表）语句指定调用本类或者父类中相应的构造器。同时，只能”二选一”，且必须放在构造器的首行</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>如果子类构造器中既未显式调用父类或本类的构造器，且父类中又没有无参的构造器，则编译出错</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                关于 super 和 this 的区别：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img186]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                接着，我们通过代码来测试一下，并了解下细节
            </ParagraphWrapper>

            <ParagraphWrapper>
                可以想像一个场景，父类中有一个方法，然后子类重写了这个方法，此时如果用子类实例对象调用改方法，那么就会调用到重写的那个。
            </ParagraphWrapper>

            <ParagraphWrapper>
                那有没有办法在子类重写后，依然用子类实例调用父类被重写的方法呢？那就是使用 super 关键字（是不是觉得有点像 this）。
            </ParagraphWrapper>

            
        </div>
    </>)
}

export default Module