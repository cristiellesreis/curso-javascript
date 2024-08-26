
let numero = document.querySelector('input#txtn')
let lista = document.querySelector('select#selnum')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}

function adicionar(){
    if(isNumero(txtn.value) && !inLista(txtn.value, valores)){
        valores.push(Number(txtn.value))
        let item = document.createElement('option')
        item.text = `Valor ${txtn.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''

    } else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    txtn.value = ''
    txtn.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let posicao in valores){
            soma += valores[posicao]
            
            if(valores[posicao] > maior)
                maior = valores[posicao]
            if (valores[posicao] < menor)
                menor = valores[posicao]
        }

        media = soma/total
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${total} números cadastrados </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML+= `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML+= `<p>Somando todos os valores tem ${soma}</p>`
        res.innerHTML+= `<p>A media dos valores é ${media}</p>`
    }

}
