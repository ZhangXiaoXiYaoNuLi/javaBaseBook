import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import ParagraphWrapper from '@/components/ParagraphWrapper'
import ComSpace from '@/components/ComSpace'
import ImagesGroup from '@/components/ImagesGroup'
// 代码展示组件，输入值为转化后的字符串数组
import CodeShowWrapper from '@/components/CodeShowWrapper'
// 卡片组件
import CardWrapper from '@/components/CardWrapper'
// 小标题
import SmallTitle from '@/components/SmallTitle'
// 红字wrapper
// import RedFontWrapper from '@/components/RedFontWrapper'
import Red from '@/components/RedFontWrapper'

import Dot from '@/components/Dot'

import img106 from '@/assets/images/img106.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot color={'red'}></Dot><Red>堆（Heap）</Red>，此内存区域的<Red>唯一目的就是存放对象实例</Red>，几乎所有的对象实例都在这里分配内存。这一点在Java虚拟机规范中的描述是：所有的对象实例以及数组（<Red>数组其实也是个对象</Red>）都要在堆上分配。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>通常所说的<Red>栈（Stack）</Red>，是指虚拟机栈。虚拟机栈用于<Red>存储局部变量</Red>等。局部变量表存放了编译期可知长度的各种基本数据类型（boolean、byte、char 、 short 、 int 、 float 、 long 、double）、对象引用（reference类型，它不等同于对象本身，是对象在堆内存的首地址）。 方法执行完，自动释放。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'red'}></Dot><Red>方法区（Method Area）</Red>，用于存储已被虚拟机加载的<Red>类信息、常量、静态变量、即时编译器编译后的代码等数据</Red>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img106]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先在上图中，左边的方块，是 栈，右边大块的方块，是 堆。
            </ParagraphWrapper>
            <ParagraphWrapper>
                首先我们来看第一行代码，new 了一个 person 实例。首先，是在栈空间中注册了一个“指针” p1，然后在堆空间中新建了一个person实例对象，最后通过赋值符号 =，把这个实例对象的首地址“赋值”给了栈空间中的“指针” p1。
            </ParagraphWrapper>
            <ParagraphWrapper>
                可以这样理解 p1，为什么在 栈 空间中，因为我们的这行代码，是写在main方法中的，而方法中定义的变量都是“局部变量”，而栈空间，就是用来存放局部变量的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                person 类在定义的时候，我们定义过一些变量，像 age 、name..，这些变量不同于局部变量，是存在于 堆 空间中的，也是在我们造好的对象里面的，这些成员变量如果没有初始赋值，会自动默认初始化值。
            </ParagraphWrapper>
            <ParagraphWrapper>
                所以第一行代码执行结束之后，我们新建的这个类中，age的值是1，name是默认值null，isMale是默认值false。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来看倒数第二句代码，new p3 = p1，这个时候实际上就在栈空间中，新建了一个“指针”，指向了堆空间中之前new给p1的实例对象，所以我们有两个指针，指向这个对象了。所以使用p3操作对象是等于用p1操作对象的。
            </ParagraphWrapper>
            <ParagraphWrapper>所以，在最后一句代码执行后，使用 p1 去调用 age，得到的值会是 10</ParagraphWrapper>
        </div>
    </>)
}

export default Module