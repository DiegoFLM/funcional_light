const { cons, first, rest, isEmpty, isList } = require('functional-light');

console.log(cons('1', [])); // ['1']
console.log(cons('2', cons('1', []))); // ['2', '1']
console.log(isList(cons('1', []))); // TRUE
console.log(isList({ length: false })); // false
console.log(isEmpty(cons('1', []))); // false
console.log(isEmpty([])); // true
console.log(isEmpty(9)); // false
console.log(rest(cons(1, cons(2, [])))); // [2]
console.log(rest([])); // []
console.log(cons(1, [2, 3])); // []

const foo = cons(484, []);
console.log(cons('XX', foo));
console.log(foo); // Debe imprimir [484]




const lista = [5, 9, 3, 4];

/*longitud: array -> number
Propósito: Recibe una lista y devuelve la cantidad de elementos que tiene (su longitud). 
function longitud (list){Cuerpo de la función}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]");
console.log("1.longitud(lista): " + longitud(lista)); // 4
console.log("2.longitud([]): " + longitud([])); // 0
console.log("3.longitud([8, 2]): " + longitud([8, 2])); // 2
console.log("4.longitud([2, 5, 3]): " + longitud([2, 5, 3])); // 3
console.log("5.longitud([4]): " + longitud([4])); // 1
console.log("6.longitud([2, 5, 3, 8]): " + longitud([2, 5, 3, 8])); // 4
console.log("7.longitud([2, 0, 6, 7]): " + longitud([2, 0, 6, 7])); //4*/

function longitud(list) {
    if (isEmpty(list)) {
        return 0;
    }

    return 1 + longitud(rest(list));
}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]");
console.log("1.longitud(lista): " + longitud(lista)); // 4
console.log("2.longitud([]): " + longitud([])); // 0
console.log("3.longitud([8, 2]): " + longitud([8, 2])); // 2
console.log("4.longitud([2, 5, 3]): " + longitud([2, 5, 3])); // 3
console.log("5.longitud([4]): " + longitud([4])); // 1
console.log("6.longitud([2, 5, 3, 8]): " + longitud([2, 5, 3, 8])); // 4
console.log("7.longitud([2, 0, 6, 7]): " + longitud([2, 0, 6, 7])); //4*/


/*1. Encuentre el mayor valor de una lista de números 
greatest: array -> number
Propósito: Encontrar el mayor valor de la lista
function greatest (list){Cuerpo de la función}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]");
console.log("1.greatest(lista): " + greatest(lista)); // 9
console.log("2.greatest([]): " + greatest([])); // []
console.log("3.greatest([8, 2]): " + greatest([8, 2])); // 8
console.log("4.greatest([2, 5, 3]): " + greatest([2, 5, 3])); // 5
console.log("5.greatest([4]): )" + greatest([4])); // 4
console.log("6.greatest([2, 5, 3, 8]): " + greatest([2, 5, 3, 8])); // 8
console.log("7.greatest([2, 0, 6, 7]): " + greatest([2, 0, 6, 7])); // 7

*/

function greatest(list) {
    if (isEmpty(list)){
        return list;
    }else if (longitud(list) == 1) {
        return first(list);
    }else

    return Math.max(first(list), greatest(rest(list)));
}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]");
console.log("1.greatest(lista): " + greatest(lista)); // 9
console.log("2.greatest([]): " + greatest([])); // []
console.log("3.greatest([8, 2]): " + greatest([8, 2])); // 8
console.log("4.greatest([2, 5, 3]): " + greatest([2, 5, 3])); // 5
console.log("5.greatest([4]): )" + greatest([4])); // 4
console.log("6.greatest([2, 5, 3, 8]): " + greatest([2, 5, 3, 8])); // 8
console.log("7.greatest([2, 0, 6, 7]): " + greatest([2, 0, 6, 7])); // 7



/*2. Encuentre el promedio de los valores de la lista*/


/*
suma: array -> number
Propósito: Obtener la suma de todos los números de una lista.
function suma(list){Cuerpo de la función}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]");
console.log("1.suma(lista): " + suma(lista)); // 21
console.log("2.suma([]): " + suma([])); // 0
console.log("3.suma([8, 2]): " + suma([8, 2])); // 10
console.log("4.suma([2, 5, 3]): " + suma([2, 5, 3])); // 10
console.log("5.suma([4]): " + suma([4])); // 4
console.log("6.suma([2, 5, 3, 8]): " + suma([2, 5, 3, 8])); // 18
console.log("7.suma([2, 0, 6, 7]): " + suma([2, 0, 6, 7])); // 15

*/

