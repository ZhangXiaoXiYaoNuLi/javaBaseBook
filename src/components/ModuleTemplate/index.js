import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import ParagraphWrapper from '@/components/ParagraphWrapper'
import ImageWrapper from '@/components/ImageWrapper'
import ComSpace from '@/components/ComSpace'
// import ImagesGroupWrapper from '@/components/ImagesGroupWrapper'
import ImagesGroup from '@/components/ImagesGroup'

import img1 from '@/assets/images/img1.png'
import img2 from '@/assets/images/img2.png'

const Module01 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <ParagraphWrapper>
            关键字就是被java赋予了特殊含义，用于专门用途的字符串。
        </ParagraphWrapper>
        <ComSpace></ComSpace>
        <ImagesGroup
            srcArr={[img1, img2]}
        ></ImagesGroup>
        <ComSpace></ComSpace>
        <ParagraphWrapper>
            保留字则是，现有java版本尚未使用，但以后的版本可能会作为关键字使用。所以，在
            自己命名标识符的时候，应该避免使用这些。
        </ParagraphWrapper>
        <ParagraphWrapper>
            现有的保留字，就是两个，“goto”、“const”。
        </ParagraphWrapper>
    </div>
}

export default  Module01