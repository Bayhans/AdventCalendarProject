export let oneTitle = [];
export let fooResultServings = [];
export let fooResultInstructions = [];
export let fooResultIngredients = [];

 async function recipeGetter2() {
  const query = "christmas"
  const request = await fetch("https://api.api-ninjas.com/v1/recipe?query=" + query, {
    headers: {
      "X-Api-Key": "0DhBnOBWv10+HOeWsN0T1w==KEfK5ymNm4BcPBud"
    }
  })
  const response = await request.json() // konverterer fra json-text til javascript object/array
  return response
}
 recipeGetter2().then(function(result) {
  result.forEach(element => fooResultIngredients.push(element.ingredients));
  result.forEach(element => fooResultInstructions.push(element.instructions));
  result.forEach(element => fooResultServings.push(element.servings));
  result.forEach(element => fooResultTitle.push(element.title));

  let oneTitle = [];
  for (let element of fooResultTitle) oneTitle.push(element)
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
