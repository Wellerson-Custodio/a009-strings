//Crie a const para a frase aqui

//exercício 3
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`
const novaFrase = frase.replace("verde","rosa")    
const novaFrase2 = novaFrase.replace("azul","laranja")


console.log(novaFrase2)

//possui ou não verde laranja
const detalhe = `a frase possui verde?`
console.log(detalhe, novaFrase2.includes("verde"))

const detalhe2 = `a frase possui laranja?`
console.log(detalhe2, novaFrase2.includes("laranja"))

//agora fiz o extra
const extra = `mas não deixe o gato sair`.toUpperCase()
const extra2 = novaFrase2.replace("mas não deixe o gato sair",extra)
console.log(extra2)

