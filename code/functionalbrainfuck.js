console.log("running");

function highlight(n) {
  let boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].className = boxes[i].className.replace(" highlighted", "")
  }
  boxes[n].className += " highlighted";
}

function viz() {
  let n = 5;
  let code = ">>>++++";
  let vizDiv = document.getElementsByClassName("bfviz")[0];
  let width = parseInt(getComputedStyle(vizDiv.parentNode).width);
  for (let i = 0; i < n; i++) {
    let box = document.createElement("span");
    box.className = "box";
    box.innerText = "0";
    box.style.display = "inline-block";
    // box.style.width = width / n - 10;

    vizDiv.appendChild(box);
  }
  let controls = document.createElement("div");
  let playButton = document.createElement("input");
  let codeText = document.createElement("span");

  controls.className = "controls";

  playButton.type = "button";
  playButton.value = "Play";
  playButton.className = "playButton"

  codeText.innerText = code;
  codeText.className = "bfText";

  controls.appendChild(playButton);
  controls.appendChild(codeText);
  vizDiv.appendChild(controls);

  let ptrIndex = 0;
  highlight(ptrIndex);
}

window.onload = viz;
// window.onresize = viz;
