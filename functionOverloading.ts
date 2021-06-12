// function overloading
// at times function can take multiple arguments of different lengths and types
// for simple function we had annotate the argument types using unions and primitives
// but for complex function that takes a lot of arguments this may not be the case
function stringOrArrayLength(input: string): number;
function stringOrArrayLength(input: unknown[]): number;
// implementation signature:
// it should match the overload signature
function stringOrArrayLength(input:any):number {
  return input.length;
}

console.log(stringOrArrayLength("shihab"));
console.log(stringOrArrayLength(["1", "3", "0"]));
// console.log(stringOrArrayLength({ length: 4 })); // ERROR
