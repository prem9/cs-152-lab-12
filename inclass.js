function makeListOfAdders(numbers) {
    return numbers.map(function(x) {
      return function(y) {
        return x + y;
      };
    });
  }
a = makeListOfAdders([1,5]);
console.log(a[0](42));
console.log(a[1](42));