function suma(list) {
    if (longitud(list) == 0){
        return 0;
    }else if (longitud(list) == 1) {
        return first(list);
    }
    return first(list) + suma(rest(list));
}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]");
console.log("1.suma(lista): " + suma(lista)); // 21
console.log("2.suma([]): " + suma([])); // 0
console.log("3.suma([8, 2]): " + suma([8, 2])); // 10
console.log("4.suma([2, 5, 3]): " + suma([2, 5, 3])); // 10
console.log("5.suma([4]): " + suma([4])); // 4
console.log("6.suma([2, 5, 3, 8]): " + suma([2, 5, 3, 8])); // 18
console.log("7.suma([2, 0, 6, 7]): " + suma([2, 0, 6, 7])); // 15



/*promedio: array -> number
Propósito: Devolver el promedio de los valores de una lista ingresada en la función.
 function promedio(list) {Cuerpo de la función} 
 
 //lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]");
console.log("1.promedio(lista): " + promedio(lista)); // 5.25
console.log("2.promedio([]): " + promedio([])); // NaN
console.log("3.promedio([8, 2]): " + promedio([8, 2])); // 5
console.log("4.promedio([2, 5, 3]): " + promedio([2, 5, 3])); // 3.3
console.log("5.promedio([4]): " + promedio([4])); // 4
console.log("6.promedio([2, 5, 3, 8]): " + promedio([2, 5, 3, 8])); // 4.5 
console.log("7.promedio([2, 0, 6, 7]): " + promedio([2, 0, 6, 7])); //3.75

 */

function promedio(list) {

    return (suma(list)) / longitud(list);
}

 //lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]");
 console.log("1.promedio(lista): " + promedio(lista)); // 5.25
 console.log("2.promedio([]): " + promedio([])); // NaN
 console.log("3.promedio([8, 2]): " + promedio([8, 2])); // 5
 console.log("4.promedio([2, 5, 3]): " + promedio([2, 5, 3])); // 3.3
 console.log("5.promedio([4]): " + promedio([4])); // 4
 console.log("6.promedio([2, 5, 3, 8]): " + promedio([2, 5, 3, 8])); // 4.5 
 console.log("7.promedio([2, 0, 6, 7]): " + promedio([2, 0, 6, 7])); //3.75


/* 3. Invierta el orden de una lista  */

/*last: array -> number
Propósito: last recibe una lista y retorna el último elemento
function last(list) {Cuerpo de la función}
 //lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]"); 
 console.log("1.last(lista): " + last(lista)); // 4
 console.log("2.last([]): " + last([])); // undefined
 console.log("3.last([8, 2]): " + last([8, 2])); // 2
 console.log("4.last([2, 5, 3]): " + last([2, 5, 3])); // 3
 console.log("5.last([4]): " + last([4])); // 4
 console.log("6.last([2, 5, 3, 8]): " + last([2, 5, 3, 8])); // 8
 console.log("7.last([2, 0, 6, 7]): " + last([2, 0, 6, 7])); //7
 
 */

 
function last(list) {
   
    return list[longitud(list) - 1];
}

 //lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]"); 
 console.log("1.last(lista): " + last(lista)); // 4
 console.log("2.last([]): " + last([])); // undefined
 console.log("3.last([8, 2]): " + last([8, 2])); // 2
 console.log("4.last([2, 5, 3]): " + last([2, 5, 3])); // 3
 console.log("5.last([4]): " + last([4])); // 4
 console.log("6.last([2, 5, 3, 8]): " + last([2, 5, 3, 8])); // 8
 console.log("7.last([2, 0, 6, 7]): " + last([2, 0, 6, 7])); //7

 /*primeros: array -> array
 Propósito: Crear una función que tras recibir una lista devuelva una nueva lista 
 que contenga a todos los elementos de la primera, exceptuando el último. 
 function primeros(list) { Cuerpo de la función}

 //lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]"); 
 console.log("1.primeros(lista): " + primeros(lista)); // [5, 9, 3]
 console.log("2.primeros([]): " + primeros([])); // undefined
 console.log("3.primeros([8, 2]): " + primeros([8, 2])); // [8]
 console.log("4.primeros([2, 5, 3]): " + primeros([2, 5, 3])); // [2, 5]
 console.log("5.primeros([4]): " + primeros([4])); // []
 console.log("6.primeros([2, 5, 3, 8]): " + primeros([2, 5, 3, 8])); // [2, 5, 3]
 console.log("7.primeros([2, 0, 6, 7]): " + primeros([2, 0, 6, 7])); // [2, 0, 6]
 */
