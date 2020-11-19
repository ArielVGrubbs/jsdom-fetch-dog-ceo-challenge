console.log('%c HI', 'color: firebrick')

const imgUrl1 = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = "https://dog.ceo/api/breeds/list/all" 

function addImageToPage(url) {
    // create image
const imgTag = document.createElement('img')

// change the src
imgTag.src = url

// find the parent
const imgParent = document.querySelector('#dog-image-container')
//   imgParent.innerHTML = ''

// ✋🏻
imgParent.appendChild(imgTag)
}

document.addEventListener('DOMContentLoaded',() => {
    fetch(imgUrl1)
    .then((response) => response.json())
    .then((data) => { 
        data.message.forEach(myFunc) 
        function myFunc(value){
            // let dogImgUrl = data.message[1] //go through array
            addImageToPage(value)
        }
    })

    fetch(breedUrl)
    .then((response) => response.json())
    .then((data) => {
        const dogBreedParent = document.querySelector('#dog-breeds')
        const submitButton = document.createElement('input')
        submitButton.type = 'submit'
        let submitParent = document.querySelector('#breed-selector-form')
        submitParent.appendChild(submitButton)
        submitParent.addEventListener('submit', function(event) {
            event.preventDefault()
            const breedInputValue = event.target.querySelector('#breed-dropdown').value
            // event.target.reset()
            for (const property in data.message) {
                // console.log(`${property}: ${data.message[property]}`);
                if (property[0] === breedInputValue) {
                    const dogBreedLi = document.createElement('li')
                    dogBreedParent.appendChild(dogBreedLi)
                    dogBreedLi.innerText = `${property}: ${data.message[property]}`
                    dogBreedLi.addEventListener('click', () => {
                        dogBreedLi.style.color = "blue"
                })
                }
            }
        })
        // for (const property in data.message) {
        //     // console.log(`${property}: ${data.message[property]}`);
        //     const dogBreedLi = document.createElement('li')
        //     dogBreedParent.appendChild(dogBreedLi)
        //     dogBreedLi.innerText = `${property}: ${data.message[property]}`
        //     dogBreedLi.addEventListener('click', () => {
        //         dogBreedLi.style.color = "blue"
        //     })
        // }
    })
  })




//   const submitButton = document.createElement('input')
//   submitButton.type = 'submit'
//   let submitParent = document.querySelector('#breed-selector-form')
//   submitParent.appendChild(submitButton)