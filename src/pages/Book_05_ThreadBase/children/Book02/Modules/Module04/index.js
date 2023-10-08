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

import img430 from '@/assets/images/img430.png'
import img431 from '@/assets/images/img431.png'
import img432 from '@/assets/images/img432.png'
import img433 from '@/assets/images/img433.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                首先，我们来回忆一下，何为“懒汉式的单例模式”
            </ParagraphWrapper>

            <ParagraphWrapper>
                直接上代码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img430]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实所谓懒汉式，就是不第一次调用，就不会创建实例对象。然后我们可以到 main 方法中，验证一下是否获取的是同一个对象。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img431]}
            ></ImagesGroup>

            <ParagraphWrapper>
                那么这里为啥会出现线程安全问题呢？就是因为这里创建实例的时候，是要判断是否已经有实例的，如果在上一次 new 的过程中（假设过程很长），再次调用 获取实例的方法，然后开启了另一个 new 实例的线程。就会出现线程安全问题。
            </ParagraphWrapper>

            <ParagraphWrapper>
                那么如何解决这个线程安全问题？
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面上代码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img432]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实就是使用“同步代码块”，对创建实例对象的代码进行包裹。但这是一种效率相对较低的写法。我们如果是把对实例有无的判断，放到代码块的外面，效率会更高。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img433]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实很好理解，就是如果判断到已经有实例了，那么就直接取走，而不用线程等待再去判断。这里看似是重复判断了，但是在已经创建了实例之后，如果多次重复地去调用方法获取实例，还要进行线程等待，一个判断执行之后再执行下一个判断，即“单线程”地去执行，就很浪费时间了。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module