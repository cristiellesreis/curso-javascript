let amigo = {
    nome: 'Jose', 
    sexo: 'masculino', 
    peso: 89.4 ,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}

amigo.engordar(20)

console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)