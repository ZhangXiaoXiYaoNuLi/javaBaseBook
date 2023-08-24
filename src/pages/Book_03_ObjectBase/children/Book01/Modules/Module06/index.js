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

import img107 from '@/assets/images/img107.png'
import img108 from '@/assets/images/img108.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Red>属性</Red>，又叫做“<Red>成员变量</Red>”,所以这一节的标题也就是“<Red>成员变量与局部变量</Red>”
            </ParagraphWrapper>
            <ParagraphWrapper>
                它们之前最直观的区别判断，就是定义的位置。<Red>定义在方法体中的是“局部变量”</Red>，<Red>定义在类中的是“成员变量”</Red>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img107]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>局部变量，除了形参之外，都需要显式设置初始值</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper bold>
                局部变量和成员变量的相同点：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、定义变量的格式： 类型 变量名 = 变量值
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、都必须先声明，再使用。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、变量都有其对应的作用域。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ParagraphWrapper bold>
                局部变量和成员变量的不同点：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、在类中声明的位置不同：
                <div style={{paddingLeft: '16px'}}>
                    <ParagraphWrapper>
                        成员变量：直接定义在类的一对大括号{`{}`}中。
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        局部变量：声明在方法中，方法形参、构造器形参、方法内的变量、构造器内部的变量、代码块内。
                    </ParagraphWrapper>
                </div>
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、关于权限修饰符的不同
                <div style={{paddingLeft: '16px'}}>
                    <ParagraphWrapper>
                        成员变量：可以在声明属性时，使用权限修饰符，指定其权限。（常用的权限修饰符有 private、public、缺省、protected）
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        局部变量：不可以使用权限修饰符。
                    </ParagraphWrapper>
                </div>
            </ParagraphWrapper>

            <ParagraphWrapper>
                3、默认初始化值的情况
                <div style={{paddingLeft: '16px'}}>
                    <ParagraphWrapper>
                        成员变量：根据起类型，都有默认初始化值。和之前一维数组元素的的默认初始化值是类型的（忘记了回去翻截图）。
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        局部变量：没有初始值，除了形参外必须显式赋予默认值。
                    </ParagraphWrapper>
                </div>
            </ParagraphWrapper>

            <ParagraphWrapper>
                4、二者在内存中加载的位置也是不一样的。
                <div style={{paddingLeft: '16px'}}>
                    <ParagraphWrapper>
                        成员变量：加载在 堆 空间中（非 static 的，static修饰的是放在方法区中）。
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        局部变量：加载在 栈 空间中。
                    </ParagraphWrapper>
                </div>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img108]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module