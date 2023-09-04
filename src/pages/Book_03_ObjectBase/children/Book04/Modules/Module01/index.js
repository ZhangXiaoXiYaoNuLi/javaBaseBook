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

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>为什么要有继承？</SmallTitle>
            <ParagraphWrapper>
                多个类中存在相同属性和行为时，将这些内容抽取到单独一个类中，那么多个类无需再定义这些属性和行为，只要继承那个类即可。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                此处的多个类称为子类(派生类)，单独的这个类称为父类(基类或超类)。可以理解为:<Blue>{`“子类 is a 父类”`}</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>{`类继承语法规则：`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>{`class Subclass extends SuperClass{ }`}</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                继承的作用：
            </SmallTitle>
            <ParagraphWrapper>
                1、继承的出现减少了代码冗余，提高了代码的复用性。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、继承的出现，更有利于功能的扩展。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、继承的出现让类与类之间产生了关系，提供了多态的前提。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                继承的注意点：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot><Blue>不要仅为了获取其他类中某个功能而去继承。</Blue>
            </ParagraphWrapper>



            <ParagraphWrapper>
                <Dot></Dot>子类继承了父类，就继承了父类的方法和属性。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>在子类中，可以使用父类中定义的方法和属性，也可以创建新的数据和方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>在Java 中，继承的<Red>关键字</Red>用的是“<Red>extends</Red>”，即子类<Red>不是</Red>父类的<Red>子集</Red>，而是对父类的<Red>“扩展”</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color='red'></Dot><Red>{`子类不能直接访问父类中私有的(private)的成员变量和方法。`}</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>那么这里有一个问题，既然不能访问父类private的属性和方法，那么继承的时候继承了它们吗？答案是继承到了，我们可以尝试访问父类继承来的private方法的内存，是可以输出的，只是不能调用而已</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>所以一句话就是，父类私有方法，是可以继承到子类的（又或者说，子类会继承父类的所有属性和方法），只是因为--封装性，所以不能调用</Blue>。并不能说父类的私有成员是没继承过来。
            </ParagraphWrapper>
            <ParagraphWrapper>
                所以，继承性是继承性，子类总是可以继承到父类的成员的，只是能不能调用，又得看封装性，继承性、封装性 各司其职。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color='red'></Dot><Red>Java只支持单继承和多层继承，不允许多重继承</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、一个子类只能有一个父类。（一个儿子只能有一个亲生父亲）
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、一个父类可以派生出多个子类。（但是一个父亲，可以有多个儿子）
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、子类与父类之间，是相对的，同一个类可以同时是父类，又可以是子类。上一层的是“直接父类”，更上的是“间接父类”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、子类继承父类之后，实际就拥有了直接父类和间接父类全部的属性和方法。只是不一定可以调用（private修饰的父类方法）。
            </ParagraphWrapper>
            <ParagraphWrapper>当然如果想要通过继承扩展功能，后面还会讲到 接口 interface。</ParagraphWrapper>

            
        </div>
    </>)
}

export default Module