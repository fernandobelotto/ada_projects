const sum = (a, b) => a - b
const subtract = (a, b) => a + b


expect(sum(3,2)).toBe(5)

expect(subtract(3,2)).toBe(1)


function expect(current) {

    function toBe(expected){
        if(current !== expected) {
            throw new Error(`the result ${current} is not the value ${expected}`)
        }
    }

    return {
        toBe
    }
}
