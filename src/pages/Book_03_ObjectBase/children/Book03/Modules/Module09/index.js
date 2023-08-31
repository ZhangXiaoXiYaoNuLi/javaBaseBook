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
import img164 from '@/assets/images/img164.png'
import img165 from '@/assets/images/img165.png'
import img166 from '@/assets/images/img166.png'
import img167 from '@/assets/images/img167.png'
import img168 from '@/assets/images/img168.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            {/* 
                注意：
                1. 在源文件中使用import显式的导入指定包下的类或接口
                2. 声明在包的声明和类的声明之间。
                3. 如果需要导入多个类或接口，那么就并列显式多个import语句即可
                4. 举例：（使用 “ * ” 号）可以使用java.util.*的方式，一次性导入util包下所有的类或接口。
                5. 如果导入的类或接口是java.lang包下的，或者是当前包下的，则可以省略此import语句。
                6. 如果在代码中使用不同包下的同名的类。那么就需要使用类的全类名的方式指明调用的是哪个类。
                7. 如果已经导入java.a包下的类。那么如果需要使用a包的子包下的类的话，仍然需要导入。
                8. import static组合的使用：调用指定类或接口下的静态的属性或方法 
            */}

            <SmallTitle>
                imoprt 导入：
            </SmallTitle>

            <ParagraphWrapper>
                1、作用是：<Red>在源文件中使用import显式的导入指定包下的 类 或 接口 </Red>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                2、<Red>声明在包的声明和类的声明之间。</Red>如下图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img164]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                3、如果需要导入多个类或接口，那么就并列显式多个import语句即可。如下图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img165]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                4、<Red>{`（使用 “ * ” 号）可以使用 java.util.* 的方式，一次性导入util包下所有的类或接口`}</Red>。如下图：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img166]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                5、<Red>{`如果导入的类或接口是java.lang包下的，或者是当前包下的，则可以省略此import语句`}</Red>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                6、<Red>{`如果在代码中使用不同包下的同名的类。那么就需要使用类的全类名的方式指明调用的是哪个类`}</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>这里主要是要理解什么是全类名，接着看。</ParagraphWrapper>
            <ImagesGroup
                srcArr={[img167]}
            ></ImagesGroup>
            <ParagraphWrapper>上图的情况是，有两个不同包的，<Red>同名</Red>类，都想在main方法中导入使用，那么直接在 import 里，通过不同的包名路径导入，可以吗？</ParagraphWrapper>
            <ParagraphWrapper>尝试了一下，报错了，是不可以的。</ParagraphWrapper>
            <ParagraphWrapper>正确做法如下：</ParagraphWrapper>
            <ImagesGroup
                srcArr={[img168]}
            ></ImagesGroup>
            <ParagraphWrapper>只能采用像上图一样，最多只能由一个通过包-类名导入，其它的同名类，得使用“全类名”的方式使用。全类名格式如上图new的时候圈出部分。</ParagraphWrapper>
            <ParagraphWrapper>然后我们可以注意到，在这里，“全类名”的包路径，是从 src 开始的。</ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                7、<Red>{`如果已经导入java.a包下的类。那么如果需要使用a包的子包下的类的话，仍然需要导入`}</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>所以说，导包要导到存放类、接口的那一层包才行。</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                8、<Red>{`import static组合的使用：调用指定类或接口下的静态的属性或方法 `}</Red>。如下图：
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module