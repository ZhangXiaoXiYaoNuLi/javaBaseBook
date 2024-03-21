// 折叠面板通用 wrapper 组件，带有全部收起功能，默认使全部展开，带有全部收起，全部展开的按钮
import React, { useEffect, useState } from "react";

import { Collapse, FloatButton } from 'antd'
import { UpCircleOutlined, DownCircleOutlined, PlusOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { routerData } from '../../utils/router'

import { useResolvedPath, useRouteProps, useLocation, history } from 'umi';

const CollapseWrapper = (props) => {

    let location = useLocation();

    console.log('location =>', location)
    console.log('history =>', history)

    // 可控的展开 activeKey
    const [activeKey, setActiveKey] = useState([])

    // 展开收起按钮的文案 '1' 为 “全部收起” ， "0" 为 ”全部展开“
    const [expendButtonText, setExpendButtonText] = useState('1')

    const [firstFlag, setFirstFlag] = useState(false)
    
    // 找到当前路由上一个和下一个 path 的方法
    const findNowPath = (flag) => {
        let fillArr = []

        const findRouteItem = (data) => {
            if (data != null && data.length != null && !!data.length) {
                data.forEach(item => {
                    if (item.routes == null) {
                        fillArr.push(item.path)
                    } else if (item.routes != null && item.routes.length != null) {
                        findRouteItem(item.routes)
                    }
                })
            }
        }

        findRouteItem(routerData)

        // console.log('fillArr =>', fillArr)

        let index = fillArr.indexOf(location.pathname)

        let nextPath = fillArr[index + 1]
        let prevPath = fillArr[index - 1]
        // console.log('下一路由 =>', nextPath)
        // console.log('上一路由 =>', prevPath)
        return flag === 'next' ? nextPath : prevPath
    }

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

    const next = () => {
        history.push(findNowPath('next'))
    }

    const back = () => {
        history.push(findNowPath('back'))
    }

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
            

            <FloatButton.Group
                trigger="click"
                // type="primary"
                // style={{ right: 94 }}
                icon={<PlusOutlined />}
            >
                <FloatButton
                    type="primary"
                    onClick={() => {
                        // 下一小章
                        next()
                    }}
                    icon={<ArrowRightOutlined />}
                ></FloatButton>
                <FloatButton
                    type="primary"
                    onClick={() => {
                        // 上一小章
                        back()
                    }}
                    icon={<ArrowLeftOutlined />}
                ></FloatButton>
                <FloatButton
                    type="primary"
                    onClick={() => {
                        expendButtonText === '1' ? setActiveKey([]) : expendAll()
                    }}
                    icon={expendButtonText === '1' ? <UpCircleOutlined /> : <DownCircleOutlined />}
                ></FloatButton>
            </FloatButton.Group>
        </div>
    </>);
}

export default CollapseWrapper