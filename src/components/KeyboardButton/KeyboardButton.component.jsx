import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import ReactAudioPlayer from 'react-audio-player'

import './KeyboardButton.styles.css'

import { triggerDrum } from '../../redux/Actions'
import { selectBank, selectPower, selectPlayNote, selectVolume } from '../../redux/Selectors'
import { findNote } from '../../redux/Utils'
// import Audio from '../AudioElement/Audio.component'
// import { useState } from 'react'



function KeyboardButton({ color, name, power, triggerDrum, bank, playNote, volume }) {
    const selectedNote = findNote(bank, name)

    return (
        <span>
            <button
                id='keyboard-button'
                disabled={!power}
                onClick={() => {
                    triggerDrum(selectedNote.id);
                    // <ReactAudioPlayer src={selectedNote.url} volume={volume / 100} autoPlay />
                    console.log(selectedNote.url)
                    // document.getElementById("audio-element").play()
                }}
                style={{ backgroundColor: color }}
            >
                {name}
            </button>
            {playNote ? <ReactAudioPlayer src={selectedNote.url} volume={volume / 100} autoPlay /> : null}
        </span>

    )
}

const mapStateToProps = createStructuredSelector({
    power: selectPower,
    bank: selectBank,
    volume: selectVolume,
    playNote: selectPlayNote

})

const mapDispatchToProps = dispatch => ({
    triggerDrum: key => dispatch(triggerDrum(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardButton);