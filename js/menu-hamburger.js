const menuBtn = document.querySelector("#menu_btn");
function toggleMenu(event) { /* toggle é alternenância */
   if(event.type == 'touchstart') event.preventDefault(); /* n deixa o evento do click acontecer denovo */
    const nav =  document.querySelector(".header");
    nav.classList.toggle('active'); 
    /* toggle ativa se tiver desativado, desativa se tiver ativado */
    const active = nav.classList.contains('active');

    /* ADCIONANDO ACESSIBILIDADE COM O ARIA */
    
    event.currentTarget.setAttribute('aria-expanded',active);
    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } 
    else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}
menuBtn.addEventListener("click", toggleMenu);
menuBtn.addEventListener("touchstart", toggleMenu);
