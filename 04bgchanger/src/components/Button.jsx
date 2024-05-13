import React from 'react'

function colorName(color){
    return color;
}

function Button(props) {

    const buttonStyle={
        backgroundColor:props.color,
        color:props.text || "white"
    }
  return (
    <button 
    className="outline-none px-4 py-1 rounded-full
     text-white shadow-lg" style={buttonStyle}
     onClick={props.onClick}>
        {colorName(props.color)}
    </button>
  )
}

export default Button
