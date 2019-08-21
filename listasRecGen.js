const { cons, first, rest, isEmpty, append} = require('functional-light');

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


const lista1 = [5, 9, 7, 8, 2, 8, 1];
console.log("lista1: ", lista1);
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

console.log("quicksort(lista1): ", quicksort(lista1));



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

console.log("sortRecursionStructural(lista1): ", sortRecursionStructural(lista1));


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