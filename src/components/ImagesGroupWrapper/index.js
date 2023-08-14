// 暂时弃用，待后续优化
import React, {useEffect, useState, useRef} from "react";

import ImageWrapper from '../ImageWrapper'

const baseWidth = 240

// const widthArr = [200, 400, 600, 800, 1000, 1200, 1400]

const ImagesGroupWrapper = (props) => {

    const [renderArray, setRenderArray] = useState(null)

    // 每行几个的数字，根据容器宽度自己动态防抖计算
    const [lineLimit, setLineLimit] = useState(null)

    useEffect(() => {
        if (lineLimit != null && props.srcArr != null && props.srcArr.length != null && !!props.srcArr.length) {
            // 整成一行3个的二维数组
            let resArr = []
            props.srcArr.forEach((item, index) => {
                let lineNum = Math.floor(index / lineLimit)
                if (resArr[lineNum] == null) {
                    resArr[lineNum] = []
                    resArr[lineNum].push(item)
                } else {
                    resArr[lineNum].push(item)
                }
            })

            // 最后看将最后一个数组补足
            resArr[resArr.length - 1] = new Array(lineLimit).fill('').map((num, index) => {
                let item = resArr[resArr.length - 1][index]
                return item == null ? '-1' : item
            })

            console.log('resArr =>', resArr)

            setRenderArray(resArr)
        }
    }, [props.srcArr, lineLimit])

    let timer = null

    useEffect(() => {
        window.onresize = function () {

            if (timer != null) {
                clearTimeout(timer);
                timer = null;
            }

            timer = setTimeout(() => {
                let dom = document.getElementById('getWidthDom')
                let rect = dom.getBoundingClientRect()
                let width = rect.width
                console.log('width ->', width)
                let resNum = null

                let widthArr =  new Array(7).fill('').map((item, index) => {
                    let resItem = baseWidth * (index + 1)
                    return resItem
                })

                if (width >= widthArr[widthArr.length - 1]) {
                    resNum = 7
                } else if (width <= widthArr[0]) {
                    resNum = 1
                } else {
                    widthArr.forEach((item, index) => {
                        if (widthArr[index + 1] != null) {
                            if (width > item && width <= widthArr[index + 1]) {
                                resNum = index + 1
                            }
                        }
                    })
                }

                setLineLimit(resNum)
            }, 150);
        }
        return () => {
            window.onresize = null
        }
    }, [])

    useEffect(() => {
        if (lineLimit == null) {
            let dom = document.getElementById('getWidthDom')
            let rect = dom.getBoundingClientRect()
            let width = rect.width
            let resNum = null

            let widthArr =  new Array(7).fill('').map((item, index) => {
                let resItem = baseWidth * (index + 1)
                return resItem
            })

            if (width >= widthArr[widthArr.length - 1]) {
                resNum = 7
            } else if (width <= widthArr[0]) {
                resNum = 1
            } else {
                widthArr.forEach((item, index) => {
                    if (widthArr[index + 1] != null) {
                        if (width > item && width <= widthArr[index + 1]) {
                            resNum = index + 1
                        }
                    }
                })
            }

            setLineLimit(resNum)
        }
    }, [lineLimit])

    useEffect(() => {
        console.log('limit', lineLimit)
    }, [lineLimit])

    return (
        <>
            <div id="getWidthDom"></div>
            {
                renderArray != null && renderArray.length != null && <div
                    style={{
                        padding: "12px 32px 0px 32px",
                    }}
                >
                    {
                        renderArray.map(arr => {
                            return <>
                                {/* 每一行 */}
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        paddingBottom: '12px'
                                    }}
                                >
                                    {
                                        arr.map(item => {
                                            if (item !== '-1') {
                                                return <ImageWrapper
                                                    src={item}
                                                ></ImageWrapper>
                                            } else {
                                                return <div
                                                    style={{
                                                        opacity: 0,
                                                        width: '200px',
                                                    }}
                                                ></div>
                                            }
                                        })
                                    }
                                </div>
                            </>
                        })
                    }
                </div>
            }
        </>
    )
}

export default ImagesGroupWrapper