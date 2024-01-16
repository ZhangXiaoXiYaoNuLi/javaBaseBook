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

import img543 from '@/assets/images/img543.png'
import img544 from '@/assets/images/img544.png'
import img545 from '@/assets/images/img545.png'
import img546 from '@/assets/images/img546.png'
import img547 from '@/assets/images/img547.png'
import img548 from '@/assets/images/img548.png'
import img549 from '@/assets/images/img549.png'
import img550 from '@/assets/images/img550.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                常用方法如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img543]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实这些方法中，我们主要关注三个方法就行：<Blue>values()、valueOf()、toString()</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面上代码试试：
            </ParagraphWrapper>

            {/* 
                Enum 类具有 valueOf() 方法，该方法返回具有指定名称的指定枚举类型的枚举常量。枚举类型的名称必须与用于声明枚举常量的标识符相匹配。
            */}

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>valueOf：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                {`Enum 类具有 valueOf() 方法，该方法返回具有指定名称的指定枚举类型的枚举常量。枚举类型的名称必须与用于声明枚举常量的标识符相匹配。`}
            </ParagraphWrapper>

            <ParagraphWrapper>
                valueOf 方法区分大小写，它会抛出一个带有无效字符串的 IlegalArgumentException。Enum 类在编译时自动获取静态 valueOf 方法。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img544]}
            ></ImagesGroup>

            <ParagraphWrapper>
                使用 valueOf()，对于给定的字符串值，我们有一个 Enum 类 Colors 的实例。colorRed 变量将指向 Colors.RED。我们可以在输出的下面的打印语句中看到这一点。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img545, img546]}
            ></ImagesGroup>

            <ParagraphWrapper>
                而对像我们之前的 enumSeason 枚举类，单个季节像 SPRING 下还有季节中文、季节描述等属性的时候，使用 valueOf 的情况就像上面这样。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>values：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                values()方法可以将枚举类转变为一个枚举类型的数组，<Blue>因为枚举中没有下标</Blue>，我们没有办法通过下标来快速找到需要的枚举类，这时候，<Blue>转变为数组之后，我们就可以通过数组的下标，来找到我们需要的枚举类</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img547]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Bold>
                    toString:
                </Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                得到当前枚举常量的名称，也可以通过重写 枚举类 中的 toString 方法，来获取更易读的结果。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img548, img549]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先，我们在之前的 EnumSeason 类中，重写 toString 方法，用于输出枚举的季节名称。然后到 main 方法中，使用 values 将枚举类转成可以遍历的 EnumSeason 实例数组，随后遍历调用 toString 方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                可以看到，最终输出了四个季节的名称。
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然我们也可以看看没有重写 toString 的时候，是什么输出，如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img550]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module