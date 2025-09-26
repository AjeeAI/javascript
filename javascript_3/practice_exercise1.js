// **Task:** Array Basics - Shopping List  

// **Requirements:**  
// 1. Create an array `shoppingList` with at least 5 items  
// 2. Add a new item to the end of the list  
// 3. Remove the first item from the list  
// 4. Display the total number of items  
// 5. Loop through the list and print each item with its position  

// **Challenge:**  
// Create a function `formatList(list)` that returns the shopping list in a numbered format (1. Item, 2. Item, ...).

let shoppingList = ["Bread", "Sardine", "Yam", "Milk", "Seasoning cubes"];
console.log(shoppingList);
shoppingList.push("Salt");
console.log("After adding salt:", shoppingList);
shoppingList.shift();
console.log("After deleting the first item:", shoppingList);

console.log("The total items in the shopping list as of now is:", shoppingList.length);

for (i = 0; i < shoppingList.length; i++){
    console.log(`Item${i + 1}. ${shoppingList[i]}`)
}

// Challenge

function formatList(list){
    for (i = 0; i< list.length; i++){
        console.log(`${i + 1}. ${shoppingList[i]}`)
    }
}

formatList(shoppingList);