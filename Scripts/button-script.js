ifStatement(getElement("annuleren-button"), () => {
    const annulerenButton = getElement("annuleren-button");
    annulerenButton.addEventListener("click", indexPagina);
});

function annulerenButtonShow() {
    ifStatement(getElement("annuleren-button"), () => {
        const annulerenButton = getElement("annuleren-button");
        annulerenButton.style.display = "block";
    })
}

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
    annulerenButtonShow();
}

function onReadButtonClick() {
    clearUrl();
    formRemove();
    clickUserId();
    infoUser();
    annulerenButtonShow();
}

function clearUrl() {
    const userId = event.currentTarget.dataset.userId;
    let  currentUrl = window.location.href;
    let clearUrl = currentUrl.split('?')[0];
    let newUrl = clearUrl + `?id=${userId}`;
    history.pushState({}, '', newUrl);
}

function getElement(id) {
    return document.getElementById(id)
}

function ifStatement(element, action) {
    if (element) {
        action();
    }
}

function dataSet(data) {
    return document.querySelector(data);
}