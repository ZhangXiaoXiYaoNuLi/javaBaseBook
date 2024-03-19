import React, {useEffect, useState, useRef} from "react";

import {Table} from 'antd'

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
            <SmallTitle>
                List接口概述：
            </SmallTitle>

            <ParagraphWrapper>
                <Dot></Dot>鉴于Java中数组用来存储数据的局限性，我们通常使用List替代数组。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>List集合类中<Red>元素有序、且可重复</Red>，集合中的每个元素都有其对应的顺序索引。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>List容器中的元素都对应一个整数型的序号记载其在容器中的位置，可以根据序号存取容器中的元素。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Dot></Dot>JDK API中List接口的实现类常用的有：。
            </ParagraphWrapper>

            <ComLine></ComLine>

            <ParagraphWrapper>
                下面我们来看看 List 中三个常用实现类（ArrayList、LinkedList 和 Vector）的区别。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>相同点：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                1、都实现了 list 接口。
            </ParagraphWrapper>
            <ParagraphWrapper>
                2、存储数据的特点相同，都是可重复的有序数据。
            </ParagraphWrapper>

            <ParagraphWrapper>
                <Bold>不同点：</Bold>
            </ParagraphWrapper>
            
            <div style={{paddingTop: '12px'}}>
                <Table
                    dataSource={[
                        {
                            type: 'ArrayList：',
                            sum: '作为 list 的主要实现类，“主要”的意思就是，在没有特殊需求的时候，想要使用 list，那 new 一个 ArrayList 就行了。',
                            threadSafe: '线程不安全，效率高',
                            oriType: 'Object[]，底层还是对象数组',
                            vic: '查找快，插入删除慢',
                        },
                        {
                            type: 'LinkedList：',
                            sum: '基于链表实现',
                            threadSafe: '线程不安全，效率高。',
                            oriType: '底层使用双向链表存储',
                            vic: '查找慢，插入和删除快',
                        },
                        {
                            type: 'Vector：',
                            sum: '作为 list 的古老实现类，java 1.2 就出现了。',
                            threadSafe: '线程安全，效率低。',
                            oriType: 'Object[]，底层还是对象数组',
                            vic: '-',
                        },
                    ]}
                    columns={[
                        {
                            title: '类型',
                            dataIndex: 'type',
                            fixed: 'left',
                            width: '96px',
                        },
                        {
                            title: '简介',
                            dataIndex: 'sum',
                            width: '400px',
                        },
                        {
                            title: '线程安全',
                            dataIndex: 'threadSafe',
                        },
                        {
                            title: '底层结构',
                            dataIndex: 'oriType',
                        },
                        {
                            title: '查找、插入和删除效率',
                            dataIndex: 'vic',
                        },
                    ]}
                    pagination={false}
                    bordered
                    size='small'
                    scroll={{
                        x: 1000,
                    }}
                ></Table>
            </div>

            <ComLine></ComLine>

            <ParagraphWrapper>
                <Dot></Dot><Bold>总结：</Bold>
            </ParagraphWrapper>
            <ParagraphWrapper>
                （1）在查询（get）、遍历（iterator）、修改（set）使用的比较多的情况下，用ArrayList
            </ParagraphWrapper>
            <ParagraphWrapper>
                （2）在增加（add）、删除（remove）使用比较多的情况下，用LinkedList。
            </ParagraphWrapper>
            <ParagraphWrapper>
                （3）在需要线程安全而且对效率要求比较低的情况下，使用Vector，当然，实现ArrayList线程安全的方法也有很多，以后再说。
            </ParagraphWrapper>
            
        </div>
    </>)
}

export default Module