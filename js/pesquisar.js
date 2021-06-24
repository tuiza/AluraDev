const pesquisar_btn = document.querySelector("#pesquisar");
function toggleMenu(event) { /* toggle é alternenância */
   if(event.type == 'touchstart') event.preventDefault(); /* n deixa o evento do click acontecer denovo */
    const nav =  document.querySelector(".header");
    nav.classList.toggle('pesquisar'); 
    /* toggle ativa se tiver desativado, desativa se tiver ativado */
    const pesquisar = nav.classList.contains('pesquisar');

    /* ADCIONANDO ACESSIBILIDADE COM O ARIA */
    
    event.currentTarget.setAttribute('aria-expanded',pesquisar);
    if(pesquisar) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } 
    else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
pesquisar_btn.addEventListener("click", toggleMenu);
pesquisar_btn.addEventListener("touchstart", toggleMenu);
