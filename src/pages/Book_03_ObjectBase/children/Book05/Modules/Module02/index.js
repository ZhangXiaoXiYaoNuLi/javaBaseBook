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
} from '@/components/index.js'

import img224 from '@/assets/images/img224.png'
import img225 from '@/assets/images/img225.png'
import img226 from '@/assets/images/img226.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                语法： <Blue>x instanceof A</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                作用： <Blue>检验 x （实例化对象的标识符） 是否为类 A （类名） 的对象，返回值为boolean型。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                有两点：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Red>要求 x 所属的类与类 A 必须是子类和父类的关系，否则编译错误。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Red>如果 x 属于类 A 的子类 B ， x instanceof A 值也为 true。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>其实类似于 js 中的 instanceof ，就是判断对象是否在原型链上。</Green>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img224]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    可以看到 instanceof 的判断是从自己的类型开始的，然后一直向父类方向一直延伸上去。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                反过来 “ 父类实例化对象 instanceof 子类 ”，得到的结果是 false ：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img225]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                接下来，我们来看看 instanceof 关键字，在类的强制类型转换中，是怎么起作用的：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img226]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    在强转（向下转型）前，为了避免出现转化异常，加上 instanceof 判断，是否在原型链上，一旦返回 true ，那么就向下转型，如果是 false 那么就终止。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    如果尝试 x instanceof Object，那么总是会返回 true 的。说明 Object 是所有类的父类。
                </Green>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module