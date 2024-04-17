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
            {/* 
                 实现了Serializable接口的对象，可将它们转换成一系列字节，并可在以后
                完全恢复回原来的样子。这一过程亦可通过网络进行。这意味着序列化机
                制能自动补偿操作系统间的差异。换句话说，可以先在Windows机器上创
                建一个对象，对其序列化，然后通过网络发给一台Unix机器，然后在那里
                准确无误地重新“装配”。不必关心数据在不同机器上如何表示，也不必
                关心字节的顺序或者其他任何细节。
                 由于大部分作为参数的类如String、Integer等都实现了
                java.io.Serializable的接口，也可以利用多态的性质，作为参数使接口更
                灵活。
            */}
            <P>
                <Dot></Dot><span>
                    {`实现了Serializable接口的对象，可将它们转换成一系列字节，并可在以后完全恢复回原来的样子。这一过程亦可通过网络进行。这意味着序列化机制能自动补偿操作系统间的差异。换句话说，可以先在Windows机器上创建一个对象，对其序列化，然后通过网络发给一台Unix机器，然后在那里准确无误地重新“装配”。不必关心数据在不同机器上如何表示，也不必关心字节的顺序或者其他任何细节。`}
                </span>
            </P>
            <P><Dot></Dot><span>
                {`由于大部分作为参数的类如String、Integer等都实现了java.io.Serializable的接口，也可以利用多态的性质，作为参数使接口更灵活。`}</span></P>
        </div>
    </>)
}

export default Module   