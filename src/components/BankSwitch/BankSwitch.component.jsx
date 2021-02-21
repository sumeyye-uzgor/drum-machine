import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Switch from 'react-switch'


import './BankSwitch.styles.css'

import { setBank } from '../../redux/Actions'
import { selectBank, selectPower } from '../../redux/Selectors'


function BankSwitch({ bank, setBank, power }) {
    return (
        <div id='switch-container'>
            <Switch onColor='#f35b04' onHandleColor='#f35b04' onChange={((e) => setBank(e))} checked={bank} disabled={!power} />
            <span id='switch-label'>{'Heater Kit / Smooth Piano Kit'}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    bank: selectBank,
    power: selectPower
})
const mapDispatchToProps = dispatch => ({
    setBank: (bankVal) => dispatch(setBank(bankVal))
})
export default connect(mapStateToProps, mapDispatchToProps)(BankSwitch);