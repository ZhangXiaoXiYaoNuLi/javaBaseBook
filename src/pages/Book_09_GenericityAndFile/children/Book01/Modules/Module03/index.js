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

import img634 from '@/assets/images/img634.png'
// import img635 from '@/assets/images/img635.png'
import img636 from '@/assets/images/img636.png'
import img637 from '@/assets/images/img637.png'
import img638 from '@/assets/images/img637.png'
import img639 from '@/assets/images/img639.png'
import img640 from '@/assets/images/img640.png'
import img641 from '@/assets/images/img641.png' 
import img642 from '@/assets/images/img642.png'
import img643 from '@/assets/images/img643.png'
import img644 from '@/assets/images/img644.png'
import img645 from '@/assets/images/img645.png'
import img646 from '@/assets/images/img646.png'
import img647 from '@/assets/images/img647.png'
import img648 from '@/assets/images/img648.png'
import img649 from '@/assets/images/img649.png'
import img650 from '@/assets/images/img650.png'
import img651 from '@/assets/images/img651.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P>
                自定义泛型主要分三类：<Bold>自定义泛型类、自定义泛型接口、自定义泛型方法</Bold>。
            </P>
            <P>
                <Blue>
                    泛型类结构简图：
                </Blue>
            </P>
            <ImagesGroup
                srcArr={[img646]}
            ></ImagesGroup>
            <P>
                其中，泛型类和泛型接口的差别不大，一个类加上尖括号就是泛型类，一个接口加上尖括号就是泛型接口，主要区别就是类和接口的区别。
            </P>
            <P>
                所以这里，泛型类和泛型接口放一起讲，差不多。而泛型方法是另外一回事，等会再说。
            </P>

            <ComLine></ComLine>

            {/* 
                12.父类有泛型，子类可以选择保留泛型也可以选择指定泛型类型：
                 子类不保留父类的泛型：按需实现
                 没有类型 擦除
                 具体类型
                 子类保留父类的泛型：泛型子类
                 全部保留
                 部分保留
                结论：子类必须是“富二代”，子类除了指定或保留父类的泛型，还可以增加自
                己的泛型
            */}

            <P>
                <Dot></Dot>{`泛型类可能有多个参数，此时应将多个参数一起放在尖括号内。比如：<E1,E2,E3>`}
            </P>
            <P>
                <Dot></Dot>{`泛型类的构造器如下：public GenericClass(){}。而下面是错误的：public GenericClass<E>(){}`}
            </P>
            <P>
                <Dot></Dot>实例化后，操作原来泛型位置的结构必须与指定的泛型类型一致。
            </P>
            <P>
                <Dot></Dot>{`泛型不同的引用不能相互赋值。（尽管在编译时 ArrayList<String> 和 ArrayList<Integer> 是两种类型，但是，在运行时只有一个ArrayList被加载到JVM中）。`}
            </P>
            <P>
                <Dot></Dot><Blue>{`泛型如果不指定，将被擦除，泛型对应的类型均按照 Object 处理，但不等价于 Object。经验：泛型要使用一路都用。要不用，一路都不要用。`}</Blue>
            </P>
            <P>
                <Dot></Dot>{`如果泛型结构是一个接口或抽象类，则不可创建泛型类的对象。(即不能多态接收实现类)(这个当然不用死记，编译器不会让你通过的)`}
            </P>
            <P>
                <Dot></Dot>{`jdk1.7，泛型的简化操作：ArrayList<Fruit> flist = new ArrayList<>();（后面只要一对尖括号就行，不用重复书写）`}
            </P>
            <P>
                <Dot></Dot><Blue>{`泛型的指定中不能使用基本数据类型，可以使用包装类替换。`}</Blue>
            </P>
            <P>
                <Dot></Dot><Blue>{`在类/接口上声明的泛型，在本类或本接口中即代表某种类型，可以作为非静态属性的类型、非静态方法的参数类型、非静态方法的返回值类型。但在静态方法中不能使用类的泛型。`}</Blue>
            </P>
            <P>
                <Dot></Dot>异常类不能是泛型的。
            </P>
            <P>
                <Dot></Dot>不能使用new E[]。但是可以：E[] elements = (E[])new Object[capacity]; 参考：ArrayList源码中声明：Object[] elementData，而非泛型参数类型数组。
            </P>
            <P>
                <Dot></Dot>{`父类有泛型，子类可以选择保留泛型也可以选择指定泛型类型：`}
            </P>
            <P>
                1、<Blue>子类不保留父类的泛型：按需实现（可以在继承的时候给定一个具体的类型，或者不给类型，直接擦除父类的泛型）</Blue>
            </P>
            <P>
                直接给定类型，那么该子类就不再是泛型类：
            </P>
            <ImagesGroup
                srcArr={[img641]}
            ></ImagesGroup>
            <P>
                直接不给泛型，擦除父类的泛型：
            </P>
            <ImagesGroup
                srcArr={[img642]}
            ></ImagesGroup>
            <P>
                2、<Blue>子类保留父类的泛型：泛型子类（可以选择全部保留，或者局部保留）</Blue>
            </P>
            <P>示例中，我们给父类 Person 定义了两个泛型 {`<T, K>`}</P>
            <P>
                全部保留：
            </P>
            <ImagesGroup
                srcArr={[img643]}
            ></ImagesGroup>
            <P>部分保留：</P>
            <ImagesGroup
                srcArr={[img644]}
            ></ImagesGroup>

            <P>
                简化图：
            </P>
            <ImagesGroup
                srcArr={[img645]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <P>
                <Bold>泛型方法：</Bold>
            </P>

            <P>
                <Dot color="black"></Dot><Bold>方法，也可以被泛型化，不管此时定义在其中的类是不是泛型类。在泛型方法中可以定义泛型参数，此时，参数的类型就是传入数据的类型。</Bold>
            </P>
            <P>
                <Dot></Dot>泛型方法的格式：
            </P>
            <P><Bold>{`[访问权限] <泛型> 返回类型 方法名([泛型标识 参数名称]) 抛出的异常`}</Bold></P>
            <ImagesGroup
                srcArr={[img647]}
            ></ImagesGroup>
            <P>
                <Dot></Dot>泛型方法声明泛型时也可以指定上限。
            </P>

            {/* 
                public static <T> void fromArrayToCollection(T[] a, Collection<T> c) {
                    for (T o : a) {
                        c.add(o);
                    }
                }
                public static void main(String[] args) {
                    Object[] ao = new Object[100];
                    Collection<Object> co = new ArrayList<Object>();
                    fromArrayToCollection(ao, co);
                    String[] sa = new String[20];
                    Collection<String> cs = new ArrayList<>();
                    fromArrayToCollection(sa, cs);
                    Collection<Double> cd = new ArrayList<>();
                    // 下面代码中T是Double类，但sa是String类型，编译错误。
                    // fromArrayToCollection(sa, cd);
                    // 下面代码中T是Object类型，sa是String类型，可以赋值成功。
                    fromArrayToCollection(sa, co);
                }
            */}

            <ComLine></ComLine>

            <P>
                <Bold>下面我们尝试用泛型方法编写一个“将 Array 数组中的元素 添加到 Conllection 中”的方法。</Bold>
            </P>
            <P>首先，创建一个工具类 utils，然后编写 静态方法 fromArrayToCollection：</P>
            <ImagesGroup
                srcArr={[img648]}
            ></ImagesGroup>

            <P>
                然后我们来尝试使用这个方法：
            </P>
            <ImagesGroup
                srcArr={[img649]}
            ></ImagesGroup>

            <P>
                然后我们在继承中看看泛型的表现：
            </P>

            <ImagesGroup
                srcArr={[img650]}
            ></ImagesGroup>

            <P>
                结果是 creature 的实例不能传入，因为泛型规定是 person 类型的，所以传入的参数必须是 person 极其子类类型。
            </P>

            <ImagesGroup
                srcArr={[img651]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module