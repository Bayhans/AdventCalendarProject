export var resultTitles = [];
export let resultServings = [];
export let resultInstructions = [];
export let resultIngredients = [];
export let recipeResult = [];

 async function recipeGetter() {
  const query = "christmas"
  const request = await fetch("https://api.api-ninjas.com/v1/recipe?query=" + query, {
    headers: {
      "X-Api-Key": "0DhBnOBWv10+HOeWsN0T1w==KEfK5ymNm4BcPBud"
    }
  })
  const response = await request.json() // konverterer fra json-text til javascript object/array
  return response
}
 recipeGetter().then(function(result) {
  var randomElement = [];
  randomElement.push(result[Math.floor(Math.random() *result.length)]);
  recipeResult.push(randomElement);

  
  randomElement.forEach(title => resultTitles.push(title.title));
  randomElement.forEach(ingredient => resultIngredients.push(ingredient.ingredients));
  randomElement.forEach(serving => resultServings.push(serving.serving));
  randomElement.forEach(instruction => resultInstructions.push(instruction.instructions));

})




// function riddelGetter() {
//   $.ajax({
//     method: "GET",
//     url: "https://api.api-ninjas.com/v1/riddles",
//     headers: { "X-Api-Key": "0DhBnOBWv10+HOeWsN0T1w==KEfK5ymNm4BcPBud" },
//     contentType: "application/json",
//     success: function (riddle) {
//       for (let i = 0; i < riddle.length;i++) {
//         let allRiddles = riddle[i];
//         return(allRiddles[0]);

//         console.log(allRiddles);
//       }
//     },
//     error: function ajaxError(jqXHR) {
//       console.error("Error: ", jqXHR.responseText);
//     },
//   });
// };

// function riddelesWrapper(){
    // let choosenRiddel;
    // for(let i = 0; i < allRiddles.length; i++){
    //     choosenRiddel = allRiddles[i];
    //     console.log(allRiddles[i]);
    //     return choosenRiddel;
    // }
// }

// function Pic() {
//   var pic = [
//     'https://loremflickr.com/2000/1000/christmas',
//   ];
  
//   $("header").css({
//     background:
//       "url(" + pic[Math.floor(Math.random() * pic.length)] + ") center no-repeat",
    
//   });
// }
// Pic();
