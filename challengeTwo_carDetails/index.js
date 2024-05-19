// Part 2: Car Details
// Challenge:
// 1. Design a type alias named Car to represent a car object.
// 2. Include a nested object named engine within Car, containing a property named 
// horsepower (number).
// 3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
// engine's horsepower
// Creating an object using the type alias we've just created which is going to dictate us what exact should come inside the object..
let car_Details_obj = {
    engine: {
        horsepower: 100
    },
    getHorsepower: () => {
        return car_Details_obj.engine.horsepower;
    }
};
// now accessing the function we've created inside the "car_Details_ojb" object as per defined inside our type Alias
console.log(car_Details_obj.getHorsepower());
export {};
