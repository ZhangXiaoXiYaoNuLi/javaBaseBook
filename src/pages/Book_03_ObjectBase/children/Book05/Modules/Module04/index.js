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

import img231 from '@/assets/images/img231.png'
import img232 from '@/assets/images/img232.png'
import img233 from '@/assets/images/img233.png'
import img234 from '@/assets/images/img234.png'
import img239 from '@/assets/images/img239.png'
import img240 from '@/assets/images/img240.png'
import img241 from '@/assets/images/img241.png'
import img242 from '@/assets/images/img242.png'
import img243 from '@/assets/images/img243.png'
import img244 from '@/assets/images/img244.png'
import img245 from '@/assets/images/img245.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <Bold>
                问题一：
            </Bold>
            
            <ParagraphWrapper>
                首先创建一个 Base 类， 然后用 Sub 类继承 Base 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img231, img232]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后在 main 方法中：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img233]}
            ></ImagesGroup>

            <ParagraphWrapper>
                输出结果是：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img234]}
            ></ImagesGroup>

            <ParagraphWrapper>
                答案只有这个 == 号的比较我猜错了。<Red>此时 == 符号在对比引用类型的时候，对比的是地址值，上面的代码中 s 是栈空间中一个保存了 对象地址值的 变量，在 Base b = s; 这一步之后，b 保存的内存地址值，也就和 s 一样了，所以 == 对比为 true</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Green>
                    这里关于 == 符号对于引用类型的对比，不用太纠结，后面会具体总结 == 和 equals 方法的比对相关知识。
                </Green>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <Bold>
                问题二：
            </Bold>

            <ParagraphWrapper>
                {`定义三个类，父类GeometricObject代表几何形状，子类Circle代表圆形，MyRectangle代表矩形。定义一个测试类GeometricTest，编写equalsArea方法测试两个对象的面积是否相等（注意方法的参数类型，利用动态绑定技术），编写displayGeometricObject方法显示对象的面积（注意方法的参数类型，利用动态绑定技术）。`}
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img239]}
            ></ImagesGroup>

            <ParagraphWrapper>
                具体的类关系图如上。
            </ParagraphWrapper>

            <ParagraphWrapper>
                按照类图提示，可以编写出下面这个 几何体 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img240]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们来编写 圆形 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img241]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们继续来写 集合类的另一个子类 ，矩形 类：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img242]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们按照题目要求，去 测试类 GeometricTest ，编写比较面积大小的方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img243]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后去 main 方法测试一下，（对了，Circle 类 和 MyRectangle 类的构造方法我各添加了一个哈）：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img244]}
            ></ImagesGroup>

            <ParagraphWrapper>
                测试类中，获取几何体面积的方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img245]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module