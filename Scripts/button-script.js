const annulerenButton = getElement("annuleren-button")

if (annulerenButton) {
    annulerenButton.addEventListener("click", reloadIndexPage);
}

function showBtnAnnuleren() {
    if (annulerenButton) {
        annulerenButton.style.display = "block";
    }
}

function reloadIndexPage() {
    const currentUrl = window.location.href;
    const firstPartUrl = currentUrl.split('?')[0];
    history.pushState({}, '', firstPartUrl);
    window.location.reload();
}

function deleteUser(event) {
    const users = JSON.parse(localStorage.getItem("data")) || [];
    const userId = event.currentTarget.dataset.userId;
    const userToRemove = users.find(user => user.id == userId);
    if (userToRemove) {

        const userIndexToRemove = users.indexOf(userToRemove);

        users.splice(userIndexToRemove, 1);
        localStorage.setItem("data", JSON.stringify(users));

        const parentDiv = event.currentTarget.parentNode.parentNode;

        parentDiv.remove();
    }
}

function updateUser(event) {
    const userId = event.currentTarget.dataset.userId;
    removeUrlParameters(userId);
    removeUserList();
    insertData();
    showBtnAnnuleren();
}

function showUserDetails(event) {
    const userId = event.currentTarget.dataset.userId;
    removeUrlParameters(userId);
    removeUserList();
    showUserDetailsComponent(userId);
    showBtnAnnuleren();
}

function removeUrlParameters(userId) {
    const  currentUrl = window.location.href;
    const firstPartUrl = currentUrl.split('?')[0];
    const newUrl = firstPartUrl + `?id=${userId}`;
    history.pushState({}, '', newUrl);
}

function getElement(id) {
    return document.getElementById(id)
}

