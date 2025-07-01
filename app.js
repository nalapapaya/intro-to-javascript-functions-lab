const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
};

console.log("Exercise 1 Result:", maxOfTwoNumbers(3, 9));

const isAdult = (age) => {
  if (age >= 18) {
    return "Adult";
  } else {
    return "Minor";
  }
};

console.log("Exercise 2 Result:", isAdult(21));

const isCharAVowel = (charType) => {
  switch (charType) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
      return true;
      break;
    default:
      return false;
  }
};
console.log("Exercise 3 Result:", isCharAVowel("a"));

const generateEmail = (x, y) => {
  return `${x}@${y}`;
};
console.log("Exercise 4 Result:", generateEmail("johnsmith", "example.com"));

const greetUser = (name, timeOfDay) => {
  const thisTime = new Date().toISOString().split("T")[1];
  const hour = parseInt(thisTime);
  if (hour <= 12) {
    timeOfDay = "morning";
  } else if (hour <= 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  return `Good ${timeOfDay}, ${name}!`;
};
console.log("Exercise 5 Result:", greetUser("Sam", "morning"));

const maxOfThree = (x, y, z) => {
  return Math.max(x, y, z);
};
console.log("Exercise 6 Result:", maxOfThree(5, 10, 8));

const calculateTip = (x, y) => {
  const tax = Math.round((x * y) / 100);
  return tax;
};
console.log("Exercise 7 Result:", calculateTip(50, 20));

const convertTemperature = (x, y) => {
  if (y === "C") {
    return `${x} ('Celsius')`;
  } else if (y === "F") {
    const CELSIUS_TO_FAHRENHEIT = 32;
    const convertCelsius = x * 32;
    return `${convertCelsius} (Fahrenheit)`;
  }
};
console.log("Exercise 8 Result:", convertTemperature(32, "C"));

const basicCalculator = (x, y, z) => {
  if (z === "add") {
    return x + y;
  } else if (z === "subtract") {
    return x - y;
  } else if (z === "multiply") {
    return x * y;
  } else if (z === "divide") {
    return x / y;
  }
};
console.log(basicCalculator(10, 5, "divide"));
