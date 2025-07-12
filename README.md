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


   ### Inspecionar tipo

   ~~~ javascript
   ./scr/script.js

   //typeof
   var age = 29
   console.log(typeof age);


   ~~~


### Coerçao de Tipo

  -Implícita
   ~~~ javascript
   ./scr/script.js

   var age = 29;

   var weight = "86.5";

   var result = age + weight;

   console.log(result);

   ~~~

   
   -Explícita

~~~ javascript
   ./scr/script.js

   //Number()
   var weight = Number("85.6");
   console.log(typeof weight);
    
   //String() 
   var age = String(29);
   console.log(typeof age);

   //Boolean()
   // o zero é sempre falso, quando se refere a boolean. -1 é considerado como verdadeiro.
   var active = Boolean(0);
   console.log(typeof active);

   ~~~

 ## Estruturas de Controle de Fluxo

 ### Estruturas Condicionais

 ### Truthy and Falsy

  - **Truthy**: tudo que nao for **falsy**

  - **Falsy**: "", 0, false, undefined, null, NaN.

 #### IF

 ~~~ javascript
    ./scr/script.js

    var age = 65;

    if (age > 60) {
           console.log(" Aposentado.");
     } else if (age > 30) {
          console.log("CLT.");
     } else{
          console.log("Colleger.");
     }


~~~

#### Operador Ternário

 ~~~ javascript
    ./scr/script.js

    var age = 16;

    age >= 18 ? console.log("Adult") : console.log("Minor");

~~~

#### Curto-Circuito lógico

 ~~~ javascript
    ./scr/script.js

    var licensed = false;

    !licensed && console.log("Precisa tirar a carta de habilitação");

~~~

#### Switch case

 ~~~ javascript
    ./scr/script.js

    switch (light) {
     case "red":
          console.log("Stop!");
          break;
     case "yellow":
          console.log("Attention");
          break;
     case "green":
          console.log("Go!");
          break;
     default:
          console.log("Invalid color.");               

    }


~~~

#### Estruturas de Repetição

 ~~~ javascript
    ./scr/script.js

    #### FOR 

    for (var n = 0; n <= 5; n++) {
     console.log("Number: " + n);
    }

~~~





