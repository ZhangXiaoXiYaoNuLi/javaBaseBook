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

import img680 from '@/assets/images/img680.png'
import img681 from '@/assets/images/img681.png'
import img682 from '@/assets/images/img682.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>首先，我们测试下使用 <Bold>FileInputStream 读取文本数据</Bold></P>
            <P>上代码</P>
            <ImagesGroup
                srcArr={[img680]}
            ></ImagesGroup>
            <P><Bold>使用字节流FileInputStream处理文本文件，<Blue>可能</Blue>出现乱码。</Bold></P>
            <P>出现乱码，是因为英文字母的话，在编码集来看是一个字节存的，而中文呢，则是几个字节存的（ASCII码2字节、UTF-8是3字节、Unicode是2字节）<span>
                所以，我们的读取数组一次是读5个，有可能会“将一个字的几个字节”截断。从而出现乱码。
                </span></P>
            <P><Bold>反之，用字符流去读取像图片、视频这种文件也是不行的。</Bold></P>

            <ComLine></ComLine>

            <SmallTitle>下面我们用 字节流 来实现一个图片的复制粘贴</SmallTitle>
            <P>就直接上代码：</P>
            <ImagesGroup
                srcArr={[img681]}
            ></ImagesGroup>
            <P>还是要注意，输出流一定要 close ，不然不会真实输出文件。</P>
            <P>代码执行后，可以看到，成功复制出了一张新的图片“派大星2.jpg”</P>
            <ImagesGroup
                srcArr={[img682]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module