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

import img331 from '@/assets/images/img331.png'
import img332 from '@/assets/images/img332.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Blue>在 java7 中（包括 7 以前）</Blue>呢，<Blue>接口只能定义</Blue>两种东西，<Red>全局常量</Red>和<Red>抽象方法</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    而<Blue>在 java8</Blue> 中，接口<Blue>可以多定义两种</Blue>成员。<Red>静态方法</Red> 和 <Red>默认方法</Red>。
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                从技术角度来说，这是完全合法的，只是它看起来违反了接口作为一个抽象定义的理念。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Blue><Red>静态方法：</Red><Red>使用 static 关键字修饰</Red>。可以<Red>通过接口名直接调用静态方法</Red>，并执行其方法体。</Blue>我们经常在相互一起使用的类中使用静态方法。你可以在标准库中找到像Collection/Collections或者Path/Paths这样成对的接口和类。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>默认方法：</Red><Blue>默认方法<Red>使用 default 关键字修饰</Red>。可以<Red>通过实现类对象来调用</Red>。</Blue>我们在已有的接口中提供新方法的同时，还保持了与旧版本代码的兼容性。比如：java 8 API中对Collection、List、Comparator等接口提供了丰富的默认方法。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>默认方法 和 静态方法，都是有方法体，具体实现的。</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img331]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面是定义静态方法、默认方法的基础示例。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    可以注意到，static 关键字 和 default 关键字，是不能同时存在一个方法定义中的。要么是静态的，要么是默认的。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img332]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>
                    关于<Red>同名默认方法</Red>的情况：
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot>
                <Blue>
                    若一个接口中定义了<Red>一个默认方法</Red>，而另外一个接口中也定义了一个<Red>同名同参数的方法</Red>（<Red>不管此方法是默认方法，还是抽象方法，但不包括静态方法</Red>），在实现类<Red>同时实现这两个接口时</Red>，会出现：<Red>接口冲突</Red>。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot>
                <Blue> <Red>解决办法：</Red><Red>实现类必须覆盖接口中同名同参数的方法</Red>，来解决冲突。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot>
                <Blue>若一个接口中定义了<Red>一个默认方法</Red>，而<Red>父类中</Red>也定义了<Red>一个同名同参数的非抽象方法</Red>，则<Red>不会出现冲突问题</Red>。因为此时<Red>遵守：类优先原则</Red>。接口中具有相同名称和参数的默认方法会被忽略。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'rgb(82, 196, 26)'}></Dot>
                <Green>
                    其实上面就两种情况，两种情况的共同点：都是基于已经有一个接口中的默认方法，然后另一个方法是同名同参的。不同点是：另一个方法所处的位置不同。一个是处在另一个接口中（不管是不是默认方法），一个是处在父类中（非抽象方法）。
                </Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color={'rgb(82, 196, 26)'}></Dot>
                <Green>
                    第一种情况不用刻意去记，编辑器会提示的，知道到时要覆盖接口方法就行，第二种情况，就记一下“类优先”就行。
                </Green>
            </ParagraphWrapper>
            

            <ComLine></ComLine>
        </div>
    </>)
}

export default Module