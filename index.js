window.onload = function(){

  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var radius = 5;
  var mousecoords = {x:0, y:0};
  var fps = 50;
  var speed = .25;

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  function unit(x, y, xv, yv){
    this.x = x;
    this.y = y;
    this.xv = Math.random()*xv;
    this.yv = Math.random()*yv;
  }

  var units = [new unit(100, 100)];
  for(var i = 0; i < 15; i++){
    units.push(new unit(Math.random()*canvas.width, Math.random()*canvas.height, speed, speed));
  }

  function getClose(x, y, maxdist){
    var results = [];
    for(var i =0; i < units.length; i++){
      var dist = Math.sqrt(Math.pow(units[i].x - x,2)+Math.pow(units[i].y-y,2));
      if(dist < maxdist){
        results.push(units[i]);
      }
      units[i].x += units[i].xv;
      units[i].y += units[i].yv;
      if(units[i].x >= canvas.width){
        units[i].xv *= -1;
      }
      if(units[i].x < 0){
        units[i].xv *= -1;
      }
      if(units[i].y >= canvas.height){
        units[i].yv *= -1;
      }
      if(units[i].y < 0){
        units[i].yv *= -1;
      }
    }
    var mouseDist = Math.sqrt(Math.pow(mousecoords.x - x,2)+Math.pow(mousecoords.y-y,2));
    if(mouseDist < maxdist){
      results.push({x:mousecoords.x, y:mousecoords.y});
    }
    return results;
  }

  function draw(){
    context.fillStyle = "rgba(51, 51, 204, 1)"
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#8686F7";
    for(var i = 0; i < units.length; i++){
      
      context.beginPath();
      context.arc(units[i].x, units[i].y, radius, 0, 2 * Math.PI, false);
      context.fill();
      context.stroke();

      context.stroke();
      var close = getClose(units[i].x, units[i].y, 130);
      for(var j = 0; j < close.length; j++){
        context.beginPath();
        context.moveTo(units[i].x,units[i].y);
        context.lineTo(close[j].x, close[j].y);
        context.strokeStyle = "#8686F7";

        context.stroke();
      }
      
    }
    setTimeout(function() {
        requestAnimationFrame(draw);
    }, 1000 / fps);
  }
  window.addEventListener("resize", function(){
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    mousecoords.x = mousePos.x;
    mousecoords.y = mousePos.y;
  }, false);

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
    
  function getRndColor() {
      var r = 255*Math.random()|0,
          g = 255*Math.random()|0,
          b = 255*Math.random()|0;
      return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

  draw();

}