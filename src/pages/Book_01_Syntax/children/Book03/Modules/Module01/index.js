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

import img29 from '@/assets/images/img29.png'

import img30 from '@/assets/images/img30.png'

import img31 from '@/assets/images/img31.png'

import img32 from '@/assets/images/img32.png'

import img33 from '@/assets/images/img33.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                算数运算符的意义：
            </SmallTitle>
            <ParagraphWrapper>
                运算符是一种特殊的符号，用以表示数据的运算、赋值和比较等。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img29]}
            ></ImagesGroup>
            <ParagraphWrapper>
                加和减还是比较好理解的，下面先看看除法的计算：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img30]}
            ></ImagesGroup>
            <ParagraphWrapper>
                其实除法就是普通的做除法，然后把小数部分给去除。注意结果不是什么小数四舍五入，而是取整。就是说 1 除以 5 得到的是 0 ，4 除以 5 得到的也是 0。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img31]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里的结果是 10，如果是从数学上来说，正确结果应该是 12，但是这里的计算是一步步进行的，用的前一步的结果，所以最终的 10。
            </ParagraphWrapper>
            <ParagraphWrapper>
                但是，如果我们就是需要小数后的计算及结果怎么办呢？
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img32]}
            ></ImagesGroup>
            <ParagraphWrapper>
                从这里可以看出，即使我们换了个数据类型，用 double 类型去接收相除的结果，结果还是 10.0 ,并没有小数数字。那我们需要小数数字怎么办？
            </ParagraphWrapper>
            <ParagraphWrapper>
                首先我们要知道这个问题的本质，为什么我们会得到没有小数的整数，因为“<RedFontWrapper>我们做运算（运算可不止加减）的两个数都是 int 类型，参考之前类型的知识</RedFontWrapper>”
            </ParagraphWrapper>
            <ParagraphWrapper>
                所以我们要得到小数，那么就需要分子或者分母，其中一个或全部为浮点型数据类型。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img33]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module