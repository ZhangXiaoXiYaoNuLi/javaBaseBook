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

import img320 from '@/assets/images/img320.png'
import img321 from '@/assets/images/img321.png'
import img322 from '@/assets/images/img322.png'
import img323 from '@/assets/images/img323.png'
import img324 from '@/assets/images/img324.png'
import img325 from '@/assets/images/img325.png'
import img326 from '@/assets/images/img326.png'
import img327 from '@/assets/images/img327.png'
import img328 from '@/assets/images/img328.png'
import img329 from '@/assets/images/img329.png'
import img330 from '@/assets/images/img330.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>接口应用：代理模式</SmallTitle>

            <ParagraphWrapper>
                代理模式概述：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    {`代理模式(Proxy Pattern)`}：代理模式是 Java 常见的设计模式之一。所谓代理模式是指客户端<Red>并不直接调用实际的对象，而是通过调用代理对象，来间接的调用实际的对象</Red>。通俗的来讲代理模式就是我们生活中常见的中介。
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                现在不用太偏执地理解上面这句话，后面代码见多了，自然想不理解也不行了。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                举个栗子：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img320]}
            ></ImagesGroup>
            
            <ParagraphWrapper>
                还是不是很清晰，下面来个代码栗子：
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，我们定义一个 network 接口：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img321]}
            ></ImagesGroup>

            <ParagraphWrapper>
                然后我们再定义一个“代理服务器”类（<Blue>代理类</Blue>），实现这个 network 接口：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img322]}
            ></ImagesGroup>

            <ParagraphWrapper>
                接着，我们再定义一个“服务器”类（<Blue>被代理类</Blue>）（<Blue>实际被调用类</Blue>）：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img323]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后，我们来到 main 方法中：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img324]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Red>首先，我们要知道我们现在学的这个叫“静态代理”，就是说是在编译前的代理动作。</Red>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>
                    然后我们来看代码，上面的三个类，其实可以分为三个种类：
                </Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Blue>1、抽象主题类（NetWork）（它当然不是只能是接口，也可以是类）</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>2、真实主题类（Server）（实现了抽象主题中的具体业务，是代理对象所代表的真实对象，是最终要引用的对象）</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>3、代理类（ProxyServer）（ <Red>提供了与真实主题相同的接口--又或者说是方法</Red>，其内部<Red>含有对真实主题的引用</Red>，它可以<Red>访问、控制或扩展真实主题的功能</Red>）</Blue>
            </ParagraphWrapper>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>

            <ParagraphWrapper>
                然后我们从代码编写结构、格式上的角度来看：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>1、首先我们需要定义一个抽象主题（其实就是真实对象要做什么的抽象描述）。<Red>静态代理在使用时，需要定义接口或者父类，而被代理对象与代理对象一起实现相同的接口或者是继承相同父类</Red>（如同我们在代码里定义的 network 接口）</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>2、然后定一个“运行起点”，也就是一个真实主题（其实就是被真实调用的那个对象的类），<Red>当然这个类要继承、或者实现，我们第一步定下的类、接口</Red></Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>3、然后就可以定义一系列的“代理类”（你也可以理解为是“加工类”），同样这一系列的代理、加工类 ，也要继承、实现第一步中的那个抽象主题（那个类、接口）</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                下面我们来看一个简化的，更好理解的例子（按照我们上面总结的代码编写结构来）：
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue><Bold>1、</Bold>首先，按照上面说的第一步，我们定义一个抽象类（抽象主题），创建“工人”类，添加一个“工作”方法-- work。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img325]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue><Bold>2、</Bold>然后，第二步，我们定义一个“运行起点”（真实对象，带着真实方法），一个 Man 类，继承“工人”类，实现抽象方法。</Blue>
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img326]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue><Bold>3、</Bold>然后我们来到第三步，<Red>定义“一系列”的“代理类”</Red>（又或者叫“加工类”），<Red>每一个</Red>“代理类”中，<Red>都实现 Worker（抽象主题） 中的抽象方法 work</Red>，然后<Red>在这个方法里，给每一个“上一层加工后的结果”，进行“下一步的加工”</Red>。</Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    注意这里代理类的语法结构：
                </Blue>
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>首先肯定的是，我们这个代理类，要继承、实现抽象主题，在这里也就是要“继承 worker 类，然后实现 work 方法”。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>然后是，要用构造函数，接收“上一个代理\加工类实例”。且保存在本类的成员属性中。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>最后是，在类中实现抽象主题中的“公共”方法，也就是实现这里的抽象方法 work，然后在这个方法实现中，使用第二步接收的代理类实例调用“上一步”的work方法，从而在“本次加工”中获取“加工原料”。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img327]}
            ></ImagesGroup>

            <ParagraphWrapper>
                上图中，在work方法中，我们调用了“上一步加工实例的work方法”，这个方法获取的结果是“结果了之前的加工获取的结果”，然后我们在这里进行进一步的加工（也就是在前面加上“一边喝饮料”）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                接着，依样画葫芦，再添加两步“代理”：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img328, img329]}
            ></ImagesGroup>

            <ParagraphWrapper>
                最后，我们来到 main 方法中，“嵌套”\“按序”地从上到下调用，最后得到最终加工结果：“一边喝饮料一边在听歌一边在偷偷学习地在工作”。如下图
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img330]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>可以观察到这里的代码调用结构，就是上一步 利用 代理类 new 出来的实例，传给下一步 代理类的构造函数作为参数，然后在最后使用 Drink 类对象，调用 work 方法的时候，就会将上面“串联”起来的加工方法按顺序执行到底</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    另外，可以注意到这里的“加工顺序”，Drink类是最后new的，反而“一边喝饮料”是最先被添加上去的。这个顺序有点意思，可以联想一下。
                </Red>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                应用场景：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>安全代理：屏蔽对真实角色的直接访问。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>远程代理：通过代理类处理远程方法调用（RMI）
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Dot></Dot>延迟加载：先加载轻量级的代理对象，真正需要再加载真实对象比如你要开发一个大文档查看软件，大文档中有大的图片，有可能一个图片有100MB，在打开文件时，不可能将所有的图片都显示出来，这样就可以使用代理模式，当需要查看图片时，用proxy来进行大图片的打开。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Blue>这里划个分界线，其实上面我们说的，都是“静态代理”，其实 java 中更有实际意义的是 运行时的 “动态代理”（<Red>代理类\加工类，是动态生成的</Red>），不过那个需要用到“反射”的知识，目前先不深入。</Blue>
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>接口应用：工厂模式</SmallTitle>

            <ParagraphWrapper>
                目前暂时不深入讲解工厂模式。了解一下就行
            </ParagraphWrapper>

            <ParagraphWrapper>
                首先，工厂模式，就是用来造对象的，之前我们都是自己直接 new 实例对象的。现在工厂模式，就是把 new 对象这件事管理起来。对象一律由“工厂”生成。
            </ParagraphWrapper>

            <ParagraphWrapper>
                目的是为了，将 实例创建者 和 方法调用者 分离。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>
                    <Blue>其实在后续的开发中，会经常遇到 “xxx<Red>Factory</Red>”这种方法、api。我们就可以敏感一下了，要联想到“工厂模式”这块。</Blue>
                </Blue>
            </ParagraphWrapper>

        </div>
    </>)
}

export default Module