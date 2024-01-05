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

import img521 from '@/assets/images/img521.png'
import img522 from '@/assets/images/img522.png'
import img523 from '@/assets/images/img523.png'
import img524 from '@/assets/images/img524.png'
import img525 from '@/assets/images/img525.png'
import img526 from '@/assets/images/img526.png'
import img527 from '@/assets/images/img527.png'
import img528 from '@/assets/images/img528.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                {`java.util.Calendar(日历)类`}
            </SmallTitle>

            {/* 
                     Calendar是一个抽象基类，主用用于完成日期字段之间相互操作的功能。
                     获取Calendar实例的方法
                     使用Calendar.getInstance()方法
                     调用它的子类GregorianCalendar的构造器。
                     一个Calendar的实例是系统时间的抽象表示，通过get(int field)方法来取得想
                    要的时间信息。比如YEAR、MONTH、DAY_OF_WEEK、HOUR_OF_DAY 、
                    MINUTE、SECOND
                     public void set(int field,int value)
                     public void add(int field,int amount)
                     public final Date getTime()
                     public final void setTime(Date date)
                     注意:
                     获取月份时：一月是0，二月是1，以此类推，12月是11
                     获取星期时：周日是1，周二是2 ， 。。。。周六是7
            */}

            <ParagraphWrapper>
                <Bold>简介：</Bold>Calendar是一个<Red>抽象</Red>基类，主用用于完成日期字段之间相互操作的功能。（<Blue>注意它是一个抽象类</Blue>）
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Bold>如何获取Calendar实例：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）<Blue>{`使用Calendar.getInstance()方法。`}</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img521]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实这里就是一个多态，使用Calendar.getInstance()方法返回的是一个 Calendar 的子类，然后我们直接用 Calendar 类型去接收它。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （实际上方式 1 和方式 2 是一样的，上面说的 getInstance 方法获取的，其实就是 new 的子类 GregorianCalendar 实例）
            </ParagraphWrapper>

            <ParagraphWrapper>
                （2）<Blue>{`调用它的子类 GregorianCalendar 的构造器。`}</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img522]}
            ></ImagesGroup>

            
            <ParagraphWrapper>
                <Bold>实例方法：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`get(int field)`}</Bold><span>{`方法来取得想要的时间信息。比如YEAR、MONTH、DAY_OF_WEEK、HOUR_OF_DAY 、MINUTE、SECOND`}</span>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img523]}
            ></ImagesGroup>

            <ParagraphWrapper>
                使用实例调用 get 方法，参数是类似于“YYYY-MM-DD”的常量，而这个常量，在抽象类 Calendar 中。可以看到上面的执行结果（这段代码我在2024-01-05执行的，可以看到 month 的值是 0，也就是 1月）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`set()`}</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img524]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面可以看到，如果是直接初始化的 Calendar 实例，记录的是当前时间，而 set 方法，就是设置实例存储的时间。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img526]}
            ></ImagesGroup>

            <ParagraphWrapper>
                当然 set 方法，还可以常用这种，第一个参数是 “YEAR” （类型常量），第二个参数传具体 int 数值，用来设置时间。
            </ParagraphWrapper>


            <ParagraphWrapper>
                <Dot></Dot><Bold>{`add()`}</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img527]}
            ></ImagesGroup>

            <ParagraphWrapper>基于日历的逻辑，进行增加（或者减少，参数用负数），某种类型（年月日等）的数值的方法。</ParagraphWrapper>
            <ParagraphWrapper>
                上面的代码可以看到，我们是对年份进行了加一操作。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`getTime()`}</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img525]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，getTime 方法，就是输出相对应时间 Date 对象的 toString 方法的输出。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`setTime()`}</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>将Date对象表示的时间值设置给Calendar日期对象。</ParagraphWrapper>

            <ImagesGroup
                srcArr={[img528]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Red>注意：</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="#1677ff"></Dot><Blue>获取月份时：一月是0，二月是1，以此类推，12月是11</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="#1677ff"></Dot><Blue>获取星期时：周日是1，周二是2 ， 。。。。周六是7</Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module