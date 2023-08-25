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
import img144 from '@/assets/images/img144.png'
import img145 from '@/assets/images/img145.png'
import img146 from '@/assets/images/img146.png'
import img147 from '@/assets/images/img147.png'
import img148 from '@/assets/images/img147.png'
import img149 from '@/assets/images/img149.png'
import img150 from '@/assets/images/img150.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <SmallTitle>
                    关于 java 中的四个权限：
                </SmallTitle>
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img144]}
            ></ImagesGroup>
            <ParagraphWrapper>
                <Dot></Dot><Blue>修饰符用于修饰类和类的成员（属性和方法），但是对于类和类的成员，能用的修饰符是不一样的</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    修饰 <Red>类</Red> 的修饰符只有<Red>两个</Red>：<Red>public</Red>、<Red>缺省</Red>。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    所以类只有两种权限范围，同一个包内、或者 全工程。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>
                    修饰 <Red>成员</Red> 的修饰符有<Red>四个</Red>：<Red>public</Red>、<Red>protected</Red>、<Red>缺省</Red>、<Red>private</Red>。
                </Blue>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>而且再后续的实际开发中，绝大多数情况下，只会用到 private 还有 public，很难碰到另外两种的情况</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                注意这里的“缺省”，就是“什么都不写”，别傻乎乎写个“default”上去啊。
            </ParagraphWrapper>

            <ParagraphWrapper>
                其实顾名思义，很容易记得权限的大小顺序：私有 - 缺省 - 受保护的 - 公共 ， 从小到大。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以只要再记住范围的从小到大，就可以记住上面这个表格了：类内部、同一个包、不同包的子类、同一个工程，从小到大。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                关于四个权限修饰符的测试：
            </SmallTitle>

            <ParagraphWrapper>
                1、测试类的权限修饰符：public 和 缺省 的区别：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img145]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里我们新建了一个“包”，换种看法，其实是一个子文件夹 “children”，然后我们在其中创建一个 TestObj 类，且用 public 修饰。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img146]}
            ></ImagesGroup>
            <ParagraphWrapper>
                这里可以看到，我们在main方法中，可以直接使用 TestObj 创建实例化对象。然后我们去掉 public 试试：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img147]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后我们会发现，main方法中报错了，已经无法使用 TestObj 创建实例对象了（即使import也import不进来）：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img148]}
            ></ImagesGroup>
            <ParagraphWrapper>
                上面就是关于 类 的 两个 修饰符权限 的测试。
            </ParagraphWrapper>

            <div style={{height: '50px'}}></div>

            <ParagraphWrapper>
                2、测试 类成员 的 权限修饰符（private、缺省、protected、public）：
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）对private的测试：
            </ParagraphWrapper>
            <ParagraphWrapper>
                首先在和 main 同级的位置，创建一个 PrivateTest 类，然后定义一个用 private 定义的成员属性 a。
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img149]}
            ></ImagesGroup>
            <ParagraphWrapper>
                然后我们来到 main 方法中创建实例，尝试访问实例属性 a。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img150]}
            ></ImagesGroup>

            <ParagraphWrapper>
                可以看到在访问属性的时候，报错提示我们属性已经被 private 修饰了。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module