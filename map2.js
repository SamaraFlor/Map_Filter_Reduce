function mapSemThis(array) {
    return array.map(function(item){
        return item * 2;
    } )

}

const numeros =[3, 4, 5, 4];

// array permanece o mesmo
// map para fazer uma operação em todos os elementos do array
console.log(mapSemThis(numeros));
console.log(numeros);


const array = [1, 2, 3, 4, 5];

console.log(array.map((item) => item * 2));

console.log(array);