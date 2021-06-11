/**
 * TS provide us type operators to work on types
 * basically transforming and extracting them
 */

// 1.type indexed access
/**
 * grab type of an item from an interface
 */
interface Fruit {
  name: string;
  color: string;
  nutrition: { name: string; value: number }[];
}

type NutritionDetails = Fruit["nutrition"][0];
// type NutritionDetails = {
//   name: string;
//   value: number;
// };

// alternatively
type NutritionDetails1 = Fruit["nutrition"][number];

// 2. typeof
// used to get type during compile time

let rectangle1 = { width: 100, height: 20 };

let rectangle2: typeof rectangle1;
// let rectangle2: {
//   width: number;
//   height: number;
// };

// 3. keyof
// keyof operator give us a type which represents all of the property names
// in reality, it’s a union type of string literals, one for each property name.
interface Rectangle {
  width: number;
  height: number;
}

type RectangleProperties = keyof Rectangle;

const propertyName: RectangleProperties = "height";

let rectangle3: Rectangle = { width: 200, height: 10 };
console.log(rectangle3[propertyName]);

let rectangle4 = { width: 10, height: 30 };

type RectangleProperties1 = keyof typeof rectangle4;
// type RectangleProperties1 = "width" | "height"

// 4. const assertion
// handy to create literal types with less code

let person1 = { name: "Shihab", country: "India" } as const;
// let person1: {
//   readonly name: "Shihab";
//   readonly country: "India";
// };

let product = { name: "soap" as const, price: 10 };
// let product: {
//   name: "soap";
//   price: number;
// };

let bat = "MRF" as const;

let tire: typeof bat = "MRF";

const SEASONS = {
  winter: "winter",
  spring: "spring",
  summer: "summer",
  fall: "fall",
} as const;

function logSeason(season: keyof typeof SEASONS) {
  if (season === SEASONS.winter) return "❄️";
  if (season === SEASONS.spring) return "✨";
  if (season === SEASONS.summer) return "😎";
  if (season === SEASONS.fall) return "🍂";
}

logSeason(SEASONS.fall);

const checkedItems = ["pen", 10, (x: number) => x * 2] as const;
// const checkedItems: readonly ["pen", 10, (x: number) => number]

let message = "Hello";

const banned = [message, "phone"] as const;
// const banned: readonly [string, "phone"]
