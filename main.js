var mouseevent="empty";
var last_position_of_x, last_position_of_y;
canvas=document.getElementById("myCanvas");
color="red";
width_of_line=1;
ctx=canvas.getContext("2d");
canvas.addEventListener("mouseDown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value; console.log(color);
    width_of_line=document.getElementById("width_line").value;
    mouseevent="mouseDown";
}
    canvas.addEventListener("mouseUp", my_mouseup);
    function my_mouseup(e){
        mouseevent="mouseUp";

    }
    canvas.addEventListener("mouseLeave", my_mouseleave);
    function my_mouseleave(e){
        mouseevent="mouseLeave";
        }
        canvas.addEventListener("mouseMove", my_mousemove);
    function my_mousemove(e){
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mouseevent=="mouseDown") {
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    console.log("last_position_of_x_and_y_coordinates= ");
console.log("x= "+last_position_of_x+"y= "+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);
console.log("current_position_of_x_and_y_coordinates= ");
console.log("x= "+current_position_of_mouse_x+"y= "+current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
ctx.stroke();
            }
            last_position_of_x=current_position_of_mouse_x;
            last_position_of_y=current_position_of_mouse_y;
            }
       function clearArea() { ctx.clearRect(0, 0, canvas.width, canvas.height); }