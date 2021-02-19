import React from 'react'
import './KeyboardButton.styles.css'

function KeyboardButton(props) {
    return (
        <button id='keyboard-button' style={{ backgroundColor: props.color }}>{props.name}</button>
    )
}

export default KeyboardButton;