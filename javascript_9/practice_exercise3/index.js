let orders = ["Coffee", "Cake", "Juice"];

async function processOrder() {
  for (let item of orders) {
    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(`✅ ${item} ready`);
        resolve();
      }, 2000);
    });
  }
  return "All orders processed";
}

async function Ordered() {
  try {
    console.log("Processing orders...");
    let result = await processOrder();
    console.log(result);
  } catch {
    console.log("Error occurred while processing orders");
  }
}

Ordered();
















// let orders = ["Coffee", "Cake", "Juice"];

// async function processOrder(){

//     return new Promise(function (resolve){
//         setInterval(()=>
//         {
//             for (let item of orders){
//                 setTimeout(()=> {
//                     resolve(console.log(`${item} ready`))
//                 }, 2000)
//             }
//         }, 2000)
//     })

    
    
    
// }

// async function Ordered(){
//     try{
//         let order = await processOrder();
//         console.log(order);
//         } catch{
//             console.log("Error occured while processing order");
//          }
// }
        
// Ordered();


