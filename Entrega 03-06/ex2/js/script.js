  let btn = document.querySelector("#mover");
  let topPos = 10;
  let leftPos = 10; 
  let step = 10; 

  document.body.addEventListener("keydown", (e) => {
    if (e.key === 'ArrowUp') {
      topPos -= step;
    } else if (e.key === 'ArrowRight') {
      leftPos += step;
    } else if (e.key === 'ArrowDown') {
      topPos += step;
    } else if (e.key === 'ArrowLeft') {
      leftPos -= step;
    }
    console.dir(e.key)
    btn.style.top = topPos + 'px';
    btn.style.left = leftPos + 'px';
  });