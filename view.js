show();
function show() {
    let mainPage = document.getElementById("app");
    let tempPage = '';
    tempPage += /*html*/`
    <header>
        <h1>Christmas Calendar 2022</h1>
    </header>

    <main>
    <div class="luke1"><img src="./images/NewImage.jpg" width="80vw" heigh="50vw">
    </div>
    <div class="luke2"><p>2</p></div>
     <div class="luke3"><p>3</p></div>
    <div class="luke4"><p>4</p></div>
     <div class="luke5"><p>5</p></div>
    <div class="luke6"><p>6</p></div>
    <div class="luke7"><p>7</p></div>
    <div class="luke8"><p>8</p></div>
    <div class="luke9"><p>9</p></div>
    <div class="luke10"><p>10</p></div>
    <div class="luke11"><p>11</p></div> 
    <div class="luke12"><p>12</p></div>
    <div class="luke13"><p>13</p></div>
    <div class="luke14"><p>14</p></div>
    <div class="luke15"><p>15</p></div>
    <div class="luke16"><p>16</p></div>
    <div class="luke17"><p>17</p></div>
    <div class="luke18"><p>18</p></div>
    <div class="luke19"><p>19</p></div>
    <div class="luke20"><p>20</p></div>
    <div class="luke21"><p>21</p></div>
    <div class="luke22"><p>22</p></div>
    <div class="luke23"><p>23</p></div> 
    <div class="luke24"><p>24</p></div>
                    <!-- <div class="empty"></div> -->
    <div class="jul"> <p class="julP">Jul er Her</p></div>
    </div>

    </main>
    <footer>
 <div ><i class="fa-sharp fa-solid fa-star-christmas"></i></div>

    </footer>
    `;
    mainPage.innerHTML = tempPage;
}
