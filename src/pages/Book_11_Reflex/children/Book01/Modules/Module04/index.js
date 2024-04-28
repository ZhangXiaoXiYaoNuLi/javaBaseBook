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
} from '@/components/index.js'

import {Table} from 'antd'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
           {/* 
                在Object类中定义了以下的方法，此方法
                将被所有子类继承：
                ● public final Class getClass()
                以上的方法返回值的类型是一个Class类，
                此类是Java反射的源头，实际上所谓反射
                从程序的运行结果来看也很好理解，即：
                可以通过对象反射求出类的名称。
           */}
           <P><Bold>Object类是所有类的子类，而其中定义了一个方法，被所有的子类所继承：</Bold></P>
           <P><Dot color="red"></Dot><Red>{`public final Class getClass()`}</Red></P>
           <P><Bold>以上的方法返回值的类型是一个Class类（<Blue>一个“描述类”的类</Blue>），此类是Java反射的源头，实际上所谓反射从程序的运行结果来看也很好理解，即：可以通过对象反射求出类的名称。</Bold></P>
           <ComLine></ComLine>
           <P><Dot></Dot>{`对象照镜子后可以得到的信息：某个类的属性、方法和构造器、某个类到底实现了哪些接口。对于每个类而言，JRE 都为其保留一个不变的 Class 类型的对象。一个 Class 对象包含了特定某个结构(class/interface/enum/annotation/primitive type/void/[])的有关信息。`}</P>
           <P>
            <Tp></Tp>Class本身也是一个类
            </P>
            <P><Tp></Tp>Class 对象只能由系统建立对象</P>
            <P><Tp></Tp>一个加载的类在 JVM 中只会有一个Class实例</P>
            <P><Tp></Tp>一个Class对象对应的是一个加载到JVM中的一个.class文件</P>
            <P><Tp></Tp>每个类的实例都会记得自己是由哪个 Class 实例所生成</P>
            <P><Tp></Tp>通过Class可以完整地得到一个类中的所有被加载的结构</P>
            <P><Tp></Tp>Class类是Reflection的根源，针对任何你想动态加载、运行的类，唯有先获得相应的Class对象</P>

            <ComLine></ComLine>

            <SmallTitle>常用方法</SmallTitle>

           <div style={{paddingTop: '12px'}}>
            <Table
                    dataSource={[
                        {funcName: 'static Class forName(String name)', funcDetail: '返回指定类名 name 的 Class 对象'},
                        {funcName: 'Object newInstance()', funcDetail: "调用缺省构造函数，返回该Class对象的一个实例"},
                        {funcName: 'getName()', funcDetail: '返回此Class对象所表示的实体（类、接口、数组类、基本类型或void）名称'},
                        {funcName: 'Class getSuperClass()', funcDetail: "返回当前Class对象的父类的Class对象"},
                        {funcName: 'Class [] getInterfaces()', funcDetail: 'Class [] getInterfaces() 获取当前Class对象的接口'},
                        {funcName: 'ClassLoader getClassLoader()', funcDetail: '返回该类的类加载器'},
                        {funcName: 'Class getSuperclass()', funcDetail: '返回表示此Class所表示的实体的超类的Class'},
                        {funcName: 'Constructor[] getConstructors()', funcDetail: "返回一个包含某些Constructor对象的数组"},
                        {funcName: 'Field[] getDeclaredFields()', funcDetail: '返回Field对象的一个数组'},
                        {funcName: 'Method getMethod(String name, Class … paramTypes)', funcDetail: '返回一个Method对象，此对象的形参类型为paramType'}
                    ]}
                    columns={[
                        {
                            title: '方法名',
                            dataIndex: 'funcName',
                            width: '253px',
                        },
                        {
                            title: '功能说明',
                            dataIndex: 'funcDetail'
                        }
                    ]}
                    pagination={false}
                    bordered
                    size="small"
                    scroll={{
                        x: 750
                    }}
            ></Table>
           </div>
        </div>
    </>)
}

export default Module