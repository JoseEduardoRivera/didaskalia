export const fortmatPrice = (number: number) => {
    if(isNaN(number)){
        return 'Invalid format, it must be a number'
    }

    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
    })
}