import { Professional } from "./professional";

let elijah = new Professional(
  "Elijah Wood",
  41,
  64,
  1.68,
  false,
  "American",
  0,
  "actor"
);

let peter = new Professional(
  "Peter Robert Jackson",
  61,
  85,
  1.64,
  false,
  "New Zealander",
  0,
  "director"
);

console.log("\n--- :: Professionals :: ---\n")
elijah.printAll();
peter.printAll();

export { elijah, peter };
