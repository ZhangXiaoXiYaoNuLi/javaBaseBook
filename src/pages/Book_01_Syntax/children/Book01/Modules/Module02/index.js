import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
// 文字段落包裹组件，自带两个字缩进
import ParagraphWrapper from '@/components/ParagraphWrapper'
// 通用间距组件
import ComSpace from '@/components/ComSpace'
// 图片集合 参数为 srcArr ，图片引用值的数组
import ImagesGroup from '@/components/ImagesGroup'
// 代码展示组件，输入值为转化后的字符串数组
import CodeShowWrapper from '@/components/CodeShowWrapper'
// 卡片组件
import CardWrapper from '@/components/CardWrapper'
// 小标题
import SmallTitle from '@/components/SmallTitle'

import img3 from '@/assets/images/img3.png'

const Module02 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>标识符</SmallTitle>
        <ParagraphWrapper>
            Java 对各种变量、方法和类等要素命名时使用的字符序列称为标识符
        </ParagraphWrapper>
        <ParagraphWrapper>
            技巧：凡是自己可以起名字的地方都叫标识符
        </ParagraphWrapper>
        <ComSpace></ComSpace>
        <ImagesGroup
            srcArr={[img3]}
        ></ImagesGroup>
        <ParagraphWrapper>
            1、由26个英文字母大小写，0-9 ，_或 $ 组成
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、数字不可以开头。
        </ParagraphWrapper>
        <ParagraphWrapper>
            3、不可以使用关键字和保留字，但能包含关键字和保留字。
        </ParagraphWrapper>
        <ParagraphWrapper>
            4、Java中严格区分大小写，长度无限制。
        </ParagraphWrapper>
        <ParagraphWrapper>
            5、标识符不能包含空格。
        </ParagraphWrapper>
        <ComSpace></ComSpace>
        <SmallTitle>Java中的名称命名规范</SmallTitle>
        {
            [
                '包名：多单词组成时所有字母都小写：xxxyyyzzz',
                '类名、接口名：多单词组成时，所有单词的首字母大写：XxxYyyZzz',
                '变量名、方法名：多单词组成时，第一个单词首字母小写，第二个单词开始每个单词首字母大写：xxxYyyZzz',
                '常量名：所有字母都大写。多单词时每个单词用下划线连接：XXX_YYY_ZZZ',
                '注意1：在起名字时，为了提高阅读性，要尽量有意义，“见名知意”。',
                '注意2：java采用unicode字符集，因此标识符也可以使用汉字声明，但是不建议使用。',
            ].map(item => <ParagraphWrapper>{item}</ParagraphWrapper>)
        }
        <ComSpace></ComSpace>
        <ParagraphWrapper>
            以上的规则是靠人为遵守的，是约定俗成的。
        </ParagraphWrapper>
    </div>
}

export default  Module02