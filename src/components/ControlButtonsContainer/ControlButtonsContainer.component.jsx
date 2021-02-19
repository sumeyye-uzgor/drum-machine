import React from 'react'
import './ControlButtonsContainer.styles.css'
import SwitchContainer from '../SwitchContainer/SwitchContainer.component.jsx'

function ControlButtonsContainer() {
    return (
        <div>
            <SwitchContainer
                handleClickOn={() => console.log('power on')}
                handleClickOff={() => console.log('power off')}
                label='Power On/Off'
                state='on' />
            <div id='display-text'> display </div>
            <input type="range" id="range-input" name="volume"
                min="0" max="100" onChange={() => console.log('volume dlkjdjkds')} />
            <SwitchContainer
                handleClickOn={() => console.log('power on')}
                handleClickOff={() => console.log('power off')}
                label='Bank On/Off'
                state='off=' />
            {/* <SwitchContainer handleClickOn={() => console.log('power on')} handleClickOff={() => console.log('power off')} /> */}

        </div>
    )
}

export default ControlButtonsContainer;