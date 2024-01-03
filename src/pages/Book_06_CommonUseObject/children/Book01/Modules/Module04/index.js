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

import img479 from '@/assets/images/img479.png'
import img480 from '@/assets/images/img480.png'
import img481 from '@/assets/images/img481.png'
import img482 from '@/assets/images/img482.png'
import img483 from '@/assets/images/img483.png'
import img484 from '@/assets/images/img484.png'
import img485 from '@/assets/images/img485.png'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                先来看一个 demo ，下面是几个字符串，以及相互拼接之后的对比。（<Blue>当然这里我们使用的是 == 比较，如果是 equals ，那就没意思了，肯定全是 true，因为 equals 被重写过，比较的是字符串的内容。而 == 比较的是地址值</Blue>）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img479]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，第一个的结果是 true，后续的比较结果是 false。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先来看 s3 和 s4 的比较，结果是 true，原因是：<Red>常量池中的两个常量相加，结果还是在常量池中，且常量池中不会存在相同内容。所以两个相同内容的常量字符串地址相同</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后来看 s3 和 s5 的比较，结果是 false，原因是：<Red>在字符串拼接中，只要有一个是“变量”，也就是 “堆” 中的指针指向常量池 的那种，那么结果就在 “堆” 中，所以这里是 “堆” 中的地址，和常量池中的地址比较，结果当然是 false</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                s3 和 s6 的比较结果是 false ，原因同上。
            </ParagraphWrapper>

            <ParagraphWrapper>
                接着，我们来看 s5 和 s6 的比较结果，是 false ，原因是：<Red>一连串的字符串相加，最终的地址，决定于最后一个“变量”的地址值</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                另外提一点,<Red>{`如果拼接的结果调用intern()方法，返回值就在常量池中`}，也就是说，如果使用 intern 方法，那么可以获取 字符串对象指向的 常量池里的字符串 本身，而不会获取 堆 空间中的 指针</Red>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img480]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>上面的 demo，可以看到，原先 s5 和 s6 直接比对的结果是 false，但是在 s5 和 s6 都使用了 intern 方法转化后，对比结果为 true，因为已经转为 常量池中两个相同常量的比较。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面我们来看一道面试题：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们来创建一个 StringTest 类型：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img483]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们在 main 方法中运行其中的 change 方法，下面是运行结果：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img484]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，引用类型的字符串，在方法内修改了之后，在方法内发生了改变，但是来到方法外，没有改变。而 基础类型的字符串 在方法内发生改变了之后，方法外的值也发生了改变。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里考察的，其实是方法的值传递，只不过这里涉及到字符串了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                之前我们说过，方法中的值传递，基础类型的是值的传递，对象类型的是地址的传递。之前说过的两个结论，其中一个是：“引用类型的方法传参，方法改变了值，那么引用类型的值会改变”，其实是错的，这里就是一个例子<Blue>（因为字符串是个例外，不可变性嘛，所以得具体分析看看是不是字符串）</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>String字符串的内容其实是可变的，但要通过特殊手段进行实现，不可改变的是String字符串对象的地址。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我们可以去看看 String 类的源码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img485]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到 String 类中有两个成员变量，<Blue>实际上String对象内表示的字符串实际上就是一个字符数组存储的</Blue>,故创建一个String对象 还会创建一个字符数组对象,<Blue>字符串内容即每个字符都存放在字符数组对象内,然后被value数组引用接受</Blue>,故value数组是用来存放字符串内容的。而hash变量其涉及到字符串常量池 初始化默认值是0 ,
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>因为 value 被 final 修饰则实例化完后 value 可以看成是一个常量.即其对字符数组对象的指向不能再被更改,但是 value 指向的字符数组的内容仍然可以被修改。</Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module