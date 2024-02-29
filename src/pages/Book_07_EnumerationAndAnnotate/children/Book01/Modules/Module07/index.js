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

import img552 from '@/assets/images/img552.png'
import img553 from '@/assets/images/img553.png'
import img554 from '@/assets/images/img554.png'
import img555 from '@/assets/images/img555.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>定义新的 Annotation 类型<Blue>使用 @interface 关键字</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>自定义注解自动继承了<Blue>java.lang.annotation.Annotation</Blue> 接口。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>Annotation 的成员变量在 Annotation 定义中以<Blue>无参数方法的形式</Blue>来声明。其方法名和返回值定义了该成员的名字和类型。我们称为配置参数。类型只能是<Blue>八种基本数据类型、String类型、Class类型、enum类型、Annotation类型、以上所有类型的数组</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>可以在定义 Annotation 的成员变量时为其指定初始值, 指定成员变量的初始值可使用 <Blue></Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>如果只有一个参数成员，建议使用<Blue>参数名为value</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>如果定义的注解含有配置参数，那么使用时必须指定参数值，除非它有默认值。格式是“参数名 = 参数值”，如果只有一个参数成员，且名称为value，可以省略“value=”
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>没有成员定义的 Annotation 称为<Blue>标记</Blue>; 包含成员变量的 Annotation 称为<Blue>元数据</Blue> Annotation。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Red>注意：自定义注解必须配上注解的信息处理流程才有意义。（也就是我们后面必须利用“反射”去读取注解内容，读取注解作用的代码块，然后进行某种处理，才有实际意义）</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面我定义一个最简单的注解：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img552]}
            ></ImagesGroup>

            <ParagraphWrapper>
                像上面这个注解，我们在使用的时候，应该是这样的 ：{`@MyAnnotation(value="myTest")`} 或者是 {`@MyAnnotation("myTest")`}，后者是因为 传参 只有一个值，所以 value = 可以省略。
            </ParagraphWrapper>

            <ParagraphWrapper>
                而当我们把 String 改为 数组形式之后（类似于 @SuppressWarnings）：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img553]}
            ></ImagesGroup>

            <ParagraphWrapper>
                我们的注解 “传参”，应该是像这样：{`@MyAnnotation(value={"myTest", "myTest2"})`}
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img554]}
            ></ImagesGroup>

            <ParagraphWrapper>
                在使用 这个 MyAnnotation注解的时候，必须要传参，当然如果不想传参的话，我们可以给“默认参数”，使用 default 关键字：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img555]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module