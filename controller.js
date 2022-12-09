export let whatWever;

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
    if (event.target.className === "modal-state") {
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
    }
  });
});

riddelGetter();

async function riddelGetter() {
  const request = await fetch("https://api.api-ninjas.com/v1/riddles");
  const data = await request.json();
  riddelDisplayer(data);
}

function riddelDisplayer([data]) {
  const riddelMainContainer = document.getElementById("myRiddelContainer");
  riddelMainContainer.innerHTML =
    "<h1>" + "Today's riddel: " + "</h1>" +
    "<h2>" + data.title + "</h2>" +
    "<h2>" + data.question + "</h2>" +
    "<br>" +
    "<h3>" + data.answer + "</h3>"+
    "<h2>" + "You refresh the page to hafe a new riddel ;)" + "</h2>";
}
// window.addEventListener('click', riddelGetter, );

// event.preventDefault();  // kan brukes for stoppe dobbel riddelgetter
// problemet men skal finne andre modal logik da.
