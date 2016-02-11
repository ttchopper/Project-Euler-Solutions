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


//Function
function findLargestPrime(number) {
   var smallestPrime = 2;
   while (smallestPrime != number) {
       if (number % smallestPrime === 0) {
   	       number = number / smallestPrime;
 	     }
       else {
           smallestPrime++;
       }
   }
   return number;
}
