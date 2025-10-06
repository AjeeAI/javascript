function deliverOrder(order){
    return new Promise(function(resolve, reject){
       setTimeout(()=> {
        // let success = Math.random
         if (Math.random() > 0.5){
            resolve("Delivered:" + order);
        } else {
            reject("Delivered failed:" + order);
        }
       }, 1000)
    })
}

deliverOrder("Pastries")
.then(function(item){
    console.log(item);
})
.catch(function(item){
    console.log(item);
})

// async function submitOrder(){
//     try {
//         console.log("Placing order ...");
//         let result = await deliverOrder("Pastries");
//         console.log(result);
//     } catch(error){
//         console.log("Error:", error);
//     }
// }

// submitOrder();

