import React from 'react'
import './DrumMachine.styles.css'


// import { Form } from 'react-bootstrap'
import KeyboardContainer from '../KeyboardContainer/KeyboardContainer.component'
import ControlButtonsContainer from '../ControlButtonsContainer/ControlButtonsContainer.component'
// import SwitchContainer from '../SwitchContainer/SwitchContainer.component'
// import Switch from 'react-bootstrap/esm/Switch';


class DrumMachine extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }
    render() {
        return (
            <div id='drum-machine'>
                <KeyboardContainer />
                <ControlButtonsContainer />
                {/* <SwitchContainer label='Power On/Off' handleClickOn={() => console.log('power on')} handleClickOff={() => console.log('power off')} /> */}
                {/* <SwitchContainer /> */}
            </div>
        )
    }

}

export default DrumMachine;