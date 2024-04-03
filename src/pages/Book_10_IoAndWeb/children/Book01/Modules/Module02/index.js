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

import img656 from '@/assets/images/img656.png'
import img657 from '@/assets/images/img657.png'
import img658 from '@/assets/images/img658.png'
import img659 from '@/assets/images/img659.png'
import img660 from '@/assets/images/img660.png'
import img661 from '@/assets/images/img661.png'
import img662 from '@/assets/images/img662.png'
import img663 from '@/assets/images/img663.png'
import img664 from '@/assets/images/img664.png'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <SmallTitle>File 类的获取功能：</SmallTitle>
            <P>
                （1）<Red>{`public String getAbsolutePath()：获取绝对路径。`}</Red>
            </P>
            <P>
                （2）{`public String getPath() ：获取路径。`}
            </P>
            <P>
                （3）{`public String getName() ：获取名称。`}
            </P>
            <P>
                （4）<Red>{`public String getParent()：获取上层文件目录路径。若无，返回null。`}</Red>
            </P>
            <P>
                （5）{`public long length() ：获取文件长度（即：字节数）。不能获取目录的长度。`}
            </P>
            <P>
                （6）{`public long lastModified() ：获取最后一次的修改时间，毫秒值。`}
            </P>
            <P>
                （7）{`public String[] list() ：获取指定目录下的所有文件或者文件目录的名称数组。`}
            </P>
            <P>
                （8）{`public File[] listFiles() ：获取指定目录下的所有文件或者文件目录的File数组。`}
            </P>

            <ImagesGroup
                srcArr={[img656]}
            ></ImagesGroup>

            <ComLine></ComLine>

            {/* 
                File类的重命名功能
                 public boolean renameTo(File dest):把文件重命名为指定的文件路径
            */}

            <SmallTitle>File类的重命名功能：</SmallTitle>
            <P>
                （1）{`public boolean renameTo(File dest):把文件重命名为指定的文件路径。`}
            </P>
            <ImagesGroup
                srcArr={[img657, img658]}
            ></ImagesGroup>
            <P>
                上面示例中，首先我们创建了一个不存在的 且 带有想要修改的文件名称 的 file 实例，然后作为调用 renameTo 方法的参数。最终，可以看到，原先的“新建文件夹”，已经改名为“测试改名”。
            </P>

            <ComLine></ComLine>

            {/* 
                 File类的判断功能
                 public boolean isDirectory()：判断是否是文件目录
                 public boolean isFile() ：判断是否是文件
                 public boolean exists() ：判断是否存在
                 public boolean canRead() ：判断是否可读
                 public boolean canWrite() ：判断是否可写
                 public boolean isHidden() ：判断是否隐藏
            */}

            <SmallTitle>
                File 类的判断功能
            </SmallTitle>
            <P>（1）<Red>{`public boolean isDirectory()：判断是否是文件目录。`}</Red></P>
            <P>（2）<Red>{`public boolean isFile() ：判断是否是文件。`}</Red></P>
            <P>（3）<Red>{`public boolean exists() ：判断是否存在。`}</Red></P>
            <P>（4）{`public boolean canRead() ：判断是否可读。`}</P>
            <P>（5）{`public boolean canWrite() ：判断是否可写。`}</P>
            <P>（6）{`public boolean isHidden() ：判断是否隐藏。`}</P>

            <ComSpace></ComSpace>
            <P>示例：</P>
            <ImagesGroup
                srcArr={[img659, img660]}
            ></ImagesGroup>
            <P>目录结构如图二所示。</P>


            <ComLine></ComLine>

            {/* 
                 File类的创建功能
                 public boolean createNewFile() ：创建文件。若文件存在，则不创建，返回false
                 public boolean mkdir() ：创建文件目录。如果此文件目录存在，就不创建了。
                如果此文件目录的上层目录不存在，也不创建。
                 public boolean mkdirs() ：创建文件目录。如果上层文件目录不存在，一并创建
                注意事项：如果你创建文件或者文件目录没有写盘符路径，那么，默认在项目
                路径下。
                 File类的删除功能
                 public boolean delete()：删除文件或者文件夹
                删除注意事项：
                Java中的删除不走回收站。
                要删除一个文件目录，请注意该文件目录内不能包含文件或者文件目录
            */}

            <SmallTitle>
                File 类的创建功能
            </SmallTitle>
            <P>
                （1）<Red>{`public boolean createNewFile() ：创建文件。若文件存在，则不创建，返回 false。注意这里是创建文件，而不是创建文件目录。`}</Red>
            </P>
            <P>方法的调用者是 file 实例，不需要参数。如下图：</P>
            <ImagesGroup
                srcArr={[img661, img662]}
            ></ImagesGroup>
            <P>可以看到，原先未有的 “测试3.txt” 文件被成功创建。</P>

            <ComSpace></ComSpace>
            <ComSpace></ComSpace>
            <P>
                （2）{`public boolean mkdir() ：创建文件目录。如果此文件目录存在，就不创建了。如果此文件目录的上层目录不存在，也不创建。`}
            </P>
            <P>
                （3）<Red>{`public boolean mkdirs() ：创建文件目录。如果上层文件目录不存在，一并创建。如果文件已经存在，则会返回 false，并不会覆盖。另外，注意这里是创建文件目录，而不是文件。`}</Red>
            </P>
            <P>注意事项：</P>
            <P><Red>注意事项：如果你创建文件或者文件目录没有写盘符路径，那么，默认在项目路径下。</Red></P>

            <ImagesGroup
                srcArr={[img663]}
            ></ImagesGroup>
            <P>
                上图是在已经执行一次之后再次执行的，所以目录已经存在的时候，会返回 false。
            </P>

            <ComLine></ComLine>

            <SmallTitle>
                File 类的删除功能
            </SmallTitle>
            <P>（1）<Red>{`public boolean delete()：删除文件或者文件夹，真好，既可以用来删除目录，又可以用来删除文件。`}</Red></P>
            <P>注意事项：</P>
            <P><Red>Java中的删除不走回收站。</Red></P>
            <P><Red>要删除一个文件目录，请注意该文件目录内不能包含文件或者文件目录。</Red></P>

            <ImagesGroup
                srcArr={[img664]}
            ></ImagesGroup>
        </div>
    </>)
}

export default Module