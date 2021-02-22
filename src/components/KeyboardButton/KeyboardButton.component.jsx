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
    constructor() {
        super();
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(event) {
        // you may also add a filter here to skip keys, that do not have an effect for your app

        const key = String.fromCharCode(event.keyCode)
        const keys = ['q', 'w', 'e', 'a', 's', 'd', 'z', 'x', 'c', 'Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']
        if (keys.includes(key) && this.props.power) {
            this.handleKeyboardClick(key)
        }

    }

    componentDidMount() {
        document.addEventListener('keypress', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keypress', this.handleKeyPress);
    }


    handleKeyboardClick(key) {
        const selectedNote = findNote(this.props.bank, key)
        this.props.triggerDrum(selectedNote.id)
        this.player.src = selectedNote.url
        this.player.volume = this.props.volume / 100
        this.player.play()
    }
    handleClick(selectedNote, volume, triggerDrum) {
        triggerDrum(selectedNote.id)
        this.player.src = selectedNote.url
        this.player.volume = volume / 100
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