"use strict";
/* 
#### 1. Array Destructuring
* Declare the variables `fruit`, `vegetable`, `food`. Assign the following values to the variables respectively: "banana", "cucumber", "bread", "cakes", "pizza" (assign the "bread", "cakes" and "pizza" to `food`). Use array destructuring assignment to complete this task. */
console.log(`*******01*******`);
const myArr = ["banana", "cucumber", "bread", "cakes", "pizza"];
const [fruit, vegetable, ...food] = myArr;
console.log(`fruit: ${fruit}\nvegetable: ${vegetable}\nfood: ${food}`);

/* 
#### 2.Object Destructuring
* Create an object which contains key pair values of names and the respective halloween costume e.g. `fran: "witch"`.   Assign each key pair value to corresponding variable. Print out the object values.  */
console.log(`*******02*******`);

const person = {
  firstName: "John",
  lastName: "Smith",
  fran: "Witch",
};

const { firstName, lastName, fran } = person;
console.log(firstName, lastName, fran);

/* 
#### 3. Parameters: Object Destructuring 
* Create an object with band/musician details e.g. name of the band/musician, greatest hit, nationality, genre etc. 
* Then, create a function to display all of the band/musician's data. 
* Example
```javascript
`Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
``` */

console.log(`*******03*******`);

const bandMusician = {
  bandFirstName: "Regina",
  bandLastName: "Spektor",
  nationality: "American-Russian ",
  job: "singer/songwriter",
  sings: "indie-pop",
  greatestHit: "Us",
};

const { bandFirstName, bandLastName, nationality, job, sings, greatestHit } =
  bandMusician;

function bandDetails(...values) {
  return `${bandFirstName} ${bandLastName} is an ${nationality}${job} and pianist. The musician sings ${sings} and their greatest hit is ${greatestHit}`;
}

const retVal = bandDetails(
  bandFirstName,
  bandLastName,
  nationality,
  job,
  sings,
  greatestHit
);
console.log(retVal);
