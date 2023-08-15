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
import img34 from '@/assets/images/img34.png'
import img35 from '@/assets/images/img35.png'
import img36 from '@/assets/images/img36.png'
import img37 from '@/assets/images/img37.png'
import img38 from '@/assets/images/img38.png'
import img39 from '@/assets/images/img39.png'
import img40 from '@/assets/images/img40.png'

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
                前面的几个运算符，像 + - 符号、连接符 + 、还有乘号 * ，其实都很好理解，主要是除法有几点问题，下面先看看除法的计算：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img30]}
            ></ImagesGroup>
            <ParagraphWrapper>
                其实除法就是普通的做除法，然后把小数部分给去除。注意结果不是什么小数四舍五入，而是取整。就是说 1 除以 5 得到的是 0 ，4 除以 5 得到的也是 0。（其实这里经历了类型转换，计算结果是2.4，但是因为两个运算元素都是 int 类型，所以结果转成 int 类型了。）
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
                所以我们要得到小数，那么就需要分子或者分母，其中一个或全部为浮点型数据类型（<RedFontWrapper>之前的知识，利用类型之间相互运算，自动转型</RedFontWrapper>）。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img33]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                接下来，我们来看看几个取余计算：
            </ParagraphWrapper>
            <ParagraphWrapper>
                在实际开发中，取余符号常常用来判断是否能够除尽。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img34]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <RedFontWrapper>从结果可以看出，取模结果的正负，取决于“被模数”。</RedFontWrapper>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img35]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里的结果说明，取余计算的结果，不一定是整数。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img36]}
            ></ImagesGroup>
            <ParagraphWrapper>
                其实 前加加 和 后加加 的区别就是先取值，还是先加一。上面的代码中，定义 a1 的后面那个“=”其实是个“赋值运算符”，而后面的“a++”，就是说先取值，再加加，所以取到的值是 10。
            </ParagraphWrapper>
            <ParagraphWrapper>
                后面的 ++b 类型，就是说先加一，再取值，所以取到的是 11。
            </ParagraphWrapper>
            <ParagraphWrapper>然后，“--”符号也是类似的，前减减后减减的区别就是先取值，还是先运算。</ParagraphWrapper>
            <ImagesGroup
                srcArr={[img37]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <RedFontWrapper>
                    从上面的代码中可以知道，++ 和 -- 符号，是会改变自身的值的。
                </RedFontWrapper>
            </ParagraphWrapper>
            <ParagraphWrapper>
                还有一个知识点：如果想给short类型加一，可以使用 ++ 符号吗？因为如果直接使用 a = a + 1 ,是会报错的，因为 + 的 1，是默认 int 型。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img38]}
            ></ImagesGroup>
            <ParagraphWrapper>
                可以看到，这段代码是编译错误的。那么用 ++ 可以给 short 类型自增一吗？
            </ParagraphWrapper>
            <ParagraphWrapper>
                <RedFontWrapper>
                    答案是可以的，++ 和 -- 符号，不会改变数值原先的类型。
                </RedFontWrapper>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img39]}
            ></ImagesGroup>
            <ParagraphWrapper>
                因为 ++ 和 -- 是直接从底层字节上去加减一的，没有截断转型之类的操作，当然，计算效率也比 a = a + 1 这样的运算要高效。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img40]}
            ></ImagesGroup>
            <ParagraphWrapper>上面的输出结果是“-128”，我们知道 byte 的范围是 -128 到 127，然后当我们加上 1（byte类型的1）了之后，值就变成了 -128。</ParagraphWrapper>
            <ParagraphWrapper>因为 127 的 二进制是 01111111，加了byte 类型的 1 之后，就变成了 10000000，也就是 -128。</ParagraphWrapper>
            <ParagraphWrapper>这里也是类似的，也就验证了上面说的，++ 和 -- 不会改变原先数据的类型，所以 ++、--，就是按照原数据类型来加一（原先数据类型的 1）。</ParagraphWrapper>
        </div>
    </>)
}

export default Module