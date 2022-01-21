export const addLineBreakToName = str => {
    const arr = str.split(' ')
    arr[0] = arr[0] + '\n'
    return arr.join('')
}