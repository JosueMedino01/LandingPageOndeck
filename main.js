function show(){
    
    let menuShow = document.querySelector('.cabecalho-mobile')
    if(menuShow.classList.contains('open')){
        menuShow.classList.remove('open')
        document.querySelector('.icon').src = 'Assets/Menu.svg'
    } else{
        menuShow.classList.add('open')
        document.querySelector('.icon').src = 'Assets/Close.svg'
    }
}

