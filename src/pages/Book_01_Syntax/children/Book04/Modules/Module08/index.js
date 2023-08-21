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
import Red from '@/components/RedFontWrapper'

import img71 from '@/assets/images/img71.png'

import img72 from '@/assets/images/img72.png'

import img73 from '@/assets/images/img73.png'

import img74 from '@/assets/images/img74.png'

import img75 from '@/assets/images/img75.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                使用范围上的比较：
                <ParagraphWrapper>
                    break 是使用在 switch-case 还有 循环结构 中。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    continue 是使用在 循环结构 中。
                </ParagraphWrapper>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                那么它俩的区别呢？
            </ParagraphWrapper>
            <ParagraphWrapper>
                就是在循环中的使用作用不同， break 是“<Red>结束当前循环</Red>”，而 continue 是“<Red>结束当次循环</Red>”
            </ParagraphWrapper>


            <ParagraphWrapper>
                下面来个小示例：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img71]}
            ></ImagesGroup>

            <ParagraphWrapper>
                而关于<Red>嵌套循环</Red>：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img72]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <>break 只打破了，它所在那个大括号的层级的循环。</>
            </ParagraphWrapper>
            <ParagraphWrapper>
                可以下个结论：<Red>break 默认 跳出包裹此关键字最近的一层循环。</Red>当然这是<Red>默认情况，想要跳出其它层级的循环也是可以的</Red>，但是要使用特殊的语法结构。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面来看看如何跳出指定的循环层级：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img74]}
            ></ImagesGroup>

            <ParagraphWrapper>
               <Red> 给循环添加一个标识符（自己起名），然后在 break 关键字后面加上这个标识符，就可以跳出指定的循环层级。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我们来试试continue：
            </ParagraphWrapper>

            <ParagraphWrapper>
                而关于<Red>continue 的 嵌套循环</Red>：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img73]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看出外循环一样循环了 10 次，每次循环中的内循环中，都没有输出数字 4 ，说明 <Red>continue 的作用范围，也是它当前所在的大括号作用域内</Red>。<Red>用于跳过当前次循环中 continue 后面的代码 ，进入下一次循环</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然 <Red>continue 也是可以指定循环层级的</Red>。定义为：“<Red>结束指定标识的一层循环结构的当次循环，然后进入该层级的下一次循环</Red>”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                有的人说 return 也可以结束循环，这是不太对的，return 结束的是整个方法，不管整个 return 处于哪一个层级的循环之内。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img75]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module