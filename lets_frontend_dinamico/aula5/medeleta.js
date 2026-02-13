
const compriuAPromessa = false

const fernando = new Promise( (resolve, reject) => {
    if(compriuAPromessa){
        resolve(1234)
    } else {
        reject('esse é o meu outro valor')
    }
} )

fernando
    .then((resultado)=>{ console.log(resultado)})
    .catch((error) => { console.log(error)})