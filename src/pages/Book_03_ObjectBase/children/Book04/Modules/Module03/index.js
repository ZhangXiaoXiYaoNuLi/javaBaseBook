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

import img172 from '@/assets/images/img172.png'
import img173 from '@/assets/images/img173.png'
import img174 from '@/assets/images/img174.png'
import img175 from '@/assets/images/img175.png'
import img176 from '@/assets/images/img176.png'
import img177 from '@/assets/images/img177.png'
import img178 from '@/assets/images/img178.png'

const BoldNum = (props) => {
    return <div
        style={{
            fontSize: '16px',
            fontWeight: 'bold',
            display: 'inline-block',
            color: 'black',
        }}
    >
        {props.children}
    </div>
}

const Module = (props) => {

    

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                重写对应英文<Blue>overwrite</Blue>或者<Blue>override</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                之前讲的重载，叫做 overload 。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>定义：
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                在子类中可以根据需要对从父类中继承来的方法进行改造，也称为方法的重置、覆盖。在<Blue>程序执行时<Red>（注意到这里说的是程序执行时）</Red>，子类的方法将覆盖父类的方法（实际调用的是子类的方法）</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                重写可以理解成是一种“覆盖”，就是执行时，完全不用父类被重写的方法了，父类方法被无视掉，直接执行子类的。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>要求：
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <BoldNum>1、</BoldNum>子类重写的方法必须和父类被重写的方法<Red>具有相同的方法名称、参数列表</Red>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <BoldNum>2、</BoldNum><Blue>子类重写的方法的返回值类型不能大于（要小于或等于）父类被重写的方法的返回值类型</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先的一点就是，<Blue>父类中的定义的 void 的方法，子类重写只能为 void 的</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                其次我们才再来看其他<Blue>有类型的返回值的父类方法。比如是 A 类型，那么子类重写的时候，返回值的类型，必须是 A 类型或者是 A 的子类</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img177]}
            ></ImagesGroup>

            <ParagraphWrapper>
                从上图可以看出，即使不涉及重写，在普通的方法定义中，我们规定返回的 Object 类型，那么返回它的子类也是可以的，所以这里返回 String 类型是可以的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以，很容易类比到重写中。子类返回值类型，要是父类返回值类型的同类型，或是父类返回值类型的子类。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>而在被重写的方法返回的是基础类型的时候，则子类重写的方法的返回值类型，必须是相同的返回值类型</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以总结一下，就是 <Red>父类被重写方法是 void 返回类型，或者返回基础类型的，那么子类重写的时候，返回值类型要保持一致。如果不是，那么子类重写的返回值，得是父类返回值的同类，或子类。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    所以这里提一嘴，关于重写中返回基本类型的情况，很容易联想到，一个 int 类型的 1，是可以赋值给 double 类型的变量的，为什么在重写中就要保持一致？这个是因为 int 类型 是可以 强转为 double 类型的，是类型转化，但是！我们不能认为 int 是 double 的子类！所以，重写的时候，不存在类型强转，而 int 更不是 double 的子类，只是两个同等地位的类型，所以不符合重写规则。
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img178]}
            ></ImagesGroup>
            <ParagraphWrapper>
                从上面可以看出，在方法 返回值方面，不会进行自动类型转换，所以上面说的 基础类型 返回值的重新，必须保证类型相同，就很好理解了。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <BoldNum>3、</BoldNum><Red>子类重写的方法使用的访问权限不能小于（要大于或等于）父类被重写的方法的访问权限，子类不能重写父类中声明为private权限的方法</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然，父类中的 private 定义了方法，子类中还是可以定义 同名 的方法的，但是此时不构成“重写”。
            </ParagraphWrapper>
            <ParagraphWrapper>
                来看一个例子：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img172]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里先给父类 Person 添加一个 私有的 show 方法，然后在 walk 方法中调用 show，方法。
            </ParagraphWrapper>
            <ParagraphWrapper>
                然后我们看看子类
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img173]}
            ></ImagesGroup>

            <ParagraphWrapper>
                注意到子类中，是没有重写 walk 方法的，但是有一个权限更大的 public 的 show 方法，现在的问题是 new 一个子类实例，调用 walk 方法，调用的到底是哪个 show 方法。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img174]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到控制台输出的结果是“我是一个人”，也就是调用了父类的 show 方法。所以证明子类的 show 方法 不构成重写，不然的话，这样写，在执行的时候，应该执行子类的 show 方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们把父类的 show 方法，改为 public 权限的再试试
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img175]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后看看输出：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img176]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以发现，调用的是子类 student 的 show 方法了。也证明了上面的结论，父类private方法不能被重写。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <BoldNum>4、</BoldNum><Red>子类方法抛出的异常不能大于（要小于或等于）父类被重写方法的异常</Red>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot>注意：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>子类与父类中同名同参数的方法必须同时声明为非static的</Red>（即为重写），<Red>或者同时声明为static的</Red>（不是重写）。因为static方法是属于类的，子类无法覆盖父类的方法。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                口诀：<Red>子类权限大，异常类型小，私有不重写，静态要相同</Red>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                理解就是，子类的权限要更大，异常和类型的范围要更小，父类私有方法不能重写，父子同名方法，要保持同为静态或同不为静态。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>当然，一般<Red>在开发中</Red>，不用记得这么细，因为开发的时候，<Red>都是直接从父类 复制方法声明，然后到子类粘贴</Red>，然后在方法体里写就是了</Blue>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module