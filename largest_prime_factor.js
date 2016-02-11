var smallestPrime = 2;
var num = 600851475143;
while (smallestPrime != num) {
    if (num % smallestPrime === 0) {
        num = num / smallestPrime;
    }
    else {
         smallestPrime++;
    }
}
