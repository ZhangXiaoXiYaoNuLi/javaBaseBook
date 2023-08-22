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

import img76 from '@/assets/images/img76.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                一维数组的初始化格式：
            </ParagraphWrapper>
            <ParagraphWrapper>
                第一种（静态初始化）：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>
                    {`int[] a = new int[]{1, 2, 3, 4};`}
                </Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                第二种（动态初始化），下面定义了有4个元素的string数组：
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>
                    {`String[] b = new String[4];`}
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                比较容易写错的错误写法：
            </ParagraphWrapper>
            <div
                style={{
                    paddingLeft: '10px',
                }}
            >
                <ParagraphWrapper>
                    第一种：{`int[] a = new int[4]{1, 2, 3, 4};`}
                </ParagraphWrapper>
                <ParagraphWrapper>
                    第二种：{`int[] a = new int[];`}
                </ParagraphWrapper>
            </div>
            <ParagraphWrapper>
                总结下错误写法，其实就是“<Red>元素个数 或者 静态的赋值 必须 二选一，不能全有，或者全没有</Red>”。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                关于动态和静态初始化： 
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img76]}
            ></ImagesGroup>
            <ParagraphWrapper>
                上面这张图中，有多种定义数组的方法，其实我们只要记住前面那俩种就行，这个图中的定义方法看了，反而容易搞混。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module