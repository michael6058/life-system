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

let keyword=this.value.toLowerCase().trim();

if(keyword===""){
document.getElementById("results").innerHTML="";
return;
}

let html="";

recipes.forEach(r=>{

if(r.name.toLowerCase().includes(keyword)){

html+=`
<h3>料理：${r.name}</h3>

<b>食材</b>
<ul>
${r.ingredients.map(i=>`<li>${i}</li>`).join("")}
</ul>

<b>步驟</b>
<ol>
${r.steps.map(s=>`<li>${s}</li>`).join("")}
</ol>

<hr>
`;

}

});

items.forEach(i=>{

if(i.name.toLowerCase().includes(keyword)){

html+=`
<h3>物品：${i.name}</h3>

位置：${i.location}<br>
數量：${i.quantity}

<hr>
`;

}

});

document.getElementById("results").innerHTML=html;

});

let keyword=this.value.toLowerCase();

let html="";

recipes.forEach(r=>{

if(r.name.toLowerCase().includes(keyword)){

html+=`
<h3>料理：${r.name}</h3>

<b>食材</b>
<ul>
${r.ingredients.map(i=>`<li>${i}</li>`).join("")}
</ul>

<b>步驟</b>
<ol>
${r.steps.map(s=>`<li>${s}</li>`).join("")}
</ol>

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
