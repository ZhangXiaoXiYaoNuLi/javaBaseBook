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

import down from './images/down.png'

import img278 from '@/assets/images/img278.png'
import img279 from '@/assets/images/img279.png'
import img280 from '@/assets/images/img280.png'
import img281 from '@/assets/images/img281.png'
import img282 from '@/assets/images/img282.png'

const Module = (props) => {

    const [strArr, setStrArr] = useState([
        '声明成员变量的默认初始化',
        '显式初始化',
        '多个初始化块依次被执行（同级别下按先后顺序执行）',
        '构造器再对成员进行初始化操作',
        '通过”对象.属性”或”对象.方法”的方式，可多次给属性赋值',
    ])

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <div
                style={{
                    paddingLeft: '12px',
                    paddingTop: '32px',
                    paddingBottom: '32px',
                }}
            >
                {
                    strArr != null && strArr.length != null && !!strArr.length && strArr.map((item, index) => {
                        return <div>
                            <div>
                                <ParagraphWrapper>
                                    {item}
                                </ParagraphWrapper>
                            </div>
                            {
                                index != strArr.length - 1 && <div
                                    style={{
                                        paddingLeft: '60px'
                                    }}
                                >
                                    <img
                                        src={down}
                                        style={{
                                            width: '35px',
                                            marginBottom: '12px',
                                        }}
                                    ></img>
                                </div>
                            }
                        </div>
                    })
                }

                <ComLine></ComLine>

                <ParagraphWrapper>
                    下面代码是定义了一个 InitClass 类，然后在 main 方法中实例化对象，然后给对象属性赋值的过程，其中 属性 a 的值的变化过程如下：
                </ParagraphWrapper>

                <ImagesGroup
                    srcArr={[img278, img279, img280, img281, img282]}
                ></ImagesGroup>

                <ParagraphWrapper>
                    第四张图的值是12，是因为在 main 方法里实例化对象的时候，调用了有参构造器进行了赋值。
                </ParagraphWrapper>
            </div>
        </div>
    </>)
}

export default Module