const getProdutos = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')
const getProdutos2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found')
const getProdutos3 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json')

Promise.all([getProdutos, getProdutos2, getProdutos3])
    .then(responses => {
        console.log(responses)
    })