function Ball(xpos, ypos, radius, color, dx, dy)
{
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
}

Ball.prototype.draw = function(ctx){
  circle(this.xpos, this.ypos, this.radius, this.color)
}

function circle(x,y,r, color) {
   ctx.fillStyle = color;
   ctx.beginPath();
   ctx.arc(x, y, r, 0, Math.PI*2, true);
   ctx.closePath();
   ctx.fill();
 }

 Ball.prototype.move = function(){
   if (this.xpos + this.dx > CANVAS_WIDTH || this.xpos + this.dx < 0)
   this.dx = -this.dx;
   if (this.ypos + this.dy > CANVAS_HEIGHT || this.ypos + this.dy < 0)
   this.dy = -this.dy;

     this.xpos += this.dx;
     this.ypos += this.dy;
 }
