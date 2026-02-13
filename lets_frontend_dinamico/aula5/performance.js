const success = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
const failed = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
);
const success2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

const success_all = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  const failed_all = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found"
  );
  const success2_all = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
  );
  

const promises = [success, failed, success2];
const promises_all = [success_all, failed_all, success2_all];

async function porLoop() {
  const responses = [];
  for (let promise of promises) {
    const res = await promise;
    responses.push(res);
  }
  return responses;
}

async function porPromiseAll() {
  const res = await Promise.all(promises_all);
  return res;
}

porLoop()
.then(res => console.log('then loop', res))
.catch(err => console.log('catch loop', err))

porPromiseAll()
    .then(res => console.log('then promisseAll', res))
    .catch(error => console.log('catch promisseall', error))
