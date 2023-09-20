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

import img394 from '@/assets/images/img394.png'
import img395 from '@/assets/images/img395.png'
import img396 from '@/assets/images/img396.png'
import img397 from '@/assets/images/img397.png'
import img398 from '@/assets/images/img398.png'
import img399 from '@/assets/images/img399.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                关于线程的调度：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img394]}
            ></ImagesGroup>

            <ParagraphWrapper>
                额。。不用太纠结
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    说明：高优先级的线程要抢占低优先级线程cpu的执行权。<Red>但是只是从概率上讲，高优先级的线程高概率的情况下被执行。并不意味着只有当高优先级的线程执行完以后，低优先级的线程才执行。一般情况下，都是互相穿插执行的。</Red>
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                关于优先级，以及调度：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img395]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    Java中的优先级一共有 10 档（当然了，只有其中的三档，有对应的常量名称，如果想设置其它优先级，只能是设置像数字 7 、8 ... 这样），涉及了上图中的几个常量。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img396]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，这三个常量，是定义在 Thread 类中的。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面上代码，看看如何获取线程优先级，以及设置优先级：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img397]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里我们使用 getPriority 方法获取当前执行线程的优先级。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img398]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到控制台中，输出了 int 类型的 5 。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后，我们尝试一下设置优先级，在 i 的值到一定值之后，将优先级的值，设置为 10 。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img399]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，在 i 为 26 的时候，输出的优先值的数值，已经变为了 10 。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module