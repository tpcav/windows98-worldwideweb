<script>
    
var dragValue;

function move(id) {
  var element = document.getElementById("folderIcon");
  element.style.position = "relative";
  element.onmousedown = function() {
    dragValue = element;
  }
}

document.onmouseup = function(e) {
  dragValue = null;
}

document.onmousemove = function (e) {
  var x = e.pageX;
  var y = e.pageY;

  dragValue.style.left = x + "px";
  dragValue.style.top = y + "px";
}

</script>










<center><div class="window">
<div class="title-bar">
  <div class="title-bar-text">Error</div>
  <div class="title-bar-controls">
    <button aria-label="Minimize"></button>
    <button aria-label="Maximize"></button>
    <button aria-label="Close"></button>
  </div>
</div>
<div class="window-body">
  <img src="a2b2records.jpg" class="records" width="150rem">
</div>
</div></center>

<center><a href="index.html"><button class="start">
  <img src="camera3_vid-4.png" width="10rem">
  Start
</button></a></center>