function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert("[Erro] faltam dados!")
        res.innerHTML = 'impossível contar'
    }else{
        res.innerHTML = 'contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            alert('passo invalido. Considerando passo 1!')
            p = 1

        }

        if(i < f){
            for(var c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F603}`
    
            }
        } else {
            for(var c = i; c >= f ; c-= p){
                res.innerHTML += `${c} \u{1F603}`
            }

        }

        res.innerHTML += `\u{1F3C1}`

    }

    // var conta = 
    // var res = document.querySelector('div#res')

    // do{
    //     console.log = `${conta}`
    //     nInicio++
    // } while (nInicio <= nFinal)
    
}