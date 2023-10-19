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

import img466 from '@/assets/images/img466.png'
import img467 from '@/assets/images/img467.png'
import img468 from '@/assets/images/img468.png'
import img469 from '@/assets/images/img469.png'
import img470 from '@/assets/images/img470.png'
import img471 from '@/assets/images/img471.png'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                直接来个例子，首先我们定义了两个字符串 s1 和 s2 ，都是 abc，然后 s1 改赋值为 hello，然后输出 s1 和 s2 的值。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img466]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看出 s1 输出是 hello ，s2 输出是 abc。首先来看前面两句，我们是<Blue>直接使用 “ = "abc" ” 这样的方式进行赋值的，而不是使用 new 对象的方式。这种叫 “字面量赋值”</Blue>，你可能会奇怪，String 明明是个类，为啥<Blue>可以直接字面量赋值</Blue>，就是因为字符串是特殊的，只有 String 是这样的，<Blue>所以有些人会误以为 String 是基础类型</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                像这种字面量赋值的方式，首先我们来说个点，像上面代码中的，s1 和 s2，在内存中，其实用的是同一个。怎么证明呢？看下面代码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img467]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先，我们要知道，这里不是使用 equals 方法进行比较的（排除 String 类重写比较方法的可能），而是使用 == ，确实比较的就是内存中的地址值。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面来个内存示意图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img468]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看出，上面的代码 s1 和 s2 一开始的赋值，<Blue>指向的是同一个字符串 "abc"</Blue>，再到后面 s1 赋值为 hello ，才指向了另一个内存地址。（<Blue>当然，我们要知道这里是“字面量赋值”的情况</Blue>）
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以目前可以给出个结论：
                <Red>字面量赋值的字符串，都是存在于方法区-字符串常量池中的，</Red>
                另外，有一个重要的规则就是，
                <Red>字符串常量池中，不会存在两个相同的字符串。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                所以，<Blue>在 s2 赋值 abc 的时候，首先是去常量池中找，有没有 已有的 abc 的存在，有的话就让 s2 指向它</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后，我们再让 s1 = hello 的时候，是在常量池新建了一个 hello 然后把新地址值赋给了 s1，而不是让原地址值，指向修改了的 abc。这里也就体现了“字符串的不可变性”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>当对字符串重新赋值的时候，需要重新指定内存区域。不能使用原有的 {`value[]`} 进行改制。</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                当然，切记区分这里是“字面量赋值”，而不是 new 字符串实例。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面我再来一个代码例子：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img469]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>在原有的 "abc" 上，拼接了 "def"</Blue>，那么此时是在原有的 abc 上拼接了 def ，还是新建了一个 "abcdef" ? 答案<Blue>是新建了一个 abcdef ，原先的 abc 依然遵守 “不变性”。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                至于内存中怎么放，我们等下再说。
            </ParagraphWrapper>

            <ParagraphWrapper>
                我们来验证下，拼接后的 s1 不是原先的 abc 地址值了：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img470]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到 s1 在原有的内容上拼接新内容以后，指向的内存地址值发生了改变。从原先的指向 abc 变为指向新建的 abcdef。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                再来看下一个例子，关于字符串的 replace 方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img471]}
            ></ImagesGroup>

            <ParagraphWrapper>
                不难看出，这里 <Blue>replace 方法的作用，是将字符串中的全部 a 替换为 m</Blue>。那么是在 原字符串 上进行替换个别字符吗。并不是的。<Blue>得到的替换后的结果字符串，是另一个内存地址，原字符串依然保持不变</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                这里有个结论：<Red>不可变性，就是你对字符串的任何内容进行修改，都是新建动作，新造一个，原有的字符串总是保持不变</Red>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module