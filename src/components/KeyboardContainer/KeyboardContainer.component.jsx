import React from 'react'
// import './KeyboardButton.styles.css'
import KeyboardButton from '../KeyboardButton/KeyboardButton.component.jsx'

function KeyboardContainer(props) {
    return (
        <div id='keyboard-buttons-container'>
            <div id='keyboard-row-1'>
                <KeyboardButton name='Q' color='#7400b8' />
                <KeyboardButton name='W' color='#5390d9' />
                <KeyboardButton name='E' color='#56cfe1' />
            </div>
            <div id='keyboard-row-2'>
                <KeyboardButton name='A' color='#55a630' />
                <KeyboardButton name='S' color='#bfd200' />
                <KeyboardButton name='D' color='#dddf00' />
            </div>
            <div id='keyboard-row-3'>
                <KeyboardButton name='Z' color='#4d194d' />
                <KeyboardButton name='X' color='#d100d1' />
                <KeyboardButton name='C' color='#f20089' />
            </div>
        </div>
    )
}

export default KeyboardContainer;