let items=[];

fetch("data/inventory.json")
.then(r=>r.json())
.then(data=>{

items=data;
showItems(items);

});

function showItems(list){

let html="";

list.forEach(i=>{

html+=`
<h3>${i.name}</h3>

位置：${i.location}<br>
數量：${i.quantity}<br>
有效期限：${i.expiry || "無"}

<hr>
`;

});

document.getElementById("items").innerHTML=html;

}

document.getElementById("search").addEventListener("input",function(){

let keyword=this.value.toLowerCase();

let filtered=items.filter(i=>
i.name.toLowerCase().includes(keyword)
);

showItems(filtered);

});
