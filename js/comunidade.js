const todosProjetos = document.querySelector('.js-todos-projetos');
const teste = document.querySelector('.corpo__comunidade__projeto__codigo');

new function () {
    mostraProjetos();
    console.log("q");
    
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
                <span class="corpo__comunidade__projeto__linguagem linguagem--${projeto.detalhesDoProjeto.linguagem}">${projeto.detalhesDoProjeto.linguagem}</span>
           
            
        </a>
    `
    return cartao;
}
