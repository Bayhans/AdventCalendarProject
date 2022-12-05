import {resultTitles} from './controller.js';
import {resultServings} from './controller.js';
import {resultInstructions} from './controller.js';
import {resultIngredients} from './controller.js';
import {recipeResult} from './controller.js';

console.log(recipeResult);

// import {allRecipesTitle} from './model.js';
// import {allRecipesServings} from './model.js';
// import {allRecipesInstructions} from './model.js';
// import {allRecipesIngredients} from './model.js';
// console.log(allRecipesTitle)
// console.log(allRecipesInstructions)
show();
function show() {
  let mainPage = document.getElementById("app");
  let tempPage = "";
  tempPage += /*html*/ `
<header>
<div class="headerText"><h1><span class="span_1">Christmas</span> <span class="span_2">Calendar</span> <span class="span_3">2022</span></h1></div>
</header>

<main>
  <div class="luke1 "  style=" grid-area: luke1;">
  <label class="btn " for="modal-1"><p class="numbers" >1</p><i class="fa-solid fa-candy-cane" ></i></label>
  </div>
  <div class="luke2" style=" grid-area: luke2;">
  <label class="btn " for="modal-1"><p class="numbers">2</p><i class="fa-solid fa-snowman" ></i></label>
  </div>
  <div class="luke3" style=" grid-area: luke3;">
  <label class="btn " for="modal-1"><p class="numbers">3</p><i class="fa-solid fa-snowman"></i></label>
  </div>
  <div class="luke4 " style=" grid-area: luke4;">
  <label class="btn " for="modal-1"><p class="numbers">4</p><i class="fa-solid fa-sleigh" ></i></label>
  </div>
  <div class="luke5 " style=" grid-area: luke5;">
  <label class="btn " for="modal-1"><p class="numbers">5</p><i class="fa-solid fa-snowflake" ></i></label>
  </div>
  <div class="luke6 " style=" grid-area: luke6;">
  <label class="btn " for="modal-1"><p class="numbers">6</p><i class="fa-solid fa-stroopwafel" ></i></label>
  </div>
  <div class="luke7 " style=" grid-area: luke7;">
  <label class="btn " for="modal-1"><p class="numbers">7</p><i class="fa-solid fa-gifts" ></i></label>
  </div>
  <div class="luke8 " style=" grid-area: luke8;">
  <label class="btn " for="modal-1"><p class="numbers">8</p><i class="fa-solid fa-gift" ></i></label>
  </div>
  <div class="luke9 " style=" grid-area: luke9;">
  <label class="btn " for="modal-1"><p class="numbers">9</p><i class="fa-solid fa-heart" ></i></label>
  </div>
  <div class="luke10 " style=" grid-area: luke10;">
  <label class="btn " for="modal-1"><p class="numbers">10</p><i class="fa-sharp fa-solid fa-holly-berry"></i></label>
  </div>
  <div class="luke11 " style=" grid-area: luke11;">
  <label class="btn " for="modal-1"><p class="numbers">11</p><i class="fa-solid fa-candy-cane" ></i></label>
  </div>
  <div class="luke12 " style=" grid-area: luke12;">
  <label class="btn " for="modal-1"><p class="numbers">12</p><i class="fa-solid fa-candy-cane" ></i></label>
  </div>
  <div class="luke13 " style=" grid-area: luke13;">
  <label class="btn " for="modal-1"><p class="numbers">13</p><i class="fa-solid fa-asterisk" ></i></label>
  </div>
  <div class="luke14 " style=" grid-area: luke14;">
  <label class="btn " for="modal-1"><p class="numbers">14</p><i class="fa-solid fa-candy-cane" ></i></label>
  </div>
  <div class="luke15 " style=" grid-area: luke15;">
  <label class="btn " for="modal-1"><p class="numbers">15</p><i class="fa-solid fa-asterisk" ></i></label>
  </div>
  <div class="luke16 " style=" grid-area: luke16;">
  <label class="btn " for="modal-1"><p class="numbers">16</p><i class="fa-sharp fa-solid fa-holly-berry" ></i></label>
  </div>
  <div class="luke17 " style=" grid-area: luke17;">
  <label class="btn " for="modal-1"><p class="numbers">17</p><i class="fa-solid fa-asterisk" ></i></label>
  </div>
  <div class="luke18 " style=" grid-area: luke18;">
  <label class="btn " for="modal-1"><p class="numbers">18</p><i class="fa-solid fa-asterisk" ></i></label>
  </div>

  <div class="teacher" style=" grid-area: randi;">
  <img src="https://static.wixstatic.com/media/ab62b0_7a872a3f674244568c590a20d7c359a2~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/b_5321bw-300x300.png">
  </div>

  <div class="teacher" style=" grid-area: emil;">
  <img src="https://www.boktips.no/content/uploads/2019/02/Nei-han-Emil_ForsidePS.jpg">
  </div>

  <div class="luke19 " style=" grid-area: luke19;">
  <label class="btn " for="modal-1"><p class="numbers">19</p><i class="fa-sharp fa-solid fa-holly-berry"></i></label>
  </div>
  <div class="luke20 " style=" grid-area: luke20;">
  <label class="btn " for="modal-1"><p class="numbers">20</p><i class="fa-solid fa-asterisk" ></i></label>
  </div>
  <div class="luke21 " style=" grid-area: luke21;">
  <label class="btn " for="modal-1"><p class="numbers">21</p><i class="fa-solid fa-snowflake" ></i></label>
  </div>
  <div class="luke22 " style=" grid-area: luke22;">
  <label class="btn " for="modal-1"><p class="numbers">22</p><i class="fa-solid fa-asterisk" ></i></label>
  </div>
  <div class="luke23 " style=" grid-area: luke23;">
  <label class="btn " for="modal-1"><p class="numbers">23</p><i class="fa-solid fa-asterisk" ></i></label>
  </div>
  <div class="luke24" style=" grid-area: luke24;">
  <label class="btn " for="modal-1"><p>24</p><i class="fa-solid fa-snowflake" ></i></label>
  </div>
  <div class="jul">
      <p class="julP">God Jul alle sammen!</p>
  </div>
</main>
<!-- the floating content-->
<input class="modal-state" id="modal-1" type="checkbox" />
<div class="modal">
<label class="modal__bg" for="modal-1"></label>
<div class="modal__inner">
  <label class="modal__close" for="modal-1"></label>
  <h2>How it works</h2>
  <div> resultTitles here ${resultTitles } </div>
  </div>
</div>
  `;
  mainPage.innerHTML = tempPage;
}

