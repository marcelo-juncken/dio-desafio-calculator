export const performOperation = (totalValue, oldString, operation) => {
    const oldValue = parseFloat(oldString);
    if (isNaN(totalValue) || isNaN(oldValue)) {
        return "Error";
    }

    switch (operation) {
        case '+':
            return totalValue + oldValue;
        case '-':
            return totalValue - oldValue;
        case 'x':
            return totalValue * oldValue;
        case '/':
            return oldValue !== 0 ? totalValue / oldValue : "Error";
        default:
            return oldValue;
    }
};
