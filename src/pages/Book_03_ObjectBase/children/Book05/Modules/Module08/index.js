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

import img259 from '@/assets/images/img259.png'
import img260 from '@/assets/images/img260.png'
import img261 from '@/assets/images/img261.png'
import img262 from '@/assets/images/img262.png'
import img263 from '@/assets/images/img263.png'
import img264 from '@/assets/images/img264.png'
import img265 from '@/assets/images/img265.png'
import img266 from '@/assets/images/img266.png'
import img267 from '@/assets/images/img267.png'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                什么是包装类？
            </SmallTitle>

            <ParagraphWrapper>
                <Red>包装类就是，针对八种基本数据类型定义相应的引用类型—包装类（封装类）</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>目的是让基础类型拥有类的特点，就可以调研类中的方法。充分体现了 java 的面向对象特性。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                基础类型 与其相对应的 包装类 的映射图。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img259]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    其实还是比较好记的，除了上图中标红的两个，其它都是自己的基础类型名称的首字母大写。而 int 和 char 类型，只是变回了自己的英文全称。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    另外的，前面的这 6 个 数值 包装类，都共同继承自 Number 类。
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Green>
                    后面我们接着讲，基础类型、String、包装类之间的转换，可以参考下图，总览一下
                </Green>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img260]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <SmallTitle>
                基本数据类型，转成包装类（装箱）
            </SmallTitle>

            <ParagraphWrapper>
                想要把基础类型，转换成包装类，有两种方法：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>通过包装类的构造器，构造包装类</Red>，如下图
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img261]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>上图中，我们将 基础类型 int 的 i，传入 Integer 类的构造参数中，得到了 i 的包装类，并调用了包装类方法（重写过的 toString 方法）。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>还可以通过字符串参数构造包装类对象</Red>，如下图
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img262]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    上图中，我们将 字符串类型的 i ，传给 包装类的构造函数作为参数，的到了 i 的包装类，并调用了包装类的 isNaN 方法。
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>
                    要注意的是，这种“传字符串参数构造包装类”的方法，在 布尔值 类型上做了优化，只要我们传的参数，不为 null 且无视大小写，拼写 为 true 的，那么转成包装类的值就是 true，否则为 false。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    还有要留意的一点是，如果 包装类 是作为 类的成员属性，那么我们实例化对象里，就不能直接使用“ .属性名 ”的方式获取属性值了，此时会获取到 null，因为这个成员属性已经是一个 类，而不是 基础类型了。
                </Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                包装类，转基础类型（拆箱）
            </SmallTitle>

            {/* 
                调用包装类的.xxxValue()方法：boolean b = bObj.booleanValue();
            */}

            <ParagraphWrapper>
                <Red>{`调用包装类的.xxxValue()方法：boolean b = bObj.booleanValue();`}</Red> ，如下图
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img263]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    上图中，我们先用字符串，转成了 Double 包装类，再从 Double 包装类，再使用<Blue>DoubleValue</Blue>方法 转为 基础类型 double 型。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                自动装箱 与 自动拆箱
            </SmallTitle>

            <ParagraphWrapper>
                <Blue>JDK1.5之后，支持自动装箱，自动拆箱。但类型必须匹配。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img264]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>首先，我们创建一个测试类，并在其中起一个方法，<Red>注意我们方法参数是 Object 类型，且方法内调用的是 Object 的 toString 方法</Red></Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img265]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    这里我们在 main 方法中，实例化这个测试类，然后<Red>一个基础类型的 i，虽然 method 方法参数要求是 Object ，但是我们传基础类型 i，进去居然是可以的，显然在运行时， 进行了“自动装箱”。即 i 在传入的时候，自动转为了包装类 Integer。</Red>
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    看到控制台的输出是 10，很明显，这是方法在调用 Object 的 toString 方法的时候，实际调用了 Integer 类型重写的 toString 方法了，所以方法没报错，且输出了 10 。且证明了传入参数确实 自动转为了 Integer 类型。
                </Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>
                    然后我们可以试试“自动拆箱”
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img266]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>
                    自动拆箱更简单了，上面的代码可以看到，我们直接将一个 包装类，赋值给一个 基础类型 的值 j 。
                </Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ImagesGroup
                srcArr={[img267]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>上面的代码中，都是直接 <Red>基础类型 = 包装类</Red>，还有 <Red>包装类 = 基础类型</Red>，这样子直接来赋值的，这两行就是最简单的 <Red>“拆箱”</Red> 和 <Red>“装箱”</Red> 代码。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                基本数据类型、包装类，和 String 类型的互相转换
            </SmallTitle>

            {/* 
                字符串转换成基本数据类型
                 通过包装类的构造器实现：
                int i = new Integer(“12”);
                 通过包装类的parseXxx(String s)静态方法：
                Float f = Float.parseFloat(“12.1”);
                基本数据类型转换成字符串
                 调用字符串重载的valueOf()方法：
                String fstr = String.valueOf(2.34f);
                 更直接的方式：
                String intStr = 5 + “”
            */}
            
        </div>
    </>)
}

export default Module