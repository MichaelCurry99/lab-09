// 1. Exercise 1
// Create an array.
// Add four names to the array.
// Print the array one entry at a time.
// Exercise 2
// Create an array with 5 numbers in it.
// Print the numbers one entry at a time.
// Exercise 3
// Create an array with 4 names.
// Print the third item in the array.
// Delete the second item.
// Print the third item in the array again.
// Exercise 4
// Create the array [5,3,7, 4]. Pass the array to a new function to do the following:

// Print the array. Print the 3rd element of the numberList. Delete the second element. Print the 3rd index element.
let array = ["Timmy","Jimmy","Jack","Jill"];{
    console.log(array);
}

let array2 = ["6","8","4","9","7"];{
    console.log(array2);
}

let array3 = ["Mike", "Kacey","Will","Fred"]




// 2. Constructors -

// Create a constructor of Dog. Make sure it has the attributes name, breed, color, gender. There are no methods in this class. The main function below should work with the class you create.
// Start here
// function Dog(name, breed, color, gender) {
//     this.name = first;
//     this.breedName = last;
//     this.color = color;
//     this.gender = gender;
//   }

//   Dog();

 //  Create a ToDo constructor. Create the attributes: name, dueDate, list (this should be an array). There should not be a method in this class. The main function below should work with the class you create.

//   function main(){
// 	newToDoList = new ToDo("Kenn", "Next Week", ["Do the dishes", "Wash your clothes"])
//     this.name = 'Kenn';
//     this.dueDate = 'Next Week',
//     this.list = 'Wash your clothes',
    
// 	print(newToDoList.list)
// }

// main();




// 3. Object literals -

// Create a list of People using Object Literal notation.
// Each 'person' object in the 'people' collection should have the following information: First Name Last Name Age Zip Code
// Add the following 4 People to your list:
// Jimmy Page, 62, 00821

// Rick Nielsen, 57, 61016

// Joe Walsh, 58, 90001

// Lemmy Kilmister, 57, 21120
// Use javascript to create and populate an array of People objects
// Print each person in the console using a template literal Example Output:
// Name: Jimmy Page
// Age: 62
// Zip Code: 00821
// Challenge: (See included screenshot for an example of the expected output)

// Start with the included challenge.html file, and fill in the parts as indicated by *** ENTER YOUR CODE HERE ***
// Use javascript to create and populate the list of People objects, then create an HTML table that displays the People in the list.


// 1.Question 1

// naming object literals

let person1 = {
    name: 'Jimmy Page',
    age: 62,
    zipcode:00-821
}

let person2 = {
    name: 'Rick Nielsen',
    age: 57,
    zipcode:61016
}
let person3 = {
    name: 'Joe Walsh',
    age: 58,
    zipcode:90001
}

let person4 = {
    name: 'Lenny Kilmester',
    age: 57,
    zipcode: 21120
}(
    console.log(person1,person2,person3,person4)
)



// please add comments



// 4. Table
// Create a channel guide similar to what's shown in example4.png.

// Use Table Headers for each column
// Specify a default border
// When the User mouses over a TV show name cell, change the color of the table cell to a color of your choosing.
// Example 4
// Create a portfolio for places to visit using the images in the ImagesForExample3 directory that resembles the table in example_destinations.png.

// Add 3 columens to the table: The picture of location, name of the location, rating (up to 5 stars)
// Use Table Headers for each column
