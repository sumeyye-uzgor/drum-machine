import React from 'react'
import './ControlButtonsContainer.styles.css'
import SwitchContainer from '../SwitchContainer/SwitchContainer.component.jsx'
import { connect } from 'react-redux'

import { selectDisplayText } from '../../redux/Selectors'


function ControlButtonsContainer({ displayText }) {
    return (
        <div>
            <SwitchContainer
                handleClickOn={() => console.log('power on')}
                handleClickOff={() => console.log('power off')}
                label='Power On/Off'
                state='on' />
            <div id='display-text'>{displayText}</div>
            <input type="range" id="range-input" name="volume"
                min="0" max="100" onChange={(e) => console.log(`volume :${e.target.value}`)} />
            <SwitchContainer
                handleClickOn={() => console.log('power on')}
                handleClickOff={() => console.log('power off')}
                label='Bank On/Off'
                state='off=' />
            {/* <SwitchContainer handleClickOn={() => console.log('power on')} handleClickOff={() => console.log('power off')} /> */}

        </div>
    )
}

const mapStateToProps = (state) => ({
    displayText: selectDisplayText(state)
})

export default connect(mapStateToProps)(ControlButtonsContainer);