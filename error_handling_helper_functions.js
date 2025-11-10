// TODO: Create a function that validates user input 
function validateUserInput(input) {
    if (typeof input !== "string") {
        return { valid: false, message: "Input must be a string." };
    }
    if (input.trim() === "") {
        return { valid: false, message: "Input cannot be empty." };
    }
    if (input.length < 3) {
        return { valid: false, message: "Input must be at least 3 characters." };
    }
    return { valid: true, message: "Valid input!" };
}

// TODO: Create a function that demonstrates multiple error types 
function demonstrateErrors(value) {
    try {
        value.toUpperCase(); 

        console.log(nonExistentVariable);

        let num = 1;
        num.toPrecision(500); 
    } 
    catch (error) {
        console.log("Error caught:", error.name, "-", error.message);
    }
}

// TODO: Create a collection of helper functions for string manipulation 
const stringHelpers = {
    toUpper(str) {
        return str.toUpperCase();
    },

    toLower(str) {
        return str.toLowerCase();
    },

    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    reverse(str) {
        return str.split("").reverse().join("");
    }
};

// TODO: Create helper functions for array operations 
const arrayHelpers = {
    getFirst(arr) {
        return arr[0];
    },

    getLast(arr) {
        return arr[arr.length - 1];
    },

    sum(arr) {
        return arr.reduce((total, num) => total + num, 0);
    },

    unique(arr) {
        return [...new Set(arr)];
    }
};

console.log(validateUserInput("Hi"));
console.log(validateUserInput("Hello")); 

demonstrateErrors("test");

console.log(stringHelpers.capitalize("hello"));
console.log(arrayHelpers.sum([1, 2, 3]));