function primeros(list) {
    if (longitud(list) == 0){
        return undefined;
    } else if (longitud(list) == 1) {
        return [];
    } else {

        return cons(first(list), primeros(rest(list)));
    }
}

 //lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]"); 
 console.log("1.primeros(lista): " + primeros(lista)); // [5, 9, 3]
 console.log("2.primeros([]): " + primeros([])); // undefined
 console.log("3.primeros([8, 2]): " + primeros([8, 2])); // [8]
 console.log("4.primeros([2, 5, 3]): " + primeros([2, 5, 3])); // [2, 5]
 console.log("5.primeros([4]): " + primeros([4])); // []
 console.log("6.primeros([2, 5, 3, 8]): " + primeros([2, 5, 3, 8])); // [2, 5, 3]
 console.log("7.primeros([2, 0, 6, 7]): " + primeros([2, 0, 6, 7])); // [2, 0, 6]

console.log(primeros(lista));

function invertirS2(list) {      //Sí funciona!! :D
    return [list[1], list[0]];

}

/*invertir: array -> array
Propósito: La función debe recibir una lista y retornar otra con el orden de elementos invertido.
function invertir(list) {Cuerpo de la función}
 
 //lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]"); 
 console.log("1.invertir(lista): " + invertir(lista)); // [4, 3, 9, 5]
 console.log("2.invertir([]): " + invertir([])); // []
 console.log("3.invertir([8, 2]): " + invertir([8, 2])); // [2, 8]
 console.log("4.invertir([2, 5, 3]): " + invertir([2, 5, 3])); // [3, 5, 2]
 console.log("5.invertir([4]): " + invertir([4])); // [4]
 console.log("6.invertir([2, 5, 3, 8]): " + invertir([2, 5, 3, 8])); // [8, 3, 5, 2]
 console.log("7.invertir([2, 0, 6, 7]): " + invertir([2, 0, 6, 7])); // [7, 6, 0, 2]
 */
function invertir(list) {
    if (longitud(list) == 0) {
        return list;
    }
    if (longitud (list) == 1){
        return list;
    }
    if (longitud(list) == 2) {
        return invertirS2(list);
    }
    return cons(last(list), invertir(primeros(list)));
}

 //lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]"); 
 console.log("1.invertir(lista): " + invertir(lista)); // [4, 3, 9, 5]
 console.log("2.invertir([]): " + invertir([])); // []
 console.log("3.invertir([8, 2]): " + invertir([8, 2])); // [2, 8]
 console.log("4.invertir([2, 5, 3]): " + invertir([2, 5, 3])); // [3, 5, 2]
 console.log("5.invertir([4]): " + invertir([4])); // [4]
 console.log("6.invertir([2, 5, 3, 8]): " + invertir([2, 5, 3, 8])); // [8, 3, 5, 2]
 console.log("7.invertir([2, 0, 6, 7]): " + invertir([2, 0, 6, 7])); // [7, 6, 0, 2]

//4. Ordene de manera ascendente una lista

/* quitarGreatest: array -> array
Propósito: La función recibe una lista y devuelve otra lista con todos los elementos excepto el máximo
(Si hay varios elementos con el valor máximo, quita sólo uno y deja los demás).
function quitarGreatest(list) {Cuerpo de la función}

//lista = [5, 9, 3, 4];
 console.log("lista: [" + lista + "]"); 
 console.log("1.quitarGreatest(lista): " + quitarGreatest(lista)); // [5, 3, 4]
 console.log("2.quitarGreatest([]): " + quitarGreatest([])); // undefined
 console.log("3.quitarGreatest([8, 2]): " + quitarGreatest([8, 2])); // [2]
 console.log("4.quitarGreatest([2, 5, 3]): " + quitarGreatest([2, 5, 3])); // [2, 3]
 console.log("5.quitarGreatest([4]): " + quitarGreatest([4])); // []
 console.log("6.quitarGreatest([2, 5, 3, 8]): " + quitarGreatest([2, 5, 3, 8])); // [2, 5, 3]
 console.log("7.quitarGreatest([2, 0, 6, 7]): " + quitarGreatest([2, 0, 6, 7])); // [2, 0, 6]


*/

