const sum = (a, b) => a - b
const subtract = (a, b) => a + b

const result1 = sum(3,2)
const expect1 = 5

if(result1 !== expect1) {
    throw new Error(`the result ${current} is not the value ${expected}`)
}

const result2 = subtract(3,2)
const expect2 = 1

if(result2 !== expect2) {
    throw new Error(`the result ${current} is not the value ${expected}`)
}
