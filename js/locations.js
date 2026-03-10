let items=[];

fetch("data/inventory.json")
.then(r=>r.json())
.then(data=>{

items=data;
showLocations(items);

});

function showLocations(list){

let locations={};

list.forEach(item=>{

if(!locations[item.location]){
locations[item.location]=[];
}

locations[item.location].push(item.name);

});

let html="";

for(let loc in locations){

html+=`<h2>${loc}</h2><ul>`;

locations[loc].forEach(name=>{
html+=`<li>${name}</li>`;
});

html+="</ul>";

}

document.getElementById("locations").innerHTML=html;

}

document.getElementById("search").addEventListener("input",function(){

let keyword=this.value.toLowerCase().trim();

if(keyword===""){
document.getElementById("locations").innerHTML="";
return;
}

let filtered=items.filter(i=>
i.location.toLowerCase().includes(keyword)
);

showLocations(filtered);

});
