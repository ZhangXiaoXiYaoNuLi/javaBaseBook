// 页面底部的按钮组，组件抽取，仅下一页 上一页 功能按钮
import React, { useEffect, useState } from "react";

import { FloatButton } from 'antd'
import { PlusOutlined, ArrowRightOutlined, ArrowLeftOutlined } from '@ant-design/icons';

import { routerData } from '../../utils/router'

import { useLocation, history } from 'umi';

const BottomFloatButtonGroup = (props) => {
    let location = useLocation();

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

        let index = fillArr.indexOf(location.pathname)

        let nextPath = fillArr[index + 1]
        let prevPath = fillArr[index - 1]
        return flag === 'next' ? nextPath : prevPath
    }

    const next = () => {
        history.push(findNowPath('next'))
    }

    const back = () => {
        history.push(findNowPath('back'))
    }

    return <div
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
        </FloatButton.Group>
    </div>
}

export default BottomFloatButtonGroup