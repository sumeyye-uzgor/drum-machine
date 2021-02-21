import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './ControlButtonsContainer.styles.css'

// import SwitchContainer from '../SwitchContainer/SwitchContainer.component.jsx'
import BankSwitch from '../BankSwitch/BankSwitch.component.jsx'
import PowerSwitch from '../PowerSwitch/PowerSwitch.component.jsx'


import { selectDisplayText, selectVolume, selectPower } from '../../redux/Selectors'
import { setVolumeLevel } from '../../redux/Actions'

function ControlButtonsContainer({ displayText, volume, setVolume, power }) {
    return (
        <div>
            <PowerSwitch />
            <div id='display-text'>{displayText}</div>
            <input type="range" id="range-input" name="volume" valueasnumber={volume}
                min="0" max="100" disabled={!power} onClick={(e) => setVolume(e.target.valueAsNumber)} />
            <BankSwitch />
            {/* <SwitchContainer handleClickOn={() => console.log('power on')} handleClickOff={() => console.log('power off')} /> */}

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    displayText: selectDisplayText,
    // bank: selectBank
    power: selectPower,
    volume: selectVolume
})
const mapDispatchToProps = dispatch => ({
    setVolume: (volLevel) => dispatch(setVolumeLevel(volLevel))
})


export default connect(mapStateToProps, mapDispatchToProps)(ControlButtonsContainer);