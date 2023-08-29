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
// import RedFontWrapper from '@/components/RedFontWrapper'
import Red from '@/components/RedFontWrapper'
import Blue from '@/components/BlueFontWrapper'
import ComLine from '@/components/ComLine'

import Dot from '@/components/Dot'
import img151 from '@/assets/images/img151.png'
import img152 from '@/assets/images/img152.png'
import img153 from '@/assets/images/img153.png'
import img154 from '@/assets/images/img154.png'
import img155 from '@/assets/images/img155.png'
import img156 from '@/assets/images/img156.png'
import img157 from '@/assets/images/img157.png'


const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                构造器的特征:
            </SmallTitle>
            <ParagraphWrapper>
                1、<Red>与所在类同名</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Red>它不声明返回值类型。（与声明为void不同）</Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、<Red>不能被static、final、synchronized、abstract、native修饰，不能有return语句返回值</Red>
            </ParagraphWrapper>

            <SmallTitle>
                构造器的作用：
            </SmallTitle>
            <ParagraphWrapper>
                1、<Red>创建对象；给对象进行初始化</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`2、使用的时候如：Order o = new Order(); Person p = new Person(“Peter”,15);`}
            </ParagraphWrapper>
            <ParagraphWrapper>
                {`3、如同我们规定每个“人”一出生就必须先洗澡，我们就可以在“人”的构造器中加入完成“洗澡”的程序代码，于是每个“人”一出生就会自动完成“洗澡”，程序就不必再在每个人刚出生时一个一个地告诉他们要“洗澡”了`}
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img151]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                根据参数不同，构造器可以分为如下两类：
            </ParagraphWrapper>
            <div
                style={{paddingLeft: '12px'}}
            >
                <Blue>
                    <ParagraphWrapper>
                        1、隐式无参构造器（系统默认提供）
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        2、显式定义一个或多个构造器（无参、有参）
                    </ParagraphWrapper>
                </Blue>
            </div>

            <ParagraphWrapper>
                注意：
            </ParagraphWrapper>
            <div
                style={{paddingLeft: '12px'}}
            >
                <Blue>
                    <ParagraphWrapper>
                        1、Java语言中，每个类都至少有一个构造器。
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        2、默认构造器的修饰符与所属类的修饰符一致。
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        <Red>3、一旦显式定义了构造器，则系统不再提供默认构造器。</Red>
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        4、 一个类可以创建多个<Red>重载</Red>的构造器。
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        5、父类的构造器不可被子类继承。
                    </ParagraphWrapper>
                </Blue>
            </div>

            {/* 分界线 */}
            <ComLine></ComLine>

            <ParagraphWrapper>
                <span style={{fontSize: '18px'}}>写个demo：</span>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img152]}
            ></ImagesGroup>

            <ParagraphWrapper>
                虽然上面我们的“注意”的<Red>第二点说，构造方法的权限修饰符和所在类的一样，但是还是要显示地写上去</Red>。这里我尝试没有写 public，所以在跨包的时候，无法在 main 方法中实例化。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们来试试使用构造器实例化对象：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img153]}
            ></ImagesGroup>
            <ParagraphWrapper>
                可以看到，初始化的 Person 对象，就带有了age初始值。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img154]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里加一句话，看输出结果，可以证明，我们在new对象的时候，确实调用的是构造器。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                构造器的使用细节：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img155]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里可以看到，我们这里用了“this.age”，这里的 this 指向了谁呢？<Blue>有点类似 js，谁调用指向谁。那当然就是实例化出的那个对象了</Blue>。也就是下图中的这个对象 p：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img156]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>构造器是可以“重载”的，是否重载的规则，和方法重载一样：</Red>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img157]}
            ></ImagesGroup>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                这里介绍一个常见的<Red>错误问题</Red>场景：<Red>就是我们定义了有参构造器后，忘记“显式地补回一个无参构造器”，然后实例化的时候，还是用无参构造直接 new</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    虽然 java 会自动帮我们隐式地添加一个无参构造器。但是当我们人为地添加构造器之后，java 就不会帮我们添加无参构造器了，所以，当我们手动添加了一个有参构造器了之后，默认的无参构造器就没了。此时还用无参构造实例化对象，就报错了。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    结论：一旦我们显式地定义了构造器，那么 java 就不会提供默认的隐式的无参构造器了。
                </Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                可以理解这个默认的无参构造器，是 java 给我们提供的低保。就像能赚到一定的钱了以后，就不能领低保了的说。
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module