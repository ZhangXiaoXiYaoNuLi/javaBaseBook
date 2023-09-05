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
} from '@/components/index.js'

import img198 from '@/assets/images/img198.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                一个变量只能有一种确定的数据类型
                一个引用类型变量可能指向(引用)多种不同类型的对象
                Person p = new Student();
                Object o = new Person();//Object类型的变量o，指向Person类型的对象
                o = new Student(); //Object类型的变量o，指向Student类型的对象
                子类可看做是特殊的父类，所以父类类型的引用可以指向子类的对象：向
                上转型(upcasting)。
                 一个引用类型变量如果声明为父类的类型，但实际引用的是子类
                对象，那么该变量就不能再访问子类中添加的属性和方法
                Student m = new Student();
                m.school = “pku”; //合法,Student类有school成员变量
                Person e = new Student(); 
                e.school = “pku”; //非法,Person类没有school成员变量
                属性是在编译时确定的，编译时e为Person类型，没有school成员变量，因而编
                译错误。
            */}

            <ParagraphWrapper>
                <Dot></Dot>多态性，是面向对象中最重要的概念，在Java中的体现：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>对象多态性的描述：<Red>父类的引用指向子类的对象</Red>（可以直接应用在抽象类和接口上）。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>Java引用变量有两个类型：<Red>编译时类型</Red>和<Red>运行时类型</Red>。<Blue>编译时类型由声明该变量时使用的类型决定，运行时类型由实际赋给该变量的对象决定</Blue>。简称：<Red>编译时，看左边；运行时，看右边</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）若编译时类型和运行时类型不一致，就出现了对象的多态性（Polymorphism）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）多态情况下，<Blue>“看左边”：看的是父类的引用（父类中不具备子类特有的方法）</Blue>；<Blue>“看右边”：看的是子类的对象（实际运行的是子类重写父类的方法）</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>对象的多态 —在Java中,子类的对象可以替代父类的对象使用
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）一个变量只能有一种确定的数据类型。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）一个引用类型变量可能指向（引用）多种不同类型的对象。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img198]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>子类可看做是特殊的父类，所以父类类型的引用可以指向子类的对象：向上转型（upcasting）。</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <span style={{color: '#52c41a', fontWeight: 'bold'}}>这里挺好理解的，比如说我们定义了一个“长方形” a ，那么显然“正方形”是特殊的长方形，是符合长方形的定义的，把它赋值给 a 当然可以，而且就在此时 a 不止有长方形的属性，还可以调用特殊的正方形的重写的（长方形）的方法，比如“求面积”，可以直接用一个边长的平方获得，而不用原来的长乘宽</span>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
        </div>
    </>)
}

export default Module