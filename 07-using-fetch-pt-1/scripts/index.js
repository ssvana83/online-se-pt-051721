// We have an empty array ... for now
let catArray = []

// Various elements we'll need
const cattainer = document.querySelector('#images-cattainer')
const loadButton = document.querySelector('#load-cats-button')
const newCatForm = document.querySelector('#new-cat-form')

// So now it's time to ... fetch!

loadButton.addEventListener("click", () => {
  fetch('http://localhost:3000/cats')
  .then(res => res.json())
  .then(parsedJS => {
    console.log(parsedJS.forEach(cat => {
      const img = document.createElement("img")
      img.src = cat.img_url
      cattainer.appendChild(img)
    }))
  })
})

// 1. Bread
// 2. Spaghetti
// 3. Presciption --> ??? mins --> async
// 4. Ice cream

// const
//
// const
//
// function
//
// async --> we don't want this to block our other code
//
// function
//
// function
//
// const
//
// --> async -> is it ready?
