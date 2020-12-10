
 export const renderRecipe = recipe => {
    const names = recipe.data.recipes
    let results = document.getElementById('resultsAll')
    console.log(names[0])
    results.innerHTML = ''
    for (let i = 0; i < names.length; i++) {
        results.innerHTML += `
                 <li>
                    <a class="results__link results__link--active" id=${names[i].id} href=${names[i].id}>
                        <figure class="results__fig">
                            <img src="${names[i].image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${names[i].title}</h4>
                            <p class="results__author">${names[i].publisher}</p>
                        </div>
                    </a>
                </li>
        `
        //console.log(names[i].title)
    }
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
