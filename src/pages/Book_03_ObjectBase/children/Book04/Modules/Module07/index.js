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

import img216 from '@/assets/images/img216.png'
import img217 from '@/assets/images/img217.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                虚拟方法调用(Virtual Method Invocation)
                 正常的方法调用
                Person e = new Person();
                e.getInfo();
                Student e = new Student();
                e.getInfo();
                 虚拟方法调用(多态情况下)
                子类中定义了与父类同名同参数的方法，在多态情况下，将此时父类的方法称为虚拟方法，父
                类根据赋给它的不同子类对象，动态调用属于子类的该方法。这样的方法调用在编译期是无法
                确定的。
                Person e = new Student();
                e.getInfo(); //调用Student类的getInfo()方法
                 编译时类型和运行时类型
                编译时e为Person类型，而方法的调用是在运行时确定的，所以调用的是Student类
                的getInfo()方法。——动态绑定
            */}

            <ParagraphWrapper>
                {'虚拟方法调用(Virtual Method Invocation)'}
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>正常的方法调用：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img216]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot> {'虚拟方法调用(多态情况下)：'}
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    子类中定义了与父类同名同参数的方法，<Red>在多态情况下，将此时父类的方法称为虚拟方法</Red>，父类根据赋给它的不同子类对象，动态调用属于子类的该方法。这样的方法调用在编译期是无法确定的。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img217]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot></Dot> {'编译时类型和运行时类型：'}
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    {`编译时e为Person类型，而方法的调用是在运行时确定的，所以调用的是Student类的getInfo()方法。---也就是“动态绑定”`}
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以说，多态是编译时行为，还是运行时行为？答案是<Red>运行时行为</Red>。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module