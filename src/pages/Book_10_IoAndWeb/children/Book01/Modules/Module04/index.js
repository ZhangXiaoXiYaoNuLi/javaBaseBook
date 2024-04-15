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

import img668 from '@/assets/images/img668.png'
import img669 from '@/assets/images/img669.png'
import img670 from '@/assets/images/img670.png'
import img671 from '@/assets/images/img671.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                作为 Reader （字符输入流）的典型实现，我们来测试 主要常用的 read 方法的 3 个重载：
            </P>
            <ImagesGroup
                srcArr={[img670]}
            ></ImagesGroup>
            <P>
                下面上代码
            </P>
            <P>
                首先，我们在 f 盘中，创建一个 test.txt 文件，并在里面保存 “hello zhangixaoxi”：
            </P>
            <ImagesGroup
                srcArr={[img668]}
            ></ImagesGroup>
            <P>
                然后我们在代码中，尝试读取这个文件中的字符数据：
            </P>
            <ImagesGroup
                srcArr={[img669]}
            ></ImagesGroup>
            <P>从上面的代码中，我们可以知道:</P>
            <P>
                <Dot></Dot>我们调用的三次 read 方法，都是取了 “hello zhangxiaoxi” 这个字符串中的其中一截，每次执行都是从上一个 read 方法取走的数据后开始的。
            </P>
            <P><Dot></Dot>read 方法无参执行的时候，获取的是取单个字符的编码值（int类型）。</P>
            <P><Dot></Dot><Bold>另外就是，这里我们到最后忘记调用 close 方法，关闭文件流了。</Bold></P>
            <ComLine></ComLine>
            <P><Dot></Dot>下面来个读取文本的标准写法：</P>
            <ImagesGroup
                srcArr={[img671]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module