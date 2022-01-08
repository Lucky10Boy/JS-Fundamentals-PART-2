// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const kAverage = calcAverage(23, 34, 27);
// const dAverage = calcAverage(85, 54, 41);

// const koalaScore = Math.round(kAverage);
// const dolphScore = Math.round(dAverage);
// console.log(`Koala ${koalaScore}`);
// console.log(`Dolphins ${koalaScore}`);

// const checkWinner = (team1, team2) => {
//   if (team1 >= 2 * team2) {
//     console.log(`Koala team (${team1}) wins 🏆🏆🏆`);
//   } else if (team2 >= 2 * team1) {
//     console.log(`Dolphins team (${team2}) wins 🏆🏆🏆`);
//   } else {
//     console.log("No team wins😔😔😔");
//   }
// };

// checkWinner(koalaScore, dolphScore);

// ADD elements
// const friends = new Array('Michael', 'Tommy', 'John');
// friends.push('J');

// friends.unshift('Michael');

// // Remove elements
// friends.pop(); // last

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Tommy'));

// console.log(friends.includes('Michael'));

// const calcTip = (bill) => {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// const total = bills + tips;

// console.log(total);

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   age: 2042 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
// };

// const interIn = prompt('firstName,lastName,age,job and friends');

// console.log(jonas[interIn]);

// if (jonas[interIn] === undefined) {
//   console.log('sss');
// }

// const MarkBMI = {
//   fullName: 'Mark Miller',
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const JohnBMI = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// MarkBMI.calcBMI();
// JohnBMI.calcBMI();

// if (MarkBMI.bmi > JohnBMI.bmi) {
//   console.log(
//     `Mark's BMI (${Math.round(MarkBMI.bmi)})higher than John's (${Math.round(
//       JohnBMI.bmi
//     )})`
//   );
// } else if (JohnBMI.bmi > MarkBMI.bmi) {
//   console.log(
//     `John's BMI (${Math.round(JohnBMI.bmi)})higher than Mark's (${Math.round(
//       MarkBMI.bmi
//     )})`
//   );
// }

for (let rep = 1; rep <= 10; rep++) {
  console.log(`lift weight repetition ${rep}`);
}
