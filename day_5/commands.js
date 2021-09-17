const fs = require('fs');

const add = (item,price)=>{

    let groceryList = []

    try{
        groceryList =  JSON.parse(fs.readFileSync("groceryList.json")); 
    }   
    catch(e){
        // console.log(e);
    }

    let index = groceryList.findIndex((x)=>{
        return x.item === item;
    })

    if(index===-1){
        groceryList.push({item,price});
    }
    else{
        groceryList[index].price += price;
    }

    fs.writeFileSync("groceryList.json",JSON.stringify(groceryList));
}

const remove = (item)=>{
    let groceryList = [];
    try{
        groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
    }
    catch(e){

    }

    const newList = groceryList.filter((x)=>{
        return x.item != item;
    })

    fs.writeFileSync("groceryList.json",JSON.stringify(newList));
}

const print = ()=>{
    let groceryList = [];
    try{
        groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
    }
    catch(e){

    }

    groceryList.forEach((v)=>{
        console.log(v);
    })
}

const priceOf = (item)=>{
    let groceryList = [];
    try{
        groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
    }
    catch(e){

    }

    let index = groceryList.findIndex((x)=>{
        return x.item === item;
    })

    if(index==-1){
        console.log("No such item exists");
    }
    else{
        console.log(`Price of ${item}  = ${groceryList[index].price
        }`);
    }
}


module.exports = {add ,remove,print,priceOf}