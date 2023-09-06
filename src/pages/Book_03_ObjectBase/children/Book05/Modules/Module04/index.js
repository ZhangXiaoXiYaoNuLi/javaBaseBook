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

import img231 from '@/assets/images/img231.png'
import img232 from '@/assets/images/img232.png'
import img233 from '@/assets/images/img233.png'
import img234 from '@/assets/images/img234.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <Bold>
                问题一：
            </Bold>
            
            <ParagraphWrapper>
                首先创建一个 Base 类， 然后用 Sub 类继承 Base 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img231, img232]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后在 main 方法中：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img233]}
            ></ImagesGroup>

            <ParagraphWrapper>
                输出结果是：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img234]}
            ></ImagesGroup>

            <ParagraphWrapper>
                答案只有这个 == 号的比较我猜错了。<Red>此时 == 符号在对比引用类型的时候，对比的是地址值，上面的代码中 s 是栈空间中一个保存了 对象地址值的 变量，在 Base b = s; 这一步之后，b 保存的内存地址值，也就和 s 一样了，所以 == 对比为 true</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    这里关于 == 符号对于引用类型的对比，不用太纠结，后面会具体总结 == 和 equals 方法的比对相关知识。
                </Green>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <Bold>
                问题二：
            </Bold>

            <ParagraphWrapper>
                
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module