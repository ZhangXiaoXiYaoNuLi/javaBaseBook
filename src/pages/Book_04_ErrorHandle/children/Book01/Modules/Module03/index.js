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
            {/* 
                在编写程序时，经常要在可能出现错误的地方加上检测的代码，
                如进行x/y运算时，要检测分母为0，数据为空，输入的不是数据
                而是字符等。过多的if-else分支会导致程序的代码加长、臃肿，
                可读性差。因此采用异常处理机制。
            */}
            <ParagraphWrapper>
                在编写程序时，经常要在可能出现错误的地方加上检测的代码，如进行x/y运算时，要检测分母为0，数据为空，输入的不是数据而是字符等。<Blue>过多的if-else分支会导致程序的代码加长、臃肿，可读性差。因此采用异常处理机制。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>
            
            <ParagraphWrapper>
                java中有两种异常处理的方式：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>try-catch-finally</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>throw + 异常类型</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    这里举个栗子，假设你有感冒发烧的症状，然后就需要到区级的医院治疗。治好了，那么你“自己去医院治疗”这件事，就是 try-catch-finally。
                </Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    但是区级医院发现你得的是传染病，区医院解决不了，得转移到市医院，那么“把你转移给市医院”，就是 throw 异常，然后市医院发现你得的是新型变种的传染病，需要给更高级别的医院处理。那么就会继续“throw”。直到没有更高级的医院。而对应到程序中，就是不断 throw 到 main 方法中，然后程序终止。
                </Green>
            </ParagraphWrapper>

            <ComLine></ComLine>

            {/* 
                Java提供的是异常处理的抓抛模型
                Java程序的执行过程中如出现异常，会生成一个异常类对象，
                该异常对象将被提交给Java运行时系统，这个过程称为抛出
                (throw)异常。
                异常对象的生成
                由虚拟机自动生成：程序运行过程中，虚拟机检测到程序发生了问题，如果在当
                前代码中没有找到相应的处理程序，就会在后台自动创建一个对应异常类的实例
                对象并抛出——自动抛出
                由开发人员手动创建：Exception exception = new ClassCastException();——创
                建好的异常对象不抛出对程序没有任何影响，和创建一个普通对象一样
                7.3 异常处理机制一
                异常的抛出机制
                为保证程序正常执行，代码必须对可能出现的异常进行处理。
                7.3 异常处理机制一
                 如果一个方法内抛出异常，该异常对象会被抛给调用者方法中处
                理。如果异常没有在调用者方法中处理，它继续被抛给这个调用
                方法的上层方法。这个过程将一直继续下去，直到异常被处理。
                这一过程称为捕获(catch)异常。
                 如果一个异常回到main()方法，并且main()也不处理，则程序运
                行终止。
                 程序员通常只能处理Exception，而对Error无能为力。
            */}

            <ParagraphWrapper>
                <Dot></Dot>Java提供的是异常处理的<Blue>抓抛模型</Blue>。（所谓的“抓”，可以理解为 try-catch，是解决问题的。所谓的“抛”，就是 throw，向更高层级抛出异常，直到被解决）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>Java程序的执行过程中如出现异常，会生成一个异常类对象，该异常对象将被提交给Java运行时系统，这个过程称为抛出（throw）异常。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>Java异常对象由 java 虚拟机自动生成，或者由开发人员手动创建。
            </ParagraphWrapper>
            <ParagraphWrapper>
                由虚拟机自动生成：程序运行过程中，虚拟机检测到程序发生了问题，如果在当前代码中没有找到相应的处理程序，就会在后台自动创建一个对应异常类的实例对象并抛出，这个叫自动抛出。
            </ParagraphWrapper>
            <ParagraphWrapper>
                由开发人员手动创建：{`Exception exception = new ClassCastException()`}; 创建好的异常对象不抛出对程序没有任何影响，和创建一个普通对象一样
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>为保证程序正常执行，代码必须对可能出现的异常进行处理。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>如果一个方法内抛出异常，该异常对象会被抛给调用者方法中处理。如果异常没有在调用者方法中处理，它继续被抛给这个调用方法的上层方法。这个过程将一直继续下去，直到异常被处理。这一过程称为<Red>捕获（catch）异常</Red></Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>如果一个异常回到 main 方法，并且 main 也不处理，则程序运行终止。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>程序员通常只能处理Exception，而对Error无能为力。
            </ParagraphWrapper>

            <ComLine></ComLine>
        </div>
    </>)
}

export default Module