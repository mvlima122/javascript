
// comentário de linha

console.log("Hello World!"); // Logando "Hello World!" no console do navegador.

/* comentário de bloco  simples */

/**
 * comentário de bloco com marcações
 * linha 2
 * linha 3
 */

var age;

// sinal de = significa que a minha variável irá receber um valor
age = 29;

var age = 29;

console.log(age)

age = 30;

console.log(age)

var age;
var Age;
var _age;
var $age;

// denominações de variáveis compostas

var myName; // camel case

var MyName; //pascal case

var my_name; //snake case



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

var arr = [
[1, 2, 3]
["Vitória", "Airton", "Alexandre"]
[true, false]
];

console.log(arr[1][1])

var arr = [
    [1, 2, 3],
    [
        ["Alex", "Marcos"],
        [29, 40]
    ],
    [true, false]
]

console.log(arr [1][1][1])


var weight = Number("85.6");

var age = String(29);

// o zero é sempre falso, quando se refere a boolean. -1 é considerado como verdadeiro.
var active = Boolean(0);

/** OPERADORES
 * Aritméticos
 * Atribuição
 * Relacional
 * Lógico
 */

//Operadores aritméticos

var num1 = 10;
var num2 = 2;

//adiction
var sum = num1 + num2;

//Subtraction
var sub = num1 - num2;

//Multiplication
var multi = num1 * num2;

//division
var div = num1 / num2;

// módulo
var mod = num1 % num2;

// incremento, são dois sinais de mais, pois apenas 1 indicaria a soma. Reatribuição de valor.
 num1++;

 //decremento
 num1--;

 // Operadores de atribuição

 // atribuição simples
 var age = 29;

 // atribuição de adição
 var balance = 10;
 balance += 5;

 // atribuição de subtração
 var balance = 10;
 balance -=5;

 // Operadores relacionais. Dois iguais, há a comparação só do valor. Três iguais, indica comparação estrita.
 var ageAlex = 29;

 var ageMarcos = 40;

 console.log(ageAlex == ageMarcos);

 // != inidica que o sinal de diferente.
 console.log(ageAlex != ageMarcos);
 console.log(ageAlex > ageMarcos);
 console.log(ageAlex < ageMarcos);




