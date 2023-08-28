"use strict";
// - Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
//  - Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
//  - Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
//  - Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
//  - Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
//  - Write a program that uses a function to find the largest element in an array of numbers.
//Develop a program that calculates and prints the sum of the first n even numbers using a for loop.
var n = 100;
var sum = 0;
for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        sum += i;
    }
}
console.log(sum);
//Implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
// var array:number[] = [2,4,5,6,7,8,9,12,35,68,45,78,33,45,66,];
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2==0){
//     console.log(array[i]);
// }}
//Implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones
// var array:number[] = [2,4,5,6,7,8,9,12,35,68,45,78,33,45,66,];
// for (let i = 0; i < array.length; i++) {
//     if(array[i]%2!=0){
//     console.log(array[i]);
// }}
//Write a program that defines a function to calculate the area of a circle. The function should take the radius as input and return the calculated area.
// var pi:number = 3.14;
// function area(radius:number) {
//     return pi*radius**2;
// }
// console.log(area(20));
//Develop a program that reads a list of grades and uses the splice method to remove failing grades (below 50) from the array.
// var grades:number[] = [10,20,30,40,60,70,80,90];
// for (let i = 0; i <= grades.length; i++) {
//     if (grades[i]<=50) {
//         grades.splice(i,1)
//         i--;
//     }}
//     console.log(grades);
//Write a program that uses a function to find the largest element in an array of numbers.
