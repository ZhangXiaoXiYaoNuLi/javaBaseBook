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

import img363 from '@/assets/images/img363.png'
import img369 from '@/assets/images/img369.png'
import img370 from '@/assets/images/img370.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>如果一个方法（中的语句执行时）可能生成某种异常，但是并不能确定如何处理这种异常，则此方法应<Blue>显示地</Blue>声明抛出异常，表明该方法将不对这些异常进行处理，而由该方法的<Blue>调用者</Blue>负责处理。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img370]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>在方法声明中用throws语句可以声明抛出异常的列表（<Red>多个异常之间用英文逗号间隔</Red>），<Blue>throws后面的异常类型可以是方法中产生的异常类型，也可以是它的父类（异常的父类）</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>"throws + 异常类型"写在方法的声明处。指明此方法执行时，可能会抛出的异常类型。 一旦当方法体执行时，出现异常，仍<Blue>会在异常代码处生成一个异常类的对象，<Red>此对象满足throws后异常类型时（像catch一样要匹配才行）</Red>，就会被抛出</Blue>。<Red>异常代码后续的代码，就不再执行</Red>！
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img369]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>try-catch-finally:真正的将异常给处理掉了。<Blue>throws的方式只是将异常抛给了方法的<Red>调用者</Red>。并没有真正将异常处理掉。  </Blue>
            </ParagraphWrapper>
            
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>开发中如何选择使用try-catch-finally 还是使用throws？
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、如果父类中<Blue>被重写的方法没有throws</Blue>方式处理异常，<Blue>则子类重写的方法也不能使用throws</Blue>，意味着<Red>如果子类重写的方法中有异常，必须使用try-catch-finally方式处理</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                2、执行的方法a中，先后又调用了另外的几个方法，这几个方法是递进关系执行的。我们建议这几个方法使用throws的方式进行处理。而执行的方法a可以考虑使用try-catch-finally方式进行处理。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                重写方法抛异常的规则：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>{`重写方法不能抛出比被重写方法范围更大的异常类型。在多态的情况下，对methodA()方法的调用-异常的捕获按父类声明的异常处理。`}</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img363]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>挺好理解的，子类重写的方法，抛出的异常，当然要“更具体、更详细”，而更具体更详细的异常显然是“子类异常”。</Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module