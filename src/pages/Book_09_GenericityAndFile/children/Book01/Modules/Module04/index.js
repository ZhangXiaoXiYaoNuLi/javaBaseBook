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


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                泛型最常见于 DAO 层中。
            </P>
            <P>
                DAO 也就是一个 java 程序中。用于和数据库之间的数据操作，又叫做持久层。
            </P>
            <P>
                <Blue>
                    在这个 DAO 层中，封装了许多操作数据库的方法，比如最基础的增删改查。
                </Blue>
                <span>但是，问题是：比如新增库表的一条数据的时候，要知道<Blue>库表</Blue>可不止一个，<Blue>存储的数据对象字段也肯定是不一样的，但是我们却需要用同一个DAO的新增方法</Blue>，</span>
                <span><Blue>去往不同的库表中添加各种数据</Blue>。</span>
            </P>
            <P>
                此时，我们就需要泛型，去约束 DAO 中的各种方法。
            </P>

            <P>
                <Blue>总的来说，就是要针对不同的类型，进行统一的操作的时候，最好是使用泛型进行约束。</Blue>
            </P>


        </div>
    </>)
}

export default Module