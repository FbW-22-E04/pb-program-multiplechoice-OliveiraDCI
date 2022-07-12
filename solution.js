// write your code here

// 1
let color = "green";
switch (color) {
  case "red":
    console.log("Q1: Red's a great color on you.");
    break;
  case "blue":
    console.log("Q1: Blue? Great choice.");
    break;
  case "green":
    console.log("Q1: Ok. Green it is.");
    break;
  case "yellow":
    console.log("Q1: Not what I would have picked, but yellow is fine.");
    break;
  default:
    console.log("Q1: The aim of the game is to pick a color.");
}

// 2
let grade = "A";
switch (grade) {
  case "A":
    console.log("Q2: A - Well done!");
    break;
  case "B":
    console.log("Q2: B - Good on you!");
    break;
  case "C":
    console.log("Q2: C - Good effort");
    break;
  case "D":
    console.log("Q2: D - Try harder next time...");
    break;
  default:
    console.log("Q2: Yikes...");
}

// 3
let fruit = "strawberry";
switch (fruit) {
  case "apple":
    console.log("Q3: An apple a day keeps the doctor away.");
    break;
  case "banana":
    console.log("Q3: Bananas are full of potassium.");
    break;
  case "orange":
    console.log("Q3: Yep, oranges. Great choice.");
    break;
  case "strawberry":
    console.log("Q3: Mmmm...nothing better than strawberries.");
    break;
  default:
    console.log("Q3: PICK A FRUIT");
}

// 4
let percentageComplete = 29;
if (percentageComplete <= 30) {
  console.log("Q4: Still a long way to go");
} else if (percentageComplete > 30 && percentageComplete <= 50) {
  console.log("Q4: Slowly getting there");
} else if (percentageComplete > 50 && percentageComplete <= 80) {
  console.log("Q4: You can do it!");
} else if (percentageComplete > 80 && percentageComplete < 100) {
  console.log("Q4: This is the last push!");
} else if (percentageComplete == 100) {
  console.log("Q4: You're there. Well done!");
}

// Switch case OR if/else statement ?
// Not in every case, but in some cases, using the Switch statement can be a good alternative to writing a complex if/else statement, comparing one value to multiple different options.
