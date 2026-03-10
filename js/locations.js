fetch("data/inventory.json")
.then(r=>r.json())
.then(data=>{

let locations={};

data.forEach(item=>{

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

});
