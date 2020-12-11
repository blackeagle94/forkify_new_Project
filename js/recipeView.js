
const showRecipe = recipe => {
   console.log(recipe.data.recipe)
   let minute = document.querySelector('.recipe__info-data--minutes')
   minute.innerHTML = recipe.data.recipe.cooking_time
   let service = document.querySelector('.recipe__info-data--people')
   service.innerHTML = recipe.data.recipe.servings
   let listIng = document.querySelector('.recipe__ingredient-list')
   listIng.innerHTML = ''
   let ingredients = recipe.data.recipe.ingredients
   let imgRecipe = document.querySelector('.recipe__img')
   imgRecipe.src = recipe.data.recipe.image_url
   let showTitle = document.querySelector('.recipe__title')
   showTitle.innerHTML = `<span>${recipe.data.recipe.title}</span>`



   ingredients.forEach(ing => {
       listIng.innerHTML += `
       <li class="recipe__item">
          <svg class="recipe__icon">
           <use href="img/icons.svg#icon-check"></use>
          </svg>
          <div class="recipe__count">${ing.quantity ? ing.quantity : ''}</div>
          <div class="recipe__ingredient">
           <span class="recipe__unit">${ing.unit}</span>
           ${ing.description}
         </div>
        </li>
       `

   });


};


export default showRecipe