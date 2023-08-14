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

import img7 from '@/assets/images/img7.png'

import img8 from '@/assets/images/img8.png'

// 整型、浮点型变量的使用说明
const Module02 = (props) => {

    return <div
        className={styles.base_wrapper}
    >
        <SmallTitle>整数系列：byte、short、int、long</SmallTitle>
        <ParagraphWrapper>
            1、java的整型常量默认为 int 型，声明long型常量须后加‘l’或‘L’
        </ParagraphWrapper>
        <ParagraphWrapper>
            2、java程序中变量通常声明为int型，除非不足以表示较大的数，才使用long
        </ParagraphWrapper>
        <ImagesGroup
            srcArr={[img7]}
        ></ImagesGroup>

        <ParagraphWrapper>
            对于四种类型，其实就是拥有字节数为2的零次方、2的1次方、2的2次方、2的3次的存储单元。
        </ParagraphWrapper>

        <ComSpace></ComSpace>

        <ParagraphWrapper>
            这里有说一下，1个bit（比特），就是一个可以为 1 或者 0 的位置。所以bit就是计算机中最小
            的存储单元。而 java 中的 byte 就是 8 个 bit 表示的，也就是 8 个 01 就像 01010... 这样，因为8个bit中
            有 1 个要表示正负，所以剩下7个表示数字，对应的二进制，就是正负的 2 的 7次方，就是正负 128。
            但是为什么实际表示，只能到 正的 127 呢？
            <ParagraphWrapper>
                1、计算机系统中用二进制来表示数据，最高位为0表示整数，最高位为1表示负数。因此：byte的取值范围在 10000000~01111111
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、java中采用补码表示数据，正数的补码和原码相同，负数的补码=原码各位取反+1。如：10000000的补码 = 01111111+1 = 01111111+00000001
                <ParagraphWrapper>
                    因此:java中10000000是补码，其原码为：10000000-1 = 01111111 在取反得到 10000000 = 128。又由于最高位是1 表示负数，所以byte最小值为-128。
                </ParagraphWrapper>
                <ParagraphWrapper>
                    01111111的最高位是0，为正数，补码是其自身，因此byte的最大值为127
                </ParagraphWrapper>
            </ParagraphWrapper>
        </ParagraphWrapper>
        <ComSpace></ComSpace>

        <SmallTitle>如何声明 byte、short、int、long 变量？</SmallTitle>
        
        <ParagraphWrapper>
            <RedFontWrapper>byte b1 = 12;</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            byte b1 = 128;   这个是错的，因为超出正数127的范围了。
        </ParagraphWrapper>
        <ParagraphWrapper>
            short 和 int 的定义和 byte 是类似的:
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>short b2 = 300;</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>int b3 = 300;（<RedFontWrapper>通常我们在开发中，使用的都是 int 来定义整型变量，范围是正负的约21亿</RedFontWrapper>）</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            long的定义是这样的：
        </ParagraphWrapper>
        <ParagraphWrapper>
            long b4 = 124123412<RedFontWrapper>L</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>
                long类型结尾必须以大写的“L”或者小写的“l”结尾。
            </RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>
                但是要注意，这个 L 和 l 只是用来声明的，如果你在控制台输出它，是不会带有这个结尾的 L 、 l 的。当然，
                在底层存储的时候，也是不带 L 的，都是 0101.. 这样。
            </RedFontWrapper>
        </ParagraphWrapper>
        <ComSpace></ComSpace>

        <SmallTitle>浮点类型： float 、 double</SmallTitle>
        <ParagraphWrapper>通俗点理解，就是带小数的数字。float是 4 个字节，也就是 4 * 8 = 32 个 bit ，而 double 是 8 个字节，也就是 64 个 bit。</ParagraphWrapper>
        <ImagesGroup
            srcArr={[img8]}
        ></ImagesGroup>
        <ParagraphWrapper>float 一般又称 “单精度”，而 double 又称 “双精度”。</ParagraphWrapper>
        <ComSpace></ComSpace>
        <ParagraphWrapper>与整数类型类似，Java 浮点类型也有固定的表数范围和字段长度，不受具体操作系统的影响。</ParagraphWrapper>
        <ParagraphWrapper>
            1、浮点型常量有两种表示形式：
            <ParagraphWrapper>十进制数形式：如：5.12 512.0f .512 （必须有小数点）</ParagraphWrapper>
            <ParagraphWrapper>科学计数法形式:如：5.12e2 512E2 100E-2</ParagraphWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>2、float:单精度，<RedFontWrapper>尾数可以精确到7位有效数字</RedFontWrapper>。很多情况下，精度很难满足需求。</ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>3、double:双精度，精度是float的两倍。通常采用此类型。</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>4、Java 的浮点型常量默认为double型，声明float型常量，须后加‘f’或‘F’。（所以可以发现，反而是不常用的，非默认的，后面才要加特殊字母来定义）</RedFontWrapper>
        </ParagraphWrapper>
        <ParagraphWrapper>
            5、当然，不管是 float 还是 double ，在真正需要精度够高的时候，都是不顶用的，到时就需要使用到特殊的工具类、插件库了，而像 float 、 double 只是够日常的计算使用。
        </ParagraphWrapper>
        <ParagraphWrapper>
            <RedFontWrapper>
                6、虽然 float 只占了4个字节，但是它表述的数值范围，比 long 类型还大，那是因为 float 中的一部分，用来表示 10 的几次幂了。
            </RedFontWrapper>
        </ParagraphWrapper>
        <ComSpace></ComSpace>
    </div>
}

export default Module02