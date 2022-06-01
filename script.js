const img = document.getElementById("image");

function myFunction(move) {
  switch (move) {
    case "down":
      img.style.top = `${img.offsetTop + 100}px`;
      break;
    case "up":
      img.style.top = `${img.offsetTop - 100}px`;
      break;
    case "left":
      img.style.left = `${img.offsetLeft - 100}px`;
      break;
    case "right":
      img.style.left = `${img.offsetLeft + 100}px`;
      break;
  }
}
