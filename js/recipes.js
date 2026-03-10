fetch("data/recipes.json")
.then(r=>r.json())
.then(data=>{

let html="";

data.forEach(r=>{

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

});
