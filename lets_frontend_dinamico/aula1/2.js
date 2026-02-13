// get element by id
// .innerHTML vs .innerText
// definindo um novo innerText

const MeuTitulo = document.getElementById("titulo")

console.log(MeuTitulo.innerHTML)
console.log(MeuTitulo.innerText)


const Wrapper = document.getElementById('wrapper')

console.log(Wrapper.innerHTML)
console.log(Wrapper.innerText)


setTimeout(() => {
    Wrapper.innerText = "outro parágrafo!"
}, 2000)
