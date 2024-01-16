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

import img533 from '@/assets/images/img533.png'
import img534 from '@/assets/images/img534.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                自然排序
            </SmallTitle>
            
            <ParagraphWrapper>
                <Bold>java.lang.Comparable</Bold>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>Comparable 接口强行对实现它的每个类的对象进行整体排序。这种排序被称为类的自然排序。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>实现 Comparable 的类必须实现 {'compareTo(Object obj)'} 方法，两个对象即通过 {`compareTo(Object obj)`} 方法的返回值来比较大小。如果当前对象this大于形参对象obj，则返回正整数，<Blue>如果当前对象this小于形参对象obj，则返回负整数，如果当前对象this等于形参对象obj，则返回零。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>实现Comparable接口的对象列表（和数组）可以通过 Collections.sort 或Arrays.sort进行自动排序。实现此接口的对象可以用作有序映射中的键或有序集合中的元素，无需指定比较器。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>对于类 C 的每一个 e1 和 e2 来说，当且仅当 {`e1.compareTo(e2) == 0 与 e1.equals(e2)`} 具有相同的 boolean 值时，类 C 的自然排序才叫做与 equals 一致。建议（虽然不是必需的）最好使自然排序与 equals 一致。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'rgb(22, 119, 255)'}></Dot><Blue>{`Comparable 的典型实现：(默认都是从小到大排列的)`}</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                （1）String：按照字符串中字符的Unicode值进行比较
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）Character：按照字符的Unicode值来进行比较
            </ParagraphWrapper>
            <ParagraphWrapper>
                （3）数值类型对应的包装类以及BigInteger、BigDecimal：按照它们对应的数值大小进行比较
            </ParagraphWrapper>
            <ParagraphWrapper>
                （4）Boolean：true 对应的包装类实例大于 false 对应的包装类实例
            </ParagraphWrapper>
            <ParagraphWrapper>
                （5）Date、Time等：后面的日期时间比前面的日期时间大
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>也就是说，你在进行以上类型的，两个相同类型的实例的比较的时候，可以不用实现接口 Comparable，直接比较就有规则。 </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                来个代码示例，首先我们定义一个 商品类 good ，然后实现接口 Comparable，重写 compareTo 方法。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img533]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，我们用价格进行比较，如果当前对象的价格高，那么就返回 1， 小于就返回 -1，等于返回 0。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们定义几个商品类实例比较下试试：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img534]}
            ></ImagesGroup>

            <ParagraphWrapper>
                当然，为了这个上面代码的执行，我们还得回 good 类中补上重写的 toString 方法，还有构造参数。可以看到，<Bold>最终输出是按照价格从小到大的</Bold>。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module