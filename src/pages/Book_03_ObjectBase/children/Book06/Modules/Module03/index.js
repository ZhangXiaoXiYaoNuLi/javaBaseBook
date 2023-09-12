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

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                <Dot></Dot>{`由于Java虚拟机需要调用类的main()方法，所以该方法的访问权限必须是
                public，又因为Java虚拟机在执行main()方法时不必创建对象，所以该方法必须
                是static的，该方法接收一个String类型的数组参数，该数组中保存执行Java命令
                时传递给所运行的类的参数。`}
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>{`又因为main() 方法是静态的，我们不能直接访问该类中的非静态成员，必须创
                建该类的一个实例对象后，才能通过这个对象去访问类中的非静态成员，这种情
                况，我们在之前的例子中多次碰到。`}
            </ParagraphWrapper>
        </div>
    </>)
}

export default Module