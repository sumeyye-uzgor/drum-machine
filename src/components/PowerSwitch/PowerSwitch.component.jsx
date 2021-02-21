import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './PowerSwitch.styles.css'
import Switch from 'react-switch'

import { selectPower } from '../../redux/Selectors'
import { setPower } from '../../redux/Actions'

function PowerSwitch({ power, setPower }) {
    return (
        <div id='switch-container'>
            <Switch onColor='#f35b04' onHandleColor='#f35b04' onChange={(e) => setPower(e)} checked={power} />
            <span id='switch-label'>Power On/Off</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    power: selectPower,
})
const mapDispatchToProps = dispatch => ({
    setPower: (powerVal) => dispatch(setPower(powerVal))
})
export default connect(mapStateToProps, mapDispatchToProps)(PowerSwitch);