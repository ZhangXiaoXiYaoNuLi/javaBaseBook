// Dot 下的字节点展示，一个向右边的小三角形
import React, {useState, useEffect} from 'react'

const Tp = (props) => {

  return <div
    style={{
      display: 'inline-block',
      marginLeft: '12px',
      marginRight: '5px',
      height: '0px',
      width: '0px',
      borderTop: '4px solid transparent',
      borderBottom: '4px solid transparent',
      borderLeft: `8px solid ${props.color ? props.color : '#aaa'}` 
    }}
  ></div>
}

export default Tp;