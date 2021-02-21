import Types from "./Types";

export const setVolumeLevel = volume_level => (
    {
        type: Types.SET_VOLUME_LEVEL,
        payload: volume_level
    }
)
export const setPower = power_status => (
    {
        type: Types.SET_POWER,
        payload: power_status
    }
)
export const setBank = bank_status => (
    {
        type: Types.SET_BANK,
        payload: bank_status
    }
)


export const triggerDrum = key => (
    {
        type: Types.TRIGGER_DRUM,
        payload: key
    }
)