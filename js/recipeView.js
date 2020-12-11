//import addShopping from "./listView";

const showRecipe = recipe => {
   //console.log(recipe.data.recipe)
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

   let addShoppingList = document.querySelector('#recipe__btn')
   let shopping_list = document.querySelector('.shopping__list')
   shopping_list.innerHTML = ''

   let directions = document.querySelector('.directions')
   directions.href = recipe.data.recipe.source_url
   console.log(recipe.data.recipe)


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

   const recipeItems = () => {
      shopping_list.innerHTML = ''
      ingredients.forEach(ing => {
         shopping_list.innerHTML += `
         <li class="shopping__item">
         <div class="shopping__count">
             <input type="number" value="${ing.quantity ? ing.quantity : ''}" step="1">
             <p>${ing.unit}</p>
         </div>
         <p class="shopping__description">${ing.description}</p>
         <button class="shopping__delete btn-tiny">
             <svg>
                 <use href="img/icons.svg#icon-circle-with-cross"></use>
             </svg>
         </button>
     </li>
         `
      })
      let deleteBtn = document.querySelector('.shopping__delete')
      deleteBtn.addEventListener('click', (e) => {
         console.log(e.target)
      }
      )
      //console.log(ingredients)
   }

   addShoppingList.addEventListener('click', recipeItems)

  




};



export default showRecipe