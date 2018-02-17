


var ctx;
var canvas;
var w = 1702;
var h = 957;
setUpCanvas();


function setUpCanvas(){
    //accessing the canvas element
    canvas = document.querySelector("#myCanvas");
    console.log(canvas);
    //assignment the wid and hei
    canvas.width = w;
    canvas.height = h;
    //giving the canvas a border
    canvas.style.border = "2px dotted blue"
    //getting the canvas contex
    ctx = canvas.getContext("2d");
    
    drawMountains();
    
    
}
    for (i = 0; i < 30; i++){
  drawTriangle(100 * i,20,50);
}

function drawTriangle(x,y,size){
    //Added transparency to all triangles
    ctx.globalAlpha = 0.3;
     ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x+size, y);
    ctx.lineTo(x+(size/2), y+size);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();
    //set transparency back to 100%
    ctx.globalAlpha = 1;
}


function drawMountains() {
      
      // layer1/Path
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(0, 957);
      ctx.lineTo(1701, 957);
      ctx.lineTo(1701, 0);
      ctx.lineTo(0, 0);
      ctx.lineTo(0, 957);
      ctx.closePath();
      ctx.fillStyle = "rgb(255, 187, 102)";
      ctx.fill();

      //SUN
      ctx.beginPath();
        //Code below refrenced from html5canvas tutorials.com 
        //https://www.html5canvastutorials.com/tutorials/html5-canvas-circles/
      ctx.arc(w/2,h/2,200,0,2*Math.PI);
      ctx.fillStyle = "rgb(255, 248, 242)";
      ctx.fill();
    

      //First Layer of mountains
      ctx.beginPath();
      ctx.moveTo(0, 514);
      ctx.lineTo(18, 479);
      ctx.lineTo(151, 566);
      ctx.lineTo(295, 552);
      ctx.lineTo(394, 592);
      ctx.lineTo(529, 453);
      ctx.lineTo(672, 546);
      ctx.lineTo(879, 361);
      ctx.lineTo(1139, 618);
      ctx.lineTo(1307, 533);
      ctx.lineTo(1420, 618);
      ctx.lineTo(1611, 530);
      ctx.lineTo(1701, 572);
      ctx.lineTo(1701, 957);
      ctx.lineTo(0, 957);
      ctx.lineTo(0, 513);
      ctx.closePath();
      ctx.fillStyle = "rgb(217, 113, 125)";
      ctx.fill();

      //Shadow Layer
      ctx.beginPath();
      ctx.moveTo(881, 361);
      ctx.lineTo(969, 737);
      ctx.lineTo(1701, 740);
      ctx.lineTo(1701, 573);
      ctx.lineTo(1611, 530);
      ctx.lineTo(1421, 618);
      ctx.lineTo(1307, 533);
      ctx.lineTo(1140, 619);
      ctx.lineTo(881, 361);
      ctx.closePath();
      ctx.fillStyle = "rgb(205, 106, 121)";
      ctx.fill();
    
    
      //Second mountain layer
      ctx.beginPath();
      ctx.moveTo(0, 571);
      ctx.lineTo(173, 610);
      ctx.lineTo(347, 554);
      ctx.lineTo(452, 660);
      ctx.lineTo(730, 607);
      ctx.lineTo(830, 640);
      ctx.lineTo(984, 607);
      ctx.lineTo(1100, 660);
      ctx.lineTo(1291, 607);
      ctx.lineTo(1528, 643);
      ctx.lineTo(1701, 596);
      ctx.lineTo(1701, 957);
      ctx.lineTo(0, 957);
      ctx.lineTo(0, 571);
      ctx.closePath();
      ctx.fillStyle = "rgb(171, 107, 129)";
      ctx.fill();

      //Third Layer of mountains
      ctx.beginPath();
      ctx.moveTo(0, 618.5);
      ctx.lineTo(170, 660);
      ctx.lineTo(237, 639);
      ctx.lineTo(341, 684);
      ctx.lineTo(452, 660);
      ctx.lineTo(521, 684);
      ctx.lineTo(647, 651);
      ctx.lineTo(800, 701);
      ctx.lineTo(937, 659);
      ctx.lineTo(1059, 701);
      ctx.lineTo(1274, 660);
      ctx.lineTo(1401, 701);
      ctx.lineTo(1603, 687);
      ctx.lineTo(1701, 739);
      ctx.lineTo(1701, 957);
      ctx.lineTo(0, 957);
      ctx.lineTo(0, 618);
      ctx.closePath();
      ctx.fillStyle = "rgb(116, 91, 118)";
      ctx.fill();

      //Fourth layer of mountains
      ctx.beginPath();
      ctx.moveTo(1.3, 703);
      ctx.lineTo(418, 757);
      ctx.lineTo(607, 730);
      ctx.lineTo(763, 788);
      ctx.lineTo(1108, 757);
      ctx.lineTo(1310, 800);
      ctx.lineTo(1534, 703);
      ctx.lineTo(1701, 752);
      ctx.lineTo(1701, 957);
      ctx.lineTo(0, 957);
      ctx.lineTo(0, 703);
      ctx.closePath();
      ctx.fillStyle = "rgb(97, 91, 118)";
      ctx.fill();

      // layer1/Path
      ctx.beginPath();
      ctx.moveTo(0, 554);
      ctx.lineTo(27, 535);
      ctx.lineTo(247, 808);
      ctx.lineTo(314, 770);
      ctx.lineTo(416, 863);
      ctx.lineTo(592, 788);
      ctx.lineTo(681, 831);
      ctx.lineTo(763, 660);
      ctx.lineTo(871, 778);
      ctx.lineTo(1059, 699);
      ctx.lineTo(1178, 788);
      ctx.lineTo(1404, 660);
      ctx.lineTo(1553, 788);
      ctx.lineTo(1701, 596);
      ctx.lineTo(1701, 957);
      ctx.lineTo(0, 957);
      ctx.lineTo(0, 554);
      ctx.closePath();
      ctx.fillStyle = "rgb(68, 91, 122)";
      ctx.fill();
      ctx.restore();
    }

