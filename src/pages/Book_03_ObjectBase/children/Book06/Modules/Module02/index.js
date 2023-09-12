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

import img270 from '@/assets/images/img270.png'
import img271 from '@/assets/images/img271.png'
import img272 from '@/assets/images/img272.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                什么是设计模式？
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>设计模式是在大量的实践中总结和理论化之后优选的代码结构、编程风格、以及解决问题的思考方式。设计模式免去我们自己再思考和摸索。就像是经典的棋谱，不同的棋局，我们用不同的棋谱。也可以理解为”套路”。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                什么是单例模式？
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>所谓类的单例设计模式，<Red>就是采取一定的方法保证在整个的软件系统中，对
                某个类只能存在一个对象实例，并且该类只提供一个取得其对象实例的方法。</Red>
                如果我们要让类在一个虚拟机中只能产生一个对象，我们<Red>首先必须将类的构
                造器的访问权限设置为private</Red>，这样，就不能用new操作符在类的外部产生
                类的对象了，但在类内部仍可以产生该类的对象。因为在类的外部开始还无
                法得到类的对象，<Red>只能调用该类的某个静态方法</Red>以返回类内部创建的对象，
                静态方法只能访问类中的静态成员变量，所以，指向类内部产生的<Red>该类对象
                的变量也必须定义成静态的</Red>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                单例的 饿汉式 实现：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img270]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>
                    首先是要将构造方法私有化，防止外部 new 多个实例。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>这里在类内部 new 的实例，必须使用 <Red>私有</Red> 且 <Red>静态</Red> 的成员属性接收。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>最后，是提供一个静态方法，用于返回接收了 实例对象 的 静态属性。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                可以尝试一下，使用获取单例的方法，获取两次对象，然后使用 == 符号进行对比，如果是为 true，说明就是同一个对象。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img272]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，控制台输出为 true 。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                单例的 懒汉式 实现：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img271]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    代码原理和饿汉式类似。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                只是<Blue>这里是把直接new 实例 给属性这行代码，给改成了if判断的赋值的了，如果没有实例才会创建</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                显然，懒汉式的性能更好。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    如何快速区分记住这两种写法？只要记住“啥时候要用啥时候造实例”就是“懒汉”。
                </Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                懒汉式 和 饿汉式 的区别：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>懒汉式是延迟 new 实例对象的，比起饿汉式更节省性能。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>饿汉式天然是线程安全的。目前懒汉式的代码是线程不安全的，还需要特殊处理。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    关于线程安全，可以打个比方，有两个人同时去银行的同一个账户取钱，账户里有5000员，每个人都想取5000，取钱时，银行会先判断账户里是否够5000余额，而这个判断是需要时间的，且判断时间不确定，有可能在判断余额足够发钱之前，又判断余额足够给另一个人发钱。
                </Blue>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module