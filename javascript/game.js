window.onload = function() {
    init();
}

CANVAS_WIDTH = 500;
CANVAS_HEIGHT = 500;
GREEN = "#00A308";
BLUE = "#00FFFF";
COLORS = ["#00A308","#00FFFF","#A400FF","#FFD801","#571B7E","#FFFF00",
"59E817","#008080", "#AFDCEC"]

var balls = [];

for (i = 0; i < COLORS.length; i ++) {
  balls.push(new Ball(Math.floor((Math.random() * CANVAS_WIDTH) + 0),
  Math.floor((Math.random() * CANVAS_HEIGHT) + 0),
  Math.floor((Math.random() * 20) + 5),COLORS[i],
  Math.floor((Math.random() * 10) + 1),
  Math.floor((Math.random() * 10) + 1)));
}

var ctx;

function init() {
  var canvasDiv = document.getElementById('canvasDiv');
  ctx = document.createElement('canvas');
  ctx.setAttribute('width', CANVAS_WIDTH);
  ctx.setAttribute('height', CANVAS_HEIGHT);
  ctx.setAttribute('id', 'canvas');
  ctx.style.border = "thick solid white";
  ctx.style.borderRadius = "25px";
  canvasDiv.appendChild(ctx);
  if(typeof G_vmlCanvasManager != 'undefined') {
    ctx = G_vmlCanvasManager.initElement(ctx);
  }
  ctx = canvas.getContext("2d");

   return setInterval(draw, 10);
 }

function draw() {
    clear();

    for(i = 0; i < balls.length; i++)
    {
      ball = balls[i];
      ball.draw();
      ball.move();
    }

    balls.pairs(function(pair){
      collision(pair[0], pair[1]);
    });
}


function collision(ball1, ball2) {
   var disx = ball1.xpos - ball2.xpos;
   var disy = ball1.ypos - ball2.ypos;
   var dist = Math.sqrt(disx * disx + disy * disy);
   if (dist < ball1.radius + ball2.radius) {
     var newB2dx = ball1.dx;
     var newB2dy = ball1.dy;
     var newB1dx = ball2.dx;
     var newB1dy = ball2.dy;

     ball1.dx = newB1dx;
     ball1.dy = newB1dy;

     ball2.dx = newB2dx;
     ball2.dy = newB2dy;

     ball1.x = ball1.x + newB1dx
     ball1.y = ball1.y + newB1dy
     ball2.x = ball2.x + newB2dx
     ball2.y = ball2.y + newB2dy
   }
}

Array.prototype.pairs = function (func) {
    var pairs = [];
    for (var i = 0; i < this.length - 1; i++) {
        for (var j = i; j < this.length - 1; j++) {
            func([this[i], this[j+1]]);
        }
    }
}

function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
