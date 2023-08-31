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

import img160 from '@/assets/images/img160.png'
import img161 from '@/assets/images/img161.png'
import img163 from '@/assets/images/img163.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Red>package，就是声明所在文件夹用的。</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img163]}
            ></ImagesGroup>
            <ParagraphWrapper>
                可以观察这里的层级，然后注意到包名上并没有 src。说明 src 是根目录。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                在window可视化系统中，这个package“包”，也就是肉眼可见的“文件夹”。因为真正开发的时候，会出现成百上千个类，所以为了更好地梳理整理，会把不同的类按逻辑归类放到同一个包中。包里又可以细分成更小逻辑的包。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                package 翻译过来就是“包”，<span style={{textDecoration: 'line-through'}}>很好理解的是，这个关键字就是用来“导包”的</span>（<Red>这里大错特错哈，package并不是用来导包额，只是用来声明所在地的，关键词“声明”，不是“导”</Red>）（导包是“import”）。换一种说法就是：<Red>使用package关键字声明 类 或 接口 所在的 包，然后这个声明的语句，要放在源文件的首行</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    这里插一嘴，package的“首行”其实不是严格的“第一行”，只要导包前没有其它语句就行，至于放到第二行第三行都可以的。就是说，你可以空着第一行、第二行，然后在第三行才导包，也是可以。
                </Blue>
                <Red>这是区别于 xml 的，xml 的声明，才是严格的“第一行”，哪怕第一行是空的，你把 xml 声明挪到第二行也不行</Red>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>
                    包名，其实也是一种标识符，所以<Red>起名</Red>的时候，要<Red>遵循标识符的规则</Red>（忘记了自己往前翻），<Red>还有之前提过的：包名是全小写的！这是约定俗成的。</Red>。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ImagesGroup
                srcArr={[img160]}
            ></ImagesGroup>

            <ParagraphWrapper>
                有的时候，我们会看到这种“带点”的包名，其实“<Red>每点一次就代表了一层文件目录</Red>”，也就是一层文件夹嵌套。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                <Red>补充：</Red>
            </SmallTitle>
            <ParagraphWrapper>
                <Red>
                    在一个包下，不能命名相同名称的 类 和 接口 。 在不同的包中，可以命名相同名称的 类 和 接口。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                这个其实很好记，平常我们使用的 windows 系统，就都是不给我们在同一个文件夹下创建两个同名的文件夹的，类似。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                java中常用的包的介绍：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img161]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>
                    其中 lang 包下的东西不用导都可以直接用，就像我们之前用过的 String 等。
                </Red>
            </ParagraphWrapper>
            
        </div>
    </>)
}

export default Module