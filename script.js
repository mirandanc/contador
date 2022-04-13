function verificar() {
    let ini = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let pas = document.getElementById('pas')
    let res = document.getElementById('res')

    if(ini.value.length == 0 || ini.value.length == 0 || ini.value.length == 0) {
        window.alert('Erro, faltam dados')
        res.innerHTML = `Impossivel contar`
    } else {
        res.innerHTML = `contando... <br>`
        let i = Number(ini.value)
        let f = Number(fim.value) 
        let p = Number(pas.value) 
        if (p <= 0){
            window.alert('Passo Invalido considerando PASSO = 1')
            p = 1
        }
        else if (i < f ) {
        for (let n = i ; n <= f ; n+=p){ //contagem crescente
            res.innerHTML += `\u{1F449} ${n} <bk>`
        }
        
        } else {
        for(let n = i ; n >= f; n-=p){ //contagem decrescente
            res.innerHTML += `\u{1F449} ${n} <bk>`
        }
        }res.innerHTML += `\u{1F3c1}`
    } 
} 
        
    
