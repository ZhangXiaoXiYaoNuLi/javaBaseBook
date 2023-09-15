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

import img308 from '@/assets/images/img308.png'
import img309 from '@/assets/images/img309.png'
import img310 from '@/assets/images/img310.png'
import img311 from '@/assets/images/img311.png'
import img312 from '@/assets/images/img312.png'
import img313 from '@/assets/images/img313.png'
import img314 from '@/assets/images/img314.png'
import img315 from '@/assets/images/img315.png'
import img316 from '@/assets/images/img316.png'
import img317 from '@/assets/images/img317.png'
import img318 from '@/assets/images/img318.png'
import img319 from '@/assets/images/img319.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                接口的多实现和多继承
            </SmallTitle>

            <ParagraphWrapper>
                <Blue>一个类可以实现多个接口，接口也可以继承其它接口。</Blue><Red>一定程度上“打破”了 java 不能多继承的局限性</Red>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img308]}
            ></ImagesGroup>

            <ParagraphWrapper>
                如上图，就是多继承的实际意义。
            </ParagraphWrapper>

            <ParagraphWrapper>
                直接上代码，看看 多继承的 语法，首先我们定义一个 “攻击” 接口：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img309]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们定义一个“子弹”类，同时实现“会飞”和“攻击”接口：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img310]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>可以看到，多继承的语法其实很简单，就是<Red>“多个接口英文逗号间隔”</Red></Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>那么接口之间怎么继承呢？而且类不能多继承，那么接口可以多继承吗？</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>因为接口不涉及 new 实例对象，所以接口之间是可以多继承的。</Red>下面上代码看看：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img311]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>接口之间的继承，<Red>使用的也是“extends”关键字</Red>,然后<Red>多继承</Red>的话，<Red>使用“多个接口名，英文逗号间隔”</Red>，就行</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>接口匿名实现类</SmallTitle>

            <ParagraphWrapper>
                这个是开发中常用的写法。直接上代码
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img312]}
            ></ImagesGroup>

            <ParagraphWrapper>
                首先，我们定义一个 “USB传输接口” 类，如上图
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们定义一个实现 USB 接口的实现类， U盘 类，叫 Flash ：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img313]}
            ></ImagesGroup>

            <ParagraphWrapper>
                接着，我们再来个 电脑 类 Computer，其中有个方法 transferData 方法，<Blue>方法参数为 USB 接口（<Red>但实际需要传入的是实现 USB 接口的类的实例对象</Red>）</Blue>:
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img314]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后，我们来到 main 方法中，尝试下面的四种不同情况的写法：
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>1、创建接口的非匿名实现类的非匿名对象。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img315]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>2、创建接口的非匿名实现类的匿名对象。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img316]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>3、创建接口的匿名实现类的非匿名对象。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img317]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>4、创建接口的匿名实现类的匿名对象。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    这种是开发中常用的便捷写法，其实只要记住是 “new 接口，且在 接口名 后面跟 实现抽象方法的结构体” 就行
                </Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img318]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>要判断是不是匿名对象，可以根据 new 出来的对象，有没有 赋值 给某个变量。</Red>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot color="red"></Dot><Red>要判断是不是匿名实现类，可以根据是不是 new 接口 然后后面是否紧跟着实现类的结构体，来判断。</Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>
                    抽象类 与 接口 的区别：
                </Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img319]}
            ></ImagesGroup>

        </div>
    </>)
}

export default Module