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
import RedFontWrapper from '@/components/RedFontWrapper'

import img9 from '@/assets/images/img9.png'

import img10 from '@/assets/images/img10.png'

import img11 from '@/assets/images/img11.png'

import img12 from '@/assets/images/img12.png'

import img17 from '@/assets/images/img17.png'

// 自动类型提升
const Module07 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>自动类型转换的定义:</SmallTitle>
        <ParagraphWrapper>
            <RedFontWrapper>
                容量小的类型自动转换为容量大的数据类型。
                <ParagraphWrapper>
                    1、该情况发生在运算中，包括且不仅限于加法。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    2、这里的容量，意思是标识的数值的大小范围，不是内存占位大小，所以4个字节的 float 是比8个字节的 long 容量大的。
                </ParagraphWrapper>
            </RedFontWrapper>
        </ParagraphWrapper>
        <SmallTitle>数据类型按容量大小排序为:</SmallTitle>
        <ImagesGroup
            srcArr={[img9]}
        ></ImagesGroup>
        <ParagraphWrapper>
            从这里可以看出，运算得到结果的最小类型，就是int类型了。通过运算，是不会得到byte、short、char类型的。
        </ParagraphWrapper>

        <SmallTitle>计算规则：</SmallTitle>
        <ParagraphWrapper>
            1、有多种类型的数据混合运算时，系统首先自动<RedFontWrapper>将所有数据转换成容量最大的</RedFontWrapper>那种数据类型，然后再进行计算。
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、<RedFontWrapper>byte,short,char之间不会相互转换，他们三者在计算时首先转换为int类型。</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            3、<RedFontWrapper>boolean类型不能与其它数据类型运算。</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            4、
            <RedFontWrapper>
                当把任何基本数据类型的值和字符串(String)进行连接运算时(+)，基本数据类型的值将自动转化为字符串(String)类型。
            </RedFontWrapper>
        </ParagraphWrapper>
        <ComSpace></ComSpace>

        <SmallTitle>示例：</SmallTitle>
        <ImagesGroup
            srcArr={[img10]}
        ></ImagesGroup>
        <ParagraphWrapper>
            这里字符 a 是可以和 int 类型的 1 相加的。因为字符 a 对应的UniCode是 97，所以结果就是97 加 1 等于 98 。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img11]}
        ></ImagesGroup>
        <ParagraphWrapper>
            这里会直接编译不通过，因为 byte 类型和 int 类型相加，会自转为int类型的，得到的结果也是 int 类型的，所以不能实验 byte 去接收结果， 当然了除了使用 int 接收，使用 long 也是可以的，原则是大于等于 int 类型的范围。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img12]}
        ></ImagesGroup>
        <ParagraphWrapper>
            可以看出，short类型和char类型相互运算，得到的结果最小要用int类型接收。再次验证了上面的次序图。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img17]}
        ></ImagesGroup>
        <ParagraphWrapper>
            定义了 byte 类型的 a 和 b，相加后却不能使用 byte 类型接收，因为他们在运算的时候，已经自动转为 int 类型了。
        </ParagraphWrapper>
    </div>
}

export default Module07