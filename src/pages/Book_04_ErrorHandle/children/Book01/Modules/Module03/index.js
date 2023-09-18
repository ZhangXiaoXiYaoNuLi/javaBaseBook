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


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                在编写程序时，经常要在可能出现错误的地方加上检测的代码，
                如进行x/y运算时，要检测分母为0，数据为空，输入的不是数据
                而是字符等。过多的if-else分支会导致程序的代码加长、臃肿，
                可读性差。因此采用异常处理机制。
            */}
            <ParagraphWrapper>
                在编写程序时，经常要在可能出现错误的地方加上检测的代码，如进行x/y运算时，要检测分母为0，数据为空，输入的不是数据而是字符等。<Blue>过多的if-else分支会导致程序的代码加长、臃肿，可读性差。因此采用异常处理机制。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>
            
            <ParagraphWrapper>
                java中有两种异常处理的方式：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>try-catch-finally</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>throw + 异常类型</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    这里举个栗子，假设你有感冒发烧的症状，然后就需要到区级的医院治疗。治好了，那么你“自己去医院治疗”这件事，就是 try-catch-finally。
                </Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    但是区级医院发现你得的是传染病，区医院解决不了，得转移到市医院，那么“把你转移给市医院”，就是 throw 异常，然后市医院发现你得的是新型变种的传染病，需要给更高级别的医院处理。那么就会继续“throw”。直到没有更高级的医院。而对应到程序中，就是不断 throw 到 main 方法中，然后程序终止。
                </Green>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module