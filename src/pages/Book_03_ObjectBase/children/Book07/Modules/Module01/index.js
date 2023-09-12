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

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Bold>抽象类的意义：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                随着继承层次中一个个新子类的定义，类变得越来越具体，而父类则更一
                般，更通用。类的设计应该保证父类和子类能够共享特征。有时将一个父
                类设计得非常抽象，以至于它没有具体的实例，这样的类叫做抽象类。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Bold>抽象类的作用：</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>
                当功能内部一部分实现是确定的，一部分实现是不确定的。这时可以把不确定的部分暴露出去，让子类去实现。
            </ParagraphWrapper>
            <ParagraphWrapper>
                换句话说，在软件开发中实现一个算法时，整体步骤很固定、通用，这些步骤已经在父类中写好了。但是某些部分易变，易变部分可以抽象出来，供不同子类实现。这就是一种模板模式。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>用<Red>abstract关键字</Red>来修饰一个类，这个类叫做<Red>抽象类</Red>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>用<Red>abstract</Red>来修饰一个方法，该方法叫做<Red>抽象方法</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                抽象方法：只有方法的声明，没有方法的实现。以分号结束。语法如：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>{`public abstract void talk();`}</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>含有抽象方法的类必须被声明为抽象类。<Blue>（有抽象方法必是抽象类，抽象类不一定含有抽象方法）</Blue></Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>抽象类不能被实例化。抽象类是用来被继承的，抽象类的子类必须重写父类的抽象方法，并提供方法体。若没有重写全部的抽象方法，仍为抽象类。</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>不能用abstract修饰变量、代码块、构造器；</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>不能用abstract修饰私有方法、静态方法、final的方法、final的类。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>私有方法，不能重写；</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>静态方法，子类继承后编写同名方法也不能构成方法重写。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>final修饰的方法，不能重写。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>final修饰的类，不能继承，更别说方法重写了。</Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                所以说 abstract 不能修饰上面这些，很好理解。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Green>
                    abstract 关键字，只能用来描述 “类” 和 “方法”。然后它的存在就是为了： “ 子类重写（具体实现）父类抽象方法 ” 这件事存在的，所以两个条件缺一不可，那就是修饰的类可以继承，修饰的方法可以被重写。
                </Green>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Green>（反之，若不满足这两个条件的类和方法，那么也不能用 abstract 修饰）</Green>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                实际开发中常用的其中一种做法：
            </SmallTitle>

            <ParagraphWrapper>
                <Red>
                    使用抽象类的匿名子类对象。
                </Red>
            </ParagraphWrapper>

            <ComLine></ComLine>
        </div>
    </>)
}

export default Module