import React from 'react'
import './SwitchContainer.styles.css'
import { ReactComponent as CheckSign } from '../../assets/check.svg'
import { ReactComponent as TimesSign } from '../../assets/times.svg'
import { ReactComponent as CircleSign } from '../../assets/circle.svg'

function SwitchContainer(props) {
    return (
        <div>
            <span id='button-container'>
                <button id='switch-button1' className='switch-button' onClick={props.handleClickOn}>
                    {
                        (props.state === 'on') ?
                            <CircleSign width='3vh' height='3vh' /> :
                            <CheckSign width='2vh' height='2vh' />

                    }
                </button>
                <button id='switch-button2' className='switch-button' onClick={props.handleClickOff}>
                    {
                        (props.state === 'on') ?
                            <TimesSign width='2vh' height='2vh' /> :
                            <CircleSign width='3vh' height='3vh' />
                    }
                </button>
            </span>
            <span id='switch-label'>{props.label}</span>
        </div>
    )
}

export default SwitchContainer;