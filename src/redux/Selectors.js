import { createSelector } from 'reselect'


export const selectBank = state => state.bank;
export const selectPower = state => state.power;
export const selectVolume = state => state.volume;
export const selectDisplayText = state => state.displayText;

export const selectNote = state => state.selectedNote;

export const selectNoteKey = createSelector(
    [selectNote],
    note => note.keyTrigger
)

export const selectNoteId = createSelector(
    [selectNote],
    note => note.id
)

export const selectNoteUrl = createSelector(
    [selectNote],
    note => note.url
)