let fruitName: any = "Banana";
fruitName = 25;

let noOfFruits = 25;

let fruit = {
  name: "Banana",
  color: "yellow",
  sweetness: 0.6,
  isRipen: true,
};

fruit.sweetness;

const fruits = ["Apple", "Orange", "Mango"];

const allFruits = fruits.map((name, idx) => name);

function fruitMapper(name: string, idx: number) {
  return name;
}

const newFruits = fruits.map(fruitMapper);

let person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Shihab",
  age: 24,
  hobbies: ["Coding", "Sleeping", "Eating"],
};

let username!: string;

console.log(username);

function quantifyFruits(fruitList: string[]) {
  let stockInfo: string;
  if (fruitList.length > 5) {
    stockInfo = "Enough stock available";
  } else {
    stockInfo = "Only a few left";
  }
  return stockInfo;
}

quantifyFruits(fruits);

const nullValue: null = null;

async function getFruitList() {
  const response = await fetch("...");
  const fruitList: string[] = await response.json();
  return fruitList;
}

function headOrTails(): boolean {
  return Math.random() > 0.5;
}

// while passing a callback
function mapNumbersToNumbers(list: number[], cb: (item: number) => number) {
  return list.map(cb);
}

const doubledNumbers = mapNumbersToNumbers([1, 2, 3, 4], (num) => num * 2);

function logMessage(message: string, yell?: boolean) {
  if (yell) {
    message.toUpperCase();
  }
  console.log(message);
}

logMessage("Hello world");

function logMessages(...messages: string[]) {
  messages.map((message) => logMessage(message));
}

const unknownString: unknown = "What am I?";

// you can't perform, operations on the variable
// even after passing a value
// console.log(unknownString.toUpperCase());

// you can re-assign a unknown type into a
// definite typed variable
// let stringValue: string = unknownString;

// in this case we need to use Type Narrowing
if (typeof unknownString === "string") {
  console.log(unknownString.toUpperCase());
  let stringValue: string = unknownString;
}

const anonymousString: any = "Shihab";
console.log(anonymousString.toUpperCase());
let stringValue: string = anonymousString;

// INTERFACE
interface Car {
  name: string;
  wheels: number;
  turbo: boolean;
  power?: number;
}

const benz: Car = {
  name: "Benz",
  wheels: 4,
  turbo: true,
};

const maruti: Car = {
  name: "maruti",
  wheels: 4,
  turbo: true,
  power: 800,
};

const carCollection: Car[] = [];
carCollection.push(benz);
carCollection.push(benz);

const totalPower = carCollection.reduce((acc, current: Car) => {
  // type narrowing for optional properties
  if (current.power) {
    return acc + current.power;
  }
  return acc;
}, 0);

interface Edible {
  name: string;
  color: string;
}

/**
 * now Fruit will have
 * all the properties of
 * Edible
 */
interface Fruit extends Edible {
  sweetness: number;
}

const mango: Fruit = {
  name: "Mango",
  color: "yellow",
  sweetness: 20,
};

interface Vehicle {
  name: string;
  wheels: number;
}

interface Vehicle {
  fuel: string;
  power: string;
}

/**
 * now Vehicle will have all
 * the fields merged
 */

const i10: Vehicle = {
  name: "i10",
  wheels: 4,
  fuel: "petrol",
  power: "110BHP",
};

interface Person {
  name: string;
  gender: string;
}

const shihab = {
  name: "Shihab",
  gender: "male",
  age: 26, // missing on interface
  profession: "coders", // missing on interface
};

let persons: Person[] = [];

persons.push(shihab);

// but there is a gotcha with Object
// if try to push it directly with throw error, and the variable
// should only have properties defined on interface
// persons.push({ name: "Shihab", gender: "male", age: 26, profession: "coders" }); // ERROR
persons.push({ name: "Shihab", gender: "male" });

interface Product {
  name: string;
  funding: string;
}

let max: Product;

const max1 = {
  name: "Seque",
  funding: "$112",
  origin: "India",
};

// when assigning a variable it will
// only check for variable present in the interface
// it will still us have more properties
// on the variable which are not
// present in the interface
max = max1;

/**
 * INDEXABLE TYPE
 * it let us define properties that are
 * added to a collection dynamically
 * on the runtime. It dynamic properties
 * should always follow the format of
 * the indexable type. After adding indexable
 * types we can't have optional properties
 */
interface Employee {
  name: string;
  dept: string;
  // indexable type
  [info: string]: string; // info is just a random name to represent all the properties
}

const shihabudheen: Employee = { name: "Shihab", dept: "Web" };

// now we can add properties which
// has string keys and string values
shihabudheen.address = "UK, Brothers";
shihabudheen.country = "IN";
// shihabudheen.salary = 100; // ERROR

