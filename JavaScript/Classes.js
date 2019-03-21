/* 
Classes.js
Created by David Wukelic
3/21/2019

Objective
In this challenge, we practice using JavaScript classes. Check the 
attached tutorial for more details.

Task
Create a Polygon class that has the following properties:

A constructor that takes an array of integer values describing the lengths of the polygon's sides.
A perimeter() method that returns the polygon's perimeter.
Locked code in the editor tests the Polygon constructor and the perimeter method.

Note: The perimeter method must be lowercase and spelled correctly.

Input Format
There is no input for this challenge.

Output Format
The perimeter method must return the polygon's perimeter 
using the side length array passed to the constructor.

Explanation
Consider the following code:

// Create a polygon with side lengths 3, 4, and 5
let triangle = new Polygon([3, 4, 5]);

// Print the perimeter
console.log(triangle.perimeter());
*/

/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

class Polygon {
    constructor(arr) {
        this.arr = arr;
    }
    perimeter() {
        let sum = 0;
        for (let num of this.arr) {
            // console.log(num);
            sum += num;
        }
        return sum;
    }
}