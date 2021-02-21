import Types from './Types';

const INITIAL_STATE = {
    power: true,
    bank: false,
    displayText: 'Hello',
    playNote: false,
    volume: 50
}



const Reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Types.SET_BANK:
            // const bankText = !action.payload ? 'Heater Kit' : 'Smooth Piano Kit'
            return {
                ...state,
                displayText: state.power ? (!action.payload ? 'Heater Kit' : 'Smooth Piano Kit') : '',
                bank: action.payload
            }
        case Types.SET_POWER:
            const powerText = action.payload ? 'Power On' : 'Power Off'
            return {
                ...state,
                displayText: powerText,
                power: action.payload
            }
        case Types.SET_VOLUME_LEVEL:
            return {
                ...state,
                displayText: `VOLUME: ${action.payload}`,
                volume: action.payload
            }
        case Types.TRIGGER_DRUM:
            return {
                ...state,
                playNote: true,
                displayText: action.payload,
            }
        case Types.DONT_PLAY_NOTE:
            return {
                ...state,
                playNote: false
            }

        default:
            return state;
    }

}

export default Reducer;