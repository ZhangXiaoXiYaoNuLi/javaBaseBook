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
    Tp,
    SingleRowItem,
} from '@/components/index.js'
import {Switch, Form, Button} from 'antd'

import img706 from '@/assets/images/img706.png'
import img707 from '@/assets/images/img707.png'

const Module = (props) => {

    const formRef = useRef(null)

    return (<>
        <P>当程序主动使用某个类时，如果该类还未被加载到内存中，则系统会通过如下三个步骤来对该类进行初始化。</P>
        <div style={{padding: '32px', display: 'flex', width: '100%', overflowX: 'auto'}}>
            <SingleRowItem
                showRow={true}
            >
                <div
                    style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    <div>类的加载</div>
                    <div>（Load）</div>
                </div>
            </SingleRowItem>
            <SingleRowItem
                showRow={true}
            >
                <div
                    style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    <div>类的链接</div>
                    <div>（Link）</div>
                </div>
            </SingleRowItem>
            <SingleRowItem>
                <div
                    style={{
                        fontSize: '18px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    <div>类的初始化</div>
                    <div>（Init）</div>
                </div>
            </SingleRowItem>
        </div>
        <P><Dot></Dot><Bold>类的加载</Bold>：将类的class文件读入内存，并为之创建一个java.lang.Class对象。此过程由类加载器完成 </P>
        <P><Dot></Dot><Bold>类的链接</Bold>：将类的二进制数据合并到JRE中</P>
        <P><Dot></Dot><Bold>类的初始化</Bold>：JVM负责对类进行初始化</P>

        <ComLine></ComLine>

        <P>
            <Dot></Dot><Bold>加载：</Bold>{`将 class 文件字节码内容加载到内存中，并将这些静态数据转换成方法区的运行时数据结构，然后生成一个代表这个类的 java.lang.Class 对象，作为方法区中类数据的访问入口（即引用地址）。所有需要访问和使用类数据只能通过这个 Class 对象。这个加载的过程需要类加载器参与。`}
        </P>
        <ComSpace></ComSpace>
        <P><Dot></Dot><Bold>链接：</Bold>{`将Java类的二进制代码合并到JVM的运行状态之中的过程。`}</P>
        <P><Tp></Tp>验证：确保加载的类信息符合JVM规范，例如：以cafe开头，没有安全方面的问题</P>
        <P><Tp></Tp>准备：正式为类变量（static）<Blue>分配内存并设置类变量默认初始值</Blue>的阶段，这些内存都将在方法区中进行分配。</P>
        <P><Tp></Tp>解析：虚拟机常量池内的符号引用（常量名）替换为直接引用（地址）的过程。</P>
        <ComSpace></ComSpace>
        <P><Dot></Dot><Bold>初始化：</Bold></P>
        <P><Tp></Tp><Blue>{`执行类构造器<clinit>()方法的过程。类构造器<clinit>()方法是由编译期自动收集类中所有类变量的赋值动作和静态代码块中的语句合并产生的。`}</Blue>（类构造器是构造类信息的，不是构造该类对象的构造器）。</P>
        <P><Tp></Tp>{`当初始化一个类的时候，如果发现其父类还没有进行初始化，则需要先触发其父类的初始化。`}</P>
        <P><Tp></Tp>{`虚拟机会保证一个类的<clinit>()方法在多线程环境中被正确加锁和同步。`}</P>

        <ComLine></ComLine>

        <SmallTitle>了解：什么时候会发生类初始化？</SmallTitle>
        <P><Dot color="black"></Dot><Bold>类的主动引用（一定会发生类的初始化）</Bold></P>
        <P><Tp></Tp>当虚拟机启动，先初始化main方法所在的类</P>
        <P><Tp></Tp>new一个类的对象</P>
        <P><Tp></Tp>调用类的静态成员（除了final常量）和静态方法</P>
        <P><Tp></Tp>使用java.lang.reflect包的方法对类进行反射调用</P>
        <P><Tp></Tp>{`当初始化一个类，如果其父类没有被初始化，则先会初始化它的父类`}</P>

        <ComSpace></ComSpace><ComSpace></ComSpace>

        <P><Dot color="black"></Dot>类的被动引用（不会发生类的初始化）</P>
        <P><Tp></Tp>当访问一个静态域时，只有真正声明这个域的类才会被初始化</P>
        <P><Tp></Tp>当通过子类引用父类的静态变量，不会导致子类初始化</P>
        <P><Tp></Tp>通过数组定义类引用，不会触发此类的初始化</P>
        <P><Tp></Tp>引用常量不会触发此类的初始化（常量在链接阶段就存入调用类的常量池中了）</P>

        <ComLine></ComLine>
        <SmallTitle>类加载器的理解</SmallTitle>

        {/* 
            类加载器作用是用来把类(class)装载进内存的。JVM 规范定义了如下类型的类的加载器。
        */}

        {/* 
            类加载器的作用：
             类加载的作用：将class文件字节码内容加载到内存中，并将这些静态数据转换成方
            法区的运行时数据结构，然后在堆中生成一个代表这个类的java.lang.Class对象，作为
            方法区中类数据的访问入口。
             类缓存：标准的JavaSE类加载器可以按要求查找类，但一旦某个类被加载到类加载器
            中，它将维持加载（缓存）一段时间。不过JVM垃圾回收机制可以回收这些Class对象。
        */}
        <P><Bold>类加载器的作用：</Bold></P>  
        <P><Dot></Dot><Bold>类加载的作用：</Bold>
            <span>
                将class文件字节码内容加载到内存中，并将这些静态数据<Blue>转换成方法区的运行时数据结构</Blue>，然后在堆中生成一个代表这个类的java.lang.Class对象，作为方法区中类数据的访问入口。
            </span>
        </P>
        <P><Dot></Dot><Bold>类缓存：</Bold><span>
            标准的JavaSE类加载器可以按要求查找类，但一旦某个类被加载到类加载器中，它将维持加载（缓存）一段时间。不过JVM垃圾回收机制可以回收这些Class对象。
            </span></P>

            <div style={{padding: '32px', display: 'flex', width: '100%', overflowX: 'auto'}}>
                <SingleRowItem showRow={true} minWidth="100px">
                    <div className={styles.font14}>源代码的 xxx.java 文件</div>
                </SingleRowItem>
                <SingleRowItem showRow={true} minWidth="80px">
                    <div className={styles.font14}>通过 java 编译器</div>
                </SingleRowItem>
                <SingleRowItem showRow={true} minWidth="110px">
                    <div className={styles.font14}>成为字节码文件，即 xxx.class</div>
                </SingleRowItem>

                <SingleRowItem showRow={true} minWidth="70px">
                    <div className={styles.font14}>解释器</div>
                </SingleRowItem>
                
                <SingleRowItem showRow={true} minWidth="82px">
                    <div className={styles.font14}>字节码校验器</div>
                </SingleRowItem>
                <SingleRowItem showRow={true} minWidth="100px">
                    <div className={styles.font14}>类装载器</div>
                </SingleRowItem>
                <SingleRowItem color="#888" minWidth="120px">
                    <div style={{color: 'gold'}} className={styles.font14}>操作系统平台</div>
                </SingleRowItem>
            </div>

        <ComLine></ComLine>
        <P><Bold>{`类加载器作用是用来把类(class)装载进内存的。JVM 规范定义了如下类型的类的加载器。`}</Bold></P>
        <ComSpace></ComSpace>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '400px',
        }}>
            {/* #e6f4ff */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{
                    width: '0px',
                    height: '0px',
                    borderBottom: `32px solid #e6f4ff`,
                    borderLeft: '32px solid transparent',
                    borderRight: '32px solid transparent',
                }}></div>
                {/* 自底向上检查类是否已加载 */}
                {/* 自顶向下尝试加载类 */}
                <div style={{backgroundColor: '#e6f4ff', height: '350px', width: '26px', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                    自底向上检查类是否已加载
                </div>
            </div>
            <div style={{width: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <SingleRowItem showRow={false} minWidth="100px">
                    <div className={styles.font14}>Bootstap Classloader</div>
                </SingleRowItem>
                <SingleRowItem showRow={true} minWidth="100px" arrow={'top'}>
                    <div className={styles.font14}>Extension Classloader</div>
                </SingleRowItem>
                <SingleRowItem showRow={true} minWidth="100px" arrow={'top'}>
                    <div className={styles.font14}>System Classloader</div>
                </SingleRowItem>
                <SingleRowItem showRow={true} minWidth="100px" arrow={'top'}>
                    <div className={styles.font14}>自定义类加载器</div>
                </SingleRowItem>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div style={{backgroundColor: '#e6f4ff', height: '350px', width: '26px', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
                    自顶向下尝试加载类
                </div>
                <div style={{
                    width: '0px',
                    height: '0px',
                    borderTop: `32px solid #e6f4ff`,
                    borderLeft: '32px solid transparent',
                    borderRight: '32px solid transparent',
                }}></div>
            </div>
        </div>

        <ComSpace></ComSpace>
        <ComSpace></ComSpace>

        <P>
            <Dot color="black"></Dot><Bold>引导类加载器（Bootstap Classloader）：</Bold>
            <span>用C++编写的，是JM自带的类加载器，负责Java平台核心，作用来装载核心类库。该加载类无法直投获取。</span>
        </P>
        <P><Dot color="black"></Dot><Bold>扩展类加载器（Extension Classloader）：</Bold><span>负责jre/lib/ext目录下的jar包或 –D java.ext.dirs 指定目录下的jar包装入工作库。</span></P>
        <P><Dot color="black"></Dot><Bold>系统类加载器（System Classloader）：</Bold>
                <span>负责java –classpath 或 –D java.class.path所指的目录下的类与jar包装入工作 ，是最常用的加载器。</span>
        </P>

        <ComLine></ComLine>
        {/* 
            • //1.获取一个系统类加载器
            • ClassLoader classloader = ClassLoader.getSystemClassLoader();
            • System.out.println(classloader);
            • //2.获取系统类加载器的父类加载器，即扩展类加载器
            • classloader = classloader.getParent();
            • System.out.println(classloader);
            • //3.获取扩展类加载器的父类加载器，即引导类加载器
            • classloader = classloader.getParent();
            • System.out.println(classloader);
            • //4.测试当前类由哪个类加载器进行加载
            • classloader = Class.forName("exer2.ClassloaderDemo").getClassLoader();
            • System.out.println(classloader);
            • //5.测试JDK提供的Object类由哪个类加载器加载
            • classloader = 
            • Class.forName("java.lang.Object").getClassLoader();
            • System.out.println(classloader);
            • //*6.关于类加载器的一个主要方法：getResourceAsStream(String str):获取类路
            径下的指定文件的输入流
            • InputStream in = null;
            • in = this.getClass().getClassLoader().getResourceAsStream("exer2\\test.properties");
            • System.out.println(in);
        */}

        <P>下面上代码试试，输出各种类的加载器</P>
        <ImagesGroup
            srcArr={[img706]}
        ></ImagesGroup>

        <P>
            可以看到直接用方法 getSystemClassLoader 获取类加载器，输出的是 AppClassLoader，也就是当前项目的系统加载类，使用 getParent 方法
            <span>{`得到的是 Extension Classloader 即 扩展类加载器，继续调用 getParent 方法，获取的输出是 null，其实是因为 引导类加载器 Bootstap Classloader 无法获取。`}</span>
        </P>
        <P>
            后面，我们尝试输出自定义类 Person，以及 Object 的类加载器，一个是输出 系统类加载器，一个是输出为 null，也就是 引导类加载器。
        </P>

        <ComLine></ComLine>

        <P><Bold>类加载器 classLoader 在实际开发中的作用，<Blue>通常是用于获取类路径下的配置文件</Blue>。</Bold></P>
        <P>也就是使用类加载器 classLoader 的 getResourceAsStream 方法，获取类路径下的指定文件的输入流</P>
        <ComSpace></ComSpace>
        <P>下面上代码：</P>

        <ImagesGroup
            srcArr={[img707]}
        ></ImagesGroup>

        <P><Blue>注意这里的路径问题，如果是调用的 class 的 getResourceAsStream 方法，那么路径就是所在类为根目录。如果调用的是<span>
                类加载器的 getResourceAsStream 方法，那么路径就是以“类加载器所在路径”为根目录的，目前这个demo项目也就是src，而<span>
                    如果是 springboot 项目，则是 resource 文件夹。
                </span>
            </span></Blue></P>
    </>)
}

export default Module