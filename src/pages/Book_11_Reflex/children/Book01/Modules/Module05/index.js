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

import img703 from '@/assets/images/img703.png'
import img704 from '@/assets/images/img704.png'
import img705 from '@/assets/images/img705.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P><Blue>下面四种方法的前三种，需要掌握</Blue></P>
           <P><Dot></Dot><Bold>前提：若已知具体的类，通过类的class属性获取</Bold>，该方法最为安全可靠，程序性能最高</P>
           <P>实例：Class clazz = String.class;</P>

           <ImagesGroup
                srcArr={[img703]}
            ></ImagesGroup>
            <P>分3步:</P>
            <P><Tp></Tp>使用 “.class ” 获取 Person类的 class 对象。</P>
            <P><Tp></Tp>然后使用这个 class 对象，调用 getConstructor 方法，获取构造器。</P>
            <P><Tp></Tp>最后，调用构造器的 newInstance 方法，并传入构造器实参，获取实例。</P>
            <P><Tp></Tp>当然，具体调用 Person 实例的时候，之前记得做强转。</P>
           

           <ComLine></ComLine>
           <P><Dot></Dot><Bold>前提：已知某个类的实例，调用该实例的getClass()方法获取Class对象</Bold></P>
           <P>实例：Class clazz = “www.atguigu.com”.getClass();</P>

           <P>下面上代码：</P>

           <ImagesGroup
                srcArr={[img704]}
            ></ImagesGroup>

            <P>主要是获取 Class 实例 的地方不同，是 Person 实例调用 getClass 方法，其它获取新 Person 实例的步骤是一样的。</P>

           <ComLine></ComLine>

           <P><Dot></Dot><Bold>前提：已知一个类的全类名，且该类在类路径下，可通过 Class 类的静态方法forName()获取</Bold>，可能抛出ClassNotFoundException</P>
           <P>实例：Class clazz = Class.forName(“java.lang.String”);</P>

           <P>下满上代码：</P>
           <ImagesGroup
                srcArr={[img705]}
            ></ImagesGroup>
            
            <P>也没啥好说的，</P>

           <ComLine></ComLine>


           <P><Dot></Dot>其他方式(不做要求)</P>
           <P>像：ClassLoader cl = this.getClass().getClassLoader();</P>
           <P>还有：Class clazz4 = cl.loadClass(“类的全类名”);</P>

           <ComLine></ComLine>

           <SmallTitle>哪些类型，可以有 Class</SmallTitle>

           {/* 
            （1）class：
            外部类，成员(成员内部类，静态内部类)，局部内部类，匿名内部类
            （2）interface：接口
            （3）[]：数组
            （4）enum：枚举
            （5）annotation：注解@interface
            （6）primitive type：基本数据类型
            （7）void
           */}

           <P><Dot></Dot>各种类 class：外部类，成员类（成员内部类，静态内部类），局部内部类，匿名内部类</P>
           <P><Dot></Dot>接口 interface 。</P>
           <P><Dot></Dot>{`数组 [] 。`}</P>
           <P><Dot></Dot>枚举 enum 。</P>
           <P><Dot></Dot>注解 annotation 。</P>
           <P><Dot></Dot>基本数据类型 primitive type 。</P>
           <P><Dot></Dot>void 。</P>

           {/* <ComLine></ComLine>
           <SmallTitle>Class 实例对应的结构的说明</SmallTitle> */}
           
        </div>
    </>)
}

export default Module