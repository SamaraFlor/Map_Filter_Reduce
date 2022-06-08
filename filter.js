function filtrar(array) {
    return array.filter(callback);
}


// outra forma de fazer callback 
function callback(item) {
    return item % 2 === 0;
}

const numer = [2,4,5,5,6,4,7];

console.log(filtrar(numer))



function filtraPares(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0);

	return filteredArr;
}

console.log(filtraPares([1, 2, 3, 4]));