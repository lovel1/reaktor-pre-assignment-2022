export const filterHandler = (filter, data, valueToFilter) => {
    return data.filter(element => element[valueToFilter].toLowerCase().includes(filter.toLowerCase()))
}