function quitarGreatest(list) {
    if (longitud(list) == 0){
        return undefined;
    }else if (longitud(list) == 3) {
        if (greatest(list) == list[0]) {
            return rest(list);
        } else if (greatest(list) == list[1]) {
            return [list[0], list[2]];
        } else {
            return primeros(list);
        }

    } else if (first(list) == greatest(list)) {
        return rest(list);
    }

    return cons(first(list), quitarGreatest(rest(list)));
}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]"); 
console.log("1.quitarGreatest(lista): " + quitarGreatest(lista)); // [5, 3, 4]
console.log("2.quitarGreatest([]): " + quitarGreatest([])); // undefined
console.log("3.quitarGreatest([8, 2]): " + quitarGreatest([8, 2])); // [2]
console.log("4.quitarGreatest([2, 5, 3]): " + quitarGreatest([2, 5, 3])); // [2, 3]
console.log("5.quitarGreatest([4]): " + quitarGreatest([4])); // []
console.log("6.quitarGreatest([2, 5, 3, 8]): " + quitarGreatest([2, 5, 3, 8])); // [2, 5, 3]
console.log("7.quitarGreatest([2, 0, 6, 7]): " + quitarGreatest([2, 0, 6, 7])); // [2, 0, 6]



/*OrdDes: array -> array
Propósito: Recibe una lista y ordena sus elementos en orden descendente.
function OrdDes(list) { Cuerpo de la función }

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]"); 
console.log("1.OrdDes(lista): " + OrdDes(lista)); // [9, 5, 4, 3]
console.log("2.OrdDes([]): " + OrdDes([])); // []
console.log("3.OrdDes([8, 2]): " + OrdDes([8, 2])); // [8, 2]
console.log("4.OrdDes([2, 5, 3]): " + OrdDes([2, 5, 3])); // [5, 3, 2]
console.log("5.OrdDes([4]): " + OrdDes([4])); // [4]
console.log("6.OrdDes([2, 5, 3, 8]): " + OrdDes([2, 5, 3, 8])); // [8, 5, 3, 2]
console.log("7.OrdDes([2, 0, 6, 7]): " + OrdDes([2, 0, 6, 7])); // [7, 6, 2, 0]
*/

function OrdDes(list) {
    if (longitud(list) == 0){
        return list;
    }else if (longitud(list) == 1){
        return list;
    }else if (longitud(list) == 2) {
        if (greatest(list) == list[0]) {
            return list;
        } else {
            return invertirS2(list);
        }

    }

    return (cons(greatest(list), OrdDes(quitarGreatest(list))));

}

//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]"); 
console.log("1.OrdDes(lista): " + OrdDes(lista)); // [9, 5, 4, 3]
console.log("2.OrdDes([]): " + OrdDes([])); // []
console.log("3.OrdDes([8, 2]): " + OrdDes([8, 2])); // [8, 2]
console.log("4.OrdDes([2, 5, 3]): " + OrdDes([2, 5, 3])); // [5, 3, 2]
console.log("5.OrdDes([4]): " + OrdDes([4])); // [4]
console.log("6.OrdDes([2, 5, 3, 8]): " + OrdDes([2, 5, 3, 8])); // [8, 5, 3, 2]
console.log("7.OrdDes([2, 0, 6, 7]): " + OrdDes([2, 0, 6, 7])); // [7, 6, 2, 0]


/*ordAsc: array -> array
Propósito: Recibe una lista y ordena sus elementos de menor a mayor
function ordAsc(list) { Cuerpo de la función }
//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]"); 
console.log("1.ordAsc(lista): " + ordAsc(lista)); // [3, 4, 5, 9]
console.log("2.ordAsc([]): " + ordAsc([])); // []
console.log("3.ordAsc([8, 2]): " + ordAsc([8, 2])); // [2, 8]
console.log("4.ordAsc([2, 5, 3]): " + ordAsc([2, 5, 3])); // [2, 3, 5]
console.log("5.ordAsc([4]): " + ordAsc([4])); // [4]
console.log("6.ordAsc([2, 5, 3, 8]): " + ordAsc([2, 5, 3, 8])); // [2, 3, 5, 8]
console.log("7.ordAsc([2, 0, 6, 7]): " + ordAsc([2, 0, 6, 7])); // [0, 2, 6, 7]

*/

function ordAsc(list){
    return invertir(OrdDes(list));
}


