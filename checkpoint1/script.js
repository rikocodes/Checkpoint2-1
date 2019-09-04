const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge=(pet)=> {
return new Date().getFullYear() - pet.bornOn;
}
const petsWithAge = [];
pets.forEach ((pet,i)=>  {
pet = pets[i];
pet.age = getAge(pet);

petsWithAge.push(pet);

});
console.log(petsWithAge);

const dogs = [];
pets.forEach ((pet,i)=>  {
pet = pets[i];
if (pet.type === "dog") {
  dogs.push(pet);
}
});
console.log(dogs);

let jasper;
pets.forEach ((pet,i)=>  { 
 pet = pets[i];
if (pet.name === "Jasper") {
  jasper = pet;
}
});
console.log(`Jasper is  ${jasper.age}  years old`);