const canvas=document.getElementById("chart");
if(canvas){
const ctx=canvas.getContext("2d");
ctx.fillStyle="blue";ctx.fillRect(20,50,50,100);
ctx.fillStyle="green";ctx.fillRect(100,70,50,80);
ctx.fillStyle="orange";ctx.fillRect(180,30,50,120);
}

