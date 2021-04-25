//task-1.1
// Добавьте к функции параметр с любым именем
// Функция должна возвращать аргумент, переданный ей в качестве параметра
var returnArgument=(value) => {
  return value;
};

var result = returnArgument('hello');
console.log(result);


//task-1.2 & 1.2.1*
//Функция должна возвращать сумму переданных аргументов
//Значение по умолчанию для второго аргумента должно быть равно 100
var returnSum=(a,b = 100) => {
  return a+b;
};

var result=returnSum(10,20);
console.log(result);

//task-1.3
//Функция должна принимать другую функцию и возвращать результат вызова этой функции
function returnFn(fn) {

  var fn=(a = 10) => {
    return a;
  }; 

  return fn();
}

var result=returnFn();
console.log(result);

//task-1.4
// Функция должна принимать число и возвращать новую функцию (F)
// При вызове функции F, переданное ранее число должно быть увеличено на единицу и возвращено из F
function returnCounter(value = 0) {

  return () => ++value;
}


//task-1.5
// Функция должна возвращать все переданные ей аргументы в виде массива
// Количество переданных аргументов заранее неизвестно
function returnArguments() {
  return [...arguments];
}