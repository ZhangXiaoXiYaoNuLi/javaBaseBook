import React, {useEffect, useState, useRef} from "react";

const SingleRowItem = (props) => {

    const [myBackground, setMyBackGround] = useState('#e6f4ff')

    const [baseStyle, setBaseStyle] = useState({})

    const [arrowStyle, setArrowStyle] = useState({})

    useEffect(() => {
      if (props.arrow != null) {
        setBaseStyle(arrowFlexEnum[props.arrow])
        setArrowStyle(arrowStyleEnum[props.arrow])
      } else {
        setBaseStyle(arrowFlexEnum['right'])
        setArrowStyle(arrowStyleEnum['right'])
      }
    }, [props.arrow])

    useEffect(() => {
      if (props.color != null && props.color.length != null && !!props.color.length) {
        setMyBackGround(props.color)
      }
    }, [props.color])

    const baseWidthAndHeight = {
      width: '0px',
      height: '0px',
    }

    // 箭头方向枚举对象
    const arrowStyleEnum = {
      top: {
        ...baseWidthAndHeight,
        borderBottom: `32px solid ${myBackground}`,
        borderLeft: '32px solid transparent',
        borderRight: '32px solid transparent',
      },
      right: {
        ...baseWidthAndHeight,
        borderLeft: `32px solid ${myBackground}`,
        borderTop: '32px solid transparent',
        borderBottom: '32px solid transparent',
      },
      bottom: {
        ...baseWidthAndHeight,
        borderTop: `32px solid ${myBackground}`,
        borderLeft: '32px solid transparent',
        borderRight: '32px solid transparent',
      },
      left: {
        ...baseWidthAndHeight,
        borderRight: `32px solid ${myBackground}`,
        borderTop: '32px solid transparent',
        borderBottom: '32px solid transparent',
      }
    }

    const arrowFlexEnum = {
      top: {
        flexDirection: 'column-reverse',
        paddingTop: '12px',
      },
      right: {
        flexDirection: 'row',
        paddingRight: '12px',
      },
      bottom: {
        flexDirection: 'column',
        paddingBottom: '12px',
      },
      left: {
        flexDirection: 'row-reverse',
        paddingLeft: '12px',
      }
    }



    return <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          ...baseStyle,
        }}
      >
        <div
          style={{
            display: 'flex',
            borderRadius: '12px',
            padding: '12px',
            backgroundColor: myBackground,
            minWidth: props.minWidth ? props.minWidth : '64px',
          }}
        >
          {props.children}
        </div>
        {
          !!props.showRow && <>
            <div
              style={{
                height: '32px',
                width: '32px',
                backgroundColor: myBackground,
              }}
            ></div>
            <div style={{
              ...arrowStyle,
            }}></div>
          </>
        }
      </div>
    </>
}

export default SingleRowItem