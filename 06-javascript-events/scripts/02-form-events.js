const catForm = document.querySelector('#do-not-submit')
const submitButton = document.querySelectorAll('input')[1]
const imagesCattainer = document.querySelector('#images-cattainer')

// We would like to add new images when they're submitted via this form
catForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const submission = event.target.querySelector('#text-field').value

  const img = document.createElement('img')
  img.src = submission
  imagesCattainer.appendChild(img)
})

imagesCattainer.addEventListener("click", event => {
  const target = event.target
  if (target.tagName === "IMG") {
    target.remove()
  }
})
