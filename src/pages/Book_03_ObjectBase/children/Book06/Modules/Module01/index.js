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
    Green,
    Bold,
} from '@/components/index.js'

import img268 from '@/assets/images/img268.png'
import img269 from '@/assets/images/img269.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                当我们编写一个类时，其实就是在描述其对象的属性和行为，而并没有产生实质上
                的对象，只有通过new关键字才会产生出对象，这时系统才会分配内存空间给对象，
                其方法才可以供外部调用。我们有时候希望无论是否产生了对象或无论产生了多少
                对象的情况下，<Blue>某些特定的数据在内存空间里只有一份</Blue>，例如所有的中国人都有个
                国家名称，每一个中国人都共享这个国家名称，不必在每一个中国人的实例对象中
                都单独分配一个用于代表国家名称的变量
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                静态属性、静态方法的设计理念
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>类属性作为该类各个对象之间共享的变量。<Blue>在设计类时,分析哪些属性<Red>不因对象的不同而改变</Red>，将这些属性设置为类属性。相应的方法设置为类方法</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>如果方法与调用者无关，则这样的方法通常被声明为类方法，由于<Red>不需要创建对象就可以调用类方法</Red>，从而简化了方法的调用</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                static关键字的使用
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>使用范围：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    在Java类中，可用static修饰<Red>属性、方法、代码块、内部类</Red>
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>被修饰后的成员具备以下特点：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、随着类的加载而加载
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、优先于对象存在
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、修饰的成员，被所有对象所共享
            </ParagraphWrapper>
            <ParagraphWrapper>
                4、访问权限允许时，可不创建对象，直接被类调用
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                类变量（静态属性）：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img268]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>类变量（类属性）由该类的所有实例共享。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    可以直接用“类名.静态属性”调用，然后不管是调用静态方法改变属性的值，还是用“类名.静态属性”赋值，再访问这个属性，都是改变之后的值。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    静态属性，可以理解为是在内存中“伴生”于类开辟的一个全局变量。
                </Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                类方法（静态方法）：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>没有对象的实例时，可以用<Red>{`类名.方法名()`}</Red>的形式访问由static修饰的类方法。（<Green>静态方法，静态属性，用实例化对象都是可以访问到的，可以理解为“直接类名调用”是锦上添花，而不是“只能用类名调用”</Green>）
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Blue>在<Red>static方法内部只能访问类的static修饰的属性或方法</Red>，不能访问类的非static的结构。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Blue>因为不需要实例就可以访问static方法，因此<Red>static方法内部不能有this。（也不能有super）</Red></Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>static修饰的方法不能被重写。</Red><Blue>（<Red>父子两个类</Red>如果出现了<Red>同名</Red>的 <Red>static 方法</Red>，<Red>那不叫重写</Red>，每个 static 方法都属于各自类。）</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                静态成员和实例成员的内存对比：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img269]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>静态成员是与类伴生存在于方法区的。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                这里正好说说，方法区平常一般是用来保存啥的：
            </ParagraphWrapper>

            <ParagraphWrapper>
                方法区中存在<Red>类的加载信息、静态域、常量池</Red>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module