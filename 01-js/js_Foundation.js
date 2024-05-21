//Write a program to greet a person given their first and last name
var firstFriend = "Keshav";
var firstFriendLastName = "Chaudhary";
var SecondFriend = "Pawan";
var secondFriendLastname = "kumar";

console.log("Konnichiwa " + firstFriend + " " + firstFriendLastName);
console.log("Konnichiwa " + SecondFriend + " " + secondFriendLastname);

//Write a program that greets a person based on their gender

// const gender = prompt("Enter your gender");
// if (gender) {
//   if (gender.toLowerCase() === "male") {
//     console.log("Konnichiwa Mr.");
//   } else if (gender.toLowerCase() === "female") {
//     console.log("Konnichiwa Ms. ");
//   } else {
//     console.log("Konnichiwa ");
//   }
// } else {
//   console.log("No gender entered");
// }

//Write a program that counts from 0-1000 and prints (for loop)
let sum = 0;
for (let i = 0; i <= 1000; i++) {
  sum += i;
}
console.log(sum);

//Complex Primitive

const allUsers = [
  {
    firstName: "pawan",
    gender: "male",
  },
  {
    firstName: "keshav",
    gender: "male",
  },
  {
    firstName: "Naruto",
    gender: "male",
    metadata: {
      age: 20,
    },
  },
  {
    firstName: "Hinata",
    gender: "female",
  },
];

for (let i = 0; i < allUsers.length; i++) {
  if (allUsers[i].gender === "male") {
    console.log(allUsers[i]["firstName"]);
    if (allUsers[i]["metadata"]) {
      console.log(allUsers[i]["metadata"]["age"]);
    }
  }
}

const array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}


//Functions

function sumOfNumbers(a, b)  
{
  return a + b;
}

const value = sumOfNumbers(1,1);
console.log(value);