/**
 * INDEXABLE TYPES
 * for array like objects
 */
interface Fruits {
  name: string;
  sweetness: number;
  [nutrients: number]: number;
}

const apple: Fruits = { name: "Apple", sweetness: 10 };
apple[1] = 10;
apple[2] = 9;
apple[3] = 4;

// ------- ENUMS ------------
enum Colors {
  red,
  green,
  blue,
}

function colorize(color: Colors) {
  if (color === Colors.red) return "😍";
  if (color === Colors.green) return "😇";
  if (color === Colors.blue) return "🥳";
}

colorize(Colors.red);
// colorize('red'); // ERROR:

// ---- TUPLES -----

const seasons: string[] = ["spring", "autumn", "summer"];

let state: number;
function useState(initialState: number): [number, (newState: number) => void] {
  if (!state) {
    state = initialState;
  }
  function updateState(newState: number) {
    state = newState;
  }
  return [state, updateState];
}

// TS assumes the array elements to be of mixed types
// using Tuples you can specify the type of element at each index
// for instance over here even if we are explicit about what
// we return TS had failed to understand the type w/o
// return tuple definition
const [score, setScore] = useState(0);

function callMembers(): void {
  fetch("...");
}

const fetcher = callMembers();

function hoc(cb: () => void) {
  return cb();
}

function trigger(): never {
  throw new Error("Never try this");
}

function looper(): never {
  while (true) {}
}

const looperOuter = looper();

// TYPE ALIASES
// They are named types
// If you find yourself defining a type definition repeatedly or want to give a meaningful name to a type definition, we use alias
// any value compatible with alias's type will be compatible with alias
// in contrast with interface, type doesn't support extensions
// aliases support self referencing recursive types

type Coordinate3D = [number, number, number];

function findTheDistance(point1: Coordinate3D, point2: Coordinate3D): number {
  // calculation
  return 2;
}

type Tree = {
  value: number;
  left?: Tree;
  right?: Tree;
};

const tree: Tree = {
  value: 3,
  left: {
    value: 5,
    left: {
      value: 1,
    },
    right: {
      value: 7,
    },
  },
  right: {
    value: 10,
  },
};

interface Computer {
  brand: string;
  cpu: string;
  ram: string;
}

type Computers = Computer[];

const mac: Computer = {
  brand: "Apple",
  cpu: "Bionic 1",
  ram: "1TB",
};

const computerList: Computers = [];

computerList.push(mac);

// Union Types
interface CoordinateObj {
  x: number;
  y: number;
}

type CoordinateArr = [number, number];

type CoordinatePoint = CoordinateObj | CoordinateArr;

function calculateDistance(point1: CoordinatePoint, point2: CoordinatePoint) {
  const { x: x1, y: y1 } = extractXY(point1);
  const { x: x2, y: y2 } = extractXY(point2);
  return Math.sqrt((x2 - x1) ^ (2 + (y2 - y1)) ^ 2);
}

function extractXY(point: CoordinatePoint): CoordinateObj {
  if (Array.isArray(point)) {
    return { x: point[0], y: point[1] };
  }
  return point;
}

interface HR {
  name: string;
  dept: string;
}

interface Engg {
  name: string;
  vertical: string;
}

type OfficeEmployee = HR | Engg;

function printInfo(emp: OfficeEmployee) {
  console.log("Name", emp.name);
  if ("vertical" in emp) {
    console.log("Dept", emp.vertical);
  }
  if ("dept" in emp) {
    console.log("Dept", emp.dept);
  }
}

// Intersection Types
/**
 * they combine types
 * more applicable to interfaces or object like shapes
 * combining primitive types will result in never
 * while combining interfaces, shapes with same names but different types can result in never, so we have to careful.
 */

interface Table {
  height: number;
  seating: number;
}

interface Chair {
  height: number;
  legs: number;
}

type Furniture = Table & Chair;

// interface Furniture {
//   height: number;
//   seating: number;
//   legs: number;
// }

// ------ Literal Type
// Literal types represent exact values ​​of JavaScript primitives

type literalString = "literalString";
let armour: literalString;
// armour = "armour"; // ERROR: Type '"armour"' is not assignable to type '"literalString"'

const waffer = "Waffer";
// waffer = "Susine"; // ERROR: Cannot assign to 'waffer' because it is a constant.

type Courses = "Engineering" | "Medicine" | "Pharma" | "Dental" | "Arts";

function myCourse(course: Courses) {
  /**
   * now you don't need to access the courses
   * via Courses as for Enums
   */
  if (course === "Engineering") {
    console.log("You are screwed");
  }
  console.log("Make a life bro");
}

// you can pass text as argument
myCourse("Engineering");

// using non union types throw error
// myCourse('Martial Arts') // ERROR: Argument of type '"Martial Arts"' is not assignable to parameter of type 'Courses'

