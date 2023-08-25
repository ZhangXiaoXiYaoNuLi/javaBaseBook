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

import img126 from '@/assets/images/img126.png'
import img127 from '@/assets/images/img127.png'
import img128 from '@/assets/images/img128.png'
import img129 from '@/assets/images/img129.png'
import img130 from '@/assets/images/img130.png'
import img131 from '@/assets/images/img131.png'
import img132 from '@/assets/images/img132.png'
import img133 from '@/assets/images/img133.png'
import img134 from '@/assets/images/img134.png'
import img135 from '@/assets/images/img135.png'
import img136 from '@/assets/images/img136.png'
import img137 from '@/assets/images/img137.png'
import img138 from '@/assets/images/img138.png'
import img139 from '@/assets/images/img139.png'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                方法，必须由其所在类或对象调用才有意义。若方法含有参数：
            </ParagraphWrapper>
            <div style={{paddingLeft: '12px'}}>
                <Blue>
                    <ParagraphWrapper>
                        形参：方法声明时的参数
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        实参：方法调用时实际传给形参的参数值
                    </ParagraphWrapper>
                </Blue>
            </div>

            <ComSpace></ComSpace>
            <ParagraphWrapper>
                Java的实参值如何传入方法呢？
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>Java里方法的参数传递方式只有一种：值传递。 即将实际参数值的副本（复制品）传入方法内，而参数本身不受影响。</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>形参是<Red>基本数据类型</Red>：将实参基本数据类型变量的“数据值”传递给形参，<Red>所以在方法中操作，不会改变原数据</Red></Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>形参是<Red>引用数据类型</Red>：将实参引用数据类型变量的“地址值”传递给形参，<Red>所以在方法中操作，会改变原数据</Red>，所以想不影响原数组，得靠拷贝</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <SmallTitle>关于基本数据类型的demo:</SmallTitle>
            <ParagraphWrapper>创建一个测试类 testObj。</ParagraphWrapper>
            <ImagesGroup
                srcArr={[img126]}
            ></ImagesGroup>

            <ParagraphWrapper>然后在 main 方法中，定义一个int 数据 a，测试在方法调研前后，及在方法内前后的值。</ParagraphWrapper>

            <ImagesGroup
                srcArr={[img127]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后运行输出下看看。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img128]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>最终外边的 a 的值，没有被改变。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <SmallTitle>关于引用数据类型的demo:</SmallTitle>

            <ParagraphWrapper>
                首先第一一个 Num 类，只用来生成一个实例，可以保存一个 int 值属性
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img129]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后修改下 testObj 类中的 方法
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img130]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后在 main 方法中，我们执行下看看
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img131]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>可以发现，实例对象中的值，在方法执行后，发生了改变</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>如果在方法中重写 new 一个对象，赋值给传进来的“引用类型”参数，那么就会打破原先的指针指向：</ParagraphWrapper>
            <ImagesGroup
                srcArr={[img132]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                来个例题：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img133]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里定义一个数字交换的方法。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们在main方法中调用，尝试调换两个变量的值。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img134]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面这个例题的内存解析：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img135]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看出，基础数据类型的实参传给形参，进行的是“值复制”的传递。也就是说 swap 方法中的 a 和 b ，并不是 main 方法中的 a 和 b 。只是一开始值一样而已。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                再来个例题：
            </ParagraphWrapper>
            <ParagraphWrapper>
                先定义一个 DataSwap 类。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img136]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后定义一个 Swap 类，注册一个静态方法 swap。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img137]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们在main方法中，创建DataSwap实例，传入swap方法中。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img138]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>然后注意了，如果把 main 方法中的传参方式，改为以下这种：</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img139]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>得到的结果，还是类似于“基础类型传参”的，并不会改变数值。所以注意了，<Red>是基础类型传参还是引用类型传参，要看“实参传给形参”的瞬间，参数的类型</Red>，而不是看传入的值是单独存在的值，还是对象的值。</Blue>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module