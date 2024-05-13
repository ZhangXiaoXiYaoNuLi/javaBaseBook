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

const blue = 'rgb(22, 119, 255)'

import img708 from '@/assets/images/img708.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
           {/* 
            //1.根据全类名获取对应的Class对象
            String name = “atguigu.java.Person";
            Class clazz = null;
            clazz = Class.forName(name);
            //2.调用指定参数结构的构造器，生成Constructor的实例
            Constructor con = clazz.getConstructor(String.class,Integer.class);
            //3.通过Constructor的实例创建对应类的对象，并初始化类属性
            Person p2 = (Person) con.newInstance("Peter",20);
            System.out.println(p2);
           */}


            {/* rgb(22, 119, 255) */}
           <P><Dot color={blue}></Dot><Blue>根据全类名获取对应的Class对象</Blue></P>
           <P><Red>String name = “children.Person";</Red></P>
           <P><Red>Class clazz = null;</Red></P>
           <P><Red>clazz = Class.forName(name);</Red></P>
           <P><Dot color={blue}></Dot><Blue>调用指定参数结构的构造器，生成Constructor的实例</Blue></P>
           <P><Red>Constructor con = clazz.getConstructor(String.class,Integer.class);</Red></P>
           <P><Dot color={blue}></Dot><Blue>通过Constructor的实例创建对应类的对象，并初始化类属性</Blue></P>
           <P><Red>Person p2 = (Person) con.newInstance("Peter",20);</Red></P>
           <P><Red>System.out.println(p2);</Red></P>

           <ImagesGroup
                srcArr={[img708]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module