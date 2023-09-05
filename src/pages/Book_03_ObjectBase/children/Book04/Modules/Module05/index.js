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

import img186 from '@/assets/images/img186.png'
import img187 from '@/assets/images/img187.png'
import img188 from '@/assets/images/img188.png'
import img189 from '@/assets/images/img189.png'
import img190 from '@/assets/images/img190.png'
import img191 from '@/assets/images/img191.png'
import img192 from '@/assets/images/img192.png'
import img193 from '@/assets/images/img193.png'
import img194 from '@/assets/images/img194.png'
import img195 from '@/assets/images/img195.png'
import img196 from '@/assets/images/img196.png'
import img197 from '@/assets/images/img197.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>super的作用</SmallTitle>
            <ParagraphWrapper>
                <Dot></Dot>在Java类中使用super来调用父类中的指定操作：
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、super可用于访问父类中定义的属性。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、super可用于调用父类中定义的成员方法。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、super可用于在子类构造器中调用父类的构造器。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                注意点：
            </SmallTitle>
            <ParagraphWrapper>
                1、<Blue>尤其当子父类出现同名成员时，可以用super表明调用的是父类中的成员</Blue>（当然，一般开发中，不会搞个父子类同名属性）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、<Red>super的追溯不仅限于直接父类，也包括间接父类</Red>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                3、super和this的用法相像，this代表本类对象的引用，super代表父类的内存空间的标识。
            </ParagraphWrapper>
            
            <ComLine></ComLine>

            <SmallTitle>
                关于super调用父类的构造器：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>子类中<Blue>所有的</Blue>构造器<Blue>默认</Blue>都<Blue>会访问父类中空参数的构造器</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>当父类中没有空参数的构造器时，子类的构造器必须通过this（参数列表）或者super（参数列表）语句指定调用本类或者父类中相应的构造器。同时，只能”二选一”，且必须放在构造器的首行</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                <Dot></Dot><Blue>如果子类构造器中既未显式调用父类或本类的构造器，且父类中又没有无参的构造器，则编译出错</Blue>。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <SmallTitle>
                关于 super 和 this 的区别：
            </SmallTitle>

            <ImagesGroup
                srcArr={[img186]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                接着，我们通过代码来测试一下，并了解下 super 调用属性、方法 的 细节
            </ParagraphWrapper>

            <ParagraphWrapper>
                可以想像一个场景，父类中有一个方法，然后子类重写了这个方法，此时如果用子类实例对象调用改方法，那么就会调用到重写的那个。
            </ParagraphWrapper>

            <ParagraphWrapper>
                那有没有办法<Blue>在子类重写后，依然用子类实例调用父类<Red>被</Red>重写的方法</Blue>呢？<Blue>那就是使用 super 关键字</Blue>（是不是觉得有点像 this）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                this当时我们说是可以理解为“当前实例对象的xxx”，而<Blue>super可以理解为“当前实例对象父类的xxx”</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                还是经典的 Person 和 Student 类，Student 类继承 Person 类。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img187, img188]}
            ></ImagesGroup>

            <ParagraphWrapper>
                父类中照常地定义了俩属性 name 和 age，然后是两个构造方法，以及 eat 、walk 方法。然后子类中是定义了 major 属性，俩构造器，以及重写了父类的 eat 方法，以及自己的独立方法 study。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Blue>另外的，这里 IDEA 的重写是有快捷方式的，其实就是右键，然后generation，就可以找到 override xxx 了</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                接下来我们开始测试，首先我们尝试一下，<Blue>在子类中调用父类的属性，我们来到 Student 类中，添加方法 show</Blue>：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img189]}
            ></ImagesGroup>

            <ParagraphWrapper>
                show 方法中，我们输出了 age 和 name 属性，这两个关键字前面什么都没写，其实就相当于是 this.age 和 this.name 了。当然这里可以手动把前面加上 “super.” ，结果是一样的。
            </ParagraphWrapper>

            <ParagraphWrapper>
                那么此时 用 this 和 super 的区别是什么？就是用 this 的时候，回去当前堆空间这个对象中去找这俩属性先，找不到，再去往上一层的父类找，在找不到，再往上一层父类，如此循环。<Blue>注意到这里寻找的起点，是当前实例对象</Blue>。
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>而如果是用 super 关键字，则是直接去上一层父类开始找</Blue>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                所以我们可以尝试一下，在子类中定义一个属性，并用 super. 去调用看看：
            </ParagraphWrapper>
            <ImagesGroup
                srcArr={[img190]}
            ></ImagesGroup>
            <ParagraphWrapper>可以看到，是找不到这个属性的。</ParagraphWrapper>

            <ParagraphWrapper>还有<Blue>一种情况下，是必须使用 super 关键字调属性的，就是父类子类，有同名的属性</Blue>。</ParagraphWrapper>

            <ImagesGroup
                srcArr={[img191]}
            ></ImagesGroup>

            <ParagraphWrapper>
                这里我们给父组件添加一个属性 id ，初始值为“父类 id”，子组件也添加一个属性 id ，初始值为“子类 id”，然后在show方法中，使用this和super调用属性id。可以看到输出结果，this 和 super 区分了父子类同名属性。
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然这里有个前提知识点，<Red>父子类同名属性，并不会像同名方法那样，有重写，又或者说是“覆盖”。父子类是可以同时存在同名属性的</Red>。
            </ParagraphWrapper>

            <ParagraphWrapper>
                当然，<Blue>在一般情况下，由父类继承来的属性、方法，我们都直接使用属性名、方法名调用的，而且省略“super.”</Blue>,如下图。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img192]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <ParagraphWrapper>
                接下来，我们来看看 super 调用构造器的代码测试
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img193]}
            ></ImagesGroup>

            <ParagraphWrapper>
                我们改一下之前的代码，将父类中的 属性 name 、age 给 private 私有化了（一般开发中也会把属性私有化）。
            </ParagraphWrapper>

            <ParagraphWrapper>
                然后我们在子类中添加一个构造方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img194]}
            ></ImagesGroup>

            <ParagraphWrapper>
                在我们把父类属性私有化之后，在这个新增的构造方法中，再用 this.属性 赋值，就会报错（如果父类属性是public，那是可以的）。这个时候可以想到，那使用 this.setXXX 来进行赋值可以吗？答案是可以的，但是有更好的做法，那就是用 super 关键字。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img195]}
            ></ImagesGroup>

            <ParagraphWrapper>
                实际上我们调用的是父类的这个构造方法：
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img196]}
            ></ImagesGroup>

            <ParagraphWrapper>
                在子类构造其中，<Red>使用 super 调用父类构造器的语句,必须放在构造器的“第一行”</Red>。<Blue>然后我们想到之前说过的 “在构造器中使用 this. 调用本类构造器，必须放第一行”，可以知道，this \ super 都需要在第一行</Blue>，所以很明显，<Red>super 和 this 调用构造器，只能 二选一</Red>。
            </ParagraphWrapper>

            <ImagesGroup
                srcArr={[img197]}
            ></ImagesGroup>

            <ParagraphWrapper>
                <Blue>在即没有使用 this 又没有使用 super 调用的构造器函数里，<Red>第一行都有一个“隐藏的 {`super()`}”</Red></Blue>，不管你是不是显式地写上去，它都在（在本身没有this、super调用的前提下）。
            </ParagraphWrapper>
            <ParagraphWrapper>
                要验证也很简单，去父类的无参构造函数中输出一句话，然后再在实例化的时候，调研子类的无参构造器就行。这里就不放代码截图了。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Red>
                    正是因为有这个隐式的 {`super()`} 调用，所以在子类构造器函数中，第一行如果没有显式地使用 this 、super 调用有参的构造函数，那就必须保证父类有无参构造器，否则报错。
                </Red>
            </ParagraphWrapper>
            <ParagraphWrapper>
                <Blue>换种说法，就是因为{`super()`} 的隐式调用，所以要防止调用不存在的父类无参构造方法，做法就是在子类构造函数第一行，用有参this、super调用，替换掉这个super隐式调用</Blue>。
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module