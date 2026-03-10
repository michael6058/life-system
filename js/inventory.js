fetch("data/inventory.json")
.then(r=>r.json())
.then(data=>{

let html="";

data.forEach(i=>{

html+=`
<h3>${i.name}</h3>

位置：${i.location}<br>
數量：${i.quantity}<br>
有效期限：${i.expiry || "無"}

<hr>
`;

});

document.getElementById("items").innerHTML=html;

});
