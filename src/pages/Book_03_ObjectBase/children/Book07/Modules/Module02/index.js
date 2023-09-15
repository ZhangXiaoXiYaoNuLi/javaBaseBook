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

import img297 from '@/assets/images/img297.png'
import img298 from '@/assets/images/img298.png'
import img299 from '@/assets/images/img299.png'
import img300 from '@/assets/images/img300.png'
import img301 from '@/assets/images/img301.png'
import img302 from '@/assets/images/img302.png'
import img303 from '@/assets/images/img303.png'
import img304 from '@/assets/images/img304.png'
import img305 from '@/assets/images/img305.png'
import img306 from '@/assets/images/img306.png'
import img307 from '@/assets/images/img306.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                接口概述
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>一方面，有时必须从几个类中派生出一个子类，继承它们所有的属性和方法。但是，Java不支持多重继承。有了接口，就可以得到多重继承的效果。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>另一方面，有时必须从几个类中抽取出一些共同的行为特征，而它们之间又没有is-a的关系，仅仅是具有相同的行为特征而已。例如：鼠标、键盘、打印机、扫描仪、摄像头、充电器、MP3机、手机、数码相机、移动硬盘等都支持USB连接。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>接口就是规范，定义的是一组规则，体现了现实世界中“如果你是/要...则必须能...”的思想。<Red>继承是一个"是不是"的关系，而接口实现则是 "能不能"的关系</Red>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot><Red>接口的本质是契约，标准，规范</Red>，就像我们的法律一样。制定好后大家都要遵守。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>接口（interface）<Blue>是<Red>抽象方法</Red>和<Red>常量值定义</Red>的集合</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                接口的特点：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>用interface来定义。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot><Blue>接口中的<Red>所有成员变量</Red>都<Red>默认</Red>是由<Red>public static final</Red>修饰的</Blue>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot><Blue>接口中的<Red>所有抽象方法</Red>都<Red>默认</Red>是由<Red>public abstract</Red>修饰的。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img297]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Blue>上图中，尝试在接口中，给定义的方法前面，加上 public abstract，IDEA 编辑器会告诉你，这是 redundant（冗余） 的。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot><Red>接口中没有构造器。</Red>
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Dot></Dot>接口采用<Blue>多继承</Blue>机制。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                接口的要点：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>定义Java类的语法格式：<Blue>先写extends，后写implements</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`语法： class SubClass extends SuperClass implements InterfaceA{ }`}
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>一个类可以实现多个接口，接口也可以继承其它接口。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>实现接口的类中必须提供接口中所有方法的具体实现内容，方可实例化。否则，仍为抽象类。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><>接口的主要用途就是被实现类实现。（面向接口编程）</>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>与继承关系类似，接口与实现类之间存在<Blue>多态性</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot><Blue>{`接口和类是并列关系，或者可以理解为一种特殊的类。从本质上讲，接口是一种特殊的抽象类，这种抽象类中只包含常量和方法的定义(JDK7.0及之前)，而没有变量和方法的实现。`}</Blue>
            </ParagraphWrapper>

            {/* 
                 
            */}

            <ComLine></ComLine>

            <SmallTitle>
                接口的定义与使用：
            </SmallTitle>

            <ParagraphWrapper>
                在java中，类和接口是并列的两个结构。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首选我们来定义一个 Flyable 接口，也就是“会飞”这件事：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img298]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里我们首先第一了一个全局的常量“最高速度”-Max_SPEED。<Blue>可以看到，我们前面的修饰词 public static final ,是灰色的，其实这是接口定义变量默认的修饰符，可以不写，写上去也没错，就是冗余</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img299]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>接口中定义的常量，是静态全局常量，可以直接用 “接口名.变量名” 直接调用</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后，我们来证实一下，接口中变量的 public static final 是默认修饰符这件事。首先，我们在接口中定义一个 MIN_SPEED 常量，且不使用修饰符。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img300]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后，我们尝试在 main 方法中，给这个 MIN_SPEED 赋值。可以发现，IDEA提示我们，它是 final 的，即使我们没有显式使用 final 修饰它。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img301]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后，我们尝试在接口中定义抽象方法，定义一个 fly 方法，和定义常量是类似的， public abstract 是默认修饰符。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img302]}
            ></ImagesGroup>

            <ParagraphWrapper>
                public abstract 是可以省略的，下面我们继续定义一个 stop 方法。（<Blue>显然这个 stop 方法，也是 abstract 修饰的，因为它并没有方法体，且合法</Blue>）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img303]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>
                    尤其注意，接口中不能定义构造器。所以也就意味着，接口不能被实例化。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                在 java 中，接口都是通过被 类实现，来体现价值的。下面我们定义一个“飞机”类，来实现刚刚定义的 “会飞” Flyable 接口。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img304]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里先提一下，在IDEA中，在书写了 implement 某某接口之后，在类中，可以是用 “alt + ins” 按键，可以快捷选择要实现的接口方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>作为 implement 某接口的类，它要么实现全部的接口方法，要么就作为“抽象类”，实现部分的接口方法。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>也就是说，如果你没有在类中实现全部的接口方法，那么这个类必须使用 abstract 修饰。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img305]}
            ></ImagesGroup>
            <ParagraphWrapper>
                在Flyable接口中，有两个接口方法 fly 和 stop，这里我们在 Plane （<Blue>又叫实现类</Blue>） 中尝试只实现其中的 fly 方法，可以发现，IDEA编辑器给我们弹的提示。
                <Blue>意思是，要么在这个类前面加上 abstract 修饰，要么就把剩下的 stop 方法实现了。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>这里和抽象类和实现类的关系类似，当你把抽象方法全部实现完，那就可以造对象了。没有的话，就继续当抽象类。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img306]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后我们把这两个抽象方法都“实现”了，<Blue>注意这里，我们说的不是“重写”，而是说“实现”更加合理</Blue>。然后我们可以实例化一个 Plane 对象试试。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img307]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    当然，“会飞”这个属性，不止适用于飞机Plane，像风筝、子弹等等都是可以继承这个 Flyable 接口，实现抽象方法的。
                </Blue>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module