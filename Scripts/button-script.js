const backButton = document.getElementById('back-button');

backButton.addEventListener("click", indexPagina);


function indexPagina() {
    console.log("reload");
    let currentUrl = window.location.href;

    let clearUrl = currentUrl.split('?')[0];

    history.pushState({}, '', clearUrl);
    window.location.reload();
}

function onDeleteButtonClick(event) {
    const userId = event.currentTarget.id;
    const userToRemove = opgeslagenGegevens.find(user => user.id == userId);
    if (userToRemove) {

        const userIndexToRemove = opgeslagenGegevens.indexOf(userToRemove);

        opgeslagenGegevens.splice(userIndexToRemove, 1);
        localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));

        const parentDiv = event.currentTarget.parentNode.parentNode;

        parentDiv.remove();
    }
}


function onChangeButtonClick() {

    clearUrl();

    form();

    changeButton = document.getElementById('form-button-change').id = 'change-submit';

    document.getElementById("change-submit").innerText = "Verstuur";

    activateChangeUserScript();
}

function onReadButtonClick() {

    clearUrl();

    clickUserId();

    // changeButton = document.getElementById('form-button-change').id = 'change-submit';

    // const button = document.getElementById("change-submit").innerText = "Terug";


}

function clearUrl() {
    const userId = event.currentTarget.id;

    let  currentUrl = window.location.href;

    let clearUrl = currentUrl.split('?')[0];

    let newUrl = clearUrl + `?id=${userId}`;

    history.pushState({}, '', newUrl);
}

