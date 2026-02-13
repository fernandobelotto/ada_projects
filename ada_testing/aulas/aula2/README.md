# Configurando e explorando o JEST


## Objetivos da aula de hoje

- Criar um projeto node javascript e testar ele com o jest
- Criar um projeto node typescript e usar o ts-jest nele
- Explorar os diferentes métodos do jest para a escrita de testes

### Criando um projeto node e testando com o jest

1. Criar uma pasta com o nome do projeto
1. Executar o comando:
    ```
    npm init -y
    ````
1. instalar o jest com o comando:
    ```
    npm i --save-dev jest
    ```
1. adicionar o script de test no package.json

```diff
"main": "index.js",
"scripts": {
-   "test": "echo \"Error: no test specified\" && exit 1"
+   "test": "jest"
},
"keywords": [],
```

1. criar um arquivo de teste chamado index.test.js

1. No arquivo index.test.js, escrever o simples teste a seguir:

    ```js

        test('should be 5', () => {
            expect(5).toBe(5)
        })

    ```

1. Executar o JEST rodando o comando

    ```
        npm run test
        // ou
        npm t
    ```
