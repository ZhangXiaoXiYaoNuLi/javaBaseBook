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
// import RedFontWrapper from '@/components/RedFontWrapper'
import Red from '@/components/RedFontWrapper'
import Blue from '@/components/BlueFontWrapper'
import ComLine from '@/components/ComLine'

import Dot from '@/components/Dot'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                this是什么？
            </SmallTitle>

            <ParagraphWrapper>
                在Java中，this关键字比较难理解，它的作用和其词义很接近。
            </ParagraphWrapper>
            <div
                style={{
                    paddingLeft: '12px',
                }}
            >
                <ParagraphWrapper>
                    1、<Blue>它在方法内部使用，即这个方法所属对象的引用</Blue>；
                </ParagraphWrapper>
                <ParagraphWrapper>
                    2、<Blue>它在构造器内部使用，表示该构造器正在初始化的对象</Blue>。
                </ParagraphWrapper>
            </div>

            <ParagraphWrapper>
                <Red>总的来说，this 可以理解为是“当前对象”（动态地指向该类实例化出来的对象）</Red>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Red>this 可以调用类的属性、方法和构造器</Red>。  
            </ParagraphWrapper>

            <ParagraphWrapper>
                什么时候使用this关键字呢？
            </ParagraphWrapper>
            <div
                style={{
                    paddingLeft: '12px',
                }}
            >
                <ParagraphWrapper>
                    当在方法内需要用到调用该方法的对象时，就用this。具体的：<Red>我们可以用this来区分属性和局部变量</Red>。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    比如：this.name = name;
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <Red>
                        也就是在一个类中的各个 setter 属性的 方法中，判断是局部变量还是属性标识符。
                    </Red>
                    <Blue>一般来说，这种情况下，this是可以省略的，只有在形参和属性名相同的时候，才必须显式地写上 this </Blue>。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    <Red>
                        又或者使用“this.方法”来调用对象（类实例化后）的方法。
                    </Red>
                </ParagraphWrapper>
            </div>

            <ComLine></ComLine>

            <SmallTitle>
                关于 this 调用构造器：
            </SmallTitle>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                1、<Blue>{`可以在类的构造器中使用"this(形参列表)"的方式，调用本类中重载的其他的构造器！`}</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                2、<Blue>明确：构造器中<Red>不能</Red>{`通过"this(形参列表)"的方式调用`}<Red>自身构造器</Red></Blue>。
            </ParagraphWrapper>
            
            <ParagraphWrapper>这个很好理解，因为直接就造成了无限循环的递归。</ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                3、<Blue>{`如果一个类中声明了n个构造器，则最多有 n - 1 个构造器中使用了"this(形参列表)"`}</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                这条规则的原因也是因为<Red>this调用构造器的一系列“链式调用”，是不能出现循环的</Red>。不能说 1 调 2 ，2 调 3 ，3 调 4，然后又 4 调 2。由此，最多只能有 n - 1 个{`"this(形参列表)"`}。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                4、<Blue>{`"this(形参列表)"`}</Blue><Red>{`必须声明在类的构造器的首行！`}</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                当然，如果你尝试把{`"this(形参列表)"`}往后移动，直接就会编译错误了。所以犯不了这个错。<Blue>也可以记住，this调用构造器，是<Red>“单链式调用”</Red>，不能分叉</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                5、<Blue>在类的<Red>一个构造器</Red>中，<Red>{`最多只能声明一个`}</Red>{`"this(形参列表)"`}</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>和上面的类似，记住是因为“单链式调用”就是了。</ParagraphWrapper>
        </div>
    </>)
}

export default Module