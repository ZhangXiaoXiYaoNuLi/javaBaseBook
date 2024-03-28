import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper,
    ComSpace,
    ImagesGroup,
    CodeShowWrapper,
    CardWrapper,
    SmallTitle,
    Red,
    Blue,
    ComLine,
    Dot,
    Green,
    Bold,
} from '@/components/index.js'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>Properties 类是 Hashtable 的子类，该对象用于处理属性文件。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>由于属性文件里的 key、value 都是字符串类型，所以 Properties 里的 key 和 value 都是字符串类型
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>存取数据时，建议使用 <Blue>setProperty(String key,String value)</Blue> 方法和
                 <Blue>getProperty(String key)</Blue> 方法。
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <CodeShowWrapper
                codeStrArr={[
                    'Properties pros = new Properties();',
                    'pros.load(new FileInputStream("jdbc.properties"));',
                    'String user = pros.getProperty("user");',
                    'System.out.println(user)',
                ]}
            ></CodeShowWrapper>
        </div>
    </>)
}

export default Module