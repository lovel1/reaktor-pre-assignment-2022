export const convertToUrlFriendly = (string) => {
    return string.split(' ').join('_').toLowerCase()
}