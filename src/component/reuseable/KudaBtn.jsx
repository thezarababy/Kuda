import React from 'react'

const KudaBtn = (props) => {
  return (
    <div>
        <button className="px-8 py-3" style={{backgroundColor:props.bgColor,
          color:props.textColor,
          borderRadius: props.radius

        }}>
          {props.title}
        </button>
    </div>
  )
}

export default KudaBtn;