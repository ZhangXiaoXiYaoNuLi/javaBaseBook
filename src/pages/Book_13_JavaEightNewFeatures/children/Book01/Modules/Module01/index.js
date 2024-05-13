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
    Tp,
} from '@/components/index.js'

import img709 from '@/assets/images/img709.png'
import img710 from '@/assets/images/img710.png'
import img711 from '@/assets/images/img711.png'
import img712 from '@/assets/images/img712.png'
import img713 from '@/assets/images/img713.png'
import img714 from '@/assets/images/img714.png'
import img715 from '@/assets/images/img715.png'
import img716 from '@/assets/images/img716.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                Lambda 是一个匿名函数，我们可以把 Lambda 表达式理解为是一段可以
                传递的代码（将代码像数据一样进行传递）。使用它可以写出更简洁、更
                灵活的代码。作为一种更紧凑的代码风格，使Java的语言表达能力得到了
                提升
            */}
            <SmallTitle>为什么使用 lambda 表达式</SmallTitle>
            <P><Blue>Lambda 是一个匿名函数，我们可以把 Lambda 表达式理解为是一段可以传递的代码（将代码像数据一样进行传递）。使用它可以写出更简洁、更灵活的代码。作为一种更紧凑的代码风格，使Java的语言表达能力得到了提升</Blue></P>
            <P>其实有些地方像前端的 箭头函数 的。</P>
            <ComLine></ComLine>
            <P><Dot color="black"></Dot><Bold>从匿名类到 lambda 的例子1：</Bold></P>
            <ImagesGroup
                srcArr={[img709]}
            ></ImagesGroup>

            <P><Dot color="black"></Dot><Bold>从匿名类到 lambda 的例子2：</Bold></P>
            <P>首先，创建一个 MyTest 类，其中有方法 调用 抽象类 myRun 的抽象方法：</P>
            <ImagesGroup
                srcArr={[img710]}
            ></ImagesGroup>

            <P>然后，我们尝试用常规 匿名内部类 传参，以及 lambda 传参：</P>

            <ImagesGroup
                srcArr={[img711]}
            ></ImagesGroup>

            <ComLine></ComLine>
            <P>
                <Dot></Dot><span>Lambda 表达式：在Java 8 语言中引入的一种新的语法元素和操
                作符。这个操作符为 “<Blue>{`->`}</Blue>” ， 该操作符被称为 <Blue>Lambda 操作符</Blue>
                或<Blue>箭头操作符</Blue>。它将 Lambda 分为两个部分：</span>
            </P>
            <P><Tp></Tp><Bold>左侧：</Bold>指定了 Lambda 表达式需要的参数列表</P>
            <P><Tp></Tp><Bold>右侧：</Bold>指定了 Lambda 体，是抽象方法的实现逻辑，也即 Lambda 表达式要执行的功能。</P>

            <ComLine></ComLine>

            <P><Dot color="black"></Dot><Bold>无参、无返回值：</Bold></P>
            <ImagesGroup
                srcArr={[img712]}
            ></ImagesGroup>

            <P><Dot color="black"></Dot><Bold>一个参数、无返回值：</Bold></P>
            <ImagesGroup
                srcArr={[img713]}
            ></ImagesGroup>


            <P><Dot color="black"></Dot><Bold>参数类型可省略（<Blue>因为自动的类型推断</Blue>）、无返回值：</Bold></P>
            <ImagesGroup
                srcArr={[img714]}
            ></ImagesGroup>
            <P>可以看到，同上的代码，参数类型 String 去掉了，也不会报错。</P>

            <P><Dot color="black"></Dot><Bold>一个参数（<Blue>仅一个参数时，小括号可省略</Blue>）：</Bold></P>
            <ImagesGroup
                srcArr={[img715]}
            ></ImagesGroup>

            <P><Dot color="black"></Dot><Bold>两个参数，以及有返回值的情况（格式的完全体）：</Bold></P>

            <P><Dot color="black"></Dot><Bold>当方法体只有一句 return xxx 的时候，大括号可以省略（<Blue>类似 js 的箭头函数</Blue>）</Bold></P>
            <ImagesGroup
                srcArr={[img716]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <P>
                上述 Lambda 表达式中的参数类型都是由编译器推断得出的。Lambda 表达式中无需指定类型，程序依然可以编译，这是因为 javac 根据程序的上下文，在后台推断出了参数的类型。Lambda 表达式的类型依赖于上下文环境，是由编译器推断出来的。这就是所谓的“<Blue>类型推断</Blue>”。
            </P>
        </div>
    </>)
}

export default Module