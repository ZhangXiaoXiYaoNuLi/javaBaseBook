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

// 布尔型变量的使用说明
const Module06 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>关于布尔型变量：</SmallTitle>
        <ParagraphWrapper>
            1、boolean 类型用来判断逻辑条件，<RedFontWrapper>一般用于程序流程控制</RedFontWrapper>：
            <ParagraphWrapper>
                （1）if条件控制语句；
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）while循环控制语句；
            </ParagraphWrapper>
            <ParagraphWrapper>
                （3）do-while循环控制语句；
            </ParagraphWrapper>
            <ParagraphWrapper>
                （4）for循环控制语句；
            </ParagraphWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、<RedFontWrapper>boolean类型数据只允许取值true和false，无null。</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            3、Java虚拟机中没有任何供boolean值专用的字节码指令，Java语言表达所操作的
            boolean值，在<RedFontWrapper>编译之后</RedFontWrapper>都使用java虚拟机中的<RedFontWrapper>int数据类型</RedFontWrapper>来代替：<RedFontWrapper>true用1表示，false
            用0表示</RedFontWrapper>。———《java虚拟机规范 8版》
        </ParagraphWrapper>
        <ComSpace></ComSpace>

        <SmallTitle>比较无关的提一嘴，关于转义</SmallTitle>
        <ParagraphWrapper>
            1、一般来说，我在“sout”中输出“\n”，那么就会换行，要是我们就是想要输出字符“\”和“n”呢？
            <ParagraphWrapper>
                答：<RedFontWrapper>那就在“\n”的前面再加一个“\”，把那个转义的斜杠，转为普通的斜杠就好了</RedFontWrapper>。
            </ParagraphWrapper>
        </ParagraphWrapper>
        
        <ParagraphWrapper>
            2、还有一种情况，是想在输出中输出双引号，但是会被java认为是圈定字符串的双引号符号怎么办？
            <ParagraphWrapper>
                答：还是使用转移符号“\”，将双引号转义为“普通的字符双引号”。
            </ParagraphWrapper>
        </ParagraphWrapper>
    </div>
}

export default Module06