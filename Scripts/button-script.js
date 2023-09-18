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
    const userId = event.currentTarget.dataset.userId;
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

    formRemove();

    insertData();
}

function onReadButtonClick() {

    clearUrl();

    formRemove();

    clickUserId();

    infoUser();
}

function clearUrl() {
    const userId = event.currentTarget.dataset.userId;

    let  currentUrl = window.location.href;

    let clearUrl = currentUrl.split('?')[0];

    let newUrl = clearUrl + `?id=${userId}`;

    history.pushState({}, '', newUrl);
}