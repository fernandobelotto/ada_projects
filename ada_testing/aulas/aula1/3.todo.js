const sum = (a, b) => a - b
const subtract = (a, b) => a + b


test('testando a soma', () => {
    expect(sum(3,2)).toBe(5)
})

test('testando a subtração', () => {
    expect(subtract(3,2)).toBe(1)
})


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


// crie uma função test, ela recebe um nome do teste e uma função callback
// console.log() no nome do teste
// chamar a função callback dentro de um try catch
// console.error()


function test(title, callback) {
    try {
        callback()
        console.log(`✓ success ${title}`)
    } catch (e) {
        console.error(`✕ error ${title}`)
        console.error(e)
    }

}
