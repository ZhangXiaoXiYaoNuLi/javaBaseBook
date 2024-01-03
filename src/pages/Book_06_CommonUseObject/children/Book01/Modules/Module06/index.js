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

import img491 from '@/assets/images/img491.png'
import img492 from '@/assets/images/img492.png'
import img493 from '@/assets/images/img493.png'
import img494 from '@/assets/images/img494.png'
import img495 from '@/assets/images/img495.png'
import img496 from '@/assets/images/img496.png'
import img497 from '@/assets/images/img497.png'
import img498 from '@/assets/images/img498.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                {`回顾 String 与 基本数据类型包装类的转换`}
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot><Bold>String 转化为 基础数据类型 / 包装类</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>做法：调用包装类的静态方法：parseXXX(str)</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img491]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot><Bold>基础数据类型 / 包装类 转化为 String</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>做法：调用 String 重载的 valueOf(xxx) 方法</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img492]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>当然，我们也可以使用 + 号，连接上一个空字符串的做法，这种做法更方便更常用</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                {`String与char[]之间的转换`}
            </SmallTitle>

            <ParagraphWrapper>
                <Blue>可以使用 String 对象中的 <Red>toCharArray</Red> 方法，将 String 字符串 转为 char 类型的数组</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img493]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>反过来，将 char 类型的数组，转化为 String 类型，也很简单，只要调用 String 类型的构造器就可以了。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img494]}
            ></ImagesGroup>

            <ParagraphWrapper>
                一般情况下，都是先把 String 转为 Char 型数组，然后进行算法操作，然后再转化回来的，这样用的。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                {`String与byte[]之间的转换`}
            </SmallTitle>

            <ParagraphWrapper>
                String 与 字节 型数组之间的转换，在后面讲到 io流 的时候，就会实际应用到。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>先来看看怎么把 String 转为 byte 数组：</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img495]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>使用 String 对象的 <Red>getBytes</Red> 方法，将 String 字符串 转为 byte 型数组。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                可以观察到输出的结果，显然 97 对应的就是 小写字母 a，其它的类似。这里使用的是默认的字节编码转的。下面我们可以尝试使用中文来转转看：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img496]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先我们要知道这俩中文，是没有对应的 阿斯克码 的，但是输出并没有报错，而且发现字节数和字符数，不是一一对应的关系了，而是一个中文，对应三个 字节。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这是因为，我们当前的 java 程序使用的是 utf-8 的编码，其中一个中文，对应的就是 三个 字节。而这里的转换，是使用系统的默认编码集进行转换的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>那么，怎么使用给定的 编码集 进行 String 转 byte 数组呢？使用 getBytes 方法的参数：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>（没写参数的 getBytes 方法，就是是使用默认的字符编码集进行转换）</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img497]}
            ></ImagesGroup>

            <ParagraphWrapper>
                注意到输出结果已经变了，还有是这里要记得抛异常，不然编译错误，是为了防止参数填入了不认识的字符集名称。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>另外我们可以注意到，不管是使用默认的 utf-8 ，还是 gbk 转字符串，在像 abcd 这些字母数字的时候，得到的结果都是一样的。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>还有是，gbk 对于中文的编码，只有两位字节，这里就涉及到“编码”还有“解码”的知识，暂时不细讲。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>将 字节 型数组转为 字符串类型，只要使用 String 对象 的构造器就行：</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img498]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>构造器的第二个参数，是解码的 字符集。如果不写第二个参数的话，就会使用默认的编码集进行解码，可能会出现乱码。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                在平常的开发中，出现乱码的原因，就是编码与解码的字符集不一致导致的。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module