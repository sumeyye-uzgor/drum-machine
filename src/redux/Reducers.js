import Types from './Types';
import BankInfo from '../db/BankInfo'

function findNote(bank, key) {
    let selectedBank;
    bank === 'one' ? selectedBank = BankInfo.bankOne : selectedBank = BankInfo.bankTwo
    const note = selectedBank.reduce(bank => bank.keyTrigger === key.toUpperCase())
    return note
}

const INITIAL_STATE = {
    power: false,
    bank: 'one',
    displayText: '',
    selectedNote: {
        keyTrigger: '',
        id: '',
        url: ''
    },
    volume: 50
}
const Reducer = (state = INITIAL_STATE, action) => {
    let text;
    switch (action.type) {
        case action.type === Types.SET_BANK:
            action.payload === 'one' ? text = 'Heater Kit' : text = 'Smooth Piano Kit'
            return {
                ...state,
                displayText: text,
                bank: action.payload
            }
        case action.type === Types.SET_POWER:
            action.payload === true ? text = 'Power On' : text = ''
            return {
                ...state,
                displayText: text,
                power: action.payload
            }
        case action.type === Types.SET_VOLUME_LEVEL:
            return {
                ...state,
                displayText: `VOLUME: ${action.payload}`,
                volume: action.payload
            }
        case action.type === Types.TRIGGER_DRUM:
            const note = findNote(state.bank, action.payload)
            return {
                ...state,
                displayText: note.id,
                selectedNote: {
                    keyTrigger: action.payload,
                    id: note.id,
                    url: note.url
                }
            }
        default:
            return state;
    }

}

export default Reducer;