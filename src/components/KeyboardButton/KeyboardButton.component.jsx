import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// import ReactAudioPlayer from 'react-audio-player'

import './KeyboardButton.styles.css'

import { dontPlayNote, triggerDrum } from '../../redux/Actions'
import { selectBank, selectPower, selectVolume, selectPlayNote } from '../../redux/Selectors'
import { findNote } from '../../redux/Utils'




class KeyboardButton extends React.Component {
    constructor() {
        super();
        this.state = {
            isTriggered: false
        }
    }
    // renderElement(volume, url, dontPlayNote, playNote) {
    //     // if (this.state.isTriggered) {
    //     //     console.log(playNote)
    //     //     // console.log(this.state.isTriggered)
    //     //     dontPlayNote()
    //     //     // this.setState({ isTriggered: false })
    //     //     return < ReactAudioPlayer autoPlay={true} src={url} volume={volume / 100} />

    //     }
    //     return null;
    // }
    handleClick(id, triggerDrum, playNote, url, volume, dontPlayNote) {

        triggerDrum(id);
        // this.url.play()
        console.log(playNote)
        console.log(volume)
        console.log(dontPlayNote)
        // this.setState({ isTriggered: true })
    }
    render() {
        const { color, name, power, triggerDrum, bank, volume, dontPlayNote, playNote } = this.props
        const selectedNote = findNote(bank, name)

        return (
            <span>
                <button
                    id='keyboard-button'
                    disabled={!power}
                    onClick={() => {
                        this.handleClick(selectedNote.id, triggerDrum, playNote, selectedNote.url, volume, dontPlayNote)
                    }}
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
    playNote: selectPlayNote

})

const mapDispatchToProps = dispatch => ({
    triggerDrum: key => dispatch(triggerDrum(key)),
    dontPlayNote: () => dispatch(dontPlayNote())
})

export default connect(mapStateToProps, mapDispatchToProps)(KeyboardButton);