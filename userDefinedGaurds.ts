interface Fruit {
  name: string;
  color: string;
  sweetness: number;
}

interface Vegetable {
  name: string;
  color: string;
  tenderness: number;
}

type Edible = Fruit | Vegetable;

/**
 * A user defined type guard is a function that takes
 * at least one argument, returns a boolean, and has a
 * type predicate return signature. This is a special
 * type signature which says “this value is most
 * certainly this type”.
 */

function isFruit(item: any): item is Fruit {
  return "sweetness" in item;
}

function logFruit(item: Edible) {
  if (isFruit(item)) {
    console.log(`${item.name} is too sweet`);
  } else {
    console.log(`${item.name} is too tender`);
  }
}

let apple: Fruit = { name: "Apple", color: "red", sweetness: 80 };

logFruit(apple);

// assertion functions
/**
 * allow you to throw errors to assert a type condition. TypeScript
 * isn’t sophisticated enough to know whether a function that throws
 * an error asserts any kind of types on your values. We have to add
 * an assertion signature to our assertion function to let TypeScript
 * know that throwing an error proves something about a type.
 */

function isFruit1(item: any): asserts item is Fruit {
  if (!("sweetness" in item)) {
    throw new Error();
  }
}

function isFruit2(condition: any): asserts condition {
  if (!condition) throw new Error();
}

function logFruit1(item: Edible) {
  isFruit1(item);
  console.log(`${item.name} is too sweet`);
}

logFruit1(apple);

function logFruit2(item: Edible) {
  isFruit2("sweetness" in item);
  console.log(`${item.name} is too sweet`);
}

logFruit2(apple);
