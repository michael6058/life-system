let recipes=[];

fetch("data/recipes.json")
.then(r=>r.json())
.then(data=>{

recipes=data;
showRecipes(recipes);

});

function showRecipes(list){

let html="";

list.forEach(r=>{

html+=`
<h2>${r.name}</h2>

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

});

document.getElementById("recipes").innerHTML=html;

}

document.getElementById("search").addEventListener("input",function(){

let keyword=this.value.toLowerCase().trim();

if(keyword===""){
document.getElementById("recipes").innerHTML="";
return;
}

let filtered=recipes.filter(r=>
r.name.toLowerCase().includes(keyword) ||
r.ingredients.join("").toLowerCase().includes(keyword)
);

showRecipes(filtered);

});
