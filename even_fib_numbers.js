/* Recrusvie */
function fibonacci(num) {
    if (num === 1 || num === 0) {
    return 1
    }
    else {
    var i = fibonacci(num - 1) + fibonacci(num - 2);								                  
    }
    return i;
}


/*Using while loop*/
var firstTerm = 0
var secondTerm = 1;
var nextTerm = 0;
var sumOfEvenTerms = 0;

while (nextTerm < 4000000) {
    nextTerm = firstTerm + secondTerm;
    firstTerm = secondTerm;
    secondTerm = nextTerm;
    if (nextTerm % 2 === 0) {
    sumOfEvenTerms += nextTerm;
    }
}
