'use strict';
// let country = "Lithuania";
// const continent = "Europe";
// let population = 2.7;
// console.log(country);
// console.log(continent);
// console.log(population);

// const isIsland = false;
// let language = "lithuanian";
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6);
// console.log(population < 33);
// let description =
//   country +
//   " is in " +
//   continent +
//   " and its " +
//   population +
//   " people speak " +
//   language;
// console.log(description);

// const description = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(description);

// if (population > 33) {
//   console.log(`${country}'s population is above average`);
// } else {
//   console.log(
//     `${country}'s population is ${33 - population} million below average`
//   );
// }

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("Only 1 border");
// } else if (numNeighbours >= 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("No borders");
// }

// if (language === "english" && population < 50 && !isIsland) {
//   console.log(`You should live in ${country} :)`);
// } else {
//   console.log(`${country} does not meet your criteria :(`);
// }

// switch (language) {
//   case "chinese":
//   case "mandarin":
//     console.log("MOST number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers");
//     break;
//   case "english":
//     console.log("3rd place");
//     break;
//   case "hindi":
//     console.log("Number 4");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too :D");
// }

// console.log(
//   `${country}'s population is ${
//     population > 33 ? "above average" : "below average"
//   }`
// );

// EXERCISES PART 2

// function describeCountry(country, population, capitalCity) {
//   const resultCountry = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//   return resultCountry;
// }
// const lithuania = describeCountry("Lithuania", 2.7, "Vilnius");
// console.log(lithuania);
// const germany = describeCountry("Germany", 83.24, "Berlin");
// console.log(germany);
// const spain = describeCountry("Spain", 47.35, "Madrid");
// console.log(spain);

//  Declaration function
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const populationOfChina = percentageOfWorld1(1441);
// const populationOfGermany = percentageOfWorld1(83);
// const populationOfLithuania = percentageOfWorld1(2.7);
// console.log(populationOfChina, populationOfGermany, populationOfLithuania);

// Expression function
// const percentageOfWorld2 = function (population) {
//   return (population / 7900) * 100;
// };
// const populationOfChina = percentageOfWorld2(1441);
// const populationOfGermany = percentageOfWorld2(83);
// const populationOfLithuania = percentageOfWorld2(2.7);
// console.log(populationOfChina, populationOfGermany, populationOfLithuania);

// Arrow function
// const percentageOfWorld3 = (population) => (population / 7900) * 100;
// const populationOfChina = percentageOfWorld3(1441);
// const populationOfGermany = percentageOfWorld3(83);
// const populationOfLithuania = percentageOfWorld3(2.7);
// console.log(populationOfChina, populationOfGermany, populationOfLithuania);

// function calling other function
// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const populationOfChina = percentageOfWorld1(1441);
// const populationOfGermany = percentageOfWorld1(83);
// const populationOfLithuania = percentageOfWorld1(2.7);
// console.log(populationOfChina, populationOfGermany, populationOfLithuania);

// const describePopulation = function (country, population) {
//   const percentage = percentageOfWorld1(population);
//   const description = `${country} has ${population} million people, which is about ${percentage}% of the world. `;
//   console.log(description);
// };
// describePopulation("China", 1441);
// describePopulation("Germany", 83);
// describePopulation("Lithuania", 2.7);

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const populationOfChina = percentageOfWorld1(1441);
// const populationOfGermany = percentageOfWorld1(83);
// const populationOfLithuania = percentageOfWorld1(2.7);
// const populationOfSpain = percentageOfWorld1(47);
// console.log(
//   populationOfChina,
//   populationOfGermany,
//   populationOfLithuania,
//   populationOfSpain
// );

// const populations = [1441, 83, 2.7, 47];
// console.log(populations.length === 4);

// const percentages = [
//   percentageOfWorld1(populations[0]),
//   percentageOfWorld1(populations[1]),
//   percentageOfWorld1(populations[2]),
//   percentageOfWorld1(populations[3]),
// ];
// console.log(percentages);

// const neighbours = ["Belarus", "Latvia", "Russia"];
// neighbours.push("Utopia");
// neighbours.pop();
// if (neighbours.includes("Germany")) {
//   console.log("Yes");
// } else {
//   console.log("Probably not a central European country :D");
// }

// // neighbours[neighbours.indexOf("Russia")] = "Russian Federation"; // Mozno tak mozno kak  nize
// console.log(neighbours.indexOf("Russia"));
// neighbours[2] = "Russian Federation";
// console.log(neighbours);

// const myCountry = {
//   country: "Lithuania",
//   capital: "Vilnius",
//   language: "lithuanian",
//   population: 2.7,
//   neighbours: ["Belarus", "Latvia", "Russia"],
//   describe: function () {
//     console.log(
//       `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
//     );
//   },
//   checkIsIsland: function () {
//     this.isIsland = this.neighbours.length === 0 ? true : false;
//   },
// };
// myCountry.describe();
// myCountry.checkIsIsland();
// console.log(myCountry);

// myCountry.population += 2;
// myCountry["population"] -= 2;
// console.log(
//   `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// for (let voter = 1; voter <= 50; voter++) {
//   console.log(`Voter number ${voter} is currently voting`);
// }

// function percentageOfWorld1(population) {
//   return (population / 7900) * 100;
// }
// const populations = [1441, 83, 2.7, 47];
// const percentage2 = [];
// for (let i = 0; i < populations.length; i++) {
//   const perc = percentageOfWorld1(populations[i]);
//   percentage2.push(perc);
// }
// console.log(percentage2);

// const listOfNeighbours = [
//   ["Canada", "Mexico"],
//   ["Spain"],
//   ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//   for (let y = 0; y < listOfNeighbours[i].length; y++) {
//     console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
//   }
// }

// **********************************************************
// SOLVING THE PROBLEMS
/*
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this : "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// -What is temp amplitude? Answer : difference between highest and lowest temp.
//  -How to compute max and min temperatues?
//  -What's a sensor error? And what to do?

//  2. Breaking up into sub-problems
//  -How to ignore errors?
//  -Find max value in temp array
//  -Find min value in temp array
//  -Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//  max = 3, loop start at first position its 3. Is 3 > than 3, no. If 7 > than  3, yes max = 7. Is 4 > than 7, no. Result max =7 MAximum value in array.

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1. Understanding the problem
//  -With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

//  2. Breaking up into sub-problems
// -Merge two arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
// calcTempAmplitude([3, 7, 4, 1, 8]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/
// *****************************************************
