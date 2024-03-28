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
} from '@/components/index.js'

import img616 from '@/assets/images/img616.png'
import img617 from '@/assets/images/img617.png'
import img618 from '@/assets/images/img618.png'
import img619 from '@/assets/images/img619.png'
import img620 from '@/assets/images/img620.png'
import img621 from '@/assets/images/img621.png'
import img622 from '@/assets/images/img622.png'
import img623 from '@/assets/images/img623.png'
import img624 from '@/assets/images/img624.png'
import img625 from '@/assets/images/img625.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>说到工具类，可以联想到之前我们讲数组 Array 的时候的工具类 Arrays 。通常这种在原类名的后面，加个 “s” 的类，就是操作原类的工具类，又或者叫做 “util” 类。</P>
            <P>
                这里要讲的 Collections 其实就是集合的工具类。
            </P>
            <P>
                <Blue>但是要注意，collections 它不止可以操作 collection，它还可以操作 Map。</Blue>
            </P>

            <ComLine></ComLine>

            <P>
                Collections 是一个操作 Set、List 和 Map 等集合的工具类，<Blue>Collections 中提供了一系列静态的方法对集合元素进行排序、查询和修改等操作，还提供了对集合对象设置不可变、对集合对象实现同步控制等方法</Blue>。
            </P>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <SmallTitle>排序操作：</SmallTitle>
            <P><Blue>（均为static方法）</Blue></P>

            <P>
                <Dot></Dot><Bold>reverse(List)</Bold>：反转 List 中元素的顺序。
            </P>
            <ImagesGroup
                srcArr={[img616]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><Bold>shuffle(List)</Bold>：对 List 集合元素进行随机排序。
            </P>
            <ImagesGroup
                srcArr={[img617]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><Bold>sort(List)</Bold>：根据元素的自然顺序（也就是自然排序那套 -- 继承Comparable接口 + 实现compareTo方法）对指定 List 集合元素按升序排序。
            </P>
            <ImagesGroup
                srcArr={[img618]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><Bold>sort(List，Comparator)</Bold>：根据指定的 Comparator 产生的顺序对 List 集合元素进行排序。
            </P>
            <ImagesGroup
                srcArr={[img619]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><Bold>swap(List，int， int)</Bold>：将指定 list 集合中的 i 处元素和 j 处元素进行交换。
            </P>
            <ImagesGroup
                srcArr={[img620]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <SmallTitle>
                查找、替换操作：
            </SmallTitle>

            <P>
                <Dot></Dot><Bold>Object max(Collection)</Bold>：根据元素的自然顺序（自然排序那一套），返回给定集合中的最大元素。
            </P>
            <ImagesGroup
                srcArr={[img621]}
            ></ImagesGroup>
            
            <P>
                <Dot></Dot><Bold>Object max(Collection，Comparator)</Bold>：根据 Comparator 指定的顺序，返回给定集合中的最大元素。
            </P>
            <ImagesGroup
                srcArr={[img622]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><Bold>Object min(Collection)</Bold>：类型 max 方法。只是这个是求最小值。
            </P>

            <P>
                <Dot></Dot><Bold>Object min(Collection，Comparator)</Bold>：类型 max （传参中有比较器的）的方法。只是这个是求最小值。
            </P>

            <P>
                <Dot></Dot><Bold>int frequency(Collection，Object)</Bold>：返回指定集合中指定元素的出现次数。（<Bold>这里注意，那么同一个类同属性值的两个对象，不计算为同一个的出现次数，得是同一个类且同一个对象才行。</Bold>）
            </P>

            <ComSpace></ComSpace>

            <P>
                <Dot></Dot><Bold>void copy(List dest,List src)</Bold>：将src中的内容复制到dest中。
            </P>
            <ImagesGroup
                srcArr={[img623]}
            ></ImagesGroup>
            <P>没有什么合并之类的逻辑，就是拿后一个list参数中的元素，完全替换到第一个参数list中。第一个参数list中的原元素全部丢失。</P>

            <ComSpace></ComSpace>

            <P>
                <Dot></Dot><Bold>boolean replaceAll(List list，Object oldVal，Object newVal)</Bold>：使用新值替换List 对象的所有旧值
            </P>

            <ImagesGroup
                srcArr={[img624]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <P>
                <Dot></Dot>Collections 类中提供了多个 synchronizedXxx() 方法，该方法可使将指定集合包装成线程同步的集合，从而可以解决多线程并发访问集合时的线程安全问题
            </P>

            <ImagesGroup
                srcArr={[img625]}
            ></ImagesGroup>




        </div>
    </>)
}

export default Module