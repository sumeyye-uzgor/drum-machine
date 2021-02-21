import BankInfo from '../db/BankInfo'

export const findNote = (bank, key) => {
    const selectedBank = !bank ? BankInfo.bankOne : BankInfo.bankTwo
    const note = selectedBank.filter(bank => bank.keyTrigger === key.toUpperCase())
    return note[0]
}