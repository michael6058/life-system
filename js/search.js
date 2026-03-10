let recipes=[];
let items=[];

Promise.all([
fetch("data/recipes.json").then(r=>r.json()),
fetch("data/inventory.json").then(r=>r.json())
])
.then(data=>{

recipes=data[0];
items=data[1];

});

document.getElementById("search").addEventListener("input",function(){

let keyword=this.value.toLowerCase();

let html="";

recipes.forEach(r=>{

if(r.name.toLowerCase().includes(keyword)){

html+=`
<h3>料理</h3>
${r.name}
<hr>
`;

}

});

items.forEach(i=>{

if(i.name.toLowerCase().includes(keyword)){

html+=`
<h3>物品</h3>
${i.name}<br>
位置：${i.location}<br>
數量：${i.quantity}
<hr>
`;

}

});

document.getElementById("results").innerHTML=html;

});