//lista = [5, 9, 3, 4];
console.log("lista: [" + lista + "]"); 
console.log("1.ordAsc(lista): " + ordAsc(lista)); // [3, 4, 5, 9]
console.log("2.ordAsc([]): " + ordAsc([])); // []
console.log("3.ordAsc([8, 2]): " + ordAsc([8, 2])); // [2, 8]
console.log("4.ordAsc([2, 5, 3]): " + ordAsc([2, 5, 3])); // [2, 3, 5]
console.log("5.ordAsc([4]): " + ordAsc([4])); // [4]
console.log("6.ordAsc([2, 5, 3, 8]): " + ordAsc([2, 5, 3, 8])); // [2, 3, 5, 8]
console.log("7.ordAsc([2, 0, 6, 7]): " + ordAsc([2, 0, 6, 7])); // [0, 2, 6, 7]


//5. Genere la lista de los primeros n términos de la serie de Fibonacci

/*prePrimFibo: number -> array
Propósito: Generar una lista con los primeros n números de la serie de Fibonacci ordenados de mayor a menor
 function prePrimFibo(n) {Cuerpo de la función} */
function prePrimFibo(n) {
    if (n == 0) {
        return [];
    } else if (n == 1) {
        return [1];
    } else if (n == 2) {
        return [1, 1];
    } else if (n == 3) {
        return [1, 1, 2];
    }

    return cons(((prePrimFibo(n - 1)[n - 2]) + (prePrimFibo(n - 2)[n - 3])), prePrimFibo(n - 1));
}





/*PrimFibo: number -> array
Propósito: Generar una lista con los primeros n números de la serie de Fibonacci, ordenados de menor a mayor.
 function PrimFibo(n) {Cuerpo de la función} */
function primFibo(n) {
    return invertir(prePrimFibo(n));
}



console.log("prePrimFibo(1): " + prePrimFibo(1));
console.log("primFibo(1): " + primFibo(1));

console.log("prePrimFibo(2): " + prePrimFibo(2));
console.log("primFibo(2): " + primFibo(2));

console.log("prePrimFibo(6): " + prePrimFibo(3));
console.log("primFibo(6): " + primFibo(3));

console.log("prePrimFibo(6): " + prePrimFibo(6));
console.log("primFibo(6): " + primFibo(6));



/*6. Dada una lista, eliminar todos los elementos que no sean números*/

function quitarNoNum(list) {
    if (longitud(list) == 0) {
        return [];
    } else if (typeof (first(list)) === 'number') {
        return cons(first(list), quitarNoNum(rest(list)));
    }

    return quitarNoNum(rest(list));
}

const listaVariada = [asd, 2, 4, NaN, 3, [1, 5, 7], [8], 2];
console.log("listaVariada: " + listaVariada);
console.log("quitarNoNum(listaVariada)" + quitarNoNum(listaVariada));





/*7. Implemente una función que inserta un elemento x en la posición n de la lista, si n está entre 0 y el
(longitud lista). No hace nada en caso contrario.*/


/*unirListas: array array -> array
Propósito: Esta función recibe dos listas y las une en una sola lista 
con los elementos de la primera lista a la izquierda
function unirListas(list1, list2){ Cuerpo de la función } */

function unirListas(list1, list2) {
    if (longitud(list1) == 1) {
        return cons(first(list1), list2);
    }

    return cons(first(list1), unirListas(rest(list1), list2));
}



/*PrimerosIndice: number array -> array
Propósito: Esta función recibe un número(índice) y un array, y devuelve un array con los elementos 
que están en las posiciones desde 0 hasta n (es decir, un array con n+1 elementos)
function primerosIndice(n, list){Cuerpo de la función}*/

function primerosIndice(n, list) {
    if (n < 0) {
        return [];
    } else if (longitud(list) == n + 1) {
        return list;
    }

    return primerosIndice(primeros(list));
}


/*ultimosIndice: number array -> array
Propósito: Esta función recibe un número (índice) y una lista, y devuelve la lista de
los elementos desde el índice dado hasta el último elemento de la lista.
 function ultimosIndice(n, list){Cuerpo de la función}*/

const lista2 = [6, 1, 4, 7, 8, 2, 4];
const lista3 = [5, 8, 9];
const lista4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function ultimosIndice(n, list) {
    if (n <= 0) {
        return list;
    } else if (n >= (longitud(list))) {
        return [];
    }

    return invertir(primerosIndice(longitud(list) - n - 1, invertir(list)));
}

