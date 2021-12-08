// (Project Mixed Messages)
// This project takes random numbers from users from 1-9 and provides random health tips

let motivationalFeed = (numbers, tips) => {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tips = [
    "Carry a water bottle with you and refill it throughout the day.",
    "Freeze some freezer safe water bottles.",
    "Choose water over sugary drinks.",
    "Opt for water when eating out.",
    "Serve water during meals.",
    "Add a wedge of lime or lemon to your water.",
    "Make sure your kids are getting enough water too.",
  ];
  // Creating randomization of numbers and tips
  // let randomNumber = Math.floor(Math.random() * numbers.length);
  let randomNumber = Math.floor(Math.random(numbers));
};
// let randomNumber = Math.random(numbers);
//   let randomTips = Math.floor(Math.random() * tips.length);
//   let randomTips = Math.floor(Math.random(tips));
for (let i = 0; i < tips.length; i++) {
  let results = [];
  let tip = tips[i];
  if (tip === 1) {
    results.push(
      `Daily Water Tip Number: ${randomNumber}. ${tips[0]}. Always remember water is life.`
    );
  }
  if (tip === 2) {
    results.push(
      `Daily Water Tip Number: ${randomNumber}. ${tips[1]}. Always remember water is life.`
    );
  }
  if (tip === 3) {
    results.push(
      `Daily Water Tip Number: ${randomNumber}. ${tips[2]}. Always remember water is life.`
    );
  }
  if (tip === 4) {
    results.push(
      `Daily Water Tip Number: ${randomNumber}. ${tips[3]}. Always remember water is life.`
    );
  }
  if (tip === 5) {
    results.push(
      `Daily Water Tip Number: ${randomNumber}. ${tips[4]}. Always remember water is life.`
    );
  }
  if (tip === 0) {
    results.push(
      `Daily Water Tip Number: ${randomNumber}. ${tips[5]}. Always remember water is life.`
    );
  }
  if (tip === 6) {
    results.push(
      `Daily Water Tip Number: ${randomNumber}. ${tips[6]}. Always remember water is life.`
    );
  }
  return results;
}
//   return results;

//   results.push(
//     `Daily Water Tip Number: ${randomNumber}. ${randomTips}. Always remember water is life.`
//   );
//
//   return results;

// return results;
console.log(motivationalFeed(numbers, tips));
