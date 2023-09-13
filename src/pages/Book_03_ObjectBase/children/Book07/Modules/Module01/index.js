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

import img288 from '@/assets/images/img288.png'
import img289 from '@/assets/images/img289.png'
import img290 from '@/assets/images/img290.png'
import img291 from '@/assets/images/img291.png'
import img292 from '@/assets/images/img292.png'
import img293 from '@/assets/images/img293.png'
import img294 from '@/assets/images/img294.png'

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

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>即使子类已经实现了全部的抽象方法，但是如果是用 abstract 修饰的话，那就还是不能进行实例化对象。</Red>
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

            <ParagraphWrapper>
                <Bold>来个 demo ：</Bold>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img288]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里我们定义了一个“生物”抽象类，且在其中定义了一个抽象方法“呼吸”。（<Blue>类中有 abstract 关键字，那么类名必是 abstract 修饰的，但是类名是 abstract 修饰的，类中不一定有抽象方法</Blue>）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img289]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们定义一个 Person 类去集成 “生物” 类，并没有实现“呼吸”抽象方法哈，而是新增了一些属性、方法，还包括一个新的抽象方法。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img290]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后，我们用这个 Student 实现所有抽象方法。<Green>注意这里犯了一个错，虽然这里 Student 类已经实现了全部的抽象方法，但是上面代码中，还是使用了 abstract 修饰符修饰了 Student 类，所以，还是不能实例化 Student 对象的。</Green><Red>所以这里要把 abstract 修饰符去掉。</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img291]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后，我们实例化一个 Student 对象，调用了 breath 方法，得到的结果，是 学生类 具体实现的方法所执行的结果。
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
            

            <ParagraphWrapper>
                直接上代码，首先我们定义一个抽象类 Student，里面有一个抽象方法 study。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img292]}
            ></ImagesGroup>

            <ParagraphWrapper>
                接着，我们来到 main 方法中:
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img293]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码中，我们使用匿名子类具体实现了 Student 抽象类的 抽象方法 study。然后进行了实例化和方法调用。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>语法格式为：<Red>{`new 抽象类() { 在这里实现抽象方法 }`}</Red></Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img294]}
            ></ImagesGroup>

            <ParagraphWrapper>
                调用 study 方法，可以看到控制台输出。
            </ParagraphWrapper>

            <ComLine></ComLine>
        </div>
    </>)
}

export default Module