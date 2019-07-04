function contar(){
    let inicio = document.getElementById('numinicio')
    let fim = document.getElementById('numfim')
    let passo = document.getElementById('numpasso')
    let res = document.getElementById('result')
    

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Erro! Faltam dados!')
        res.innerHTML ='<strong>Impossivel contar!</strong>'
        res.style.color = 'red'
    }else{
        res.innerHTML = '<strong>Contando:</strong> <br>'
        res.style.color = 'green'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        
        if(p <= 0){
            window.alert('Passo inválido, considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //Contagem crescente
            for(let c=i; c <= f; c += p){
                res.innerHTML +=`${c} \u{1F449} `
            }
        }else{
            //Contagem decrescente
            for(let c=i; c >= f; c -= p){
                res.innerHTML +=`${c} \u{1F449} `
            }
        }
        res.innerHTML +=`\u{1F3C1}`
    }
}