const addUserButton = getElement("add-user-button");
if (addUserButton) {
    addUserButton.addEventListener("click", formActivate);
}

const dataAttributes = ["firstname", "infix", "lastname", "streetname", "residence", "housenumber", "addition", "postalcode"];

function formActivate() {
    showBtnAnnuleren();
    removeUserList();
    createUserForm();

    const infoPage = getElement("info-page");
    if (infoPage) {
        getElement("info-page").innerHTML = "Add User";
    }

    const formSubmit = getElement("form-submit");
    if (formSubmit) {
        getElement("form-submit").addEventListener("click", () => {
            submitForm();
            reloadIndexPage();
        });
    }
}

function submitForm() {
    const newUserData = {};

    dataAttributes.forEach(fieldName => {
        const element = document.querySelector(`[data-user-id="${fieldName}"]`);
        newUserData[fieldName] = element.value;
    });

    const users = JSON.parse(localStorage.getItem("data")) || [];
    const uniekID = generateUniqueNumber();
    const newObject = { id: uniekID, ...newUserData };

    users.push(newObject);

    localStorage.setItem("data", JSON.stringify(users));
}

function generateUniqueNumber() {
    let teller = parseInt(localStorage.getItem("teller")) || 0;
    teller++;
    localStorage.setItem("teller", teller.toString());
    return teller;
}

function getUserId() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    userToChange = data.find(user => user.id == userId);
    return userId;
}

function updateField(fieldName) {
    const element = document.querySelector(`[data-user-id="${fieldName}"]`);
    if (element) {
        const userId = getUserId();
        const userToChange = data.find(user => user.id == userId);
        if (userToChange) {
            element.value = userToChange[fieldName];
        }
    }
}

function insertData() {
    document.getElementById("info-page").innerHTML = "Old User";
    removeUserList();
    createUserForm();

    dataAttributes.forEach(fieldName => updateField(fieldName));

    document.getElementById("form-submit").addEventListener("click", function () {
        saveUser(userToChange);
    });
}

function saveUser(userToChange) {
    const userId = getUserId();

    dataAttributes.forEach(fieldName => {
        const element = document.querySelector(`[data-user-id="${fieldName}"]`);
        if (element) {
            userToChange[fieldName] = element.value;
        }
    });

    const userIndex = data.findIndex(user => user.id == userId);
    data[userIndex] = userToChange;

    localStorage.setItem("data", JSON.stringify(data));

    reloadIndexPage();
}



