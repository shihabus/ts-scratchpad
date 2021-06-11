// CLASS

class Fruit {
  /**
   * if `strictPropertyInitialization` is enabled in tsconfig
   * we have to initialize all the properties of the class
   * inside the constructor. If you want to add optional
   * properties they must be handled separate
   */
  constructor(
    name: string,
    sweetness?: number,
    color?: string,
    calories?: number
  ) {
    this.name = name;
    if (sweetness || sweetness === 0) {
      this.sweetness = sweetness;
    }
    if (color) {
      this.color = color;
    }
    if (calories) {
      this.calories = calories;
    }
  }

  name: string;
  sweetness: number = 10; // add default value for optional property
  color!: string; // use non-null assertion operator
  calories?: number; // make it optional

  logFruit() {
    const tasteString = this.sweetness > 50 ? "sweet" : "yummy";
    console.log(`${this.name} is ${tasteString} ${this.color} 🍈`);
  }
}

const appleFruit = new Fruit("Apple", 60, "red");
const fruitsBasket: Fruit[] = [];
fruitsBasket.push(appleFruit);

// Inheritance
class EdibleThing {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
}

class EdibleFruit extends EdibleThing {
  constructor(name: string, color: string) {
    super(name);
    this.color = color;
  }
  color: string;

  logFruit() {
    console.log(`${this.name} is a ${this.color} fruit`);
  }
}

const mangoFruit = new EdibleFruit("🥭", "yellow");
mangoFruit.logFruit();

class Vegetable {
  static cookingTime = 5000;
  static cook(veg: Vegetable) {
    setTimeout(() => {
      console.log(`${veg.name} is cooked`);
    }, Vegetable.cookingTime);
  }
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const pumpkin = new Vegetable("pumpkin");
Vegetable.cook(pumpkin);
// pumpkin.cook(pumpkin); // ERROR

abstract class Computer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract print(): void; // just provide the signature and no-implementation
}

class Mac extends Computer {
  constructor(name: string) {
    super(name);
  }
  print() {
    console.log(`${this.name} is my computer`);
  }
}

const m1 = new Mac("m1");
m1.print();

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  public sayHello() {
    console.log(`Hi ${this.name}`);
  }
}

const shihab = new Person("Shihab");
shihab.sayHello();

shihab.name = "Pazuzu";
shihab.sayHello();

class EdibleThing {
  constructor(protected name: string, private color: string) {}
  printName() {
    console.log(`${this.name} is edible`);
  }
  logColor() {
    console.log(`${this.name} is ${this.color}`);
  }
}

class Fruit extends EdibleThing {
  readonly smell: string = "Sweet";
  constructor(name: string, color: string, public storedSweetness: number) {
    super(name, color);
  }

  logFruitName() {
    console.log(`${this.name} is a fruit`);
  }

  logFruitColor() {
    console.log(`${this.name} is a ${this.color} fruit`); // ERROR: Property 'color' is private and only accessible within class 'EdibleThing'.
  }

  get() {
    return this.storedSweetness;
  }

  set sweetness(sweetnessValue: number) {
    if (sweetnessValue < 0) {
      throw new Error(`Sweetness can't be -ve`);
    }
    if (sweetnessValue > 100) {
      throw new Error(`Sweetness can't be greater than 100`);
    }
    // should use a different variable
    // directly accessing the property will trigger set() in loop
    this.storedSweetness = sweetnessValue;
  }
}

const apple = new Fruit("🍎", "red", 10);

apple.logFruitName();
apple.name = "Banana"; // ERROR: Property 'name' is protected and only accessible within class 'EdibleThing' and its subclasses.
apple.printName();

apple.smell = "Yummy"; // ERROR: Cannot assign to 'smell' because it is a read-only property.
console.log("smell is", apple.smell);

apple.sweetness = 101;

class Employee {
  #empId: string;
  constructor(empId: string) {
    this.#empId = empId;
  }

  get empId() {
    return this.#empId;
  }

  set empId(empId: string) {
    this.#empId = empId;
  }
}

const aisha = new Employee("11091");

aisha.#empId = "99001"; // ERROR: Property '#empId' is not accessible outside class 'Employee' because it has a private identifier.

aisha.empId = "2000";

console.log("EMP ID", aisha.empId);
