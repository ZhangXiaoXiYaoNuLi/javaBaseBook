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

import img499 from '@/assets/images/img499.png'
import img500 from '@/assets/images/img500.png'
import img501 from '@/assets/images/img501.png'
import img502 from '@/assets/images/img502.png'
import img503 from '@/assets/images/img503.png'
import img504 from '@/assets/images/img504.png'
import img505 from '@/assets/images/img505.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                我们说到 String 是不可变的字符序列，当然还是有<Blue>可变的字符序列</Blue>了，比如 <Blue>StringBuffer</Blue>，还有我们后面要说的 <Blue>StringBuilder</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>java.lang.StringBuffer代表可变的字符序列，JDK1.0中声明，可以对字符串内容进行增删，此时不会产生新的对象。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>很多方法与String相同。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'red'}></Dot><Red>作为参数传递时，方法内部可以改变值</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我们来看看 StringBuffer 的源码：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img499]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，StringBuffer 类中， char 型数组值 value，和 String 类不同，没有使用 final 修饰。 
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>StringBuffer类不同于String，<Red>其对象必须使用构造器生成</Red>。有三个构造器：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>StringBuffer()：初始容量为16的字符串缓冲区</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>StringBuffer(int size)：构造指定容量的字符串缓冲区</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>StringBuffer(String str)：将内容初始化为指定字符串内容</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>String、StringBuffer、StringBuilder 三者的异同：（面试高频）</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>String 不可变的字符序列，StringBuffer、StringBuilder 可变的字符序列。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>String、StringBuffer 是一开始就有的， StringBuilder 是 jdk1.5 的时候新增的。（主要是因为 StringBuffer 的效率有点低，因为是做成了线程安全的了,而 StringBuilder 线程不安全，效率高）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>相同点，它们三个都是和字符串相关的（废话），底层都是 char 型数组对数据进行存储的。可不可变，关键在于类中 value 是否 final 修饰。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                StringBuffer 源码分析
            </SmallTitle>

            <ParagraphWrapper>
                像我们定义一个 String 对象 ： <Blue>String a = new String()</Blue>，其实就是在底层<Blue>定义了一个长度为 0 的 char 型数组</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                而像我们定义一个有内容的 String 对象 ： <Blue>String a = new String("abc")</Blue>，其实底层源码是干了这件事： <Blue>{`new char[]{'a', 'b', 'c'}`}</Blue> 。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来看看 StringBuffer （StringBuffer 其实 和 StringBuilder 底层源码是类似的，只是同不同步，线程安不安全的问题，所以这里我们主要来说 StringBuffer）
            </ParagraphWrapper>

            <ParagraphWrapper>
                在空参构造的情况下，像： <Blue>StringBuffer sb1 = new StringBuffer();</Blue> 在源码中我们可以找到这个空参构造器：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img500]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>可以看到，是创建了一个默认容量为 16 的 StringBuffer 对象。再点这个 super 进去看看，可以发现其实就是创建了一个长度为 16 的 char 型数组，给到 value 属性。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                相当于是：<Blue>{`new char[16]`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>（当然，如果你此时输入 StringBuffer 的 length ，结果是 0 哈，并不是打印出默认容量！）</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                那我们往这里面添加元素的时候，像： <Blue>{`sb1.append('a')`}</Blue> 的时候，相当于就是把这个 char 型数组的首位，赋值为 a，就是： <Blue>{`value[0] = 'a'`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                那如果是 StringBuffer 的有参构造呢？像 <Blue>{`StringBuffer sb2 = new StringBuffer("abc")`}</Blue>，可以去看看 StringBuffer 的有参构造器
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img501]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，是<Blue>创建了一个 传入 字符串长度 + 16 的 char 型数组，然后使用 append 方法，将传入字符串，拆分添加到 char 型数组中</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    （同样的，此时如果打印这个 “abc” 的 StringBuffer 的 length ，结果是 3， 而不是 3 + 16 ！）
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                为啥打印出来的不是容量？因为源码中打印出来的是 StringBuffer 对象的 count 属性，而不是 value 的 length 。
            </ParagraphWrapper>

            <ParagraphWrapper>
                第二个问题：<Red>如果我们不停地使用 append 方法，往里边加字符串，加到容量上限了，会怎么样？</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                第二个问题就是“扩容”的问题，<Blue>如果添加的数据，超过了底层char型数组的容量，那么就需要扩容。</Blue>
                <Red>关于如何扩容，我们可以找到 StringBuffer 源码中的 append 方法中。</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img502]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>可以看到，这里有个 ensureCapacityInternal 方法，用于检测容量是否足够，如果不够那么进行扩容</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    扩容底层实现其实就是原 char 型数组的复制，然后放到一个容量加倍然后长度加 2 的新 char 型数组中。<Red>所以在开发中，推荐使用 StringBuffer 带有容量参数的构造函数。在参数中传入预期容量，而不是靠自动扩容。</Red>
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                StringBuffer的常用方法
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot><Blue>{`StringBuffer append(xxx)`}</Blue><span>{`：提供了很多的append()方法，用于进行字符串拼接`}</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>{`StringBuffer delete(int start,int end)`}</Blue><span>{`：删除指定位置的内容`}</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>{`StringBuffer replace(int start, int end, String str)`}</Blue><span>{`：把[start,end)位置替换为str`}</span><Blue>，这里类似 js 的“包头不包尾”</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>{`StringBuffer insert(int offset, xxx)`}</Blue><span>{`：在指定位置插入xxx`}</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Blue>{`StringBuffer reverse()`}</Blue><span>{`：把当前字符序列逆转`}</span>
            </ParagraphWrapper>

            <div style={{height: '20px'}}></div>

            <ParagraphWrapper>
                注意：
            </ParagraphWrapper>

            <ParagraphWrapper>
                1、这些方法<Blue>支持“链式调用”</Blue><span>，底层原理是这些方法最后都会 return thie。</span>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img503]}
            ></ImagesGroup>

            <ParagraphWrapper>
                2、当append和insert时，如果原来value数组长度不够，可扩容。
            </ParagraphWrapper>

            <ComLine></ComLine>
            
            <SmallTitle>
                String、StringBuffer、StringBuilder 三者的效率比较
            </SmallTitle>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>{`从高到低排列: StringBuilder > StringBuffer > String`}</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img504]}
            ></ImagesGroup>

            <ParagraphWrapper>
                运行结果：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img505]}
            ></ImagesGroup>


            <ParagraphWrapper></ParagraphWrapper>
        </div>
    </>)
}

export default Module