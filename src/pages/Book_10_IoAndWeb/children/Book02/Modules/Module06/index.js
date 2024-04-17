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
    Tp,
} from '@/components/index.js'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        > 
            <P>
                <Dot></Dot>{`RandomAccessFile 声明在java.io包下，但直接继承于java.lang.Object类。并且它实现了DataInput、DataOutput这两个接口，`}也就意味着<Blue>这个类既可以读也可以写</Blue>。
            </P>
            <P><Dot></Dot>RandomAccessFile 类支持 “随机访问” 的方式，程序可以直接跳到文件的任意地方来读、写文件</P>
            <P><Tp></Tp>支持只访问文件的部分内容。</P>
            <P><Tp></Tp>可以向已存在的文件后追加内容。</P>
            <P><Dot></Dot>RandomAccessFile 对象包含一个记录指针，用以标示当前读写处的位置。RandomAccessFile 类对象可以自由移动记录指针：</P>
            <P><Tp></Tp><Red>ong getFilePointer()</Red>：<Blue>获取文件记录指针的当前位置</Blue>。</P>
            <P><Tp></Tp><Red>void seek(long pos)</Red>：<Blue>将文件记录指针定位到 pos 位置</Blue>。</P>
            <ComLine></ComLine>
            {/* 
                构造器
                public RandomAccessFile(File file, String mode) 
                public RandomAccessFile(String name, String mode)

                创建 RandomAccessFile 类实例需要指定一个 mode 参数，该参数指
                定 RandomAccessFile 的访问模式：
                r: 以只读方式打开
                rw：打开以便读取和写入
                rwd:打开以便读取和写入；同步文件内容的更新
                rws:打开以便读取和写入；同步文件内容和元数据的更新

                 如果模式为只读r。则不会创建文件，而是会去读取一个已经存在的文件，
                如果读取的文件不存在则会出现异常。 如果模式为rw读写。如果文件不
                存在则会去创建文件，如果存在则不会创建。
            */}
            <P><Dot></Dot><Bold>构造器</Bold></P>
            <P><Tp></Tp><Blue>public RandomAccessFile(File file, String mode) </Blue></P>
            <P><Tp></Tp><Blue>public RandomAccessFile(String name, String mode)</Blue></P>
            <P>上面两个构造器的第二个参数 mode 意思就是读写的权限规定字符串。</P>
            <ComSpace></ComSpace>
            <P><Dot></Dot>创建 RandomAccessFile 类实例需要指定一个 <Blue>mode 参数</Blue>（其实就是上面俩构造器的第二个参数），该参数指定 RandomAccessFile 的访问模式：</P>
            <P><Tp></Tp><Red>r：以只读方式打开。</Red></P>
            <P><Tp></Tp><Red>rw：打开以便读取和写入。</Red></P>
            <P><Tp></Tp><Red>rwd：打开以便读取和写入；同步文件内容的更新。</Red></P>
            <P><Tp></Tp><Red>rws：打开以便读取和写入；同步文件内容和元数据的更新。</Red></P>
            <ComSpace></ComSpace>
            <P><Dot></Dot>如果模式为只读r。则不会创建文件，而是会去读取一个已经存在的文件，如果读取的文件不存在则会出现异常。 如果模式为rw读写。如果文件不存在则会去创建文件，如果存在则不会创建。</P>
        </div>
    </>)
}

export default Module