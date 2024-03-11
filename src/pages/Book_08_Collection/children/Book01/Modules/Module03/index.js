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

import img563 from '@/assets/images/img563.png'
import img564 from '@/assets/images/img564.png'
import img565 from '@/assets/images/img565.png'
import img566 from '@/assets/images/img566.png'

const BlueDot = () => {
    return <Dot color="rgb(22, 119, 255)"></Dot>
}

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                 集合对象每次调用iterator()方法都得到一个全新的迭代器对象，默认游标都在集合
                的第一个元素之前。
            */}

            <ParagraphWrapper>
                <Dot></Dot>Iterator对象称为迭代器(设计模式的一种)，主要用于遍历 Collection 集合中的元素。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>GOF给迭代器模式的定义为：提供一种方法访问一个容器(container)对象中各个元素，而又不需暴露该对象的内部细节。<Blue>迭代器模式，就是为容器而生</Blue>。类似于“公交车上的售票员”、“火车上的乘务员”、“空姐”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>Collection接口继承了 java.lang.Iterable 接口，该接口有一个 iterator() 方法，那么所有实现了 Collection 接口的集合类都有一个 iterator() 方法，用以返回一个实现了 Iterator 接口的对象。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>Iterator 仅用于遍历集合，Iterator 本身并不提供承装对象的能力。如果需要创建Iterator 对象，则必须有一个被迭代的集合。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Red>集合对象每次调用iterator()方法都得到一个全新的迭代器对象</Red>，默认游标都在集合的第一个元素之前。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                在上一节的最后，说到遍历器，有一个代码例子：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img563]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先调用集合的 iterator 方法（单例工厂方法？），可以获得一个 iterator 实例对象，然后可以调用 hasNext 以及 next 方法，对集合进行遍历。因为 这个遍历器工厂方法，是在最顶层的 collection 接口上的，所以所有集合都有。
            </ParagraphWrapper>
            <ParagraphWrapper>
                其实调用 iterator 方法获取的是一个“指针”，指向的是集合第一个元素对象的 “上一个”，也就是空，同时标志着 “下一个” 元素对象是否存在，且可以使用 next 方法，获取 “下一个” 元素对象。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                迭代器 中的两种 错误写法
            </SmallTitle>

            <ParagraphWrapper>
                <Bold>1、不使用 hasNext 方法，而是直接调用 next 方法，获取元素，然后就通过判断获取的元素是否为 null，来进行遍历。</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img564]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，结果是输出了一个 2 ，然后就报错了。分析一下执行顺序，就是说我们在第一个while的判断条件中，使用了 next 方法，获取了第一个元素 1，然后判断了这个 1 不为 null，然后我们又在 while 的执行体中获取了第二个元素 2，所以输出了 2。
            </ParagraphWrapper>

            <ParagraphWrapper>
                当我们按照这个执行顺序执行下去之后，就会出现 跳着输出，且输出到了最后的时候，会报错 NoSuchElementException 。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Bold>2、在 while 循环条件中，调用 iterator 方法，获取迭代器实例，然后使用 链式调用，调用 hasNext 方法，作为条件来遍历。</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img565]}
            ></ImagesGroup>

            <ParagraphWrapper>
                结果是出现了无限循环的情况，因为<Blue>每一次调用 集合的 iterator 方法，获取的迭代器，都是新的迭代器，所以这里会不断地输出集合的第一个元素</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                iterator 迭代器的 remove 方法
            </SmallTitle>

            <ParagraphWrapper>
                这个 remove 方法，可以使用迭代器删除元素。下面直接上一段代码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img566]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，我们利用迭代器的 hasNext 以及 next 方法，遍历的集合，且在 获取元素为 2 的时候，调用了 remove 方法，删除了该元素，最后得到的输出可以看到，删除了元素 2 。
            </ParagraphWrapper>

            <ComSpace></ComSpace>a

            <ParagraphWrapper>
                <Dot></Dot>注意：
            </ParagraphWrapper>

            <ParagraphWrapper>
                1、Iterator可以删除集合的元素，但是是遍历过程中<Bold>通过迭代器对象的remove方法，不是集合对象的remove方法</Bold>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Red>{`如果还未调用 next() 或在上一次调用 next 方法之后已经调用了 remove 方法，再调用 remove 都会报 IllegalStateException。`}</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                其实是两种情况，一种是还没有调用过 next 方法，指针还指向开头的 空 元素，调研 remove 方法，就会报错。第二种情况是，在一个 next 获取下一个元素的 小循环中，如果调用 remove 方法 两次，就会报错。<Bold>总的来说，就是 remove 方法，不能删除 空元素</Bold>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module