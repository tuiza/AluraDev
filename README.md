# AluraDev
Desafio proposto pela Alura para a criação de uma ferramenta de compartilhamento de codigo, semelhante ao https://carbon.now.sh/ com o adicional de uma pagina de comunidade, onde usarios possam vê o codigo de outras pessoas.

---

<p align="center">
 <a href="#Tecnolgias">Features</a> • 
 <a href="Implementação futuras">Technology</a> • 
 <a href="#Instalação">Installation</a>
</p>
  
</p>

## Tecnologias
<p align="center">
  <img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img alt="HTML5" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img alt="CSS3" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
  <img alt="Sass" src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" width="80" target="_blank">
 
## Tecnologia usadas
Para fazer o screenshot foi usada a biblioteca Html2Canvas, você pode revisar o arquivo screenshot.js para escolher a div para gerar a imagem.<br><br>
Em conjunto foi usanda a biblioteca HighlightJs para dar a sintaxy do codigo criado em na pagina de editor. complementar ao Highlight na pasta Css/temas-hljs exitem dois estilos estilos que podem ser usados apenas importando o aquivo na pagina do editor apenas um estilo pode ser usado po vez. O arquivo Js/sintaxyFormat.js é usado para selecionar o container onde o Highlight é aplicado.
<br><br>
Esse projeto usa SASS como forma de criar os estilos por isso é recomendado, que se você quiser fazer alterações, usar o SASS e não o CSS diretamente.
Caso você use o VSCode e já tenha o SASS instaldo, na pasta .vscode existe um script para iniciar o SASS direto no terminal integrado, basta apenas usar o atalho ```Shift+Ctrl+B``` e selecionar SassCompiler.
<br><br>
O padrão CSS utilizado nesse projeto se basea no BEM. Veja abaixo:
````
.Bloco__Elemento_Subelemento-modificador
````
## Implementação futuras

1. Criar/refatorar para uma versão SPA;
2. Criar seleção de temas darkmode e lightmode;
3. Pagina de Usuario



