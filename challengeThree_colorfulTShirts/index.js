// Part 3: Colorful T-Shirts
// Challenge:
// 1. Design a type alias named Product to represent a T-shirt object with properties like name
// (string), price (number), and color (string).
// 2. Include a nested object named inventory within Product. This inventory object 
// should have two properties: 
// o stock (number): Represents the number of T-shirts available.
// o colorOptions (optional array of strings): Lists available colors (if any).
// 3. Inside the inventory object, define a function named changeColor. This function 
// accepts a new color string as an argument. When called, it should: 
// o Update the color property of the Product object.
// o Adjust the price based on the new color (implement your own logic, e.g., 
// increase by 10% for red, decrease by 5% for blue).
// Now, creating an object using the type alias I've defined
let T_Shirt = {
    name: "Kelvin",
    price_In_Dollars: 500,
    color: "Blue",
    inventory: {
        stock: 80,
        colorOptions: ["red", "blue"],
        changeColor: (newColor) => {
            let inSensitive = newColor.toLowerCase(); // Converting the value came in argument to lowerCase to avoid case sensitivity
            T_Shirt.color = inSensitive;
            // LOGIC to increase price upto 10% if the Color given as parameter is "RED"
            if (inSensitive === "red") {
                T_Shirt.price_In_Dollars += (10 / 100) * T_Shirt.price_In_Dollars;
                console.log(`The price for this T-Shirt in "${inSensitive}" Color is: ${T_Shirt.price_In_Dollars}`);
            }
            // LOGIC to Decrease price upto 5% if the Color given as parameter is "BLUE"
            else if (inSensitive === "blue") {
                T_Shirt.price_In_Dollars -= (5 / 100) * T_Shirt.price_In_Dollars;
                console.log(`The price for this T-Shirt is ${T_Shirt.price_In_Dollars}`);
            }
        }
    }
};
console.log(`The T-shirt is available in these Colors: ${T_Shirt.inventory.colorOptions}\n`); //To see the color options for T-shirt
T_Shirt.inventory.changeColor("REd"); // Calling changeColor function which is inside the nested obj Inventory, which will change the color of T-shirt and price upon the argument.
console.log(`The color of The T-shirt is: ${T_Shirt.color}\n`); // Now let's see whether or not changeColor changed the color of the T-shirt or not.
console.log(`The T-shirt's stock's quantity is: ${T_Shirt.inventory.stock}\n`); //To see how many T-shirts are available in stock
export {};
