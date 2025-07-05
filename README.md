<!-- É o mair título da página # -->
# Fundamentos do JavaScript Clássico

## INTEGRAÇÕES

### Integrar JavaScript de forma interna

<!-- ~~~ indica código -->
~~~~ html
./index.html

<!DOCTYPE html>

<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>
    
     <script defer>
        console.log("Hello World!");
     </script>
</body>
</html>

~~~~

### Integrar JavaScript de forma externa

<!-- * - itálico; ** - negrito; *** - negrito e itálico. -->
- Criar diretório ***src***
- Criar arquivo ***script.js*** na raiz do diretório ***src***
- Integrar de forma externa o arquivo ***script*** no arquivo ***index.html***

~~~~ html
./index.html

<!DOCTYPE html>

<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript</title>
</head>
<body>

    <!-- indica o caminho externo da onde se está editando o arquivo -->
     <script src="./src/script.js"></script>
</body>
</html>
~~~~

## COMENTÁRIOS

### Comentários de linha

~~~~ JavaScript
./src/script.js

    // comentário de linha

~~~~

### Comentários de bloco simples

~~~~ JavaScript
./src/script.js

    console.log("Hello World!"); // Logando "Hello World!" no console do navegador.
    /* comentário de bloco  simples */

~~~~

### Comentários de bloco com marcadores

~~~~ JavaScript
./src/script.js

     /**
     * comentário de bloco com marcações
     * linha 2
     * linha 3
     */

~~~~

## VARIÁVEIS

### Declaração

~~~~ JavaScript
./src/script.js

     var number; 

~~~~

### Atribuição de valores

~~~~ JavaScript
./src/script.js

     var number; 

     number = 5;

~~~~

### Declaração e atribuição de valores

~~~~ JavaScript
./src/script.js

     var number = 5;

~~~~

### Retribuição de valor

~~~~ JavaScript
./src/script.js

     var number = 5;

     number = 10;

~~~~

### Nomenclaturas

- Caracteres permitidos para iniciar a nomenclatura de um identificador

~~~ javascript

./src/script.js

//letras
var number;
var Number;

//sublinhado
var _number;

//cifrão
var $number;

~~~ 

- Case sensitive

~~~ javascript

./src/script.js

//*number* é diferente de "Number"

~~~ 

- Nomenclaturas compostas

~~~ javascript
./src/script.js

// camel case

var myName; 

//pascal case

var MyName; 

//snake case

var my_name; 

~~~ 

## TIPOS DE DADOS   

### Dados primitivos

~~~ javascript
./src/script.js

// string - variavéis em texto do javascript.  É o tipo. A variável é definida pelo seu valor.
var name = "Alex"; 

var surname = 'Bessa'; 

// number
var age = 29;
var weight = 85.6;

//boolean
var active = true;
var permission = false;

// undefined - indefinido
var contains;
console.log(contains)

// null - define propositalmente um valor nulo
var data = null;
 
 ~~~

 ### Não primitivos

 ~~~ javascript
   ./src/script.js

   // array 
   var values = [1, "Vitoria", true, null];
   

   // object literal
   
   var person = {name: "Vitoria", age: 29};

   var person = {
     name: "Vitoria",
     age: 29
   };

   // functions

   var message = function(){};
   ~~~



