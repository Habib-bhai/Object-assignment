// Part 1: Employee Data
// Challenge:
// 1. Design a type alias named Employee to represent an employee object with properties like 
// name (string), department (string), and role (string).
// 2. Include an optional nested object named contact to hold phone and email information (if 
// provided).
// 3. Employ a union type for the role property to restrict it to "Manager", "Engineer", or 
// "Intern".
// 4. Make the skills property an optional array of strings for listing an employee's skills (if 
// any).
//  Using the type Alias "Employee" to give type annotation to its respective object.
let employee_details = {
    name: "Habib",
    department: "Full Stack dev",
    role: "Engineer",
    contact: {
        phone_number: 1234,
        email: "bro@bro.com"
    },
    skills: ["TS", "KHANA PEENA", "Problem Solving", "Ethics", "Baten karna", "Node.js", "Html and Css"]
};
// Now First printing the whole object to Console at once.
console.log(employee_details);
// Now access Name,department & role which are properties that hold single value
console.log(employee_details.name);
console.log(employee_details.department);
console.log(employee_details.role);
// Now access/printing "contact" which is an optional property which means you give it or not doesn't matter & it is also a nested object(object within object)
console.log(employee_details.contact);
//At last let's print "skills" which is another optional property and is an array inside an object.
console.log(employee_details.skills);
export {};
// POINT TO BE NOTED: You can give anything as a properties value i.e. func, nested obj, arrays etc.