console.log("lista2: " + lista2);
console.log("lista3: " + lista3);
console.log("lista4: " + lista4);
console.log("ultimosIndice(2, lista2): " + ultimosIndice(2, lista2));
console.log("ultimosIndice(0, lista3): " + ultimosIndice(0, lista3));
console.log("ultimosIndice(7, lista4): " + ultimosIndice(7, lista4));



/*insertarElem: any array number -> list
Propósito: Una función que recibe como parámetros un elemento, una lista y un número(posición), 
y devuelve una lista con el elemento insertado en la lista en la posición del número(posición) dado.
function insertarElem(elem, list, n){ Cuerpo de la función }  */

function insertarElem(elem, list, n) {
    if (n < 0) {
        return list;
    } else if (n > (longitud(list))) {
        return list;
    }

    return unirListas(primerosIndice(n - 1, list), cons(elem, ultimosIndice(n, list)));
}

console.log("insertarElem(0, list4, 5): " + insertarElem(0, list4, 5));


/*8. Dada una lista ordenada, implementar una función que retorna el índice n de dónde se encuentra
un número x dado, si existe, o -(n + 1 ), donde n es la posición en la cual se debería insertar x para
mantener la lista ordenada.
 */

function indexOf(x, list) {
    if (isEmpty(list)) {
        return 0;
    } else if (x <= first(list)) {
        return 0;
    }

    return 1 + indexOf(rest(x, list));
}


function isIn(x, list) {
    if (isEmpty) {
        return false;
    } else if (x == first(list)) {
        return true;
    }

    return isIn(rest(x, list));
}



/*indiceHip: number array -> number
Propósito: Dada una lista ordenada, implementar una función que retorna el índice n de dónde se encuentra
un número x dado, si existe, o -(n + 1 ), donde n es la posición en la cual se debería insertar x para
mantener la lista ordenada.
function indiceHip(x, listOrd){Cuerpo de la función}*/


function indiceHip(x, listOrd) {
    //if (listOrd[0] < listOrd[longitud(listOrd)-1]){
    if (isIn(x, listOrd)) {
        return indexOf(x, listOrd);
    }

    return -(indexOf(x, listOrd) + 1);

}




/* 9. Implemente una función que inserta datos en una lista que siempre está ordenada.*/

function insertOrd(x, listOrd) {

    return unirListas(primerosIndice(indexOf(x, listOrd) - 1, listOrd),
        cons(x, ultimosIndice(indexOf(x, listOrd), listOrd)));

}


/* 10. Implemente una función que busca un elemento en una lista desordenada.*/

function buscar(x, list) {
    if (isIn(x, list)) {
        return indexOf(x, list);
    }
    return console.log("El elemento no pertenece a la lista.");
}



/* 11. Implemente una función que elimina el elemento n de la lista*/

// n es el índice del elemento en la lista.

function borrarN(n, list) {
    return unirListas(primerosIndice(n - 1, list), ultimosIndice(n + 1, list));
}



/*13.Implemente una función que busca todos los números mayores que un cierto valor x.
La función debe retornar una lista con los elementos encontrados.

*/
/*
function mayoresQueX(x, list) {

    if (isEmpty) {
        return 0;
    }

    return cons(Math.max(x, first(list)), mayoresQueX(x, rest(list)));
}


*/


/*14. Implemente una función que busca todos los elementos de una lista que cumplen una cierta condición.
por ejemplo, los números que sean pares. La función debe retornar una lista con los elementos encontrados

*/
/*
function cualesCumplen(list, cond) {
    if (isEmpty) {
        return [];
    } else if (cond(first(list))) {
        return (cons(first(list), cualesCumplen(rest(list));
    }
    return cualesCumplen(rest(list));
}
*/



/*15. Inplemente una función que aplica una función dada a todos los elementos de una lista (map).
Por ejemplo la función debe ser capaz de elevar todos los elementos de la lista al cuadrado:
map([1, 2, 3, 4], (x) => x * x);

mapeo: array function -> array
Propósito: La función recibe un
*/
/*
function mapeo(list, fx) {

    if (isEmpty) {
        return [];
    }

    return cons(fx(firts(list)), mapeo(rest(list)));
}




//SP:
function suma2(x){
    return x + 2;
}



function mapeoTeacher(list, fx){
    if (isEmpty) {
        return [];
    } else {
        return cons(fx(first), mapeoTeacher(rest(list), fx));
    }
}


mapeoTeacher([1, 2, 3], suma2) {
mapeoTeacher([1, 2, 3], (x) => 2 + x);
}






function mapeo(list,funcionita)
{
    if(list.length==0)
    {
        return
    }
}

*/