/**
 * TS uses structural shaping, where is compares the shape of Objects
 * to check if two types are compatible. This is also called duck-typing.
 * "if it has a beak like a duck and waddles like a duck, it’s probably a duck".
 * even after removing the type information we can still check for object shapes and it is a good choice
 * In languages like Java and C# they follow nominal typing.
 * With nominal typing, two classes with same shape but different names
 * are treated different
 */
class EdibleFruitClass {
  constructor(public name: string) {}
}

class JackFruit extends EdibleFruitClass {
  type = "JACK FRUIT" as const;
  constructor(name: string) {
    super(name);
  }
}

class MangoFruit extends EdibleFruitClass {
  type = "MANGO" as const;
  constructor(name: string) {
    super(name);
  }
}

/**
 * branding:
 * here JackFruit and MangoFruit class has same structures
 * so we have added a new literal `type` to distinguish them
 * and this is called branding.
 * W/o branding I would have been able to assign a JackFruit
 * instance to a MangoFruit type
 */

const jackFruit = new JackFruit("Jack Fruit");
// const alphonso: JackFruit = new MangoFruit("Alphonso"); // ERROR

/**
 * we can also create branded primitives
 * while assigning we need to use the assertion signature to
 * enforce the branding 
 */
type USD = number & { _sign: "USD" };
type EUR = number & { _sign: "EUR" };

let incomeInUSD: USD = 50 as USD;

function convertToEUR(income: USD): EUR {
  return (income * 1.2) as EUR;
}

let incomeInEUR = convertToEUR(incomeInUSD);
