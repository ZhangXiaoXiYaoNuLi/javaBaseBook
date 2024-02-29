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
            <ParagraphWrapper>
                <Dot></Dot>从 JDK 5.0 开始, Java 增加了对元数据 (MetaData) 的支持, 也就是 Annotation(注解)
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>Annotation （<Blue>注解</Blue>）其实就是代码里的<Blue>特殊标记</Blue>, 这些标记可以在编译, 类加载, 运行时被读取, 并执行相应的处理。通过使用 Annotation, 程序员可以在不改变原有逻辑的情况下, 在源文件中嵌入一些补充信息。代码分析工具、开发工具和部署工具可以通过这些补充信息进行验证或者进行部署。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>Annotation 可以像修饰符一样被使用, 可用于<Red>修饰包,类, 构造器, 方法, 成员变量, 参数, 局部变量的声明</Red>, 这些信息被保存在 Annotation 的 “<Blue>name=value</Blue>” 对中。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>在JavaSE中，注解的使用目的比较简单，例如标记过时的功能，忽略警告等。在JavaEE/Android中注解占据了更重要的角色，例如用来配置应用程序的任何切面，代替JavaEE旧版中所遗留的繁冗代码和XML配置等。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>未来的开发模式都是基于注解的，<Blue>（之后的开发框架中很多用方法，或者是“配置文件”实现的地方，都可以使用注解代替，且更加简洁）</Blue>JPA是基于注解的，Spring2.5以上都是基于注解的，Hibernate3.x以后也是基于注解的，现在的Struts2有一部分也是基于注解的了，注解是一种趋势，<Blue>一定程度上可以说：框架 = 注解 + 反射 + 设计模式</Blue>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module