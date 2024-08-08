var num = [5,4,9,2]
num[4] = 6
num.push(7)



console.log( `O vetor tem ${num.length}`)
console.log(`O vetor na ordem correta é ${num.sort()}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)


for(let pos = 0; pos < num.length; pos++){
    console.log(num[pos])
}

let pos = num.indexOf(8)

if(pos == -1){
    console.log("O valor não foi encontrado")
} else{
    console.log(`O valor 8 está na posição ${pos}`)
}

