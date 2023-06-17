function show(){
    
    let botao = document.querySelector('.cabecalho-mobile')
    if(botao.classList.contains('open')){
        botao.classList.remove('open')
    } else{
        botao.classList.add('open')
    }
}

