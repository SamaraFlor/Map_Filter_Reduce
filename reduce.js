function soma(array) {
   return  array.reduce(function(atual, ant){
        console.log((atual));
        console.log((ant));
        return atual + ant;
    }, 21);
    
}

const num = [1,2];

console.log(soma(num));