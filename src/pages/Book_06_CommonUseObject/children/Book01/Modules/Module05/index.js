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

const RedDot = () => {
    return <Dot color={'red'}></Dot>
}

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >

            <SmallTitle>来个总览：</SmallTitle>

            <ParagraphWrapper>其实目前不用刻意去死记，后面开发用着用着，都忘不掉</ParagraphWrapper>

            <div style={{height: '20px'}}></div>

            {/* 
                 int length()：返回字符串的长度： return value.length
                 char charAt(int index)： 返回某索引处的字符return value[index]
                 boolean isEmpty()：判断是否是空字符串：return value.length == 0
                 String toLowerCase()：使用默认语言环境，将 String 中的所有字符转换为小写
                 String toUpperCase()：使用默认语言环境，将 String 中的所有字符转换为大写
                 String trim()：返回字符串的副本，忽略前导空白和尾部空白
                 boolean equals(Object obj)：比较字符串的内容是否相同
                 boolean equalsIgnoreCase(String anotherString)：与equals方法类似，忽略大
                小写
                 String concat(String str)：将指定字符串连接到此字符串的结尾。 等价于用“+”
                 int compareTo(String anotherString)：比较两个字符串的大小
                 String substring(int beginIndex)：返回一个新的字符串，它是此字符串的从
                beginIndex开始截取到最后的一个子字符串。
                 String substring(int beginIndex, int endIndex) ：返回一个新字符串，它是此字
                符串从beginIndex开始截取到endIndex(不包含)的一个子字符串。 
            */}

            <ParagraphWrapper>
                <RedDot></RedDot><Red>int length()：</Red>返回字符串的长度： return value.length
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>char charAt(int index)：</Red>返回某索引处的字符return value[index]
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean isEmpty()：</Red>判断是否是空字符串：return value.length == 0
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String toLowerCase()：</Red>使用默认语言环境，将 String 中的所有字符转换为小写
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String toUpperCase()：</Red>使用默认语言环境，将 String 中的所有字符转换为大写
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String trim()：</Red>返回字符串的副本，忽略前导空白和尾部空白
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean equals(Object obj)：</Red>比较字符串的内容是否相同
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean equalsIgnoreCase(String anotherString)：</Red>与equals方法类似，忽略大小写
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String concat(String str)：</Red>将指定字符串连接到此字符串的结尾。 等价于用“+”
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>int compareTo(String anotherString)：</Red>比较两个字符串的大小
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String substring(int beginIndex)：</Red>返回一个新的字符串，它是此字符串的从beginIndex开始截取到最后的一个子字符串。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String substring(int beginIndex, int endIndex) ：</Red>返回一个新字符串，它是此字符串从beginIndex开始截取到endIndex(不包含)的一个子字符串。
            </ParagraphWrapper>

            {/* 
                 boolean endsWith(String suffix)：测试此字符串是否以指定的后缀结束
                 boolean startsWith(String prefix)：测试此字符串是否以指定的前缀开始
                 boolean startsWith(String prefix, int toffset)：测试此字符串从指定索引开始的
                子字符串是否以指定前缀开始
                 boolean contains(CharSequence s)：当且仅当此字符串包含指定的 char 值序列
                时，返回 true
                 int indexOf(String str)：返回指定子字符串在此字符串中第一次出现处的索引
                 int indexOf(String str, int fromIndex)：返回指定子字符串在此字符串中第一次出
                现处的索引，从指定的索引开始
                 int lastIndexOf(String str)：返回指定子字符串在此字符串中最右边出现处的索引
                 int lastIndexOf(String str, int fromIndex)：返回指定子字符串在此字符串中最后
                一次出现处的索引，从指定的索引开始反向搜索
                注：indexOf和lastIndexOf方法如果未找到都是返回-1
            */}

            <div style={{height: '50px'}}></div>

            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean endsWith(String suffix)：</Red>测试此字符串是否以指定的后缀结束
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean startsWith(String prefix)：</Red>测试此字符串是否以指定的前缀开始
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean startsWith(String prefix, int toffset)：</Red>测试此字符串从指定索引开始的子字符串是否以指定前缀开始
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean contains(CharSequence s)：</Red>当且仅当此字符串包含指定的 char 值序列时，返回 true
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>int indexOf(String str)：</Red>返回指定子字符串在此字符串中第一次出现处的索引
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>int indexOf(String str, int fromIndex)：</Red>返回指定子字符串在此字符串中第一次出现处的索引，从指定的索引开始
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>int lastIndexOf(String str)：</Red>返回指定子字符串在此字符串中最右边出现处的索引
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>int lastIndexOf(String str, int fromIndex)：</Red>返回指定子字符串在此字符串中最后一次出现处的索引，从指定的索引开始反向搜索
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>注：indexOf和lastIndexOf方法如果未找到都是返回-1</Bold>
            </ParagraphWrapper>

            <div style={{height: '50px'}}></div>

            {/* 
                 String replace(char oldChar, char newChar)：返回一个新的字符串，它是
                通过用 newChar 替换此字符串中出现的所有 oldChar 得到的。
                 String replace(CharSequence target, CharSequence replacement)：使
                用指定的字面值替换序列替换此字符串所有匹配字面值目标序列的子字符串。
                 String replaceAll(String regex, String replacement) ： 使 用 给 定 的
                replacement 替换此字符串所有匹配给定的正则表达式的子字符串。
                 String replaceFirst(String regex, String replacement) ： 使 用 给 定 的
                replacement 替换此字符串匹配给定的正则表达式的第一个子字符串。
                 boolean matches(String regex)：告知此字符串是否匹配给定的正则表达式。
                 String[] split(String regex)：根据给定正则表达式的匹配拆分此字符串。
                 String[] split(String regex, int limit)：根据匹配给定的正则表达式来拆分此
                字符串，最多不超过limit个，如果超过了，剩下的全部都放到最后一个元素中。
            */}

            <ParagraphWrapper>
                <RedDot></RedDot><Red>String replace(char oldChar, char newChar)：</Red>返回一个新的字符串，它是通过用 newChar 替换此字符串中出现的所有 oldChar 得到的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String replace(CharSequence target, CharSequence replacement)：</Red>使用指定的字面值替换序列替换此字符串所有匹配字面值目标序列的子字符串。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String replaceAll(String regex, String replacement)：</Red>使用给定的 replacement 替换此字符串所有匹配给定的正则表达式的子字符串。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String replaceFirst(String regex, String replacement)：</Red>使用给定的 replacement 替换此字符串匹配给定的正则表达式的第一个子字符串。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>boolean matches(String regex)：</Red>告知此字符串是否匹配给定的正则表达式。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String[] split(String regex)：</Red>根据给定正则表达式的匹配拆分此字符串。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedDot></RedDot><Red>String[] split(String regex, int limit)：</Red>根据匹配给定的正则表达式来拆分此字符串，最多不超过limit个，如果超过了，剩下的全部都放到最后一个元素中
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>

            </ParagraphWrapper>
        </div>
    </>)
}

export default Module