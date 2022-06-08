
const laranja = {
	valor: 2,
};

const maca = {
	valor: 1.5,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.valor;
	}, maca);
}

console.log(mapArray());
