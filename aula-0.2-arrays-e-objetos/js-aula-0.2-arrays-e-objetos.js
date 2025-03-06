//Arrays e objetos
//Array (pode ser chamado de vetor ou lista)
//Lista de produtos
let produtos = []
console.log(typeof(produtos))

let Produtos = ["Computador", "Notebook", "Celular", "Tablet"]
console.log(Produtos)

//Exibindo os itens individualmente (pelos índices)
console.log(Produtos[0])
console.log(Produtos[1])
console.log(Produtos[2])
console.log(Produtos[3])

//De forma mais caprichada
console.log(`1 - ${Produtos[0]}`)
console.log(`2 - ${Produtos[1]}`)
console.log(`3 - ${Produtos[2]}`)
console.log(`4 - ${Produtos[3]}`)

console.log("Exibindo s lista através do FOR...")
for (let c in Produtos){
    console.log(`${Number(c)} - ${Produtos[c]}`) //c representa o índice
}

console.log("Exibindo a lista atraves do forEach")
Produtos.forEach(function (produto){
    console.log(produto)
})

console.log("Exibindo a lista atraves do forEach com os índices...")
Produtos.forEach((produto, i) => {    //i representa o índice
    console.log(`${i+1} - ${produto}`)
})
