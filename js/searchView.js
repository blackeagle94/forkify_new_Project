//import getOneRecipe from './index.js'

const apiKey = '389c426d-8b3a-4701-946e-e2ce5a2d2060';
const url = 'https://forkify-api.herokuapp.com/api/v2/recipes'
const show = document.querySelector('.results__link')

 export const renderRecipe = recipe => {
    const names = recipe.data.recipes
    let results = document.getElementById('resultsAll')
    //console.log(names[0])
    results.innerHTML = ''
    for (let i = 0; i < names.length; i++) {
        results.innerHTML += `
                 <li">
                    <a class="results__link" id=${names[i].id} href="#">
                        <figure id=${names[i].id} class="results__fig">
                            <img id=${names[i].id} src="${names[i].image_url}" alt="${names[i].title}" alt="Test">
                        </figure>
                        <div id=${names[i].id} class="results__data">
                            <h4 id=${names[i].id} class="results__name">${names[i].title}</h4>
                            <p id=${names[i].id} class="results__author">${names[i].publisher}</p>
                        </div>
                    </a>
                </li>
        `
    }

    show.addEventListener('click', function (e) {
        console.log(e.target)
    })

};










// export const renderRecipe = recipe => {
    
//     const markup = `
//         <li>
//             <a class="results__link" id=${recipe.id} href="#${recipe.id}">
//                 <figure class="results__fig">
//                     <img src="${recipe.image_url}" alt="${recipe.title}">
//                 </figure>
//                 <div class="results__data">
//                     <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
//                     <p class="results__author">${recipe.publisher}</p>
//                 </div>
//             </a>
//         </li>
//     `;
//     elements.searchResList.insertAdjacentHTML('beforeend', markup);

// };
