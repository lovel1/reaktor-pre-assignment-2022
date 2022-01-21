export const matchResultColorPicker = (result) => {
    switch (result) {
        case 'WIN':
            return 'text-green-500'
        case 'LOSE':
            return 'text-red-500'
        case 'DRAW':
            return 'text-slate-500'
        default:
            return null
    }
}