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
  window.addEventListener("click", function (event) {
    // console.log(event.target);
    if (event.target.className === 'modal-state') {
      let randomElement = getRandomRecipe();
    mainContainer.innerHTML = "";
    for (var i = 0; i < randomElement.length; i++) {
      var div = document.createElement("div");
      div.innerHTML =
        "<h1>" + randomElement[i].title + "</h1>" +
        "<br>" +
        "<h2>" + "ingredients: " + "</h2>" +
        "<h3>" + randomElement[i].ingredients + "</h3>" +
        "<br>" +
        "<h2>" + "instructions: " + "</h2>" +
        "<h3>" + randomElement[i].instructions + "</h3>" +
        "<br>" +
        "<h2>" + "servings: " + "</h2>" +
        randomElement[i].servings;
      mainContainer.appendChild(div);
      cardElementCache.push(div);
    }
    // var something = (function() {
    //   var executed = false;
    //   return function() {
    //       if (!executed) {
    //           executed = true;
    //           riddelGetter();      
    //         }
    //   };
    // })();
    riddelGetter();
  };
  });
});
// riddelGetter();




async function riddelGetter(){
  const request = await fetch("https://api.api-ninjas.com/v1/riddles")
  const data = await request.json();
  riddelDisplayer(data);
};
function riddelDisplayer([riddelData]){
  const riddelMainContainer = document.getElementById("myRiddelContainer");
    riddelMainContainer.innerHTML =
    "<h1>" + "Today's riddel: " + "</h1>" +
    "<h2>" + riddelData.title + "</h2>" +
    "<h2>" + riddelData.question + "</h2>" +
    "<br>" + "<h3>" +
    riddelData.answer + "</h3>";
};

// window.addEventListener('click', riddelGetter);


// $.ajax({
//   method: "GET",
//   url: "https://api.api-ninjas.com/v1/riddles",
//   headers: { "X-Api-Key": "" },
//   contentType: "application/json",
//   success: function (result) {
//     var mainContainer = document.getElementById("myRiddelContainer");
//     window.addEventListener("click", function () {
//       mainContainer.innerHTML = "";
//       for (var i = 0; i < result.length; i++) {
//         var div = document.createElement("div");
//         div.innerHTML =
//           "<h1>" + "Today's riddel: " + "</h1>" +
//           "<h2>" + result[i].title + "</h2>" +
//           "<h2>" + result[i].question + "</h2>" +
//           "<br>" + "<h3>" +
//           result[i].answer + "</h3>";
//         mainContainer.appendChild(div);
//       }
//     });
//   },
// });



