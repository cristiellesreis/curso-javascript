function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verique os dados e tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade Calculada ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'img/menino.png')

            }else if(idade > 10 && idade <= 21){
                //jovem
                img.setAttribute('src', 'img/moço.png')
            }else if(idade > 21 && idade <= 50){
                //adulto
                img.setAttribute('src', 'img/homem.png')

            }else{
                //idoso
                img.setAttribute('src', 'img/idoso.png')
            }

        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'img/menina.png')

            }else if(idade > 10 && idade <= 21){
                //jovem
                img.setAttribute('src', 'img/moça.png')

            }else if(idade > 21 && idade <= 50){
                //adulto
                img.setAttribute('src', 'img/mulher.png')

            }else{
                //idoso
                img.setAttribute('src','img/idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}