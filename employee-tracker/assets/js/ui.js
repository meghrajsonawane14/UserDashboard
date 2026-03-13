if(document.getElementById("employeeTable")){
API.getEmployees().then(data=>{
let table=document.getElementById("employeeTable");
table.innerHTML="<tr><th>ID</th><th>Name</th><th>Role</th><th>Status</th></tr>";
data.forEach(e=>{
table.innerHTML+=`<tr><td>${e.id}</td><td>${e.name}</td><td>${e.role}</td><td>${e.status}</td></tr>`;
});
});
}

if(document.getElementById("attendanceTable")){
API.getAttendance().then(data=>{
let table=document.getElementById("attendanceTable");
table.innerHTML="<tr><th>Name</th><th>Date</th><th>Status</th></tr>";
data.forEach(a=>{
table.innerHTML+=`<tr><td>${a.name}</td><td>${a.date}</td><td>${a.status}</td></tr>`;
});
});
}

if(document.getElementById("reportList")){
API.getReports().then(data=>{
let list=document.getElementById("reportList");
data.forEach(r=>{
list.innerHTML+=`<li>${r.title}</li>`;
});
});
}

