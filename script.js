/*
A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. When they view the browser console, they observe a table listing how many of each flavor they have ordered. In this case, they will be able to observe that they have ordered three vanilla, two coffee, and one strawberry froyo.
*/

const input = prompt(
  "Please enter froyo flavors separated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

const flavors = input.split(",");
console.log(flavors);

for (let i = 0; i < flavors.length; i++) {
  console.log(flavors[i]);
}

function totalFlavors(flavors) {
  const count = {};

  for (const item of flavors) {
    if (count[item]) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  }
  return count;
}

const froyoFlavors = totalFlavors(flavors);
console.log(froyoFlavors);
