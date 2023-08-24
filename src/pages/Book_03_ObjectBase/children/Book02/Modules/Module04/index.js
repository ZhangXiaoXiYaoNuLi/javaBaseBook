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

import Dot from '@/components/Dot'

import img121 from '@/assets/images/img121.png'
import img122 from '@/assets/images/img122.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                方法重载的好处，就是可以用同一个方法名调用，适配各种情况，为编程带来方便。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img122]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>在一个类中，允许存在多个同名的方法，只要它们的<Red>参数个数</Red>或<Red>参数类型</Red>不同</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>参数类型顺序是有关系的，比如（String, Int）和（Int, String）是可以构成重载的</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red><Blue>方法重载，</Blue>只看 参数列表 同与不同。和 return 什么类型无关</Red>。
            </ParagraphWrapper>
            <ComSpace></ComSpace>
            <ParagraphWrapper>
                <Red><Blue>所以总结下，判断是不是重载，用两个条件，</Blue>第一，方法名相不相同。第二，拿俩方法的参数列表对比，a方法的第一个参数和b方法的第一个参数比，然后是第二个参数和第二个参数比。直到比较到不同，就是重载</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面是一些判断练习：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img121]}
            ></ImagesGroup>
            <ParagraphWrapper>
                a 虽然参数名不同，但是参数个数、类型，类型的顺序都相同，所以不是重载。
            </ParagraphWrapper>
            <ParagraphWrapper>
                b 参数类型顺序不同，构成重载。
            </ParagraphWrapper>
            <ParagraphWrapper>
                c 和上面一样，构成重载。
            </ParagraphWrapper>
            <ParagraphWrapper>
                d 参数个数不同，构成重载。
            </ParagraphWrapper>
            <ParagraphWrapper>
                e 参数个数不同，构成重载。
            </ParagraphWrapper>
            <ParagraphWrapper>
                f 参数个数、类型，类型的顺序都相同，不是重载。
            </ParagraphWrapper>
            <ParagraphWrapper>
                g 方法名不同，不是重载。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module