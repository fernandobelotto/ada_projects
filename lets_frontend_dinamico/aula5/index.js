// function chamadas() {
//     console.log('fernando')
//     setTimeout(()=> {
    
//         console.log('marcelo!')
//         setTimeout(() => { 
//             console.log('jade')


//             console.log('gabriel')
//         }, 1000)
//     }, 1000)

// }

// fernando
// marcelo
// gabriel








// function chamadasHell() {
//     console.log('fernando')

//     setTimeout(()=> {
    
//         console.log('ei!')
    
//         setTimeout(() => {
//             console.log('otávio')

//             setTimeout(() => {
//                 console.log('juliana')
                
//                 console.log('gabriel')
//             }, 1000)

//         }, 1000)


//     }, 1000)

    
// }


// chamadasHell()



// function pegarOsDados(id, callback) {

//     console.log('pegando os dados do usuário...')

//     setTimeout(() => {

//         console.log('sucesso, dados obtidos')
        
//         dados = { nome: 'fernando', idade: 12, id }

//         callback(dados)

//     },1500)

// }

// pegarOsDados(123, (dados) => {
//     console.log(dados)
// })










// const isPromessaCumprida = false
// const minhaPromessa = new Promise((resolve, reject) => {
    
//     if(isPromessaCumprida) {

//         resolve('Eu cumpri minha promessa!')
//     }

//     else {
//         reject('Eu não cumpri!')
//     }


// })


// minhaPromessa
//     .then(valor => console.log(valor))
//     .catch(valor => console.log(valor))
//     .finally( valor =>console.log('finally', valor))





// function retornaUmaPromessa() {
//     return new Promise((resolve, reject)=> {
//         setTimeout(() => {
//             resolve('Aqui esta o resultado!')
//         }, 1000)
//     })
// }


// retornaUmaPromessa()
//     .then(resultado => console.log(resultado))






function chamarUmApi() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve({ name: 'fernando', age: 88 })
        }, 1000)

    })
}

chamarUmApi()
    .then((s) => console.log(s))
    .finally(()=> console.log('bem, se deu certo ou não, aqui é o final'))