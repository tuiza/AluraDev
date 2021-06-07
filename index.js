const areaDoCodigo = document.querySelector('.corpo__codigo__editor');
const linguagem = document.querySelector('.corpo__projeto__select');
const btn = document.querySelector('.corpo__codigo__btn');

function mudaLinguagem () {
    const codigo = areaDoCodigo.querySelector("code");
    areaDoCodigo.innerHTML = '<code class="preview hljs ${linguagem.value}" contenteditable="true" area-label="editor"></code>';
    areaDoCodigo.firstChild.innerText = codigo.innerText; /* inner text pra garantor que é um texto, n um código */
}
    linguagem.addEventListener('change', () => {
        mudaLinguagem()
    })

    btn.addEventListener('click', () => {
        const codigo = areaDoCodigo.querySelector("code");
        hljs.highlightBlock(codigo);
        
    })
