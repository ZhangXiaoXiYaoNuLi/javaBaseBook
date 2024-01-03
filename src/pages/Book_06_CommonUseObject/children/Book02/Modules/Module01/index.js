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

import img506 from '@/assets/images/img506.png'
import img507 from '@/assets/images/img507.png'
import img508 from '@/assets/images/img508.png'
import img509 from '@/assets/images/img509.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                JDK8 之前的时间 API
            </SmallTitle>

            <ParagraphWrapper>
                这里是一个简图，描述了 Java 中时间相关的一些 api：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img506]}
            ></ImagesGroup>

            <ParagraphWrapper>
                简图中的 api 还是比较多的，我们从中抽取几个常用的来讲一下：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>1. java.lang.System 类</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>此方法适用于计算时间差。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`System类提供的public static long currentTimeMillis()用来返回当前时间与1970年1月1日0时0分0秒之间以毫秒为单位的时间差`}
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img507]}
            ></ImagesGroup>

            <ParagraphWrapper>
                通常，我们把这个毫秒数字，称为“时间戳”。时间戳通常也会用在“生成不会重复的数字”这种事。
            </ParagraphWrapper>
            
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Red>2. java.util.Date 类</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                表示特定的瞬间，精确到毫秒
            </ParagraphWrapper>

            <ParagraphWrapper>
                关于这个 Date 类，我们只要掌握两个构造器，两个方法即可。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>构造器：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>{`Date()`}</Bold>：使用无参构造器创建的对象可以获取本地当前时间。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img508]}
            ></ImagesGroup>

            <ParagraphWrapper>
                显然，这里是 Date 类是重写了 toString 方法。当然了，我们也可以主动调用它的 <Blue>toString</Blue> 方法，得到的结果是一样的。
            </ParagraphWrapper>

            {/* Date(long date) */}
            <ParagraphWrapper>
                <Bold>{`Date(long date)`}</Bold>：构造器参数是时间戳毫秒值。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里我们再来看看 Date 的另一个需要掌握的方法 <Blue>getTime</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>方法：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>{`getTime()`}</Bold>：返回自 1970 年 1 月 1 日 00:00:00 GMT 以来此 Date 对象表示的毫秒数。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Bold>{`toString()`}</Bold>：返回值可以看上面 Date 实例对象的输出内容，是一定格式的时间，年月日、小时、分钟、秒。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img509]}
            ></ImagesGroup>

            {/* 
                3. java.text.SimpleDateFormat类
                     Date类的API不易于国际化，大部分被废弃了，java.text.SimpleDateFormat
                    类是一个不与语言环境有关的方式来格式化和解析日期的具体类。
                     它允许进行格式化：日期文本、解析：文本日期
                     格式化：
                     SimpleDateFormat() ：默认的模式和语言环境创建对象
                     public SimpleDateFormat(String pattern)：该构造方法可以用参数pattern
                    指定的格式创建一个对象，该对象调用：
                     public String format(Date date)：方法格式化时间对象date
                     解析：
                     public Date parse(String source)：从给定字符串的开始解析文本，以生成
                    一个日期。
            */}

            <ParagraphWrapper>
                <Red>3、java.text.SimpleDateFormat 类</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>这个类 和 js 中的 moment 对象很像</Red>，<Blue>可以不传参，获取包含当前时间的实例对象，也可以按指定格式创建指定时间的实例对象，另外实例对象也可以调用 format 方法，获取时间文本。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><span>{`Date类的API不易于国际化，大部分被废弃了，java.text.SimpleDateFormat 类是一个不与语言环境有关的方式来格式化和解析日期的具体类。`}</span>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>它允许进行 <Blue>格式化：日期 转化为 文本</Blue>，也可以进行<Blue>解析：文本 转化为 日期</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>格式化：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）<Blue>{`SimpleDateFormat()`}</Blue><span> ：默认的模式和语言环境创建对象。</span>
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）<Blue>{` public SimpleDateFormat(String pattern)`}</Blue>：该构造方法可以用参数pattern指定的格式创建一个对象。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （3）<Blue>{` public String format(Date date)`}</Blue>：方法格式化时间对象 date。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Bold>解析：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）<Blue>{`public Date parse(String source)`}</Blue>：从给定字符串的开始解析文本，以生成一个日期。
            </ParagraphWrapper>

            {/* 
                4. java.util.Calendar(日历)类
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
                
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module