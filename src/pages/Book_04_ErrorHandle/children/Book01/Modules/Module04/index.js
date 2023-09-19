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

import img349 from '@/assets/images/img349.png'
import img350 from '@/assets/images/img350.png'
import img351 from '@/assets/images/img351.png'
import img352 from '@/assets/images/img352.png'
import img353 from '@/assets/images/img353.png'
import img354 from '@/assets/images/img354.png'
import img355 from '@/assets/images/img354.png'
import img356 from '@/assets/images/img356.png'
import img357 from '@/assets/images/img357.png'
import img358 from '@/assets/images/img358.png'
import img359 from '@/assets/images/img359.png'
import img360 from '@/assets/images/img360.png'
import img361 from '@/assets/images/img361.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                try-catch 的代码基础结构如下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img349]}
            ></ImagesGroup>

            <ParagraphWrapper>
                就像是 switch 可以写多个 case 一样，一个 try 同样可以写多个 catch。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                下面上代码，看看我们是怎么是用 try-catch 处理异常的。就拿前两节的常见异常来做demo：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img350]}
            ></ImagesGroup>

            <ParagraphWrapper>
                先来上一个异常测试类，然后我们到 main 方法中执行一下（这个是运行时异常），可以看到，控制台报的这个异常：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img351]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里报了一个喜闻乐见的 “<Blue>NumberFormatException</Blue>” ,数值转化异常。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    可以注意到，控制台的报错，是从方法调用执行的底层，一层层向上抛异常的，直到最顶层的 main 方法为止。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img352]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    这里再观察下这里的报错信息，报错是从底层方法开始抛出的，然后才到我们编写的 myTest 方法，而且这里输出了 报错方法的位置，我们可以快捷键（Ctrl + 鼠标左键）点进去，然后使用 try-catch 包裹住，进行异常处理。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img353]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里我们去到报错方法的位置，使用 try-catch 对其进行包裹，catch结构中的 匹配参数 中的 异常类名 “<Bold>NumberFormatException</Bold>”，可以直接从控制台的报错中抄，然后这里我们做简单的输出处理，然后再执行方法，可以看到控制台输出。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img354]}
            ></ImagesGroup>

            <ParagraphWrapper>
                在上面的代码中，我们在两个位置分别添加了输出 hello1 和 hello2。然后尝试重新执行，看看输出情况。<Blue>可以得出结论，异常会阻断后续代码的执行，而 try-catch 将异常处理之后， try-catch 外的代码会继续执行</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然 如果 catch 中的异常类名，没有匹配的，那么相当于没写 try-catch。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img355]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码中，我们把捕获的异常类型，改为空指针异常类名，main 方法执行后，可以发现和一开始没有异常处理一样。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue><Red>try-catch 是可以嵌套的</Red>，如下图</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img356]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    有多个 catch 的情况下，<Red>其中一个 catch 处理了异常以后，就跳出了 try-catch 结构，不会再去匹配后面的 catch 异常类型</Red>。如下图
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img357]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    这里 Exception 是所有异常类的父类，所以这个 catch 肯定也是匹配的，但是因为已经在上面的 NumberFormatException 异常捕获了，所以不会再执行后面的 catch。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    然后我们这里要注意一下，异常类之间是否有包含（父子）关系。如果没有包含关系，那么谁写上面，谁写下面无所谓，但是像上面的代码，Exception肯定是最大的父类，是 NumberFormatException 的父类，那么肯定是要放下面的。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里尝试一下，把 Exception 异常 和 NumberFormatException 异常调换个位置：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img358]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>
                    可以发现，这里直接报错了，说是 NumberFormatException 异常是永远无法到达的，直接就是编译错误。
                </Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                这里我们在 try 中定义了一个变量 a，然后尝试在结构外访问它
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img359]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>在try结构中声明的变量，在出了try结构以后，就不能再被调用</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                当然，在开发中，不会像上面的代码一样，捕获到异常，就进行输出就行，一般有两种异常对象处理的方式：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>① String  getMessage()    </Blue>，返回的是一个字符串，想看的话，还得输出一下。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>② printStackTrace()</Blue>，在控制台打印红字，从底层方法调用到抛出异常的顶层的相关信息。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来试试这俩方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img360]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里我们使用捕获匹配到的异常对象 NumberFormatException 的 e （实例对象），来调用 getMessage，可以看到，控制台输出了具体的错误信息。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们再来试试 printStackTrace 方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img361]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到哦控制台一层层地输出了抛出的异常。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                然后这里<Bold>总结</Bold>下：
            </ParagraphWrapper>
            
            <ParagraphWrapper>
                <Dot></Dot>finally是<Bold>可选的</Bold>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>使用try将可能出现异常代码包装起来，在执行过程中，一旦出现异常，就会生成一个对应异常类的对象，根据此对象的类型，去catch中进行匹配。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>一旦try中的异常对象匹配到某一个catch时，就进入catch中进行异常的处理。<Bold>一旦处理完成，就跳出当前的try-catch结构</Bold>（在没有写finally的情况）。<Bold>继续执行其后的代码。</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>catch中的异常类型如果没有子父类关系，则谁声明在上，谁声明在下无所谓。catch中的异常类型<Bold>如果满足子父类关系，则要求子类一定声明在父类的上面。否则，报错</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>常用的异常对象处理的方式： <Bold>① String  getMessage()    ② printStackTrace()</Bold>
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>在try结构中声明的变量，在出了try结构以后，就不能再被调用。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>try-catch-finally结构<Bold>可以嵌套</Bold>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module