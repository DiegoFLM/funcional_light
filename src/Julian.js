const { cons, first, rest, isEmpty, isList } = require('functional-light');

/*console.log(cons('1', [])); // ['1']
console.log(cons('2', cons('1', []))); // ['2', '1']
console.log(isList(cons('1', []))); // TRUE
console.log(isList({ length: false })); // false
console.log(isEmpty(cons('1', []))); // false
console.log(isEmpty([])); // true
console.log(isEmpty(9)); // false
console.log(rest(cons(1, cons(2, [])))); // [2]
console.log(rest([])); // []
console.log(cons(1, [2, 3])); // []*/

const foo = cons(484, []);
/*console.log(cons('XX', foo));
console.log(foo); // Debe imprimir [484]*/

const lista1 = [9, 5, 7, 6, 1, 5];

console.log("cons(2, lista1): " + cons(2, lista1));
console.log("first(lista1): " + first(lista1));
console.log("rest(lista1): " + rest(lista1));
console.log("isEmpty(lista1): " + isEmpty(lista1));
console.log("isList(lista1): " + isList([lista1]));

function longitud(list) {
    if (isEmpty (list)) 
return 0;
    return 1 + longitud( rest(list));
}


function max(x, y) {
    if(x > y) 
        return x;
     else 
        return y;    
}

function min(x, y) {
    if(x > y) 
        return y;
     else 
        return x;    
}

function maxima(list) {
    if(isEmpty(list))
        return 0;
        else if(longitud(list) == 1)
            return first(list);
            else
                
}
console.log(max(5, 8));
console.log(min(5, 8));






