import {renderRecipe} from './searchView.js'

import showRecipe from './recipeView.js'



// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const show = document.getElementsByTagName('A')

const shoppingList = document.querySelector('.shopping__list')

const apiKey = '8e6c2202-a03d-4c29-b121-6898fbc5708e';
const url = 'https://forkify-api.herokuapp.com/api/v2/recipes'

// Add AJAX functions here:
const getRecipe = () => {
    const recipeInput = input.value;
    const urlToFetch = `${url}?search=${recipeInput}&key=${apiKey}`

    fetch(urlToFetch)
    .then(res => res.json())
    .then(data => renderRecipe(data))
    .catch(err => console.log(err))

    }

input.addEventListener('click', () => {
  input.value = ''
  document.getElementById('resultsAll').innerHTML = ''
  document.querySelector('.results__pages').hidden = true
})

    

    submitBtn.addEventListener('click', getRecipe)

    shoppingList.addEventListener('click', (e) => {
      if (e.target.closest('button')) {
          e.target.closest('button').parentElement.remove();
      }
  })

   