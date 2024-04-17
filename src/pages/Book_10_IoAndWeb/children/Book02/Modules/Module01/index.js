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
    Tp,
} from '@/components/index.js'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                <Dot></Dot>对象流也是处理流之一，有两个类 <Blue>
                        ObjectInputStream
                    </Blue> 和 <Blue>
                        ObjectOutputSteam
                    </Blue>
                    <P>用于存储和读取<Blue>基本数据类型数据</Blue>或<Blue>对象</Blue>的处理流。它的强大之处就是可以把Java中的对象写入到数据源中，也能把对象从数据源中还原回来。</P>
            </P>

            <ComLine></ComLine>

            <P><Dot></Dot><Bold>序列化</Bold>：用 ObjectOutputStream 类 <Blue>保存</Blue> 基本类型数据或对象的机制。</P>
            <P><Dot></Dot><Bold>反序列化</Bold>：用 ObjectInputStream 类 <Blue>读取</Blue> 基本类型数据或对象的机制。</P>
            <P><Dot></Dot>ObjectOutputStream 和 ObjectInputStream 不能序列化 <Red>static</Red> 和 <Red>transient</Red> 修饰的成员变量</P>
    
            <P>
                <Dot></Dot><Blue>对象序列化机制</Blue>允许把内存中的Java对象转换成平台无关的二进制流，从而允许把这种二进制流持久地保存在磁盘上，或通过网络将这种二进制流传输到另一个网络节点。当其它程序获取了这种二进制流，就可以恢复成原来的Java对象
            </P>
            <P><Dot></Dot>序列化的好处在于可将任何实现了 Serializable 接口的对象转化为<Blue>字节数据</Blue>，使其在保存和传输时可被还原</P>
            <P><Dot></Dot>序列化是 RMI（Remote Method Invoke – 远程方法调用）过程的参数和返回值都必须实现的机制，而 RMI 是 JavaEE 的基础。因此序列化机制是 JavaEE 平台的基础</P>
            <P><Dot></Dot>如果需要让某个对象支持序列化机制，则必须让对象所属的类及其属性是可序列化的，为了让某个类是可序列化的，该类必须实现如下两个接口之一。否则，会抛出 NotSerializableException 异常</P>
            <P>接口1：<Red>Serializable</Red></P>
            <P>接口2：Externalizable</P>
            <P>
                <Dot></Dot>凡是实现 Serializable 接口的类都有一个表示序列化版本标识符的静态变量：
            </P>
            <P>
                <Tp></Tp><Red>private static final long serialVersionUID;</Red>
            </P>
            <P><Tp></Tp>serialVersionUID用来表明类的不同版本间的兼容性。简言之，其目的是以序列化对象进行版本控制，有关各版本反序列化时是否兼容。</P>
            <P><Tp></Tp>如果类没有显示定义这个静态常量，它的值是Java运行时环境根据类的内部细节自动生成的。<Blue>若类的实例变量做了修改，serialVersionUID 可能发生变化。故建议，显式声明</Blue>。</P>
            <P><Dot></Dot>{`简单来说，Java的序列化机制是通过在运行时判断类的serialVersionUID来验证版本一致性的。在进行反序列化时，JVM会把传来的字节流中的serialVersionUID与本地相应实体类的serialVersionUID进行比较，如果相同就认为是一致的，可以进行反序列化，否则就会出现序列化版本不一致的异常。(InvalidCastException)`}</P>

            <ComLine></ComLine>

            <SmallTitle>
                使用对象流序列化对象
            </SmallTitle>
            {/* 
                若某个类实现了 Serializable 接口，该类的对象就是可序列化的：
                创建一个 ObjectOutputStream
                调用 ObjectOutputStream 对象的 writeObject(对象) 方法输出可序列化对象
                注意写出一次，操作flush()一次
                反序列化
                创建一个 ObjectInputStream
                调用 readObject() 方法读取流中的对象
                强调：如果某个类的属性不是基本数据类型或 String 类型，而是另一个
                引用类型，那么这个引用类型必须是可序列化的，否则拥有该类型的
                Field 的类也不能序列化
            */}
            <P>
                <Dot></Dot>若某个类实现了 Serializable 接口，该类的对象就是可序列化的。
            </P>
            <P><Dot></Dot><Bold>序列化：</Bold></P>
            <P><Tp></Tp><Blue>创建一个 ObjectOutputStream</Blue></P>
            <P><Tp></Tp><Blue>{`调用 ObjectOutputStream 对象的 writeObject(对象) 方法输出可序列化对象`}</Blue></P>
            <P><Tp></Tp><Blue>{`注意:写出一次，操作flush()一次`}</Blue></P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P><Dot></Dot><Bold>反序列化：</Bold></P>
            <P><Tp></Tp><Blue>创建一个 ObjectInputStream</Blue></P>
            <P><Tp></Tp><Blue>{`调用 readObject() 方法读取流中的对象`}</Blue></P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P><Dot></Dot><Bold>{`强调：如果某个类的属性不是基本数据类型或 String 类型，而是另一个引用类型，那么这个引用类型必须是可序列化的，否则拥有该类型的Field 的类也不能序列化`}</Bold></P>
        </div>
    </>)
}

export default Module