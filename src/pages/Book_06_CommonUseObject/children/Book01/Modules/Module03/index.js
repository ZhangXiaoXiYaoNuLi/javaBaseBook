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

import img472 from '@/assets/images/img472.png'
import img473 from '@/assets/images/img473.png'
import img474 from '@/assets/images/img474.png'
import img475 from '@/assets/images/img475.png'
import img476 from '@/assets/images/img476.png'
import img477 from '@/assets/images/img477.png'
import img478 from '@/assets/images/img478.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Bold>String 的赋值，其实就是 String 对象的实例化。</Bold>
            </ParagraphWrapper>

            <ParagraphWrapper>String 的实例化，有以下几种方式（不是全部，是常用的几种）：</ParagraphWrapper>

            <ImagesGroup
                srcArr={[img472]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上图中，除了第一种的 ”字面量赋值“ 以外。还有几种 new String 对象的方式。
            </ParagraphWrapper>

            <ParagraphWrapper>
                最后一种，你可能不能一眼看懂，其实就是按位置和字符个数，拷贝字符数组。然后生成字符串。第一个参数是要拷贝的字符数组，第二个参数 是开始拷贝的索引值，第三个参数 是要拷贝的数组元素个数。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                这里，我们着重探讨一下，<Blue>使用 “字面量赋值” 和 “new 实例对象” 的创建字符串方式，有什么区别</Blue>：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img473]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上个 Demo 代码验证下：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img474]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面的代码，可以看出，输出了 false，可以回想一下上一节，在两个字符串都是 “字面量赋值” 的时候，只要字符串内容一样，指向的内存地址是一样的。而这里，虽然字符串内容一样，却是不一样的内存地址了。也验证了上面的内存图解析。<Blue>实际上，new 出来的 String 对象里，保存的 value 属性，依然指向了 常量池 中的 “abc”（依然唯一）。只是在比较的时候，我们是拿一个指向常量池的地址值，和一个指向堆空间中的对象的地址值，进行了比较。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                那么使用 new 方式创建出来的字符串，还具有 “不可变性” 吗？尝试一下
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img475]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>
                    上面说到，new 出来的 String 实例对象中的 value ，实际上指向的还是 常量池中的 字符串常量。所以 String 实例对象，还是保持 “不可变性”。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                再来一个例子，首先，我们创建一个 Person 类，类中有个那个 Name 属性：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img476]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们实例化两个 name 属性相同的 Person 对象，然后使用 equals 和 == 来比较两个实例的 name 属性：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img477]}
            ></ImagesGroup>

            <ParagraphWrapper>
                使用 equals 比较，得出的结果是 true ，这个我们应该不感到意外，因为 String 类对 equals 方法进行了重写，只要内容一样，对比结果就是 true。
            </ParagraphWrapper>

            <ParagraphWrapper>
                而使用 == 对比俩实例的 name 属性，结果是 true，是因为<Blue>字符串最终是存在于方法区的，且决不重复</Blue>，所以这两个“abc”的地址值，其实是一样的，而这两个实例的 name 属性存的就是这俩 “abc” 的地址值，是相同的，所以比较结果是 true。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img478]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上面 demo ，在内存中的示例如上图。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module