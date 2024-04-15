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

import img683 from '@/assets/images/img683.png'
import img684 from '@/assets/images/img684.png'
import img685 from '@/assets/images/img685.png'
import img686 from '@/assets/images/img686.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                <Dot></Dot><Red>为了提高数据读写的速度</Red><span>
                    Java API提供了带缓冲功能的流类，在使用这些流类时，会创建一个内部缓冲区数组，
                </span>
                <span><Blue>{`缺省使用8192个字节(8Kb)的缓冲区`}</Blue>。</span>
            </P>
            <ImagesGroup
                srcArr={[img683]}
            ></ImagesGroup>
            <P>
                <Dot></Dot>缓冲流要“套接”在相应的节点流之上，根据数据操作单位可以把缓冲流分为：
            </P>
            <P>（1）<Red>BufferedInputStream</Red> 和 <Red>BufferedOutputStream</Red></P>
            <P>（2）<Red>BufferedReader</Red> 和 <Red>BufferedWriter</Red></P>
            <P>
                <Dot></Dot>当读取数据时，数据按块读入缓冲区，其后的读操作则直接访问缓冲区。
            </P>
            <P><Dot></Dot>当使用BufferedInputStream读取字节文件时，BufferedInputStream会一次性从文件中读取8192个(8Kb)，存在缓冲区中，直到缓冲区装满了，才重新从文件中读取下一个8192个字节数组。</P>
            <P><Dot></Dot>向流中写入字节时，不会直接写到文件，先写到缓冲区中直到缓冲区写满，BufferedOutputStream才会把缓冲区中的数据一次性写到文件里。<Blue>使用方法 flush() 可以强制将缓冲区的内容全部写入输出流</Blue></P>
            <P><Dot></Dot>关闭流的顺序和打开流的顺序相反。只要关闭最外层流即可，关闭最外层流也会相应关闭内层节点流</P>
            <P><Dot></Dot> flush()方法的使用：手动将buffer中内容写入文件。</P>
            <P><Dot></Dot>如果是带缓冲区的流对象的close()方法，不但会关闭流，还会在关闭流之前刷新缓冲区，关闭后不能再写出。</P>

            <ImagesGroup
                srcArr={[img684]}
            ></ImagesGroup>

            <div style={{paddingBottom: '12px'}}></div>
            <ComLine></ComLine>
            <SmallTitle>缓冲流实现复制文本文件的实例</SmallTitle>

            <ImagesGroup
                srcArr={[img685]}
            ></ImagesGroup>

            <P>
                看代码很好理解，其实就是在之前的 FileReader 和 FileWriter 实例外面，再包裹一层 “构造函数”。
            </P>

            <ComLine></ComLine>
            <SmallTitle>缓冲流实现复制非文本文件的实例</SmallTitle>

            <ImagesGroup
                srcArr={[img686]}
            ></ImagesGroup>
            <P>和文本复制类似。</P>
        </div>
    </>)
}

export default Module