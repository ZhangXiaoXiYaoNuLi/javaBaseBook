// 折叠面板通用 wrapper 组件，带有全部收起功能，默认使全部展开，带有全部收起，全部展开的按钮
import React, { useEffect, useState } from "react";

import { Collapse, FloatButton } from 'antd'
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';

const CollapseWrapper = (props) => {

    // 可控的展开 activeKey
    const [activeKey, setActiveKey] = useState([])

    // 展开收起按钮的文案 '1' 为 “全部收起” ， "0" 为 ”全部展开“
    const [expendButtonText, setExpendButtonText] = useState('1')

    const [firstFlag, setFirstFlag] = useState(false)

    // 全部展开方法
    const expendAll = () => {
        let keys = []

        props.items.forEach(item => {
            keys.push(item.key)
        })

        setActiveKey(keys)
    }

    useEffect(() => {
        if (activeKey != null) {
            if (activeKey.length != null && !!activeKey.length) {
                setExpendButtonText('1')
            } else {
                setExpendButtonText('0')
            }
        }
    }, [activeKey])

    // 初始的时候，默认遍历 外部传来的 items 参数 中的 key 值，然后手动触发一次全部展开
    useEffect(() => {
        
        if (firstFlag != null && firstFlag === false && props.items != null && props.items.length != null && !!props.items.length) {
            setFirstFlag(true)

            let keys = []

            props.items.forEach(item => {
                keys.push(item.key)
            })

            setActiveKey(keys)
        }
        
    }, [props.items, firstFlag])

    return (<>
        <div
            style={{
                height: '100%',
                width: '100%',
            }}
        >
            {
                props.items && <Collapse
                    activeKey={activeKey}
                    onChange={(e) => {
                        console.log('e =>', e)
                        setActiveKey(e)
                    }}
                    items={props.items}
                ></Collapse>
            }
        </div>
        {/* 相对屏幕单位的 全部展开 全部收起 按钮 */}
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                opacity: 0.6,
            }}
        >
            <FloatButton
                type="primary"
                onClick={() => {
                    expendButtonText === '1' ? setActiveKey([]) : expendAll()
                }}
                icon={expendButtonText === '1' ? <UpCircleOutlined /> : <DownCircleOutlined />}
            ></FloatButton>
        </div>
    </>);
}

export default CollapseWrapper