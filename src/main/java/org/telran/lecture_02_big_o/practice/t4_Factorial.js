// Задача: Вычислить факториал заданного числа.

// Алгоритм:
// Создать переменную для хранения результата и инициализировать ее единицей.
//     Умножить результат на все числа от 1 до заданного числа.
//     Вернуть результат.

function factorial(number) {
	let result = 1;
	for (let i = 1; i <= number; i++) {
		result *= i
	}
	return result
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(3))
console.log(factorial(5))

// Оценить сложность алгоритма
