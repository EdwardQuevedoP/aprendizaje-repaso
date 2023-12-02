# Introducción a la Lógica de Programación

## ¿Qué es la Lógica de Programación?

La lógica de programación es la habilidad crucial que poseemos como desarrolladores para pensar de manera eficiente al crear algoritmos y resolver problemas mediante la escritura de códigos. Es esencial en la creación de sistemas robustos y escalables.

## Conceptos Clave

### 1. Algoritmos

Un algoritmo es como una receta que sigue un conjunto ordenado de instrucciones para resolver un problema específico. Es una secuencia de pasos o reglas definidas que nos guía hacia un resultado deseado.

### 2. Estructuras de Control 

Las estructuras de control, como las decisiones condicionales (if, else) y los bucles (for, while), nos permiten manejar el flujo de ejecución del programa. Son herramientas poderosas para tomar decisiones y repetir tareas de manera eficiente.

### 3. Descomposición de Problemas 

La descomposición de problemas implica dividir un problema complejo en problemas más pequeños y manejables. Cada subproblema se aborda de manera individual, facilitando el desarrollo y la resolución.

### 4. Abstracción 

La abstracción consiste en simplificar un problema centrándonos en los aspectos más importantes y ignorando detalles innecesarios. Es mirar el problema desde una perspectiva de alto nivel.

### 5. Pensamiento Lógico 

El pensamiento lógico implica razonar de manera coherente y seguir una secuencia lógica para diseñar algoritmos y comprender el flujo de ejecución del programa.

## Aplicación Práctica 

Un ejemplo práctico de lógica de programación podría ser la creación de un sistema de manejo de usuarios. Aquí, utilizaríamos algoritmos para registrar nuevos usuarios, estructuras de control para gestionar permisos, descomposición de problemas para abordar distintas funciones del sistema, abstracción para centrarnos en la seguridad y el rendimiento, y pensamiento lógico para garantizar un sistema coherente.

### Ejemplo en JavaScript:

```javascript
// Algoritmo para verificar si un número es par o impar funcional
function verificarParidad(numero) { //creamos una funcion llamada "verificarParidad" con un dato que seria numero
    if (numero % 2 === 0) {         // pregunta = if si numero al vidivir en 2 el residuo es 0 entonces
        return "El número es par."; // retornar = return el texto que es "El número es par." 
    } else {                        // sino = else 
        return "El número es impar.";// retornar = return el texto que es "El número es impar"
    }
}

// Uso del algoritmo
const resultado = verificarParidad(7);
console.log(resultado);
//respuesta = "El nuemro es impar"
```
utilizamos logica porque hacemos un if que pregunta los datos y sabemos que si eso no se cumple pues haga lo otro por eso utlizamos un else = sino el se humano ya tiene estos sentidos que i algo no se cumple que haga otra cosa
### Conclusión
La lógica de programación es una habilidad fundamental para un desarrollador. Al aplicar estos conceptos de manera efectiva, podemos diseñar soluciones con buenas prácticas
