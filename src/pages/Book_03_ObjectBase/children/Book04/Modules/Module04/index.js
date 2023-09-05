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
} from '@/components/index.js'

import img180 from '@/assets/images/img180.png'
import img181 from '@/assets/images/img181.png'
import img182 from '@/assets/images/img182.png'
import img183 from '@/assets/images/img183.png'
import img184 from '@/assets/images/img184.png'
import img185 from '@/assets/images/img185.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                之前已经谈过：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img180]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>
                    修饰类的只有 public 和 缺省（也就是什么都不写），所以可以理解为，类前面能放的修饰符只有 public。
                </Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Red>
                    换句话说，类的权限限制 只有 “包” 限制，要不就只有同包内可以访问（缺省权限），要么就全工程可以访问（public）。
                </Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    修饰属性和方法的，才是四个权限都可以用上。
                </Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                之前是讲过其它权限了，就是 <Blue>protected</Blue> 修饰符没有具体讲过，因为当时还没有接触到继承。
            </ParagraphWrapper>

            <ParagraphWrapper>
                现在就主要来测试一下 protected 权限修饰符是怎么理解的。其它权限修饰符也顺带测试
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img181]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先我们创建一个 order 类，然后可以观察到，我们用到了四个权限去修饰四个属性，四个方法（属性名称、方法名称按一定规则，很顾名思义吧）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们接着测试
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="#597ef7"></Dot>首先我们来测试 类内部 的访问权限
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img182]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以尝试在类内的方法，调用四个权限的属性，明显地，都是可以调用的。所以,<Red>在类内部，不管什么权限的属性，都是可以访问的</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="#597ef7"></Dot>然后我们将范围扩大，来到 包内部 来测试权限
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先在同一个包内，我们创建一个测试类（有main方法的），如下图
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img183]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们在类里面尝试使用 order 的实例对象，访问四个权限修饰的属性。可以看到，在同一个包中，只有 private 的属性无法访问。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们尝试用实例对象调用四个权限的方法，如下图
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img184]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到，类似属性的权限测试，在同个包中，只有私有的方法，不能访问到。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="#597ef7"></Dot>继续扩大范围测试，将范围扩大到不同的包中
            </ParagraphWrapper>
            <ParagraphWrapper>
                首先我们在 src 下创建另一个包 children2 ，然后在里面新建一个类 SubOrder：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img185]}
            ></ImagesGroup>

            <ParagraphWrapper>
                其实看 IDEA 的自动联想，就可以看到这里可以访问的属性。很好理解，方法也是类似的，只有 public 和 protected 权限的可以访问。<Blue>首先是private修饰的，现在在类的外面明显访问不了，排除。然后是缺省，现在在不同的包中，不能访问，排除。</Blue>
                <Red>然后是来到 protected，其实 protected 很像缺省，都是包外不可访问，但是它比起缺省，多留了个访问可能性（方式），就是“作为子类继承的属性访问”</Red>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后来到 public 就不用试了，就是全工程都可以访问。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module