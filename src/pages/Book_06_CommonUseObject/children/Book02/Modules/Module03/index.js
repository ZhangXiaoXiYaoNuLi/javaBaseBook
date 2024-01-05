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

import img518 from '@/assets/images/img518.png'
import img519 from '@/assets/images/img519.png'
import img520 from '@/assets/images/img520.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                java.text.SimpleDateFormat类
            </SmallTitle>

            <ParagraphWrapper>
                <Bold>简介</Bold>：Date类的API不易于国际化，大部分被废弃了，<Blue>java.text.SimpleDateFormat类是一个不与语言环境有关的方式来格式化和解析日期（<Red>其实就是用来格式化和解析 Date 的</Red>）的具体类</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>用法</Bold>：可以从日期实例对象中，获取时间文本（也就是 <Blue>日期 转 文本</Blue>），也可以将文本转成对应时间的时间实例对象（也就是 <Blue>文本 转 日期</Blue>）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>格式化（构造器）：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                （1）<Blue>{`SimpleDateFormat()`}</Blue> ：默认的模式和语言环境创建对象。
            </ParagraphWrapper>

            <ParagraphWrapper>
                （2）<Blue>{`public SimpleDateFormat(String pattern)`}</Blue>： 该构造方法可以用参数 pattern 指定的格式创建一个对象
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>两个解析方法：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                （1）<Blue>{`public String format(Date date)`}</Blue>：方法格式化时间对象date。
            </ParagraphWrapper>

            <ParagraphWrapper>
                （2）<Blue>{`public Date parse(String source)`}</Blue>：从给定字符串的开始解析文本，以生成一个日期。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>上代码：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                测试一下空参构造，以及解析方法 format ：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img518]}
            ></ImagesGroup>
            <ParagraphWrapper>
                上面代码，可以看到输出了 中文字符串 的当前时间。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们再来试试
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img519]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里可以类比 moment 的 format 方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们继续看看 实例方法 <Bold>parse</Bold> 的使用：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img520]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以注意到，这个方法的使用，<Blue>必须抛出解析异常</Blue>，然后其实是有点<Blue>像 moment 根据字符串模版，还有时间字符串，获取记录时间的 moment 实例的（这里是获取 Date 实例）</Blue>。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module