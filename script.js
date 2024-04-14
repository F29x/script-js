function alwaysHungry(arr) {
    let findFood = false;
    // your code here 
    arr.forEach(element => {
        if(element==="food"){
            console.log("yummy");
            findFood=true;

        }
    });
    if(!findFood){
        console.log("I'm Hungry");
    }
}
   
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i=0; i < arr.length;i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i]);
        }

    }
    // your code here
     return filteredArr;
     
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]


function betterThanAverage(arr) {
    var sum = 0;
    var count = 0;
    for(var i=0;i<arr.length;i++){
        sum +=arr[i]
    }
    var avg = sum/arr.length;
    
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > avg) {
            count += 1;
        }
    }

    // calculate the average
   
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4


function reverse(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
       
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;

        
        start++;
        end--;
    }

    
    // your code here
    return arr;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for( var i=2,; i<n;i++){
        var sum= fibArr[n-2]+fibArr[n-1];
        fibArr.push(sum);
    }
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]



function pizzaOven(crustType,sauceType,cheeses,toppings) {
    var pizza= {};
    pizza.crustType=crustType;
    pizza.sauceType=sauceType;
    pizza.cheeses= cheeses;
    pizza.toppings= toppings;

    console.log("Crust Type:", pizza.crustType);
    console.log("Sauce Type:", pizza.sauceType);
    console.log("Cheeses:", pizza.cheeses);
    console.log("Toppings:", pizza.toppings);

    return pizza;
    
}



User
Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!
ChatGPT
Sure, here's a simple JavaScript function called randomPizza that generates a random pizza:

javascript
Copy code
function randomPizza() {
   
    var crusts = ['Thin Crust', 'Thick Crust', 'Stuffed Crust', 'Gluten-Free Crust'];
    var sauces = ['Tomato Sauce', 'Pesto Sauce', 'Alfredo Sauce'];
    var cheeses = ['Mozzarella', 'Cheddar', 'Parmesan', 'Gouda'];
    var meats = ['Pepperoni', 'Sausage', 'Ham', 'Bacon', 'Chicken'];
    var veggies = ['Mushrooms', 'Onions', 'Bell Peppers', 'Olives', 'Spinach', 'Tomatoes'];

    var randomCrust = crusts[Math.floor(Math.random() * crusts.length)];
    var randomSauce = sauces[Math.floor(Math.random() * sauces.length)];
    var randomCheese = cheeses[Math.floor(Math.random() * cheeses.length)];
    var randomMeat = meats[Math.floor(Math.random() * meats.length)];
    var randomVeggie = veggies[Math.floor(Math.random() * veggies.length)];

    
    var pizza = {
        crust: randomCrust,
        sauce: randomSauce,
        cheese: randomCheese,
        meat: randomMeat,
        veggies: randomVeggie
    };

    return pizza;
}