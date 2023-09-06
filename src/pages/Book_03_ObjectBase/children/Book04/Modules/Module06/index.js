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
} from '@/components/index.js'

import img198 from '@/assets/images/img198.png'
import img199 from '@/assets/images/img199.png'
import img200 from '@/assets/images/img200.png'
import img201 from '@/assets/images/img201.png'
import img202 from '@/assets/images/img202.png'
import img203 from '@/assets/images/img203.png'
import img204 from '@/assets/images/img204.png'
import img205 from '@/assets/images/img205.png'
import img206 from '@/assets/images/img206.png'
import img207 from '@/assets/images/img207.png'
import img208 from '@/assets/images/img208.png'
import img209 from '@/assets/images/img209.png'
import img210 from '@/assets/images/img210.png'
import img211 from '@/assets/images/img211.png'
import img212 from '@/assets/images/img212.png'
import img213 from '@/assets/images/img213.png'
import img214 from '@/assets/images/img214.png'
import img215 from '@/assets/images/img215.png'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>多态性，是面向对象中最重要的概念，在Java中的体现：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>对象多态性的描述：<Red>父类的引用指向子类的对象</Red>（可以直接应用在抽象类和接口上）。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>Java引用变量有两个类型：<Red>编译时类型</Red>和<Red>运行时类型</Red>。<Blue>编译时类型由声明该变量时使用的类型决定，运行时类型由实际赋给该变量的对象决定</Blue>。简称：<Red>编译时，看左边；运行时，看右边</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）若编译时类型和运行时类型不一致，就出现了对象的多态性（Polymorphism）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）多态情况下，<Blue>“看左边”：看的是父类的引用（父类中不具备子类特有的方法）</Blue>；<Blue>“看右边”：看的是子类的对象（实际运行的是子类重写父类的方法）</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot>对象的多态 —在Java中,子类的对象可以替代父类的对象使用
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）一个变量只能有一种确定的数据类型。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）一个引用类型变量可能指向（引用）多种不同类型的对象。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img198]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>子类可看做是特殊的父类，所以父类类型的引用可以指向子类的对象：向上转型（upcasting）。</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Green>这里挺好理解的，比如说我们定义了一个“长方形” a ，那么显然“正方形”是特殊的长方形，是符合长方形的定义的，把它赋值给 a 当然可以，而且就在此时 a 不止有长方形的属性，还可以调用特殊的正方形的重写的（长方形）的方法，比如“求面积”，可以直接用一个边长的平方获得，而不用原来的长乘宽</Green>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>一个引用类型变量如果声明为父类的类型，但实际引用的是子类对象，那么该变量就<Red>不能</Red>再访问子类中添加的属性和方法（只能实际调用子类中重写的方法）</Blue>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img199]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>属性是在编译时确定的，编译时e为Person类型，没有school成员变量，因而编译错误。</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面来敲敲代码，了解细节
            </ParagraphWrapper>

            <ParagraphWrapper>
                来简单使用下多态先，首先创建一个 Person 类，然后对应创建两个继承 Person 的类，Man 和 Woman。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img200, img201, img202]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们来到 main 方法中，使用多态，new 一个 Woman 实例，用 Person 类型接收，并调用 eat 和 walk 方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img203]}
            ></ImagesGroup>

            <ParagraphWrapper>
                运行后的输出结果可以看到，虽然变量是 Person 类型的，但是调用方法的结果，却是 Woman 类的方法结果。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>多态，可以理解为，一种事物的多种形态。</Blue>
                <Red>按照上面的代码演示，可以想像多态的用法。就是你想改某个类的方法，可以写一个继承它的子类，然后重写你想改的父类方法，最后用多态形式调用。<Blue>（这个又被称为“虚拟方法调用”）</Blue></Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                那么我们可以使用“父类引用”，调用“多态子类特有的方法”吗？
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img204]}
            ></ImagesGroup>

            <ParagraphWrapper>
                尝试使用多态父类引用调用 Man 的特有方法 earnMoney ，直接编译报错了。证明上面那个问题的答案是否定的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>讲到多态，首先我们心里要有一个 “编译时” 和 “执行时” 分开的概念。</Green>
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以说，<Red>编译的时候，看的是“父类引用的类型”，这里父类 Person，显然没有 earnMoney 方法，所以报错。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                有一个办法，很好地证明“编译时看的是父类引用”，那就是在我们刚刚的 代码 main 方法中，按 alt + 鼠标左键，可以看看调用的 eat 方法，会跳到子类，还是父类 Person 的 eat 方法中。
            </ParagraphWrapper>
            <ParagraphWrapper>
                显然，会跳到父类 Person 的 eat 方法中。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>多态的使用前提：</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>1、必须有子父类（不仅仅是直接子父类）的继承关系。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>2、一定存在子类 重写 父类方法，不然没有意义。</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                为什么要有多态性？
            </SmallTitle>
            
            <ParagraphWrapper>
                <Blue>
                    如果没有多态性，那么后续我们要学到的抽象类、接口多久没有意义了。
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后这里先举个栗子说明一下，多态的用处。
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先我们来创建一个 Animal ，动物类。然后类中有两个方法，eat（吃） 和 shout（叫） 。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img205]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们再造两个 Animal 的子类， cat 和 dog ，并分别重写 eat 方法和 shout 方法。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img206, img207]}
            ></ImagesGroup>

            <ParagraphWrapper>
                接着我们创建一个测试类 AnimalTest，其中定义一个方法，方法形参是 一个 Animal 对象。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img208]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后我们来到 main 方法中测试：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img209]}
            ></ImagesGroup>

            <ParagraphWrapper>
                看输出结果，得到的是多态子类对象的，特有方法的结果。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    AnimalTest 类中的 func 方法，参数要求的是传入一个 Animal 实例对象，因为有多态性，所以我们传入 Animal 的子类也是可以的，然后 func 方法中调用的 传入对象，实际是执行了 Animal 子类重写的方法。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                看到这里，你可能觉得还是差点意思，所以<Blue>可以假设，如果没有多态性的话</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                那么上面那个 func 方法的传参，是不是只能 new 一个 Animal 实例对象传入（没有多态的话，不能传 Dog）？那么想得到传入子类 Dog 的结果的话，是不是就要去改 AnimalTest 类，多增加一个可以接收 Dog 参数的方法重载，重载 func 方法代码。如下
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img210]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>像上面的代码，可以想像，如果没有多态，那么多一个类型，就得多重载一个 func 方法。多十个类型，就得多重载十个，极度地麻烦，缺乏灵活性。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                类似上面的例子，我们举个实际点的例子。
            </ParagraphWrapper>

            <ParagraphWrapper>
                开发中常用的 equals 方法，它的参数就是 Object 类型的形参。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img211]}
            ></ImagesGroup>

            <ParagraphWrapper>
                很明显这里就是利用多态性，往参数里塞的都是子类对象，如果没有多态性，可想而知，要疯了。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                可以再举一个常见的栗子，通常开发中我们 java 项目代码需要连接数据库，此时一般是数据库厂商，会提供一个方法过来，方法的参数需要我们传入一个带有连接参数和方法的对象。这个对象，在使用 mySql、mangoDB...等等不同的数据库的时候，是不同的。但是都遵循同一个规范，所以我们传入一个符合规范的子类对象即可，此时利用的就是多态性。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ComLine></ComLine>

            <SmallTitle>
                多态只适用于方法，不适用于属性
            </SmallTitle>

            <ParagraphWrapper>
                <Red>成员变量，不具备多态性，只看引用变量所声明的类。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                其实挺好理解的，直接就不符合多态的第二个前提：“存在方法重写”。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>代码尝试下:</ParagraphWrapper>

            <ParagraphWrapper>在原先的 cat 类 和其父类 Animal 类中，各自添加一个默认值不同的属性 id 。</ParagraphWrapper>

            <ImagesGroup
                srcArr={[img212, img213]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后改一下 AnimalTest 类中的 func 方法，输出传入参数对象的 id：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img214]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后来到 main 方法中，给 func 方法，传入 子类对象，看看输出是子类对象的 id，还是父类的 id:
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img215]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，传入的对象，虽然是子类 cat 对象，但是输出的 id 值，是父类 Animal 的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>所以也可以说，对于“属性”的话，编译和执行都“看左边”。</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>
        </div>
    </>)
}

export default Module