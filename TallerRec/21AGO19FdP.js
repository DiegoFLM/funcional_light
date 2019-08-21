const { cons, first, rest, isEmpty, append} = require('functional-light');

const lista0 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const lista1 = [5, 9, 7, 8, 2, 8, 1];
const lista2 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

console.log("lista0: ", lista0);
console.log("lista1: ", lista1);
console.log("lista2: ", lista2);

function length (list){
    if (isEmpty(list))
        return 0;
    else
        return 1 + length(rest(list));

}

function time() {

    var today = new Date();
    return today.getTime();

}

function itG(list, pivote) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        if (first(list) > pivote) {
            return cons(first(list), itG(rest(list), pivote));
        } else {
            return itG(rest(list), pivote);
        }
    }
}




//console.log(itG(lista1, 0));

function itSOE(list, pivote) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        if (first(list) <= pivote) {
            return cons(first(list), itSOE(rest(list), pivote));
        } else {
            return itSOE(rest(list), pivote);
        }
    }
}


//console.log("itSOE(lista1, 7): ", itSOE(lista1, 7));

function quicksort(list) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        return append(quicksort(itSOE(rest(list), first(list))),
            append([first(list)], quicksort(itG(rest(list), first(list)))));
    }
}

/*console.log("quicksort(lista1): ", quicksort(lista1));
console.log("quicksort([1,1,1]): ", quicksort([1,1,1]));
console.log("quicksort([1,2,3,4,5,7,8,9,9,0,2,2,3,4,5,6,7,8,9,9,0,1]): ", quicksort([1,2,3,4,5,7,8,9,9,0,2,2,3,4,5,6,7,8,9,9,0,1]));
*/

/*
    Organizar elementos en orden descendente.
 */
function sortRecursionStructural(list) {

    if (isEmpty(list)) {
        return [];
    }
    else {
        return insert(first(list), sortRecursionStructural(rest(list)));
    }
}

/*console.log("sortRecursionStructural(lista1): ", sortRecursionStructural(lista1));
console.log("sortRecursionStructural([1,4,2,3])", sortRecursionStructural([1,4,2,3])); */


let dd = ((new Array(10000))).fill(2).map(x => { return Math.round(Math.random() * 1000) });

//console.log(quicksort(dd));
//console.log(length(quicksort(dd)));

/*
Recibir un elemento -n- y una lista -list- e insertar n en la lista delante 
del primer elemento mayor o igual a n 
*/
function insert(n, list) {
    if (isEmpty(list)) {
        return cons(n, []);
    }
    else {
        if (n >= first(list)) {
            return cons(n, list);
        }
        else {
            return cons(first(list), insert(n, rest(list)));
        }
    }
}




var initio = time();
//console.log(sortRecursionStructural([1,4,2,3]));
//let dd = ((new Array(100))).fill(2).map(x => {return Math.round(Math.random()* 100)});
//console.log(quicksort([1,2,3,4,5,7,8,9,9,0,2,2,3,4,5,6,7,8,9,9,0,1]));
//console.log(quicksort());
//console.log(quicksort([1,2,3,4,5,10,9,8,5,4,3,2]));
console.log("Tiempo [ms]:", time()-initio);



//Encontrar un MCD entre m y n por medio de recursión estructural.
function mcdStructural (n,m){
    let mejordivisor=function (i){
        if(i==1){return 1;}
        else {
            if((n%i)==0 && (m%i)==0){
                return i;
            }
        return mejordivisor(i-1);
        }
    }
        return mejordivisor(Math.min(n,m));
}

//console.log("mcdStructural(10005, 10015): ", mcdStructural(12005, 12015));

/*Para console.log(mcdStructural(100005, 100015)); el programa deja de funcionar. 
Para console.log(mcdStructural(50005, 50015)); el programa deja de funcionar. 
Para console.log(mcdStructural(25005, 25015)); el programa deja de funcionar. 
Para console.log(mcdStructural(15005, 15015)); el programa deja de funcionar. 
Para console.log(mcdStructural(13005, 13015)); el programa deja de funcionar. 
Para console.log(mcdStructural(12005, 12015)); o para valores más pequeños, el programa funciona. 


Para console.log(mcdStructural(101135853, 45014640)); el programa evidentemente no funciona.
*/





function mcdGenerative(n, m) {
    let mejorMCD = function (menor, mayor) {
        if (menor == 0) { return mayor; }
        else { return mejorMCD( mayor % menor, menor); }
    }
        return mejorMCD ((Math.min(m, n)),(Math.max(m, n))); //Si organizamos los números de esta manera, 
                                                             //el algoritmo es más eficiente.
        //return mejorMCD (n, m); //De esta forma el algoritmo es menos eficiente
}

//console.log("mcdGenerative(100000000000354886, 7000000015): ", mcdGenerative(100000000000354886, 7000000015));
//console.log("mcdGenerative(101135853,45014640): ", mcdGenerative(101135853,45014640));

//Para console.log("mcdStructural(101135853,45014640): ", mcdStructural(101135853,45014640)); el programa no funciona.




//4. La siguiente función implementa el concepto de acumulador, explique el servicio que presta la siguiente función

/* La función relativaAbsolutaCumulative (list, n) lo que hace es que devuelve una lista del mismo tamaño que list, 
    que en el primer elemento muestra la suma del primer elemento de list y n, y en cada elemento siguiente muestra la suma de 
    los elementos anteriores (sumados al elemento correspondiente). 
 */

function relativaAbsolutaCumulative(list, n) {
    if (isEmpty(list)) {
        return [];
    }
    else {
        return cons((first(list) + n), relativaAbsolutaCumulative(rest(list),
                    (first(list) + n)));
    }
}

//console.log(relativaAbsolutaCumulative(lista0, 0));


/*a. Implemente la suma de una lista de números utilizando el concepto de
acumulador, tome como base el siguiente código, complete los parámetros:
 */

function sumaCumulative(list) {
    let sumaAux=function (list1){
        if(isEmpty(list1)){return 0;}
        else {return first(list1) + sumaAux(rest(list1), first(list1) );}
        }
        return sumaAux(list);
}
/*
 console.log("sumaCumulative(lista0): ", sumaCumulative(lista0));
 console.log("sumaCumulative(lista1): ", sumaCumulative(lista1));
 console.log("sumaCumulative(lista2): ", sumaCumulative(lista2)); 
 console.log("sumaCumulative(dd): ", sumaCumulative(dd));*/


//b. Desarrolle un código recursivo para la suma de una lista

function recSum (list) {
    if (isEmpty(list)){
        return 0;
    }
    return first(list) + recSum(rest(list));
}
/*
console.log("recSum(lista0): ", recSum(lista0));
console.log("recSum(lista1): ", recSum(lista1));
console.log("recSum(lista2): ", recSum(lista2)); */
//console.log("recSum(dd): ", recSum(dd));

// c. ejecute la suma de una lista suficientemente grande y compare los resultados para la función acumulativa y recursiva

/*Para let dd = ((new Array(10000))).fill(2).map(x => { return Math.round(Math.random() * 1000) });
Pasa que con sumaCumulative el programa no funciona, pero con recSum sí.
*/


