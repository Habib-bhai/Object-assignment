# Object-assignment
#CHALLENGE NUMBER ONE:
Create a strictly types object that has properties like name (string), department (string), and role (string) and a nested object contact.The role property should be  restricted to "Manager", "Engineer", or  "Intern"
#
#CHALLENGE NUMBER TWO: 
1. Design a type alias named Car to represent a car object.
 2. Include a nested object named engine within Car, containing a property named 
 horsepower (number).
3. Define a function named getHorsepower directly within the Car type alias to retrieve the 
engine's horsepowe

#CHALLENGE NUMBER THREE:
 1. Design a type alias named Product to represent a T-shirt object with properties like name
 (string), price (number), and color (string).
 2. Include a nested object named inventory within Product. This inventory object 
 should have two properties: 
 o stock (number): Represents the number of T-shirts available.
 o colorOptions (optional array of strings): Lists available colors (if any).
 3. Inside the inventory object, define a function named changeColor. This function 
 accepts a new color string as an argument. When called, it should: 
 o Update the color property of the Product object.
 o Adjust the price based on the new color (implement your own logic, e.g., 
 increase by 10% for red, decrease by 5% for blue).
