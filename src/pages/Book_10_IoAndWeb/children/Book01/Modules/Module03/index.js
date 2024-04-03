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

import {Table} from 'antd'

import img665 from '@/assets/images/img665.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                IO流简述
            </SmallTitle>
            
            <P>一个最简单的情景，就是电脑内存读取硬盘中的数据进行处理，然后内存中想存储的数据又写入硬盘中，这就是最常见的 <Red>I</Red>nput 和 <Red>O</Red>utput <Red>流</Red></P>
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P><Dot></Dot>I/O是Input/Output的缩写， I/O技术是非常实用的技术，用于处理设备之间的数据传输。如读/写文件，网络通讯等。</P>
            <P><Dot></Dot>{`Java程序中，对于数据的输入/输出操作以“流(stream)” 的方式进行。`}</P>
            <P><Dot></Dot>{`java.io包下提供了各种“流”类和接口，用以获取不同种类的数据，并通过标准的方法输入或输出数据。`}</P>
            <P>tip: <Blue>虽然各种流的种类很多，但是都是使用类似的标准方法来输入输出数据，所以只要搞懂主流的一两种，其它的关注差别就行</Blue>。</P>
            <ImagesGroup
                srcArr={[img665]}
            ></ImagesGroup>

            {/* 
                流的分类
                按操作数据单位不同分为：字节流(8 bit)，字符流(16 bit)
                按数据流的流向不同分为：输入流，输出流
                按流的角色的不同分为：节点流，处理流
                (抽象基类) 字节流 字符流
                输入流 InputStream Reader
                输出流 OutputStream Writer
                1. Java的IO流共涉及40多个类，实际上非常规则，都是从如下4个
                抽象基类派生的。
                2. 由这四个类派生出来的子类名称都是以其父类名作为子类名后缀。
            */}

            <ComLine></ComLine>

            <SmallTitle>
                流的分类
            </SmallTitle>
            <P>
                <Dot></Dot>按操作<Red>数据单位</Red>不同分为：<Bold>{`字节流(8 bit)，字符流(16 bit)`}</Bold><span>，字符流更适合处理文本数据，字节流更适合处理非文本，比如图片、视频等。</span>
            </P>
            <P>
                <Dot></Dot>按数据流的<Red>流向</Red>不同分为：<Bold>输入流、输出流</Bold>。
            </P>
            <P>
                <Dot></Dot>按数据流的<Red>角色</Red>不同分为：<Bold>节点流、处理流</Bold>，可以理解为如果是直接的数据流动，就是节点流。 通俗来讲，比如洗澡，水的流动本身，就叫做“节点流”，但是我们通过水管、花洒，让它花式流动，这个就叫“处理流”。
            </P>

            <P>
                <Dot></Dot><Blue>虽然 Java 的 IO 流 共涉及 40 多个类，实际非常规则，都是从如下 4 个抽象基类派生的</Blue>。
            </P>
            <div
                style={{padding: '12px 28px 0px 28px'}}
            >
                <Table
                    dataSource={[
                        {type: '输入流', bitType: 'InputStream', fontType: 'Reader'},
                        {type: '输出流', bitType: 'OutputStream', fontType: 'Writer'},
                    ]}
                    columns={[
                        {
                            title: '（抽象基类）',
                            dataIndex: 'type',
                        },
                        {
                            title: '字节流',
                            dataIndex: 'bitType',
                        },
                        {
                            title: '字符流',
                            dataIndex: 'fontType',
                        }
                    ]}
                    pagination={false}
                    bordered
                    size="small"
                ></Table>
            </div>
            <P>
                <Red>由这四个类派生出来的子类名称都是以其父类名作为子类名后缀。</Red>
            </P>

            <ComLine></ComLine>

            <SmallTitle>IO流体系</SmallTitle>
            <Table
                pagination={false}
                bordered
                size="small"
                columns={[
                    {title: '分类', dataIndex: 'type', width: '100px', fixed: 'left'},
                    {title: '字节输入流', dataIndex: 'bitInput', width: '160px'},
                    {title: '字节输出流', dataIndex: 'bitOutput', width: '178px'},
                    {title: '字符输入流', dataIndex: 'fontInput', width: '135px'},
                    {title: '字符输出流', dataIndex: 'fontOutput', width: '145px'},
                ]}
                dataSource={[
                    {type: '抽象基类', bitInput: 'InputStream', bitOutput: 'OutputStream', fontInput: 'Reader', fontOutput: 'Whiter'},
                    {type: '访问文件', bitInput: 'FlleInputStream', bitOutput: 'FileOutputStream', fontInput: 'FileReader', fontOutput: 'FileWhiter'},
                    {type: '访问数组', bitInput: 'ByteArrayInputStream', bitOutput: 'ByteArrayOutputStream', fontInput: 'ByteArrayReader', fontOutput: 'ByteArrayWhiter'},
                    {type: '访问管道', bitInput: 'PipedInputStream', bitOutput: 'PipedOutputStream', fontInput: 'PipedReader', fontOutput: 'PipedWhiter'},
                    {type: '访问字符串', bitInput: '', bitOutput: '', fontInput: 'StringReader', fontOutput: 'StringWhiter'},
                    {type: '缓冲流', bitInput: 'BufferedInputStream', bitOutput: 'BufferedOutputStream', fontInput: 'BufferedReader', fontOutput: 'BufferedWhiter'},
                    {type: '转换流', bitInput: '', bitOutput: '', fontInput: 'InputStringReader', fontOutput: 'OutputStringWhiter'},
                    {type: '对象流', bitInput: 'ObjectInputStream', bitOutput: 'ObjectOutputStream', fontInput: '', fontOutput: ''},
                    {type: '', bitInput: 'FilterInputStream', bitOutput: 'FilterOutputStream', fontInput: 'FilterReader', fontOutput: 'FilterWhiter'},
                    {type: '打印流', bitInput: '', bitOutput: 'PrintStream', fontInput: '', fontOutput: 'PrintWhiter'},
                    {type: '推回输入流', bitInput: 'PushBackInputStream', bitOutput: '', fontInput: 'PushBackReader', fontOutput: 'PrintWhiter'},
                    {type: '特殊流', bitInput: 'DataInputStream', bitOutput: 'DataOutputStream', fontInput: '', fontOutput: ''},
                ]}
                scroll={{
                    y: 720,
                }}
            ></Table>
        </div>
    </>)
}

export default Module