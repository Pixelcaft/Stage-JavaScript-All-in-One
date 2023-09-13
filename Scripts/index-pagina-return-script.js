const backButton = document.getElementById('back-button');

backButton.addEventListener("click", indexPagina);


function indexPagina() {
    console.log("reload");
    let currentUrl = window.location.href;

    let clearUrl = currentUrl.split('?')[0];

    history.pushState({}, '', clearUrl);
    window.location.reload();
}
