const todosProjetos = document.querySelector('.js-todos-projetos');
const teste = document.querySelector('.corpo__comunidade__projeto__codigo');

new function () {
    mostraProjetos();
}

function mostraProjetos() {
    if(localStorage.length == 0) { /*  se n tiver nada pra mostar mata a função */
        return 
    }
    let projetos = [];
    for(let i = 0; i < localStorage.length; i++) {
        projetos.push(JSON.parse(localStorage.getItem(i))); 
    }
    projetos.forEach(projeto => {
        const cartao = montaCartao(projeto);
        todosProjetos.innerHTML += cartao;
        const codigoHtml = todosProjetos.querySelector(`[data-id="${projeto.id}"]`);
        codigoHtml.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo;       
    });
}

function montaCartao(projeto) {
    console.log(projeto);
    const cartao = `
        <a href="index.html" class="corpo__comunidade__projeto" data-id="${projeto.id}">
                <code class="corpo__comunidade__projeto__codigo preview hljs ${projeto.detalhesDoProjeto.linguagem}" style="border-color:${projeto.detalhesDoProjeto.cor};"></code>
                <h2 class="corpo__comunidade__projeto__nome">${projeto.detalhesDoProjeto.nomeDoProjeto}</h2>
                <p class="corpo__comunidade__projeto__descricao ">${projeto.detalhesDoProjeto.descricaoDoProjeto}</p>
                <div class='corpo__comunidade__projeto__info info'>
                    <div class='corpo__comunidade__projeto__info__publico' >
                        <div class='header__campoUx__caixinha publico'>
                        <button class='corpo__comunidade__projeto__info__publico__btns comentário'><img src='img/comunidade/comentarios.svg'></button><h1>9</h1>
                        </div>
                        <div class='header__campoUx__caixinha publico'>
                        <button class='corpo__comunidade__projeto__info__publico__btns comentário'><img src='img/comunidade/curtidas.svg'></button><h1>9</h1>
                        </div>
                    </div>
                    <div class="header__campoUx__caixinha">
                    <img src="img/Header/fotoUx.svg" class="header__campoUx__fotoUx"> 
                    <h3 class= "header__campoUx__nomeUx">Luiza</h3>
                    </div>
                </div>
        </a>
    `
    return cartao;
}
