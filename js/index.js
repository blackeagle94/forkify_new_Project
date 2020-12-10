import {renderRecipe} from './searchView.js'

import showRecipe from './recipeView.js'

import addShopping from './listView.js'

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');

const apiKey = '389c426d-8b3a-4701-946e-e2ce5a2d2060';
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


const getOneRecipe = async (id) => {
    
    }



    submitBtn.addEventListener('click', getRecipe)