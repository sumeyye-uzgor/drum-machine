import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import ReactAudioPlayer from 'react-audio-player'

import './KeyboardButton.styles.css'

import { triggerDrum } from '../../redux/Actions'
import { selectBank, selectPower, selectVolume } from '../../redux/Selectors'
import { findNote } from '../../redux/Utils'
// import { render } from '@testing-library/react'



class KeyboardButton extends React.Component {
    handleClick(selectedNote, volume, triggerDrum) {
        triggerDrum(selectedNote.id)
        this.player.src = selectedNote.url
        this.player.volume = volume / 50
        this.player.play()
    }
    render() {

        const { color, name, power, triggerDrum, bank, volume } = this.props
        const selectedNote = findNote(bank, name)

        return (
            <span>
                <button
                    id='keyboard-button'
                    disabled={!power}
                    onClick={() => this.handleClick(selectedNote, volume, triggerDrum)}
                    style={{ backgroundColor: color }}
                >
                    {name}
                </button>
                <audio ref={ref => this.player = ref} />
            </span>

        )
    }
}


const mapStateToProps = createStructuredSelector({
    power: selectPower,
    bank: selectBank,
    volume: selectVolume,
})

const mapDispatchToProps = dispatch => ({
    triggerDrum: key => dispatch(triggerDrum(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardButton);