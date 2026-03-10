let recipes=[];
let items=[];

Promise.all([
fetch("data/recipes.json").then(r=>r.json()),
fetch("data/inventory.json").then(r=>r.json())
])
.then(data=>{

recipes=data[0];
items=data[1];

showFavorites();
showLowStock();
showLocations();

});

function showFavorites(){

let html="";

recipes
.filter(r=>r.favorite)
.forEach(r=>{
html+=`<div>${r.name}</div>`;
});

document.getElementById("favorites").innerHTML=html;

}

function showLowStock(){

let html="";

items
.filter(i=>i.type==="stock" && i.quantity<=i.min)
.forEach(i=>{
html+=`<div>${i.name} 剩 ${i.quantity}</div>`;
});

document.getElementById("lowstock").innerHTML=html;

}

function showLocations(){

let locations=[...new Set(items.map(i=>i.location))];

let html="";

locations.slice(0,5).forEach(l=>{
html+=`<div>${l}</div>`;
});

document.getElementById("locations").innerHTML=html;

}
