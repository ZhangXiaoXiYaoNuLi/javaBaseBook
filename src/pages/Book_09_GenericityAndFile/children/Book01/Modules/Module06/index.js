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


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                <Dot></Dot>使用类型<Red>通配符：？</Red>
            </P>
            <P>
                {` 比如：List<?> ，Map<?,?>`}
            </P>
            <P>{`List<?>是List<String>、List<Object>等各种泛型List的父类。`}</P>
            <P>
                <Dot></Dot><Red>读取</Red>{` List<?> 的对象list中的元素时，永远`}<Red>是安全的</Red>，因为不管 list 的真实类型是什么，它包含的都是 Object。
            </P>
            <P>
                <Dot></Dot><Red>将任意元素加入到其中不是类型安全的</Red>。（<Blue>唯一的例外是<Red> null </Red>，它是所有类型的成员</Blue>）。
            </P>
            <P>
                {"Collection<?> c = new ArrayList<String>();"}
            </P>
            <P>{"c.add(new Object()); // 编译时错误"}</P>
            <P>因为我们不知道 c 的元素类型，我们不能向其中添加对象。add 方法有类型参数E作为集合的元素类型。我们传给 add 的任何参数都必须是一个未知类型的子类。因为我们不知道那是什么类型，所以我们无法传任何东西进去。</P>
        
            <ComLine></ComLine>
            <P>
                <Blue>注意点：</Blue>
            </P>
            <P>
                <Dot></Dot>{"注意点1：编译错误：不能用在泛型方法声明上，返回值类型前面<>不能使用 ?"}
            </P>
            <P>{`public static <?> void test(ArrayList<?> list){}`}</P>
            <P><Dot></Dot>{"注意点2：编译错误：不能用在泛型类的声明上"}</P>
            <P>{"class GenericTypeClass<?>{}"}</P>
            <P><Dot></Dot>{"注意点3：编译错误：不能用在创建对象上，右边属于创建集合对象"}</P>
            <P>{"ArrayList<?> list2 = new ArrayList<?>();"}</P>

            <ComLine></ComLine>

            <P>
                <Bold>有限制的通配符：</Bold>
            </P>
            
            <P>
                <Dot></Dot>{"<?>"}
                <P>允许所有泛型的引用调用</P>
            </P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P><Dot></Dot>{"通配符指定上限 extends"}</P>
            <P>{"使用时指定的类型必须是继承某个类，或者实现某个接口，即 <= （小于等于）"}</P>
            <P>
                比如 {"<? extends Number>"}
            </P>
            <P>{"(无穷小 , Number] 只允许泛型为Number及Number子类的引用调用，而如果不是像 Number 这种具体类型，而是一个接口的时候。"}{"像 <? extends Comparable> ，那么就只允许泛型为实现Comparable接口的实现类的引用调用。"}</P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot>{"通配符指定下限 super"}
            </P>
            <P>{"使用时指定的类型不能小于操作的类，即 >= （大于等于）"}</P>
            <P>比如：{"<? super Number>"}</P>
            <P>{"[Number , 无穷大), 只允许泛型为Number及Number父类的引用调用"}</P>
        </div>
    </>)
}

export default Module