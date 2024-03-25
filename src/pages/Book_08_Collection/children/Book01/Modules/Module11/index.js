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

import { Table } from 'antd'

const Module = (props) => {

    return (<>
        <div
            className={styles.base_wrapper}
        >
            <ParagraphWrapper>
                首先就是要知道，set集合都是“<Blue>无序不重复</Blue>”的。
            </ParagraphWrapper>
            <ParagraphWrapper>
                set 接口主要有三大实现类：<Blue>HashSet</Blue>、<Blue>LinkedHashSet</Blue>、<Blue>TreeSet</Blue>。
            </ParagraphWrapper>

            <ComSpace></ComSpace>

            <ParagraphWrapper>
                另外，我们是类似于介绍 list 接口的实现类一样，先来看看 set 实现类的存储特点，适用于哪种存储情境。然后我们再来了解他们的方法都有哪些。
            </ParagraphWrapper>

            <ParagraphWrapper>
                还有一点，<Blue>set 接口中没有自己的方法，所以 我们使用的方法，都是 Collection 接口声明过的方法（这就和 list 不一样了，主要原因是 set 没有索引导致的）</Blue>。
            </ParagraphWrapper>

            <div style={{paddingTop: '12px'}}>
                <Table
                    dataSource={[
                        {
                            type: 'HashSet',
                            sum: <span>作为 <Blue>Set 接口的主要实现类</Blue>，类似于 ArrayList 对于 list 的地位。可以存储 null</span>,
                            threadSafe: '非线程安全',
                        },
                        {
                            type: 'LinkedHashSet',
                            sum: <span>和HashSet比起来，顾名思义，就是先 HashSet 存储，然后再 链表Linked一下。这哥们其实是 HashSet 的子类，然后添加了“link”。这么做的目的，是为了让其<Blue>“看起来”是有序的（其实还是无序的）</Blue>。也就是实现了遍历的时候，可以按照元素添加的顺序遍历。</span>,
                            threadSafe: '非线程安全',
                        },
                        {
                            type: 'TreeSet',
                            sum: <span>底层的存储结构是二叉树，准确地又叫红黑树。<Blue>这使得我们存储的时候，必须存储同一个类new出来的实例对象。（没错。前面讲的3个list和2个set，都是可以存储不同类型的）。同一个类 new 出来的，就可以用实例的某个属性进行排序</Blue>。之前在集合简介的时候讲到的 Comparable 和 Comparator，就可以用在这里排序。</span>,
                            threadSafe: '非线程安全',
                        },
                    ]}
                    columns={[
                        {
                            title: '类型',
                            dataIndex: 'type',
                            fixed: 'left',
                            width: '110px',
                        },
                        {
                            title: '简介',
                            dataIndex: 'sum',
                            width: '600px',
                        },
                        {
                            title: '线程安全',
                            dataIndex: 'threadSafe',
                            width: '120px',
                        }
                    ]}
                    pagination={false}
                    bordered
                    size="small"
                    scroll={{
                        x: 1000
                    }}
                ></Table>
            </div>
        </div>
    </>)
}

export default Module