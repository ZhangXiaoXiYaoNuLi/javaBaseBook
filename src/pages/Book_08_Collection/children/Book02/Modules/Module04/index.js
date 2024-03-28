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

import img582 from '@/assets/images/img582.png'
import img583 from '@/assets/images/img583.png'
import img584 from '@/assets/images/img584.png'
import img585 from '@/assets/images/img585.png'
import img586 from '@/assets/images/img586.png'
import img587 from '@/assets/images/img587.png'
import img588 from '@/assets/images/img588.png'
import img589 from '@/assets/images/img589.png'
import img613 from '@/assets/images/img613.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                首先我们创建一个 treeSet ，然后往里面添加一些元素：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img582]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，由于最后添加的是一个 Person 实例对象，直接报错了。其实之前简介 set 的时候说过，<Blue>
                    <Red>TreeSet 必须存储同一个类 new 出来的实例</Red>，是为了可以用实例们共有的某一个属性进行排序。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>这个结构提供的意义就是用来给我来排序的</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们可以可以尝试<Blue>不按顺序地</Blue>添加几个 int 型的数据，然后遍历输出：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img583]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，输出的结果是经过排序的。排序的时机是每次添加元素的时候。当然，我们也可以尝试添加 String 类型的数据，实际我们也应该 String 类型是如果排序大小的（按照转码大小）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我们来尝试添加自定义类实例：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img613]}
            ></ImagesGroup>

            <ParagraphWrapper>
                经过尝试，直接添加同一个类实例，还是报错了。其实这里就是我们没有告诉 TreeSet 该怎么排序，所以报错了。所以到这里，涉及 TreeSet 的两种排序方式了，一种<Blue>自然排序</Blue>，一种<Blue>定制排序</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里我们先来讲讲自然排序。要<Blue>实现自然排序</Blue>，首先就是添加进 TreeSet 的实例，<Blue>必须实现 Comparable 接口，重写 compareTo 方法</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img585]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们到 main 方法方法中，测试排序：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img586]}
            ></ImagesGroup>

            <ParagraphWrapper>
                另外要注意的是，如果 compareTo 方法 return 的值是 0 ，那么就会判断这是俩相同实例，不能重复添加。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>没错，TreeSet 并不像 HashSet 和 LinkedHashSet 一样，是通过 先 hashCode 再 equals 来判断是否相同元素，避免重复添加的。而是通过 compareTo 的 return 结果是不是为 0</Red>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                接着我们再来讲讲如何进行二级排序。也就是在同一个属性值相同的情况下，使用另一个属性来比对大小。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img587]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实就是稍微改写下 compareTo 方法，如上图。排序后就可以得到二级排序的结果：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img588]}
            ></ImagesGroup>

            <ParagraphWrapper>
                向 TreeSet 中添加元素时，只有<Blue>第一个元素无须比较compareTo()方法</Blue>，后面添加的所有元素都会调用compareTo()方法进行比较。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>因为只有相同类的两个实例才会比较大小，所以向 TreeSet 中添加的应该是同一个类的对象。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                对于 <Red>TreeSet</Red> 集合而言，它<Red>判断两个对象是否相等的唯一标准是：两个对象通过 compareTo(Object obj) 方法比较返回值</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                当需要把一个对象放入 TreeSet 中，重写该对象对应的 equals() 方法时，应保证该方法与 compareTo(Object obj) 方法有一致的结果：如果两个对象通过equals() 方法比较返回 true，则通过 compareTo(Object obj) 方法比较应返回 0。否则，让人难以理解。
            </ParagraphWrapper>
            

            <ComLine></ComLine>
            <ParagraphWrapper>
                <Dot></Dot><Blue>自然排序：TreeSet</Blue> 会调用集合元素的 compareTo(Object obj) 方法来比较元素之间的大小关系，然后将集合元素按升序(默认情况)排列
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot><Red>如果试图把一个对象添加到 TreeSet 时，则该对象的类必须实现 Comparable 接口</Red>：
                <ParagraphWrapper>
                    实现 Comparable 的类必须实现 compareTo(Object obj) 方法，两个对象即通过compareTo(Object obj) 方法的返回值来比较大小。
                </ParagraphWrapper>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>Comparable 的典型实现（也就是默认就有的，不用自己写 compareTo）：</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、BigDecimal、BigInteger 以及所有的数值型对应的包装类：按它们对应的数值大小进行比较。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、Character：按字符的 unicode值来进行比较
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、Boolean：true 对应的包装类实例大于 false 对应的包装类实例
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、String：按字符串中字符的 unicode 值进行比较
            </ParagraphWrapper>
            <ParagraphWrapper>
                5、Date、Time：后边的时间、日期比前面的时间、日期大
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面就是 TreeSet 的红黑树模型：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img589]}
            ></ImagesGroup>
            <ParagraphWrapper>
                具体的就不细讲了，百度有很多讲的不错的帖子。此次学习的目的是效率，尽快达到工作水平先再说。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module