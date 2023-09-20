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

import img400 from '@/assets/images/img400.png'
import img401 from '@/assets/images/img401.png'
import img402 from '@/assets/images/img402.png'
import img403 from '@/assets/images/img403.png'
import img404 from '@/assets/images/img404.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Bold>第二种创建线程实例的方式：实现 Runnable 接口</Bold>
            </ParagraphWrapper>
            
            <ParagraphWrapper>
                <Blue>（1）定义子类，实现Runnable接口。</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img400]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Blue>（2）子类中重写Runnable接口中的run方法。</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img401]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Blue>（3）通过Thread类含参构造器创建线程对象。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>（4）将Runnable接口的子类对象作为实际参数传递给Thread类的构造器中。</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img402]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Blue>（5）调用Thread类的start方法：开启线程，调用Runnable子类接口的run方法。</Blue>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img403]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    使用这种方式创建线程实例有一个好处，假设我们要用同样的 run 方法体，同时执行多个线程。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                如果是用之前的“基础 Thread 类”的做法，那么，多创建一个线程，就需要 new 一个线程实例。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    而如果使用“实现 Runnable 接口”的做法，那么可以共用同一个 线程实例，不用多次 new 线程实例。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>如下图：</ParagraphWrapper>

            <ImagesGroup
                srcArr={[img404]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>new 一个实例对象，可以反复多次使用。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>另外，这种方式还有一个好处：避免了单继承的局限性。</Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module