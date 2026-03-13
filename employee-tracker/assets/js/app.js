API.getEmployees().then(data=>{
document.getElementById("empCount").innerText=data.length;
let active=data.filter(e=>e.status==="Active").length;
let leave=data.filter(e=>e.status==="Leave").length;
document.getElementById("activeCount").innerText=active;
document.getElementById("leaveCount").innerText=leave;
});

