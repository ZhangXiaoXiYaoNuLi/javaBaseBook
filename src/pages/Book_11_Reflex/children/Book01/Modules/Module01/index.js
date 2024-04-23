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

import img696 from '@/assets/images/img696.png'
import img697 from '@/assets/images/img697.png'
import img698 from '@/assets/images/img698.png'
import img699 from '@/assets/images/img699.png'
import img700 from '@/assets/images/img700.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <P><Dot></Dot><span>
                Reflection（反射）是被视为<Red>动态语言</Red>的关键，反射机制允许程序在执行期借助于Reflection API取得任何类的内部信息，并能直接操作任意对象的内部属性及方法。
                </span></P>
                <ComSpace></ComSpace>
            <P><Dot></Dot><span>加载完类之后，在堆内存的方法区中就产生了一个Class类型的对象（一个类只有一个Class对象），这个对象就包含了完整的类的结构信息。我们可以通过这个对象看到类的结构。<Red>这个对象就像一面镜子，透过这个镜子看到类的结构，所以，我们形象的称之为：反射</Red>。</span></P>
            <ComLine></ComLine>
            {/* 
                1、动态语言
                是一类在运行时可以改变其结构的语言：例如新的函数、对象、甚至代码可以
                被引进，已有的函数可以被删除或是其他结构上的变化。通俗点说就是在运
                行时代码可以根据某些条件改变自身结构。
                主要动态语言：Object-C、C#、JavaScript、PHP、Python、Erlang。
                2、静态语言
                与动态语言相对应的，运行时结构不可变的语言就是静态语言。如Java、C、
                C++。
                Java不是动态语言，但Java可以称之为“准动态语言”。即Java有一定的动
                态性，我们可以利用反射机制、字节码操作获得类似动态语言的特性。
                Java的动态性让编程的时候更加灵活
            */}
            <P><Bold>补充：动态语言 vs 静态语言</Bold></P>
            <P><Dot></Dot><Bold>动态语言</Bold></P>
            <P><>是一类在运行时可以改变其结构的语言：例如新的函数、对象、甚至代码可以被引进，已有的函数可以被删除或是其他结构上的变化。通俗点说就是<Red>在运行时代码可以根据某些条件改变自身结构</Red>。</>：</P>
            <P>主要的动态语言：<Blue>Object-C、C#、JavaScript、PHP、Python、Erlang</Blue>。</P>
            <ComSpace></ComSpace>
            <P><Dot></Dot><Bold>静态语言</Bold></P>
            <P>与动态语言相对应的，<Blue>运行时结构不可变的语言就是静态语言。如Java、C、C++</Blue>。</P>
            <div
                style={{
                    padding: '6px',
                    backgroundColor: '#f1f2f4',
                    borderRadius: '6px',
                }}
            >
                <P>Java不是动态语言，但Java可以称之为“<Blue>准动态语言</Blue>”。即Java有一定的动态性，我们可以利用反射机制、字节码操作获得类似动态语言的特性。Java的动态性让编程的时候更加灵活</P>
            </div>

            <ComLine></ComLine>

            <P><Dot></Dot>Java反射机制研究及应用</P>
            <P><Tp></Tp>在运行时判断任意一个对象所属的类</P>
            <P><Tp></Tp>在运行时构造任意一个类的对象</P>
            <P><Tp></Tp>在运行时判断任意一个类所具有的成员变量和方法</P>
            <P><Tp></Tp>在运行时获取泛型信息</P>
            <P><Tp></Tp>在运行时调用任意一个对象的成员变量和方法</P>
            <P><Tp></Tp>在运行时处理注解</P>
            <P><Tp></Tp>生成动态代理</P>

            <ComLine></ComLine>

            <SmallTitle>反射之前，类的实例化等操作</SmallTitle>
            <P>首先，我们要创建一个 Person 类，给它提供一些内部结构：</P>
            <ImagesGroup
                srcArr={[img696]}
            ></ImagesGroup>
            <P>定义了两个属性，以及空参、带参构造器，两个方法，和一些getter、setter。</P>
            <P>下面我们尝试实例化它，以及调用各个方法。另外<Blue>里面还有个私有的构造函数，初始化 name 属性。还有一个私有属性 hobby。</Blue></P>
            <P>结论主要是<Blue>普通的实例化方式，是不能调用类中私有的属性、方法的</Blue>。</P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>实例化，以及方法调用等代码就略了，还不会建议回炉重造~</P>
            <ComLine></ComLine>

            <SmallTitle>使用反射，实现同上的操作</SmallTitle>
            
            <P>下面看看怎么使用反射创建一个 Person 的实例：</P>
            <ImagesGroup
                srcArr={[img697]}
            ></ImagesGroup>
            <ComLine></ComLine>
            <P><Dot></Dot>通过反射，调用对象指定的属性、方法</P>
            <P><Tp></Tp><Bold>调用属性：</Bold></P>
            <ImagesGroup
                srcArr={[img698]}
            ></ImagesGroup>
            <P>另外注意，这里的这种调用方法，在属性权限 public 以下（包括默认权限），都会报错“权限不足”。</P>
        
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P><Dot></Dot><Bold>调用方法：</Bold></P>
            <ImagesGroup
                srcArr={[img699]}
            ></ImagesGroup>
            <P>不过上面这个方法是没有参数的，下面我们试试需要传参的方法怎么写：</P>
            <ImagesGroup
                srcArr={[img700]}
            ></ImagesGroup>
            <P>注意到这里 getDeclaredMethod 获取方法的时候，要给参数类型 class ，然后在代理调用 invoke 的时候，进行传参。</P>

        </div>
    </>)
}

export default Module