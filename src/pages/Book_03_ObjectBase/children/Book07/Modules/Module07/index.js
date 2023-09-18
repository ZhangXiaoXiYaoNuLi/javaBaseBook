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

import img333 from '@/assets/images/img333.png'
import img334 from '@/assets/images/img334.png'
import img335 from '@/assets/images/img335.png'
import img336 from '@/assets/images/img336.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                这里我们<Blue>先忽略局部内部类</Blue>，先来看看<Red>成员内部类</Red>，以及它的特点。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    成员内部类，有两种身份，它即是外部类的成员，又是一个类。所以我们可以从这两种身份去看它。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                首先，是它作为外部类的成员，它有哪些特点：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>调用外部类的结构
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>可以被static修饰
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>可以被4种不同的权限修饰
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                另一方面，作为一个类：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>类内可以定义属性、方法、构造器等。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>可以被final修饰，表示此类不能被继承。言外之意，不使用final，就可以被继承。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>可以被abstract修饰。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>静态成员内部类，只能访问外部类的静态属性和静态方法。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Red>注意点：</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>非static的成员内部类中的成员不能声明为static的，只有在外部类或static的成员内部类中才可声明static成员。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>外部类访问成员内部类的成员，需要“内部类.成员”或“内部类对象.成员”的方式。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>成员内部类可以直接使用外部类的所有成员，包括私有的数据。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>当想要在外部类的静态成员部分使用内部类时，可以考虑内部类声明为静态的。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                接着，上代码看看
            </ParagraphWrapper>

            <ParagraphWrapper>
                首选，我们定义一个 Person 类，然后里面定义两个“成员内部类”（类中方法外），一个静态成员内部类 Dog ，还有一个非静态成员内部类 Bird：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img333]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，一般类中所有的元素，全部都是可以定义的，像属性、方法、构造器。而且，内部类如果不是使用 final 描述的，那么是可以被其它类继承的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                首先，成员内部类，作为类的成员，就像普通的成员方法一样，可以调用外部类的属性和方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后，<Red>我们尝试去 main 方法中实例化这两个内部类，注意了，静态成员内部类 和 非静态成员内部类 的实例化语法是不一样的：</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img335]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>静态内部类的实例化语法是：<Red>{`外部类.内部类 实例名 = new 外部类.内部类();`}</Red></Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>而非静态内部类的实例化，<Red>是先造父类实例</Red>，然后使用父类实例进行创建,语法为：<Red>{`外部类.内部类 实例名 = 外部类实例.new 内部类();`}</Red></Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module