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
    Bold,
} from '@/components/index.js'

import img628 from '@/assets/images/img628.png'
import img629 from '@/assets/images/img629.png'
import img630 from '@/assets/images/img630.png'
import img631 from '@/assets/images/img631.png'
import img632 from '@/assets/images/img632.png'
import img633 from '@/assets/images/img633.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            
            <Blue>
                <P>
                    泛型的好处：
                </P>
                <P>
                    1、充分发挥像IDEA编辑器的类型提示功能。
                </P>
                <P>
                    2、编译期间就可以进行类型校验，而不用等到运行时才报错。保证数据安全。
                </P>
                <P>
                    3、避免了强转操作，减少了报错可能。
                </P>
            </Blue>

            <ComLine></ComLine>

            <P>
                接着，我们尝试在集合使用一下泛型。集合汇总使用泛型的书写格式是这样的：
            </P>
            <ImagesGroup
                srcArr={[img628]}
            ></ImagesGroup>
            <P>这里要注意的点是，泛型中，我们使用了 Integer 类型，而不是 int 类型。这是因为<Red>泛型不能使用基本类型，需要用它的包装类</Red>。</P>
            <P>在这样定义了 ArrayList 之后，像 add 等 方法的参数，就会添加上泛型类型的校验。（当然，也可以发现 IDEA 编辑器在写下 add 方法的时候，就已经提示仅可以添加 Integer 类型数据了，这也是泛型的好处），且<Red>如果是添加了别的类型的话，直接就会在编译的时候报错，而不是等运行的时候才报错，这是泛型的另一个好处</Red>。</P>
            <ImagesGroup
                srcArr={[img629]}
            ></ImagesGroup>
            <P>接下来，我们来做一个遍历：</P>
            <ImagesGroup
                srcArr={[img630]}
            ></ImagesGroup>
            <P>
                从这里可以看出，泛型了另一个好处，就是可以避免类型强转，减少了报错情况。当然，使用迭代器的时候，也可以利用这一好处：
            </P>
            <ImagesGroup
                srcArr={[img631]}
            ></ImagesGroup>
            <P>
                接下来，我们尝试在 Map 数据结构中使用 泛型：
            </P>
            <ImagesGroup
                srcArr={[img632]}
            ></ImagesGroup>
            <P>上面的代码还可以看到 泛型的嵌套。且这里有一个 Map.Entry ，前面有个 “Map.”，是因为 Map 没有把这个泛型类型暴露出来。</P>

            <P>至于泛型是怎么发挥这些作用的，我们可以随便点进 put 方法进去看看源码：</P>
            <ImagesGroup
                srcArr={[img633]}
            ></ImagesGroup>
            <P>在方法定义中，就有这些 “某个类型” 的定义，而在方法体中，相同的字母就代表着相同的类型限制。（<Blue>源码中具体类型是不确定的，只有在真正使用的时候，给了具体的泛型类型，才能确定类型</Blue>）</P>

            <ComLine></ComLine>
            <P>
                小总结：
            </P>
            <P>
                1、泛型是 JDK 5.0 的新特性。
            </P>
            <P>
                2、集合的接口在 JDK 5.0 的时候，改为了带泛型的结构。
            </P>
            <P>
                3、在实例化集合实例的时候，可以指明泛型所指的具体类型。
            </P>
            <P>
                4、泛型的类型，必须是一个“类”，而不能是基础数据类型。如果要用到基础数据类型，那么必须用包装类进行替换。
            </P>

        </div>
    </>)
}

export default Module