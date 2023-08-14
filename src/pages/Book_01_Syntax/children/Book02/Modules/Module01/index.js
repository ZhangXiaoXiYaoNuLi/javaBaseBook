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

import img4 from '@/assets/images/img4.png'

const Module01 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>变量的概念：</SmallTitle>
        {
            [
                '1、内存中的一个存储区域',
                '2、该区域的数据可以在同一类型范围内不断变化',
                '3、变量是程序中最基本的存储单元。包含变量类型、变量名和存储的值',
            ].map(item => {
                return <ParagraphWrapper>{item}</ParagraphWrapper>
            })
        }

        <SmallTitle>Java中定义变量个语法格式：</SmallTitle>
        <ParagraphWrapper>
            语法： 数据类型 变量名 = 初始化值;
        </ParagraphWrapper>
        <ParagraphWrapper>
            例如： int a = 1;
        </ParagraphWrapper>

        <SmallTitle>使用变量需要注意：</SmallTitle>
        {
            [
                <span style={{color: 'red', fontWeight: 'bold'}}>1、Java中每个变量必须先声明，后使用</span>,
                '2、使用变量名来访问这块区域的数据',
                '3、变量的作用域：其定义所在的一对{ }内',
                '4、变量只有在其作用域内才有效',
                '5、同一个作用域内，不能定义重名的变量',
            ].map(item => {
                return <ParagraphWrapper>{item}</ParagraphWrapper>
            })
        }

        <SmallTitle>以下情况会输出什么，为什么？</SmallTitle>
        <ImagesGroup
            srcArr={[img4]}
        ></ImagesGroup>

        <ParagraphWrapper>
            一开始我以为会类似js，输出一个变量定义后的默认值，比如是undefined，或者null
        </ParagraphWrapper>

        <ParagraphWrapper>
            结果是，程序会直接报错，而至于定义的变量，是否有初始默认值，后面会有相关内容
        </ParagraphWrapper>
    </div>
}

export default Module01