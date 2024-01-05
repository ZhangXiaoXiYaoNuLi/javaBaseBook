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

import img510 from '@/assets/images/img510.png'
import img511 from '@/assets/images/img511.png'
import img512 from '@/assets/images/img512.png'
import img513 from '@/assets/images/img513.png'
import img514 from '@/assets/images/img514.png'
import img515 from '@/assets/images/img515.png'
import img516 from '@/assets/images/img516.png'
import img517 from '@/assets/images/img517.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                首先， java 中有两个 Date 类，一个是在 util 包中，一个是在 sql 包中，他们还是子父类的关系。
            </ParagraphWrapper>
            <ParagraphWrapper>
                我们先来看 <Blue>java.util.Date</Blue> 类：
            </ParagraphWrapper>

            <ParagraphWrapper>
                关于这个类，首先我们要<Blue>掌握两个构造器：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Bold>{`new Date()`}</Bold>，空参构造器。
            </ParagraphWrapper>

            <ParagraphWrapper>
                创建的是一个<Blue>记录当前时间</Blue>的时间戳对象。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img510]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到 Date 类重写了 toString 方法的。直接输出实例的话，得到的是转换过的时间字符串。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`new Date(毫秒数)`}</Bold>，参数是毫秒数，可以创建以1970年一月一日起的毫秒数的时间实例。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img511]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，得到的结果不是当前时间，而是根据参数毫秒数转化到的时间。
            </ParagraphWrapper>
            <ParagraphWrapper>
                至于这里输出的字符串，其实很好理解的，从前面到后面 分别是 星期、月份、日期、时分秒、时区、年份。有的是英文缩写标识，有的直接是数字。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                还有<Blue>掌握两个方法的使用：</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`getTime()`}</Bold>，实例调用后会返回一个 long 型数值，是时间戳。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img512]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot><Bold>{`toString()`}</Bold>，实例调用后会获取转化好的 时间字符串，是重写了 toString 方法，会获取规整好的时间字符串。如上面的例子
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                然后我们来看看 java.util.Date 的 <Bold>子类：java.sql.Date</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                根据类的继承，我们可以知道这个 sql 的 Date 也会有 getTime 和 toString 方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我们进行代码尝试，看看 sql 的 Date 是否重写了这两个方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img513]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先是我在尝试使用 “空参构造器” 去实例化的时候，是报错的，sql 的 Date 类，<Blue>并没有 空参构造器</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后，我们可以分别看到 getTime 和 toString 方法的输出结果。<Blue> getTime 依然是获取时间戳，而 toString，不再获取时分秒等了，只有 “YYYY-MM-DD” 格式的年月日字符串。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                如何把 sql 的 Date 对象，转成 util 的 Date 对象呢？<Blue>其实很简单，因为 sql 的 是 util 的子类，所以直接 划等号 赋值就行，也就是<Red>多态</Red>。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img514]}
            ></ImagesGroup>

            <ParagraphWrapper>
                因为这里两个 Date 是同名的，所以在做转化的时候，需要写上全包名路径。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来看看，<Blue>如何把 util 的 Date 对象，转化成 sql 的 Date 对象</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img515]}
            ></ImagesGroup>

            <ParagraphWrapper>
                像上图这样，如果我们是直接new 的是 util 中的 Date 对象（<Bold>我们知道 util 的 Date 对象的 toString 方法打印的不是 “YYYY-DD-MM” 格式的时间</Bold>），我们想要将这个对象塞进 sql 的 Date 类型中（<Bold>为了获得“YYYY-MM-DD”格式的时间字符串，方便写入数据库等操作</Bold>），那么该怎么办呢？
            </ParagraphWrapper>

            <ParagraphWrapper>
                直接强转，虽然编辑不会报错，但是运行时是会报错的：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img516]}
            ></ImagesGroup>

            <ParagraphWrapper>
                所以，我们可以先调用 util 下 Date 的 getTime 方法，获取记录的时间的毫秒数，然后把这个毫秒数，作为传参，传入 sql 的 Date 实例化参数中。如下
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img517]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module