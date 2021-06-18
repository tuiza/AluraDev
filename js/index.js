const areaDoCodigo = document.querySelector('.corpo__codigo__editor');
const linguagem = document.querySelector('.corpo__projeto__select');
const cor = document.querySelector('.corpo__projeto__cor');
const botaoPreview = document.querySelector('.corpo__codigo__btn');
const botaoSalvar = document.querySelector('.corpo__projeto__btn');
const tituloProjeto = document.querySelector('.corpo__projeto__titulo');
const descricaoProjeto = document.querySelector('.corpo__projeto__descricao');

function mudaLinguagem () {
    const codigo = areaDoCodigo.querySelector("code");
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" area-label="editor"></code>`;
    areaDoCodigo.firstChild.innerText = codigo.innerText; /* inner text pra garantor que é um texto, n um código */
}
    linguagem.addEventListener('change', () => {
        mudaLinguagem()
    })

    botaoPreview.addEventListener('click', () => {
        const codigo = areaDoCodigo.querySelector("code");
        hljs.highlightBlock(codigo);
        
    })

    
    cor.addEventListener('change', () => {
    const valor = cor.value;
    console.log(valor);
    areaDoCodigo.style.backgroundColor = valor;
    return valor;
    
})

botaoSalvar.addEventListener('click', ()=> {
    if(typeof(Storage) !== undefined) {
        console.log("Suporta o localStorage");
        const projeto = montaProjeto();
        salvaLocalStorage(projeto);
        console.log("testeee");
    }
    else {
        console.log("Não suporta o localstorage");
    }
})

let numeroId = 1;
if(localStorage.length > 0) {
    numeroId = localStorage.length;

}

function montaProjeto() {
    let  projeto =  {
        'id': atribuiId(),
        'detalhesDoProjeto': {
            'nomeDoProjeto': tituloProjeto.value,
            'descricaoDoProjeto': descricaoProjeto.value,
            'linguagem': linguagem.value,
            'codigo': areaDoCodigo.querySelector('code').innerText,
            'cor': cor.value
        }
        
    }
    return projeto
}

function atribuiId() {
    if(localStorage.length == 0) {
        return 0 ;
    }
     
    if(localStorage.length == numeroId) {
        let novoId = numeroId;
        numeroId++;
        return novoId;
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson));
    /* stringfy transforma o objeto Json em string */
}

