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

import img247 from '@/assets/images/img247.png'
import img248 from '@/assets/images/img248.png'
import img249 from '@/assets/images/img249.png'
import img250 from '@/assets/images/img250.png'
import img251 from '@/assets/images/img251.png'
import img252 from '@/assets/images/img252.png'
import img253 from '@/assets/images/img253.png'
import img254 from '@/assets/images/img254.png'
import img255 from '@/assets/images/img255.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Green><Dot color="rgb(82, 196, 26)"></Dot> == 是运算符，可以比较 基本类型 和 引用类型。而 equals 是方法，只能比较引用类型。</Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green><Dot color="rgb(82, 196, 26)"></Dot> == 在比较基础类型的时候，进行的是数值比较，无论类型（之间会自动进行数值类型提升，然后拿提升后的数值进行对比）。</Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green><Dot color="rgb(82, 196, 26)"></Dot> == 比较的是引用数据类型的变量的时候，比较的是两个对象的 地址值 是否相同。换句话说，即比较两个引用，是否指向同一个对象实体。</Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green><Dot color="rgb(82, 196, 26)"></Dot> equals 在子类没有重写的情况下，比较结果和 == 是一样的（因为 Object 类中的 equals 方法，使用的就是 == 运算符进行比较的）。除非重写，类似 String 类。</Green>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>我们来回顾一下之前 == 运算符的知识（其实之前也没怎么仔细讲）。</ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    首先要知道的是， == 是一个 “运算符”，而 equals 是一个方法。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                那么 <Blue>== 作为一个运算符</Blue>，可以用在 <Blue>基础类型</Blue> 和 <Blue>引用类型</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>== 用在基础类型的比较的时候，就是比较值是否相等。</Red>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img247]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Red>从上面的代码可以看出，对于基础类型 ，== 只是比较值的相等，而不管数据类型。</Red>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img248]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后再回顾一下，上面的代码，<Red>char 类型 和 其它数值类型的比较，会先把 char 类型转为数值类型（上面就是先把小写 a 转为了数值 97了）</Red>，char 转成数值之后的 == 对比，也是不看数据类型的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                记得留意一下，char 类型的赋值，不只可以赋给 “单引号包裹的单个字符”，还可以是 “不带单引号的数值”，所以你给一个 char 类型赋值为字符 “a” ，和赋值为 “97”，是完全对等的。像 char a = 'a'; 和 char a = 97; 是对等的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                == 运算符 在比较引用类型的时候，对比的是两个引用类型在内存中的地址是否一样。即是“是否是同一个”，而不是“是否是同一类”。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img249]}
            ></ImagesGroup>

            <ParagraphWrapper></ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                看完了 == 运算符，我们来看看 equals 方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    文档中，对于 equals 方法的解释是：“对比两个对象是否相等”。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                文档中这句话比较含糊，下面我们展开来说一下。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先在 == 的 实例代码中，再加上两行 ，使用 equals 方法进行比较。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img250]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后发现，结果居然和 == 运算符是一样的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                但是如果比较的是两个相同的字符串，使用 equals 比较得到的结果，却又是 true。看下面代码
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img251]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>答案就是：当我们调用自己定义的类的时候，调用的其实是它的父类 Object 中的 equals 方法，而当我们调用 String 类的 equals 方法的时候，调用的其实是 String 类重写的 equals 方法（也就是多态）。</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img252]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>我们在 idea 按住 alt 加鼠标左键，点进去看看我们自己定义的，没有重写 equals 方法的类中的 equals 方法，就可以来到 Object 中的 equals 体中，如上图</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    可以发现，未重写的 equals 方法，用的就是 == 运算符进行比较的，即对比的是地址值是否相同。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>像 字符串类 String、时间 Date 、文件类 File 、包装类 等，这些类都重写了 equals 方法。重写了以后，对比的就是“实体内容”是否相同，比如时间，就比较时间毫秒值是否相同。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                接下来，我们可以尝试重写我们自己定义的类 Circle 的 equals 方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img253]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先，我们要知道重写 equals 有上面这些原则。然后我们下面上代码
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img254]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面这个是我自己的代码，主要是判断传入对象是否是null，或者不在 Circle 类的原型链上，是的话就返回false，不然就是比较熟悉 Radius 的值。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面上老师代码比较下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img255]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module