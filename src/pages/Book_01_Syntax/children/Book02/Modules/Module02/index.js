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
import RedFontWrapper from '@/components/RedFontWrapper'

import img5 from '@/assets/images/img5.png'

import img6 from '@/assets/images/img6.png'

const Module02 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>Java中的数据类型</SmallTitle>

        <ImagesGroup srcArr={[img5]}></ImagesGroup>

        <ComSpace></ComSpace>

        <ParagraphWrapper>
            一共<RedFontWrapper>8</RedFontWrapper>种
            <RedFontWrapper>基础类型</RedFontWrapper>
            ，<RedFontWrapper>3</RedFontWrapper>种
            <RedFontWrapper>引用类型</RedFontWrapper>。
        </ParagraphWrapper>

        <ParagraphWrapper>
            要记住引用数据类型，有个方便的办法：
        </ParagraphWrapper>
        <ParagraphWrapper>
            引用数据类型，就是有三种，类（class）、数组（array）、接口（interface），
            他们的首字母，刚好组合成“cai”，也就是“菜”，c就是class（类），
            a就是array（数组），i就是interface（接口）。
        </ParagraphWrapper>
        <ParagraphWrapper>
            然后我们来看看非引用类型，也就是基础类型，有什么好记的方法：
        </ParagraphWrapper>
        <ParagraphWrapper>
            可以类比js，我们常用的字符串就是 java 的字符类型 char ，只不过这个的 char 是 “单个字符”
            然后是数值类型、布尔值类型，类比js很好记。比较麻烦的是数值类型，比js多了很多种类，就死记吧，
            数值类型就是分整数和小数的。整数是“byte short int long”，首字母是“bsil”，如果打成拼音，就是
            “笨死了”。接着是小数，有点常识都可以记得，是“float”、“double”。
        </ParagraphWrapper>
        <ParagraphWrapper>
            然后要注意的是“<RedFontWrapper>字符串是一个类</RedFontWrapper>”，是和基础类型“（单个）字符” char 类型区分的。
        </ParagraphWrapper>

        <ComSpace></ComSpace>
        <ComSpace></ComSpace>

        <ParagraphWrapper>
            下面是另一种维度（<RedFontWrapper>按声明的位置</RedFontWrapper>）的数据类型的区分，现在先看一看就行，等后面讲到面向对象再深入了解：
        </ParagraphWrapper>

        <ImagesGroup srcArr={[img6]}></ImagesGroup>

        <ParagraphWrapper>
            不过这里可以先理解一下，“类”是“汽车设计图纸”，所以你想坐车，有“类”是不够的，要用“类”来造出个“实例化对象”才行，就像用“汽车设计图纸”
            来造出一辆真正的汽车（实例化对象），你才有车坐。而这里 static 修饰的属性，就是“设计图纸”的属性，比如图纸上的第一个字，就是 static（静态）的。
            因为无论谁，什么时候，拿到这份图纸，纸还是那张纸，字还是那个字。
        </ParagraphWrapper>
        <ParagraphWrapper>
            而不用static修饰的属性是什么呢？就类似设计图纸上规定，汽车有引擎。那么造出来的汽车都有引擎。但是注意这里的引擎都是归各自汽车自己所有的。
            虽然造了两辆一样的车，都有长得一样的引擎，但始终不是同一个引擎。
        </ParagraphWrapper>

    </div>
}

export default Module02