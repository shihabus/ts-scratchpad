/**
 * by default the document.getElementById() return a normal HTMLElement
 * but here we specifically need a HTMLCanvasElement
 * using assertion we can cast the HTMLElement to HTMLCanvasElement
 * in this way we are overriding the TS type system
 * and trying to convince it that we are well aware about what we are doing
 * but still the TS type checker will try to check is the cast is
 * between types at least of some similarity
 * it will not allow asserting completely distinct types
 */
const canvasElement = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvasElement.getContext("2d");

// let cost = "20" as number; // ERROR

// double assertion
let price = "20" as unknown as number;

// we should only convert to unknown unless we
// don't have a middle ground type. If there is one
// we should be using that

function buttonEventListener(
  event: string,
  listener: any,
  element: HTMLButtonElement
) {
  element.addEventListener(event, listener);
}

const anchor = document.createElement("a");
// buttonEventListener("click", () => console.log("I am clicked"), anchor); // ERROR
buttonEventListener("click", () => console.log("I am clicked"), anchor as HTMLElement as HTMLButtonElement); 
