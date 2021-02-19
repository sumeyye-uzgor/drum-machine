import React from 'react'
import './SwitchContainer.styles.css'
import { ReactComponent as CheckSign } from '../../assets/check.svg'
import { ReactComponent as TimesSign } from '../../assets/times.svg'
import { ReactComponent as CircleSign } from '../../assets/circle.svg'

function SwitchContainer(props) {
    return (
        <span>
            <span id='button-container'>
                <button id='switch-button1' className='switch-button' onClick={props.handleClickOn}>
                    {
                        (props.state === 'on') ?
                            <CircleSign width='5vh' height='3.5vh' /> :
                            <CheckSign width='2vh' height='2vh' />

                    }
                </button>
                <button id='switch-button2' className='switch-button' onClick={props.handleClickOff}>
                    {
                        (props.state === 'on') ?
                            <TimesSign width='2vh' height='2vh' /> :
                            <CircleSign width='5vh' height='3.5vh' />
                    }
                </button>
            </span>
            <span id='switch-label'>{props.label}</span>
        </span>
    )
}

export default SwitchContainer;