import React, {useEffect, useState, useRef} from "react";

import styles from './styles.less'
import {
    ParagraphWrapper as P,
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
    Bold as B,
} from '@/components/index.js'

import img596 from '@/assets/images/img596.png'
import img597 from '@/assets/images/img597.png'
import img598 from '@/assets/images/img598.png'
import img599 from '@/assets/images/img599.png'
import img600 from '@/assets/images/img600.png'
import img601 from '@/assets/images/img601.png'
import img602 from '@/assets/images/img602.png'
import img603 from '@/assets/images/img603.png'
import img604 from '@/assets/images/img604.png'
import img605 from '@/assets/images/img605.png'
import img606 from '@/assets/images/img606.png'
import img607 from '@/assets/images/img607.png'
import img608 from '@/assets/images/img608.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            <SmallTitle>
                添加、删除、修改操作：
            </SmallTitle>

            <P>
                <Dot></Dot><B>{'Object put(Object key,Object value)'}</B>：将指定key-value添加到(或修改)当前map对象中
            </P>
            <ImagesGroup
                srcArr={[img596]}
            ></ImagesGroup>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot><B>void putAll(Map m)</B>：将m中的所有key-value对存放到当前map中。
            </P>
            <ImagesGroup
                srcArr={[img597]}
            ></ImagesGroup>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot><B>Object remove(Object key)</B>：移除指定key的key-value对，并返回value。
            </P>
            <ImagesGroup
                srcArr={[img598]}
            ></ImagesGroup>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot><B>void clear()</B>：清空当前map中的所有数据。
            </P>
            <ImagesGroup
                srcArr={[img599]}
            ></ImagesGroup>
            <ComLine></ComLine>

            <SmallTitle>
                元素查询的操作：
            </SmallTitle>

            <P>
                <Dot></Dot><B>Object get(Object key)</B>：获取指定key对应的value。
            </P>
            <ImagesGroup
                srcArr={[img600]}
            ></ImagesGroup>
            <ComSpace></ComSpace>
            <P>
                <Dot></Dot><B>boolean containsKey(Object key)</B>：是否包含指定的key。
            </P>
            <ImagesGroup
                srcArr={[img601]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><B>boolean containsValue(Object value)</B>：是否包含指定的value。
            </P>
            <ImagesGroup
                srcArr={[img602]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><B>int size()</B>：返回map中key-value对的个数。
            </P>
            <ImagesGroup
                srcArr={[img603]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><B>boolean isEmpty()</B>：判断当前map是否为空。
            </P>
            <ImagesGroup
                srcArr={[img604]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><B>boolean equals(Object obj)</B>：判断当前map和参数对象obj是否相等。
            </P>
            <ImagesGroup
                srcArr={[img605]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <SmallTitle>
                元视图操作的方法：
            </SmallTitle>
            <P>
                <Dot></Dot><B>Set keySet()</B>：返回所有key构成的Set集合。
            </P>
            <ImagesGroup
                srcArr={[img606]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><B>Collection values()</B>：返回所有value构成的Collection集合。
            </P>
            <ImagesGroup
                srcArr={[img607]}
            ></ImagesGroup>

            <P>
                <Dot></Dot><B>Set entrySet()</B>：返回所有key-value对构成的Set集合。
            </P>
            <ImagesGroup
                srcArr={[img608]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module