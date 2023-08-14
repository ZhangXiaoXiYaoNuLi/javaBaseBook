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

import img13 from '@/assets/images/img13.png'

import img14 from '@/assets/images/img14.png'

import img15 from '@/assets/images/img15.png'

import img16 from '@/assets/images/img16.png'

import img18 from '@/assets/images/img18.png'

import img19 from '@/assets/images/img19.png'

// 强制类型转换
const Module08 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>
            强制类型转换的定义：
        </SmallTitle>
        <ParagraphWrapper>
            1、其实就是自动类型转换的逆过程，将容量大的数据类型转换为容量小的数据类型。
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、要使用强转符号，通常伴随精度损失（不一定都会损失，主要看底层存储字节位数，而不是看小数）。
        </ParagraphWrapper>
        <ParagraphWrapper>
            3、强转的格式（强转符号，就是标红的这对英文括号）： int a = <RedFontWrapper>{`(`}</RedFontWrapper>int<RedFontWrapper>{`)`}</RedFontWrapper> 12.34;
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>
                4、布尔类型不能转换为其它类型
            </RedFontWrapper>
        </ParagraphWrapper>

        <SmallTitle>
            示例：
        </SmallTitle>
        <ImagesGroup
            srcArr={[img13]}
        ></ImagesGroup>
        <ParagraphWrapper>
            可以看出这里把范围更大的double类型，转化为了范围更小的int类型，但是算是了小数部分的精度。
        </ParagraphWrapper>
        <ParagraphWrapper>
            另外要注意的是，这里做的不是四舍五入，就算强转的数字是 12.9 ，也是不会转为 13 的，结果仍然是12，因为<RedFontWrapper>这里做的是“截断”，而不是“四舍五入”</RedFontWrapper>。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img14]}
        ></ImagesGroup>
        <ParagraphWrapper>
            显然既然可以使用 int 类型来接收，那么自然就可以使用 long 类型来接收。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img15]}
        ></ImagesGroup>
        <ParagraphWrapper>
            而转为 long 类型的话，是不可以用更小的 int 类型来接收的，会直接编译报错。
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img16]}
        ></ImagesGroup>
        <ParagraphWrapper>
            也有精度不损失的情况
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img18]}
        ></ImagesGroup>
        <ParagraphWrapper>
            这里强转后直接就变负数了，其实这里也算是一种精度损失。
        </ParagraphWrapper>
        <ParagraphWrapper>
            其实这里是因为强转是对底层二进制的位数进行截取，所以就截取了“1000 0000”，然后因为计算机存储的是补码，所以如果二进制“1000 0000”用byte的补码来看，第一位“1”是符号位，就是代表负数，而后面的7个“0”，补码后其实就是数字128。
        </ParagraphWrapper>
        <ParagraphWrapper>
            下面是额外的知识点，不用纠结：
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img19]}
        ></ImagesGroup>
    </div>
}

export default Module08