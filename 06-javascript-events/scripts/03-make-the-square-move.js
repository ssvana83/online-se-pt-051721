const cat = document.querySelector('#cat-square')
let fromRight = 100
let fromTop = 100

document.addEventListener("keyup", function(event) {
  fromRight -= 3
  console.log(cat.style.right);
  cat.style.right = `${fromRight}px`
  // take dimensions for page -> we don't want the cat to go off the page!
});
