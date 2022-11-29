show();
function show() {
    let mainPage = document.getElementById("app");
    let tempPage = '';
    tempPage += /*html*/`
    <header>Hello</header>
    <main>
    <div class="luke13"></div>
       <div class="luke14"></div>
    
    </div>
    `;
    mainPage.innerHTML = tempPage;
}