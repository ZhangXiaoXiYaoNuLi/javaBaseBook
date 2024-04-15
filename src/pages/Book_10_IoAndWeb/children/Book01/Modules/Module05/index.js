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

import img672 from '@/assets/images/img672.png'
import img673 from '@/assets/images/img673.png'
import img674 from '@/assets/images/img674.png'
import img675 from '@/assets/images/img675.png'
import img676 from '@/assets/images/img676.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                下面来看看如何写入文本：
            </P>
            <ImagesGroup
                srcArr={[img672]}
            ></ImagesGroup>
            <P>
                上代码：
            </P>
            <ImagesGroup
                srcArr={[img673]}
            ></ImagesGroup>
            结果：
            <ImagesGroup
                srcArr={[img674]}
            ></ImagesGroup>
            <P>可以看到，之前的文本 “hello zhangxiaoxi” 被覆盖了，替换成了后来写入的 “测试写入文件啊”。</P>
            <P>如果不想是  <Blue>覆盖</Blue>，而是 <Blue>追加</Blue>的话，其实可以在实例化 FileWhriter 的时候，在构造函数参数中传入第二个参数为 <Blue>true</Blue>。</P>
        
            <ImagesGroup
                srcArr={[img675]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <P>这里使用写入写出流，实现一个<Bold>文本的复制功能</Bold>：</P>

            <P>上代码</P>
            <ImagesGroup
                srcArr={[img676]}
            ></ImagesGroup>

            <P><Bold>这里尤其要注意的是，如果读取的流忘记 close 关闭，可能看不出影响，但是写入流的 close 如果忘记关闭，会得不到最终的效果。（实际是会创建 test2.txt 文件，但是写入的内容会没有）所以在 finilly 中，记得 close。</Bold></P>

            <ComLine></ComLine>

            {/* 
                 字符流操作字符，只能操作普通文本文件。最常见的文本文
                件：.txt，.java，.c，.cpp 等语言的源代码。尤其注意.doc,excel,ppt这些不是文
                本文件。
            */}
            <SmallTitle>
                节点流（或文件流）注意点：
            </SmallTitle>
            <P>
                <Dot></Dot>定义文件路径时，注意：可以用“/”或者“\\”。
            </P>
            <P><Dot></Dot>在写入一个文件时，如果使用构造器 <Blue>FileOutputStream(file)</Blue>，<Blue>则目录下有同名文件将被覆盖</Blue>。</P>
            <P><Dot></Dot>如果使用构造器 <Blue>FileOutputStream(file,true)</Blue>，<Blue>则目录下的同名文件不会被覆盖，在文件内容末尾追加内容</Blue>。</P>
            <P><Dot></Dot>在<Blue>读取</Blue>文件时，必须保证该文件已存在，否则报异常。在<Blue>写入</Blue>文件的时候，如果文件不存在，会自动创建，且不报异常。</P>
            <P><Dot></Dot>字节流操作字节，比如：.mp3，.avi，.rmvb，mp4，.jpg，.doc，.ppt</P>
            <P><Dot></Dot>字符流操作字符，只能操作普通文本文件。最常见的文本文件：.txt，.java，.c，.cpp 等语言的源代码。尤其<Blue>注意.doc,excel,ppt这些不是文本文件</Blue>。</P>
            <P><Dot></Dot><Blue>注意如果写入操作，没有最终 close 的话，实际写入是不会生效 的</Blue></P>
        </div>
    </>)
}

export default Module