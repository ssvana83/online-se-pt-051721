const button1 = document.querySelector('#button-1')
const button2 = document.getElementById('button-2')

// What do we want to do when a button is clicked?
button1.addEventListener("click", event => {
  const page = document.body
  page.style.filter = "invert(1)"
  console.log(event.target);
})

button2.addEventListener("click", () => {
  const page = document.body
  page.style.filter = "invert(0)"
})
