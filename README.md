# aulaJS-DOM


# O que é JavaScript?

![O que é JavaScript](https://d2v4zi8pl64nxt.cloudfront.net/javascript-seo/5948abfc0e2df5.02876591.gif)

JavaScript é uma linguagem de programação criada em 1995 por Brendan Eich. 

O seu propósito na criação envolvia possibilitar que as páginas web fossem mais dinâmicas, com eventos, botões com funções específicas, e uma conexão melhorada com o back-end. 

Um ano depois de seu lançamento, a Microsoft portou a linguagem para seu navegador, o que ajudou a consolidar a linguagem e torná-la uma das tecnologias mais importantes e utilizadas na internet.

Embora ela tenha esse nome, **não se deve confundir JavaScript com Java**. Java e JavaScript são linguagens completamente diferentes e possuem propósitos diversos.

O JavaScript fornece às páginas web a possibilidade de programação, transformação e processamento de dados enviados e recebidos, interagindo com a marcação e exibição de conteúdo da linguagem HTML e com a estilização desse conteúdo proporcionada pelo CSS nessas páginas.

Outro ponto é que os scripts em JavaScript permitem que se atualize parte do conteúdo de uma página web sem ser necessário carregá-la totalmente. Isso permite a criação de uma infinidade de softwares completos e totalmente funcionais para diversas finalidades. Sites como o Google Docs não existiriam sem essa função, por exemplo.

## Adicionando JavaScript no HTML

Para referenciar o arquivo JS a ser utilizado pelo HTML usaremos a tag `<script>`, que sempre deverá estar localizada dentro das tags `<body>`. 

O atributo `src` deve informar o caminho do seu arquivo JS.

```HTML
<body>
  <script src="index.js"></script>
</body>
```

Onde utilizar:

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <meta http-equiv="X-UA-Compatible" content="ie=edge">
   <title>Exemple</title>
</head>
<body>
   <!-- Sempre colocar a tag <script> antes do fechamento da tag body e ao final das demais tags. -->
   <script src="./index.js"></script>
</body>
</html>
```
**OBS**: a tag script não é autocontida. Assim, ela deve ser composta por uma tag de abertura, seu conteúdo, e a tag de fechamento.

---

# DOM - Document Object Model

![O que é DOM](./assets/domhtml.gif)

## O que é DOM ?

DOM é uma sigla que significa **Document Object Model.** Quando a página é carregada o browser cria um objeto que representa os elementos da página a partir do **HTML.**

O DOM é uma representação de uma página HTML e de todos os seus conteúdos. Por isso, ele se assemelha a uma árvore cujos galhos são nós, onde cada tag e conteúdo geram um nó. 

![domtree](https://raw.githubusercontent.com/reprograma/On10-TodasEmTech-JavascriptI/main/assets/domtree.jpg)

**IMPORTANTE**: **o DOM não pertence nem ao HTML, nem ao JavaScript**. Ele é apenas um conjunto de regras implementado pelos principais navegadores. O seu conteúdo é alimentado pelo arquivo em HTML, e ele é consumido pelo nosso script, mas isso não quer dizer que ele pertença ao HTML ou ao JavaScript.

Tudo em uma página HTML é um nó em uma árvore do DOM, de onde podem surgir ainda outros nós filhos. Cada elemento HTML é um nó. O texto dentro de um elemento HTML é um nó filho da tag em que está inserido. Cada comentário é um nó de comentário dentro da árvore do DOM.

Assim, o DOM é composto por quatro tipos principais de nós:


- **Document** - representa o documento HTML.
- **Element** - são todas as tags que estão no arquivo HTML e se transformam em elementos da árvore DOM.
- **Text** - é o conteúdo de texto que vai entre os elementos (tags).
- **Attribut** - são os todos atributos para um nó específico. No caso, o attribute class="HERO" está associado ao elemento, outros exemplos de atributos são o href, o id, entre outros.

![Arvore DOM com tipos de nós](https://raw.githubusercontent.com/reprograma/On10-TodasEmTech-JavascriptI/main/assets/arvoredom.jpeg)

---

## Manipulando o DOM

Por que é tão importante entender o que é o DOM e como ele funciona? Para que possamos manipular conteúdo, estrutura e estilo, bem como criar eventos dentro da página HTML por meio do JavaScript ou outras linguagens de programação.

Podemos manipular o DOM para realizar alterações na estrutura do HTML, alterar estilos, modificar conteúdos e adicionar diversos eventos.

![Manipulação DOM](./assets/manipulacaodom.gif)

---

# Métodos de manipulação - HTML/DOM

Primeiramente, é importante destacar que os métodos de manipulação fazem a ligação entre os nós (elementos) e os eventos. 

São inúmeros os métodos de manipulação do DOM, cuja documentação se encontra nesse [link.](https://developer.mozilla.org/pt-BR/docs/Web/API/Document)

Mas, vamos concentrar os nossos estudos nos 5 métodos mais utilizados pelo JavaScript.

### **getElementById()**

Esse método retorna o elemento que estiver contendo o nome do ID informado. Como os IDs devem ser únicos, é um método muito útil para pegar apenas o elemento desejado.

Exemplo:

#### *HTML*

```HTML
 <div>
   <input type="text" id="textInput" class="text-input"  />
</div>
```

#### *JavaScript*

```js
let getInputId = document.getElementById('textInput');
```

### **getElementsByTagName()**

Uma coleção de todos elementos que contenham o nome da tag informada.

Exemplo:

#### *HTML*

```HTML
 <div>
   <input type="text" placeholder="Enter age" id="text"/>
</div>
```

#### *JavaScript*

```js
const getAge = document.getElementByTagName("text");
```

### **querySelector()**

Mais versátil, esse método retorna qualquer elemento do DOM, como classes, tags e ID's. 

Você apenas precisa deixar explicito se está chamando uma classe, um ID ou uma tag.

Exemplo:

#### HTML

```HTML
<div>
 <input type="text" id="textInput" class="text-input" />
</div>
```

#### Javascript

```js
let getInputId = document.querySelector('#textInput');
let getInputClass = document.querySelector('.text-input');
let getInputTag = document.querySelector('input');
```

### **querySelectorAll()**

Semelhante ao querySelector(), só que retorna um objeto representando os elementos do documento que correspondem ao seletor.

Se nenhum elemento coincide, a função retorna um objeto vazio. Se a string do seletor é inválida, querySelectorAll() lançará uma exceção.

### **Importante**:

Para selecionar apenas um elemento pelo `id`, é mais viável utlizar `document.getElementById` pois o mesmo é específico para essa finalidade. Caso precise de uma seleção mais avançada, use `document.querySelector` pelo fato de ter a liberdade de utilizar seletores CSS, o que é uma grande vantagem além de ser mais performático para o browser.

### **Sintaxe para seletores**:

```js
document.getElementById('nome-id');
//utilizar o nome do ID entre aspas

document.querySelector('.classe');
//utilizar o nome da classe entre aspas e acompanhada do ponto .

document.querySelector('#id');
//utilizar o nome do id entre aspas e utilizando a hashtag #

document.querySelector('div');
//utilizar o nome da tag entre aspas
```
### **getElementsByClassName()**

Esse método nos permite selecionar elementos do documento incluídos dentro do atributo class. 

Ele recebe um único argumento de string, que pode conter vários identificadores separados por espaços.

### **Outros métodos DOM**:

| Propriedade          | Descrição                                                                            |
| :------------------- | :----------------------------------------------------------------------------------- |
| documentElement      | Captura o elemento raiz <html> de um documento HTML.                                 |
| getElementById       | Busca um elemento da página Web com o uso do atributo id do elemento.                |
| querySelector        | Busca um elemento da página Web com o uso do atributo id, classe ou tag do elemento. |
| createElement        | Cria um novo elemento na página.                                                     |
| createAttribute      | Cria um novo atributo na página.                                                     |
| createTextNode       | Cria um novo texto na página.                                                        |
| getElementsByTagName | Retorna um array dos elementos com o mesmo nome.                                     |
| appendChild          | Insere um novo elemento filho.                                                       |
| removeChild          | Remove um elemento filho.                                                            |
| parentNode           | Retorna o novo pai de um nó.                                                       |

---

## Criar, inserir e excluir elementos da árvore DOM.

A função `document.createElement()` aceita como parâmetro o nome da tag e retorna o elemento recém criado (mas ainda não inserido).

```javascript
let novaTag = document.createElement('p');
```

Inserimos o elemento com a função `appendChild()`, mas ainda precisamos criar um conteúdo (nó de texto) para o elemento `<p>`, caso contrário, estaremos inserindo apenas o elemento, sem texto. Para criar um nó de texto utilizaremos a função `document.createTextNode()`.

```javascript
let texto = document.createTextNode('meu texto novo');
```

Antes de inserir o elemento, devemos atribuir o nó de texto a ele. Ou seja, referenciar corretamente o elemento pai ao elemento filho.

```javascript
novaTag.appendChild(texto);
```

O Novo elemento existe e tem conteúdo, porém ainda não foi inserido no html existente. Para isso utilizaremos a função `document.querySelector('.nome-da-classe')` e selecionaremos o nó onde o novo elemento que criamos será inserido.

```javascript
let minhaDiv = `document.querySelector('.classe-da-div')`;
```

Ou seja, agora com o elemento completo, podemos então, anexá-lo a um elemento <div> já existente em nossa página HTML. A função `appendChild()` insere o novo elemento filho ao final do elemento pai.

```javascript
minhaDiv.appendChild(novaTag);
```

É possível inserir um elemento através da função insertBefore(), ela aceita dois parâmetros: o primeiro é o elemento filho e o segundo é o elemento que servirá de referência para inserir o elemento filho.
Para remover um elemento utilizamos a função removeChild().

## Sintaxe Criar elementos

```javascript
document.createElement("nome-da-tag") para criar um elemento
document.createTextNode("algum texto") para criar um nó de texto
elementoPai.appendChild(elementoFilho) para inserir um elemento na última posição
elementoPai.insertBefore(elementoFilho, elementoAnterior) pra inserir um elemento em posição específica
elementoPai.removeChild(elementoFilho) para remover um elemento
```

---

## Métodos do DOM para manipular CSS

O DOM HTML permite que o JavaScript mude o estilo dos elementos HTML.

Para alterar o estilo de um elemento HTML, use esta sintaxe:

```javascript
elemento.style.property = novo estilo
```

---

## Adicionar e remover classes do HTML pelo Javascript

O Element.classList é uma propriedade somente leitura que retorna uma coleção com as classes do elemento.

```javascript
elemento.classList;
```

A propriedade classList é somente leitura, no entanto, você pode modificá-la usando os métodos add() e remove().

`contains()` Retorna um valor booleano, indicando se um elemento tem o nome da classe especificado. Valores possíveis:

- true - o elemento contém o nome da classe especificado
- false - o elemento não contém o nome da classe especificado

```javascript
elemento.classList.contains('classe');
```

`add()` Adiciona um ou mais nomes de classe a um elemento. Se a classe especificada já existir, a classe não será adicionada

```javascript
elemento.classList.add('classe');
```

`remove()` Remove um ou mais nomes de classe de um elemento. A remoção de uma classe que não existe, NÃO gera um erro

```javascript
elemento.classList.remove('classe');
```

---

# Eventos no Javascript

Os eventos são basicamente um conjunto de ações que são realizadas em um determinado elemento da página web, seja ele um texto, uma imagem, ou uma div, por exemplo. Muitas das interações do usuário que está visitando sua página com o conteúdo do seu site podem ser consideradas eventos.

| Evento      | Descrição                                                    |
| :---------- | :----------------------------------------------------------- |
| onBlur      | remove o foco do elemento                                    |
| onChange    | muda o valor do elemento                                     |
| onClick     | o elemento é clicado pelo usuário                            |
| onFocus     | o elemento é focado                                          |
| onKeyPress  | o usuário pressiona uma tecla sobre o elemento               |
| onLoad      | carrega o elemento por completo                              |
| onMouseOver | define ação quando o usuário passa o mouse sobre o elemento  |
| onMouseOut  | define ação quando o usuário retira o mouse sobre o elemento |
| onSubmit    | define ação ao enviar um formulário                          |

### **onClick:**
Evento que realiza alguma coisa quando o usuário clica em um elemento HTML.


```javascript
elemento.addEventListener('click', function (evento) {
  //ação a ser executada no clique do elemento
  console.log(evento);
});
```

### **onSubmit:**
Evento que define uma ação no momento em que um formulário é enviado.

---

## Event Listener: 

É um manipulador e rastreador de eventos, onde é possível adicionar ou remover um evento sobre qualquer elemento. O Event Listener disponibiliza duas funções principais, são elas:

- **addEvent** - Adiciona uma função que será disparada quando ocorrer determinado evento no objeto.
- **removeEvent** - Remove um listener previamente adicionado em um objeto e retorna true em caso de sucesso.

## preventDefault:

O método cancela o comportamento default/padrão de um determinado item, ou seja, cancela o comportamento que os elementos geralmente tem na página.

Isso pode ser útil nesses cenários:

- Ao clicar no botão "Enviar", evite que ele envie um formulário
- Ao clicar em um link, impeça o link de seguir o URL
  
*Obs.: nem todos os eventos são canceláveis.*

## value: 
Define ou retorna o valor do atributo value de um campo de texto.

A propriedade value contém o valor padrão OU o valor em que um usuário digita.

Retorne a propriedade value:

```javascript
input.value;
```

Defina a propriedade value:

```javascript
input.value = texto;
```

---

# Funções

Uma função é um procedimento JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor,
ou seja, uma função é um bloco de código projetado para executar uma tarefa específica. Esse código é definido uma vez e chamado quantas vezes for necessário.

```javascript
function square(numero) {
  return numero * numero; // não pulamos linha entre return e o que vai ser retornado
}

console.log(square(4)); //16
console.log(square(5)); //25
alert(square(9)); //81
```
---

# Condicionais

Em qualquer linguagem de programação, o código precisa tomar decisões e realizar ações de acordo, dependendo de diferentes entradas.

Exemplos:  

1) Num jogo, quando a vida do jogador acaba, o jogo se encerra. 

2) Em um aplicativo de clima, se estiver sendo observado pela manhã, ele mostra um gráfico do nascer do sol; mostra estrelas e uma lua se for noite.

![if/else](./assets/if...else.gif)

## Tipos de Condicionais

### **if...else**

A mais simples – e mais utilizada – declaração condicional. Sintaxe básica:

```javascript
if (condicao) {
  //codigo para executar caso a condição seja verdadeira
} else {
  //senão, executar este código
}
```

OBS: Não é obrigatório incluir a palavra reservada *else*. O código apresentado a seguir é válido e não produz erros:

```javascript
if (condicao) {

  //codigo para executar se a condição for verdadeira

}

//código a ser executado
```

### **if...else if...else**

O último exemplo nos forneceu duas opções ou resultados - mas e se quisermos mais do que dois?

Solução: o else if. 

Cada escolha extra requer um bloco adicional para colocar entre if() { ... } e else { ... } 


```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>
```

```javascript
var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
```
### **switch**

A estrutura condicional *switch* permite executar um bloco de código diferente de acordo com cada opção (case) especificada. 

Seu uso é indicado quando os valores a serem analisados nessas condições são pré-definidos.

```javascript
var tipoUsuario = "Gerente";

switch (tipoUsuario) {
    case "Admin":
        mensagem = "*|*| Feliz Natal, chefe! |*|*";
        break;
    case "Gerente":
        mensagem = "Boas festas, meu amigo!";
        break;
    default:
        mensagem = "Boas festas!";
}
```

### **Operador Ternário**

O operador ternário ou condicional é um pequeno bit de sintaxe que testa uma condição e retorna um valor / expressão se for *true*, e outro caso seja *false*.

```javascript
( condition ) ? run this code : run this code instead
```

Você não precisa apenas definir valores de variáveis com o operador ternário; Você também pode executar funções ou linhas de código, ou simplesmente efetuar uma comparação.

``` html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

``` javascript
var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
```
---
# Objeto Date()

**new Date()** -> cria uma instância JavaScript de Date que representa um momento no tempo.

``` javascript
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
```

O objeto Date não possui propriedades, por outro lado, possui muitos métodos. A seguir serão apresentados alguns dos seus principais métodos.

- getDate(): devolve o dia do mês, um inteiro entre 1 e 31. Não confundir com getDay que retorna o dia da semana.
- getDay() : devolve o dia da semana, inteiro entre 0 e 6 (0 para Domingo).
- getHours(): retorna a hora, inteiro entre 0 e 23.
- getMinutes(): devolve os minutos, inteiro entre 0 e 59.
- getSeconds(): devolve os segundos, inteiro entre 0 e 59.
- getMonth(): devolve o mês, um inteiro entre 0 e 11 (0 para Janeiro).
- getTime(): devolve os segundos transcorridos entre o dia 1 de janeiro de 1970 e a data correspondente ao objeto ao que se passa a mensagem.
- getFullYear(): retorna o ano com todos os dígitos. Funciona com datas posteriores ao ano 2000.
- setDate(d): atualiza o dia do mês.
- setHours(h): atualiza a hora.
- setMinutes(m): muda os minutos.
- setMonth(m): muda o mês (atenção ao mês que começa por 0).
- setSeconds(s): muda os segundos.
- setTime(t): atualiza a data completa. Recebe um número de segundos desde 1 de janeiro de 1970.
- setFullYear(): muda o ano da data ao número que recebe por parâmetro. O número se indica completo ex: 2005 ou 1995. Utilizar este método para estar certo de que tudo funciona para datas posteriores a 2000.
- getimezoneOffset(): Devolva a diferença entre a hora local e a hora GMT (Greenwich, UK Mean Time) sob a forma de um inteiro representando o número de minutos (e não em horas).
- toGMTString(): devolva o valor do atual em hora GMT (Greenwich Mean Time)
 
 ----

# Links Úteis

**DOM, métodos de manipulação e eventos:**

https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction

https://tableless.com.br/entendendo-o-dom-document-object-model/

https://www.w3schools.com/jsref/dom_obj_all.asp

https://www.w3schools.com/js/js_htmldom_events.asp

**Condicionais:**

https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals

*Switch:*

https://www.devmedia.com.br/javascript-switch/39761

https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/conditionals#instru%C3%A7%C3%B5es_switch

*Operadores Ternários:*

https://programadorviking.com.br/if-ternario-javascript/

**Objeto Date():**

http://www.linhadecodigo.com.br/artigo/1003/entendendo-o-objeto-date-do-javascript.aspx

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date

**Exercícios de JavaScript**

https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

https://exercism.io/tracks/javascript/exercises
