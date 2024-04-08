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
import img666 from '@/assets/images/img666.png'
import img667 from '@/assets/images/img667.png'

const Module = (props) => {

    const getRender = (val, row, index) => {
        if (row.color != null) {
            return <span style={{color: row.color, backgroundColor: row.important === '1' ? '#ffffb8' : 'none'}}>{val}</span>
        }
        return <span style={{backgroundColor: row.important === '1' ? '#ffffb8' : 'none'}}>{val}</span>
    }

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>
                IO流简述
            </SmallTitle>
            
            <P>一个最简单的情景，就是电脑内存读取硬盘中的数据进行处理，然后内存中想存储的数据又写入硬盘中，这就是最常见的 <Red>I</Red>nput 和 <Red>O</Red>utput <Red>流</Red></P>
            <P><Blue>所以我们其实是基于程序的角度站位的，要数据流向程序，那就是输入，从程序流出写入到硬盘等持久层，就是输出。</Blue></P>
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
            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>
                <Bold>节点流和处理流：</Bold>
            </P>
            <P><Dot></Dot>节点流：<Bold>直接</Bold>从数据源或目的地读写数据</P>
            <P><Dot></Dot>处理流：<Bold>不直接</Bold>连接到数据源或目的地，而是“连接”在已存在的流（节点流或处理流）之上，通过对数据的处理为程序提供更为强大的读写功能。</P>
            <ImagesGroup
                srcArr={[img666]}
            ></ImagesGroup>

            <ComLine></ComLine>

            <SmallTitle>IO流体系</SmallTitle>
            <Table
                pagination={false}
                bordered
                size="small"
                columns={[
                    {title: '分类', dataIndex: 'type', width: '100px', fixed: 'left', render: (val, row, index) => {return getRender(val, row, index)}},
                    {title: '字节输入流', dataIndex: 'bitInput', width: '160px', render: (val, row, index) => {return getRender(val, row, index)}},
                    {title: '字节输出流', dataIndex: 'bitOutput', width: '178px', render: (val, row, index) => {return getRender(val, row, index)}},
                    {title: '字符输入流', dataIndex: 'fontInput', width: '135px', render: (val, row, index) => {return getRender(val, row, index)}},
                    {title: '字符输出流', dataIndex: 'fontOutput', width: '145px', render: (val, row, index) => {return getRender(val, row, index)}},
                ]}
                dataSource={[
                    {type: '抽象基类', bitInput: 'InputStream', bitOutput: 'OutputStream', fontInput: 'Reader', fontOutput: 'Whiter', important: '1'},
                    {type: '访问文件', bitInput: 'FlleInputStream', bitOutput: 'FileOutputStream', fontInput: 'FileReader', fontOutput: 'FileWhiter', color: 'rgb(22, 119, 255)', important: '1'},
                    {type: '访问数组', bitInput: 'ByteArrayInputStream', bitOutput: 'ByteArrayOutputStream', fontInput: 'ByteArrayReader', fontOutput: 'ByteArrayWhiter'},
                    {type: '访问管道', bitInput: 'PipedInputStream', bitOutput: 'PipedOutputStream', fontInput: 'PipedReader', fontOutput: 'PipedWhiter'},
                    {type: '访问字符串', bitInput: '', bitOutput: '', fontInput: 'StringReader', fontOutput: 'StringWhiter'},
                    {type: '缓冲流', bitInput: 'BufferedInputStream', bitOutput: 'BufferedOutputStream', fontInput: 'BufferedReader', fontOutput: 'BufferedWhiter', important: '1'},
                    {type: '转换流', bitInput: '', bitOutput: '', fontInput: 'InputStringReader', fontOutput: 'OutputStringWhiter', important: '1'},
                    {type: '对象流', bitInput: 'ObjectInputStream', bitOutput: 'ObjectOutputStream', fontInput: '', fontOutput: '', important: '1'},
                    {type: '', bitInput: 'FilterInputStream', bitOutput: 'FilterOutputStream', fontInput: 'FilterReader', fontOutput: 'FilterWhiter'},
                    {type: '打印流', bitInput: '', bitOutput: 'PrintStream', fontInput: '', fontOutput: 'PrintWhiter'},
                    {type: '推回输入流', bitInput: 'PushBackInputStream', bitOutput: '', fontInput: 'PushBackReader', fontOutput: 'PrintWhiter'},
                    {type: '特殊流', bitInput: 'DataInputStream', bitOutput: 'DataOutputStream', fontInput: '', fontOutput: ''},
                ]}
                scroll={{
                    y: 720,
                }}
            ></Table>
            <ComSpace></ComSpace>
            <P>
                <Bold>这个表，按照列来看的话，每一列第一行的基类，都是该列下面 其它类 的 父类。，其中<Blue>蓝色那行</Blue>，就是“<Blue>节点流</Blue>”。然后除了这一行节点流，下面的都是“处理流”，是基于“节点流”进行包装的。</Bold>
            </P>
            <P>其中，标记<Bold>黄色的</Bold>，我们需要<Bold>重点关注</Bold>。</P>

            <ComLine></ComLine>

            {/* 
                InputStream & Reader
                InputStream 和 Reader 是所有输入流的基类。
                InputStream（典型实现：FileInputStream）
                    int read()
                    int read(byte[] b)
                    int read(byte[] b, int off, int len)
                Reader（典型实现：FileReader）
                    int read()
                    int read(char [] c)
                    int read(char [] c, int off, int len)
                程序中打开的文件 IO 资源不属于内存里的资源，垃圾回收机制无法回收该资
                源，所以应该显式关闭文件 IO 资源。
                FileInputStream 从文件系统中的某个文件中获得输入字节。FileInputStream 
                用于读取非文本数据之类的原始字节流。要读取字符流，需要使用 FileReader
            */}

            <SmallTitle>InputStream & Reader</SmallTitle>
            <P>
                <Dot></Dot>InputStream 和 Reader <Bold>是所有输入流的基类</Bold>。
            </P>
            <P>
                <Dot></Dot>InputStream（典型实现：<Bold>FileInputStream</Bold>），有如下常用方法：
            </P>
            <ImagesGroup
                srcArr={[img667]}
            ></ImagesGroup>
            <P><Dot></Dot>Reader（典型实现：<Bold>FileReader</Bold>），常用方法类似 InputStream 的，<Bold>所以方法看上面那张图就行了，也是这三个</Bold>：</P>
            <P>（1）{`int read()`}</P>
            <P><Red>（2）{`int read(byte[] b)`}</Red></P>
            <P>（3）{`int read(byte[] b, int off, int len)`}</P>
            <P><Dot></Dot>程序中打开的文件 IO 资源不属于内存里的资源，垃圾回收机制无法回收该资源，所以<Red>应该显式关闭文件 IO 资源</Red>。（<Red>{`public void close() throws IOException：关闭此输入流并释放与该流关联的所有系统资源。`}</Red>）</P>
            <P><Dot></Dot>FileInputStream 从文件系统中的某个文件中获得输入字节。FileInputStream 用于读取非文本数据之类的原始字节流。要读取字符流，需要使用 FileReader</P>
        
            {/* 
                     OutputStream 和 Writer 也非常相似：
                         void write(int b/int c);
                         void write(byte[] b/char[] cbuf);
                         void write(byte[] b/char[] buff, int off, int len);
                         void flush();
                         void close(); 需要先刷新，再关闭此流
                     因为字符流直接以字符作为操作单位，所以 Writer 可以用字符串来替换字符数组，
                    即以 String 对象作为参数
                         void write(String str);
                         void write(String str, int off, int len);
                     FileOutputStream 从文件系统中的某个文件中获得输出字节。FileOutputStream 
                    用于写出非文本数据之类的原始字节流。要写出字符流，需要使用 FileWriter
            */}

            <ComLine></ComLine>

            <SmallTitle>OutputStream & Writer</SmallTitle>
            <P><Dot></Dot>OutputStream 和 Writer 也非常相似，下面是 OutputStream 中的主要常用方法：</P>
            <P>（1）<Blue>{`void write(int b/int c);`}</Blue></P>
            <P>将指定的字节写入此输出流。write 的常规协定是：向输出流写入一个字节。要写入的字节是参数 b 的八个低位。b 的 24 个高位将被忽略。 即写入0~255范围的。</P>
            <P>（2）<Blue>{`void write(byte[] b/char[] cbuf);`}</Blue></P>
            <P>将 b.length 个字节从指定的 byte 数组写入此输出流。write(b) 的常规协定是：应该与调用 write(b, 0, b.length) 的效果完全相同。</P>
            <P>（3）<Blue>{`void write(byte[] b/char[] buff, int off, int len);`}</Blue></P>
            <P>将指定 byte 数组中从偏移量 off 开始的 len 个字节写入此输出流。</P>
            <P>（4）<Blue>{`void flush();`}</Blue></P>
            <P>刷新此输出流并强制写出所有缓冲的输出字节，调用此方法指示应将这些字节立即写入它们预期的目标。</P>
            <P>（5）<Blue>{`void close(); 需要先刷新，再关闭此流`}</Blue></P>
            <P>关闭此输出流并释放与该流关联的所有系统资源。</P>
            <ComSpace></ComSpace><ComSpace></ComSpace><ComSpace></ComSpace>
            <P><Dot></Dot>因为字符流直接以字符作为操作单位，所以 Writer 可以用字符串来替换字符数组，即以 String 对象作为参数</P>
            <P>（1）{`void write(int c)`}</P>
            <P>写入单个字符。要写入的字符包含在给定整数值的 16 个低位中，16 高位被忽略。 即写入0 到 65535 之间的Unicode码。</P>
            <P>（2）{`void write(char[] cbuf)`}</P>
            <P>写入字符数组。</P>
            <P>（3）{`void write(char[] cbuf,int off,int len)`}</P>
            <P>写入字符数组的某一部分。从off开始，写入len个字符</P>
            <P>（4）<Blue>{`void write(String str);`}</Blue></P>
            <P>写入字符串。</P>
            <P>（5）<Blue>{`void write(String str, int off, int len);`}</Blue></P>
            <P>写入字符串的某一部分。从off开始，写入len个字符</P>
            <P>（6）{`void flush()`}</P>
            <P>刷新该流的缓冲，则立即将它们写入预期目标。</P>
            <P>（7）{`public void close() throws IOException`}</P>
            <P>关闭此输出流并释放与该流关联的所有系统资源</P>
            <ComSpace></ComSpace><ComSpace></ComSpace><ComSpace></ComSpace>
            <P><Dot></Dot>FileOutputStream 从文件系统中的某个文件中获得输出字节。FileOutputStream 用于写出非文本数据之类的原始字节流。要写出字符流，需要使用 FileWriter</P>
        </div>
    </>)
}

export default Module