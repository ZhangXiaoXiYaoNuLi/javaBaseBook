import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper as P,
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

import img687 from '@/assets/images/img687.png'
import img688 from '@/assets/images/img688.png'
import img689 from '@/assets/images/img689.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            <SmallTitle>转换流概述</SmallTitle>
            <P><Dot></Dot><Blue>转换流提供了在字节流和字符流之间的转换。</Blue>转换流其实也是处理流的一种，也就是我们讲到的第二种处理流。</P>

            <P><Bold>（可以这样理解，程序外部的数据流动，是字节的，即0101这样的，但是来到程序内部之后，却要转为可读的字符，所以在 <span>
                    “进入程序” 和 “离开程序” 两个过程中，就有两种转换，一种是在 “进入程序过程” 中，将 字节流输入 转为 字符输入，<span>
                        另一种是在 “离开程序过程” 中，将 字符输出 转为 字节输出。）
                    </span>
                </span></Bold></P>
            <P>换一种说法，就是输入的时候是一个个的 byte 数组，我们想接收的是一个个的 char 数组，还有输出的时候，已经被转成一个个 char 数组了，却想按原样，一个个的 byte 数组输出。<span>
                    这个时候，就需要使用转换流。
                </span></P>
                <P>上面所说的过程，可以理解为是一个<Blue>编码</Blue>（字符 转成 易于传输的字节），<Blue>解码</Blue>（字节 转成 可读的字符）的过程</P>

            <P><Dot></Dot>Java API提供了两个转换流：</P>
            <P>
                （1）<Blue>InputStreamReader</Blue>：<Blue>将InputStream转换为Reader</Blue>。
            </P>
            <P>
                （2）<Blue>OutputStreamWriter</Blue>：<Blue>将Writer转换为OutputStream</Blue>。
            </P>
            <P><Dot></Dot>字节流中的数据都是字符时，转成字符流操作更高效。</P>
            <P><Dot></Dot><Blue>很多时候我们使用转换流来处理文件乱码问题</Blue>。<Blue>实现编码和解码的功能</Blue>。</P>

            <ComLine></ComLine>

            {/* 
                InputStreamReader
                 实现将字节的输入流按指定字符集转换为字符的输入流。
                 需要和InputStream“套接”。
                 构造器
                 public InputStreamReader(InputStream in)
                 public InputSreamReader(InputStream in,String charsetName)
                如： Reader isr = new InputStreamReader(System.in,”gbk”); // 其中 gbk 为指定字符串。
            */}

            <SmallTitle>InputStreamReader</SmallTitle>
            <P><Dot></Dot><Bold>实现将字节的输入流按指定字符集转换为字符的输入流。</Bold></P>
            <P><Dot></Dot>需要和 InputStream “套接”。</P>
            <P><Dot></Dot>构造器：</P>
            <P>（1）<Bold>{`public InputStreamReader(InputStream in)`}</Bold></P>
            <P>（2）<Bold>{`public InputSreamReader(InputStream in,String charsetName)`}</Bold></P>
            <P>{`如： Reader isr = new InputStreamReader(System.in,”gbk”);  // 其中 gbk 为指定字符串。`}</P>

            <ComLine></ComLine>

            <SmallTitle>OutputStreamWriter</SmallTitle>
            <P><Dot></Dot><Bold>实现将字符的输出流按指定字符集转换为字节的输出流。</Bold></P>
            <P><Dot></Dot>需要和 OutputStream “套接”。</P>
            <P><Dot></Dot>构造器：</P>
            <P>（1）<Bold>{`public OutputStreamWriter(OutputStream out)`}</Bold></P>
            <P>（2）<Bold>{`public OutputSreamWriter(OutputStream out,String charsetName)`}</Bold></P>

            <ComLine></ComLine>

            <P><Bold>测试 InputStreamReader 转换字节输入流：</Bold></P>

            <ImagesGroup
                srcArr={[img688]}
            ></ImagesGroup>

            <P>
                这里我们刻意使用字节流去读取文本文件，作为数据源测试。另外注意到 InputStreamReader 构造器的第二个参数，是编码集名称。
            </P>

            <ComLine></ComLine>

            <P><Bold>测试 InputStreamReader + OutputStreamWriter 实现编码集的转换（utf-8 转 gbk）：</Bold></P>
            <ImagesGroup
                srcArr={[img687]}
            ></ImagesGroup>
            <P>下面上代码：</P>
            <ImagesGroup
                srcArr={[img689]}
            ></ImagesGroup>
            <P>
                <Bold>实际上，两个转换流 InputStreamReader 和 OutputStreamWriter 其中 “包裹” 的内核流，都是 “字节流”。</Bold>
            </P>
            <P>
                也可以这么理解：本来是字节输入的，通过 InputStreamReader，可以不用 字节数组接收，而是使用 char 数组接收。
            </P>
            <P>
                而输出的时候，本来是使用 FileOutputStream 输出的，是输出字节流，但是通过 OutputStreamWriter 的 “包裹”，最终实际输出的是 “字符流”。
            </P>
        </div>
    </>)
}

export default Module