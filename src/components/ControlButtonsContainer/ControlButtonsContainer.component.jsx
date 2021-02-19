import React from 'react'
import './ControlButtonsContainer.styles.css'
import SwitchContainer from '../SwitchContainer/SwitchContainer.component.jsx'

function ControlButtonsContainer() {
    return (
        <div>
            <SwitchContainer
                handleClickOn={() => console.log('power on')}
                handleClickOff={() => console.log('power off')}
                state='on' />
            {/* <div id='display-text'> display </div> */}
            {/* <input type="range" id="volume" name="volume"
                min="0" max="11" onChange={() => console.log('volume dlkjdjkds')} /> */}
            {/* <SwitchContainer handleClickOn={() => console.log('power on')} handleClickOff={() => console.log('power off')} /> */}

        </div>
    )
}

export default ControlButtonsContainer;