export let recipeResult = [];

async function recipeGetter() {
  const query = "christmas";
  const request = await fetch(
    "https://api.api-ninjas.com/v1/recipe?query=" + query,
    {
      headers: {
        "X-Api-Key": "0DhBnOBWv10+HOeWsN0T1w==KEfK5ymNm4BcPBud",
      },
    }
  );
  const response = await request.json(); // konverterer fra json-text til javascript object/array
  return response;
}

let dataCache = [];
let cardElementCache = [];

function getRandomRecipe() {
  let randomElement = [];
  randomElement.push(dataCache[Math.floor(Math.random() * dataCache.length)]);
  return randomElement;
}

recipeGetter().then(function (data) {
  dataCache = data;
  var randomElement = [];
  randomElement.push(data[Math.floor(Math.random() * data.length)]);

  var mainContainer = document.getElementById("myRecipeContainer");
  for (var i = 0; i < randomElement.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      randomElement[i].title +
      "<br>" +
      "ingredients: " +
      randomElement[i].ingredients +
      "<br>" +
      "instructions: " +
      randomElement[i].instructions +
      "<br>" +
      "servings: " +
      randomElement[i].servings;
    mainContainer.appendChild(div);
  }
  
window.addEventListener("click", function () {
  let randomElement = getRandomRecipe();

  var mainContainer = document.getElementById("myRecipeContainer");
  mainContainer.innerHTML = "";
  for (var i = 0; i < randomElement.length; i++) {
    var div = document.createElement("div");
    div.innerHTML =
      randomElement[i].title +
      "<br>" +
      "ingredients: " +
      randomElement[i].ingredients +
      "<br>" +
      "instructions: " +
      randomElement[i].instructions +
      "<br>" +
      "servings: " +
      randomElement[i].servings;
    mainContainer.appendChild(div);
    cardElementCache.push(div);
  }
});
});

// async function riddelGetter() {
//   const request = await fetch("https://api.api-ninjas.com/v1/riddles" {
//     headers: {
//       "X-Api-Key": "0DhBnOBWv10+HOeWsN0T1w==KEfK5ymNm4BcPBud",
//       contentType: "application/json",
//     }
//   })
//   const response = await request.json() // konverterer fra json-text til javascript object/array
//   return response
// }
//  recipeGetter().then(function(result) {
//   var randomElement = [];
//   randomElement.push(result[Math.floor(Math.random() * result.length)]);
//   recipeResult.push(randomElement);  // trenger ikke

//   randomElement.forEach(title => resultTitles.push(title.title));
//   randomElement.forEach(ingredient => resultIngredients.push(ingredient.ingredients));
//   randomElement.forEach(serving => resultServings.push(serving.serving));
//   randomElement.forEach(instruction => resultInstructions.push(instruction.instructions));
//   instruction => testArray.push(instruction.instruction);

// })

// function riddelesWrapper(){
// let choosenRiddel;
// for(let i = 0; i < allRiddles.length; i++){
//     choosenRiddel = allRiddles[i];
//     console.log(allRiddles[i]);
//     return choosenRiddel;
// }
// }