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

import img200 from '@/assets/images/img200.png'
import img201 from '@/assets/images/img201.png'
import img202 from '@/assets/images/img202.png'

import img218 from '@/assets/images/img218.png'
import img219 from '@/assets/images/img219.png'
import img220 from '@/assets/images/img220.png'
import img221 from '@/assets/images/img221.png'
import img222 from '@/assets/images/img222.png'
import img223 from '@/assets/images/img223.png'

import img230 from '@/assets/images/img230.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                其实这一节讲的是对象父子组件之间的转换，可以类比之前讲过的基础类型之间的转换，对比差别更好记忆。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img230]}
            ></ImagesGroup>

            <ParagraphWrapper>
                直接上代码说。
            </ParagraphWrapper>
            
            <ParagraphWrapper>
                还是用之前的这个代码，Person 类，定义两个属性，两个方法，然后用 man 和 woman 去继承 Person 类，都重写 Person 类中的两个方法，且都有自己各自独有的方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img200, img201, img202]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们在 main 方法中，用 Person 引用类型，接收一个 Man 对象，并调用 eat 方法。（其实就是普通的多态）
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img218]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们要知道，用多态 创建出来的 Person 对象，是不能调用子类 Man 特有的方法的,直接编译报错，也就是所谓的“<Red>编译看左边</Red>”。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img219]}
            ></ImagesGroup>

            <ParagraphWrapper>
                另外我们想用 p1 调用 Man 类中的 isSmoking 属性也是不可以的（<Red>属性没有多态，且“编译运行都看左边”</Red>），所以 Person 上没有 isSmoking 属性，于是报错。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img220]}
            ></ImagesGroup>

            <ParagraphWrapper>
                那么现在有个问题，在<Blue> new Man </Blue>这个语句中, <Blue>isSmoking 这个属性有没有在堆空间中创建呢</Blue>？
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    答案是，有的，只是用栈空间中的 Person 类型的引用变量 p1 接收的时候，因为 java 的多态特性，屏蔽了对这个属性的引用。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                类似的，Man 类中独有的方法也是类似的情况，new 的时候是有这些个独有方法的，只是以为多态特性， p1 接收不到引用。
            </ParagraphWrapper>

            <ParagraphWrapper>
                好，现在如果我们就是<Blue>想要在多态的情境下，调用这些“子类特有”的属性和方法</Blue>，该怎么办？
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>一个简单的思路，那就是让编译器看到的 p1 不再是 Person 类型的，而是 Man 类型的</Blue>。说到这，有没有<Blue>想起</Blue>之前说过的<Blue>自动类型转换的逆过程</Blue>--“<Red>强制类型转换</Red>”
            </ParagraphWrapper>

            <ComLine></ComLine>
            
            <ParagraphWrapper>
                <Blue>
                    如何才能调用子类所特有的属性和方法？
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    使用强制类型转化符，又可以称为“<Red>向下转型</Red>”。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img221]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    强制类型转化符，和之前在基础类型说过的转化符是一样的，是<Red>一对小括号</Red>。示例如下：
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img222]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，使用强转符之后，Man 里的 方法、属性，已经可以调用了。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                但是，一说到“强转”，我们第一个想到的应该是有风险，类似基础类型之前的强转，就有精度损失的问题。同样的，类之前的强制转换，也是有风险的，有可能转化不成功的。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img223]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码中，我们将之前的，强转成 Man 类型，改成了强转为 Woman 类型，然后调用 Woman 特有的 goShopping 方法，可以看到，编译期没有报错，但是一运行就报错了。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>控制台报的是“类型转换错误”,这也就是强转的风险。<Red>关键是 Man 和 Woman 并不是子父类关系</Red></Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Red>
                    为了在开发中，避免导致这样的错误，我们引入了一个关键字：“instanceof”
                </Red>
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module