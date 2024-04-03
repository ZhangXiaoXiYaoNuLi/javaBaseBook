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

import img655 from '@/assets/images/img655.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                <span>在之前的学习中，我们的数据存储都是在内存中的，一旦关闭程序或者关闭电脑，数据也就抹除了，现在我们想要做一些“持久化”的存储，输出一些比如 txt 文档 jpg 图片、视频等等的东西</span>
                <span>保存在电脑硬盘中，所以就涉及到了 io流 的使用。</span>
                <span>而这里要说的 File 类，则是作为 io流 使用的“端点”，通俗来讲，就是 “从哪读取，写入到哪去的位置” 的控制。</span>
            </P>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P><Dot></Dot>java.io.File类：文件和文件目录路径的抽象表示形式，与平台无关。</P>
            <P><Dot></Dot>File 能新建、删除、重命名文件和目录，但 File 不能访问文件内容本身。如果需要访问文件内容本身，则需要使用输入/输出流（io流）。</P>
            <P><Dot></Dot>想要在Java程序中表示一个真实存在的文件或目录，那么必须有一个File对象，但是Java程序中的一个File对象，可能没有一个真实存在的文件或目录。</P>
            <P><Dot></Dot><Blue>File对象可以作为参数传递给流的构造器</Blue>。</P>

            <ComLine></ComLine>

            {/* 
                 public File(String pathname)
                以pathname为路径创建File对象，可以是绝对路径或者相对路径，如果
                pathname是相对路径，则默认的当前路径在系统属性user.dir中存储。
                 绝对路径：是一个固定的路径,从盘符开始
                 相对路径：是相对于某个位置开始
                 public File(String parent,String child)
                以parent为父路径，child为子路径创建File对象。
                 public File(File parent,String child)
                根据一个父File对象和子文件路径创建File对象
            */}

            <P>
                <Bold>常用构造器：</Bold>
            </P>
            <P>
                <Dot color="black"></Dot><Bold>{`public File(String pathname)`}</Bold>
            </P>
            <P>
                以pathname为路径创建File对象，可以是绝对路径或者相对路径，如果pathname是相对路径，则默认的当前路径在系统属性user.dir中存储。
            </P>
            <P>
                <Bold>绝对路径：</Bold>是一个固定的路径,从盘符开始。
            </P>
            <P>
                <Bold>相对路径：</Bold>是相对于某个位置开始。
            </P>
            <P><Dot color="black"></Dot><Bold>{`public File(String parent,String child)`}</Bold></P>
            <P>以parent为父路径，child为子路径创建File对象。</P>
            <P><Dot color="black"></Dot><Bold>{`public File(File parent,String child)`}</Bold></P>
            <P>根据一个父File对象和子文件路径创建File对象。</P>

            <ComLine></ComLine>

            <P>
                <Bold>关于路径分隔符：</Bold>
            </P>

            {/* 
                 路径中的每级目录之间用一个路径分隔符隔开。
                 路径分隔符和系统有关：
                 windows和DOS系统默认使用“\”来表示
                 UNIX和URL使用“/”来表示
                 Java程序支持跨平台运行，因此路径分隔符要慎用。
                 为了解决这个隐患，File类提供了一个常量：
                public static final String separator。根据操作系统，动态的提供分隔符。
                 举例
            */}

            <P>
                <Dot></Dot>路径中的每级目录之间用一个路径分隔符隔开。
            </P>
            <P>
                <Dot></Dot>路径分隔符和系统有关：
            </P>
            <P>（1）windows和DOS系统默认使用“\”来表示。</P>
            <P>（2）UNIX和URL使用“/”来表示。</P>
            <P>
                <Dot></Dot><Blue>Java程序支持跨平台运行，因此路径分隔符要慎用</Blue>。
            </P>
            <P>
                <Dot></Dot>为了解决不同平台路径分隔符识别不一致的隐患，File 类提供了一个常量：<Blue>public static final String separator</Blue>。根据操作系统，<Blue>动态提供分隔符</Blue>。
            </P>
            <P>
                示例：
            </P>
            <ImagesGroup
                srcArr={[img655]}
            ></ImagesGroup>

            <P>
                另外，在上面示例中，第一个实例化，我们可以看到 <Blue>“\\” 这样的两个右斜杠，是因为在 java 中，单个右斜杠具有“转义”的意思</Blue>，为了标识这个是个“纯粹的右斜杠”，所以前面还得再加一个右斜杠。
            </P>
            
        </div>
    </>)
}

export default Module