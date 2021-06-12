/**
 * at times you have to work with unknown types
 * but during the run time you have handle them gracefully and
 * perform type specific actions. For this we do run-time checks
 * on the values and it is called "type guards"
 */

function sayNameAloud(name: unknown) {
  if (typeof name === "string") {
    console.log(`Hi ${name.toUpperCase()}!!`);
  } else {
    throw new Error("Unknown type");
  }
}

sayNameAloud("shihab");
sayNameAloud({}); // ERROR

function calculateScore(score: number | string) {
  switch (typeof score) {
    case "string":
      return +score * 2.6;
      break;
    case "number":
      return score * 2.6;
      break;

    default:
      throw new Error("Wrong type supplied");
      break;
  }
}

console.log(calculateScore("10"));
console.log(calculateScore(10));
// console.log(calculateScore({})); // ERROR

// ARRAY
function numberList(input: unknown) {
  if (Array.isArray(input)) {
    const list1: number[] = input.map((item) => {
      const numberItem = parseInt(item);
      if (isNaN(numberItem)) return 0;
      return numberItem;
    });

    const list2: number[] = input.filter((item) => {
      return typeof item === "number";
    });

    let loopedList: number[] = [];
    for (let item of input) {
      if (typeof item == "number") {
        loopedList.push(item);
      }
    }
  }
}

numberList([10, "2", 11, "Shihab"]);

// class

class Fruit {
  constructor(public name: string) {}
  eat() {
    console.log(`Hi ${this.name} !!!`);
  }
}

const apple = new Fruit("Apple");

function printFruit(fruit: unknown) {
  if (fruit instanceof Fruit) {
    fruit.eat();
  }
}
printFruit(apple);

// object

interface Person {
  name: string;
  age: number;
}
/**
 * The `in` operator only works to narrow union types, 
 * so we can’t use it with `unknown`. Instead, we’ll 
 * have to use another special type that comes with 
 * TypeScript: `object`. This type represents anything 
 * that isn’t a `string` , `number` , `boolean` , or one of 
 * the other primitive types. Using `object` instead of 
 * `unknown` will tell TypeScript to let us attempt to access 
 * properties on this value. We can create a Union of the 
 * generic object type and an Interface with the property 
 * that we want to access.
 * 
 * Be sure to ensure the key/property wanted to be used is available on the object
 */
// incase of Object we have to use `object` instead of unknown
function personalInfo(person: object | Person) {
  if ("name" in person) {
    console.log(`Hello ${person.name}!!`);
  }
}

const shihab: Person = {
  name: "Shihab",
  age: 25,
};

personalInfo(shihab);
