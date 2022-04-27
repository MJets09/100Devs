//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console. 
let myPoke = ['Charmeleon', 'Pidgeotto', 'Clefairy']
console.log(myPoke.reverse())

//Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares 
//of each element in a is strictly greater than the sum of the cubes of each element in b.

function squares(a, b) {

    let aSum = a.reduce((a, b) => a + b ** 2, 0)
    let bSum = b.reduce((a, b) => a + b ** 3, 0)

    if (aSum > bSum) {
        console.log(aSum, bSum)
        return true
    } else {
        console.log(aSum, bSum)
        return false
    }
}

console.log(squares([3, 5], [7, 3]))


//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.Return your answer as a number.

function returnStringSum(x) {

    return x.reduce((acc, c) => acc + Number(c), 0)

}


console.log(returnStringSum([6, 8, 2]))