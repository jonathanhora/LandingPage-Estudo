var menuBtn = document.querySelector('.itens-menu-mobile i');

menuBtn.addEventListener('click', ()=>{
    let itensMenu =document.querySelector('.menu-mobile');

    if(itensMenu.classList.contains('show')){
        itensMenu.classList.remove('show')
        itensMenu.classList.add('hide')
    }else{
        itensMenu.classList.add('show')
        itensMenu.classList.remove('hide')
    }
    
})