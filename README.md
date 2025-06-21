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

    // comentário de linha

~~~~

### Comentários de bloco simples

~~~~ JavaScript

    console.log("Hello World!"); // Logando "Hello World!" no console do navegador.
    /* comentário de bloco  simples */

~~~~

### Comentários de bloco com marcadores

~~~~ JavaScript

     /**
     * comentário de bloco com marcações
     * linha 2
     * linha 3
     */

~~~~
