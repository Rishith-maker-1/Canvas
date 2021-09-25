canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");
color = "Black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",My_MouseDown);
function My_MouseDown(e) {
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("X = "+ mouse_x + " ,Y = "+mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);
    ctx.stroke();
}
function ClearArea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}