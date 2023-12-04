export  const multiplicationCalc = ( base, selectedValueFlag, getValues ) => {
    let multiplicator = 1
    let leftSelectValue = getValues('left-select') || 'USD'
    let rightSelectValue = getValues('right-select') || 'USD'

    let selectedValue =
        selectedValueFlag === 'left' ? rightSelectValue : leftSelectValue

    if (leftSelectValue !== rightSelectValue) {
        multiplicator = base.rates?.[selectedValue]
    }

    return multiplicator
}