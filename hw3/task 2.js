let sum = 0;
const cart = [100, 200, 500];

function countBasketPrice(cart) {
	cart.forEach(item => sum += item);
	return sum;
}

countBasketPrice(cart);

console.log(sum);
