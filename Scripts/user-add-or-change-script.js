ifStatement(getElement("add-user-button"), () => {
    const addUserButton2 = getElement("add-user-button");
    addUserButton2.addEventListener("click", formActivate);
});

let data = JSON.parse(localStorage.getItem("data")) || [];

const dataAttributes = ["firstname", "infix", "lastname", "streetname", "residence", "housenumber", "addition", "postalcode"];

function formActivate() {
    annulerenButtonShow();
    formRemove();
    form();

    ifStatement(getElement("info-page"), () => {
        getElement("info-page").innerHTML = "Add User";
    });  

    ifStatement(getElement("form-submit"), () => {
        getElement("form-submit").addEventListener("click", () => {
            submitform();
            indexPagina();
        });
    });  
}

function submitform() {
    const newUserData = {};

    dataAttributes.forEach(fieldName => {
        const element = document.querySelector(`[data-user-id="${fieldName}"]`);
        newUserData[fieldName] = element.value;
    });

    let saveData = JSON.parse(localStorage.getItem("data")) || [];

    const uniekID = generateUniqueNumber();

    const newObject = { id: uniekID, ...newUserData };

    saveData.push(newObject);

    localStorage.setItem("data", JSON.stringify(saveData));
}

function generateUniqueNumber() {
    let teller = parseInt(localStorage.getItem("teller")) || 0;
    teller++;
    localStorage.setItem("teller", teller.toString());
    return teller;
}

function getUser() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    userToChange = data.find(user => user.id == userId);
    return userId;
}

function updateField(fieldName) {
    const element = dataSet(`[data-user-id="${fieldName}"]`);
    ifStatement(element, () => {
        const userId = getUser();
        const userToChange = data.find(user => user.id == userId);
        if (userToChange) {
            element.value = userToChange[fieldName];
        }
    });
}

function insertData() {
    document.getElementById("info-page").innerHTML = "Old User";
    formRemove();
    form();

    dataAttributes.forEach(fieldName => updateField(fieldName));

    document.getElementById("form-submit").addEventListener("click", function () {
        saveChanges(userToChange);
    });
}

function saveChanges(userToChange) {
    const userId = getUser();

    dataAttributes.forEach(fieldName => {
        const element = dataSet(`[data-user-id="${fieldName}"]`);
        ifStatement(element, () => {
            userToChange[fieldName] = element.value;
        });
    });

    const userIndex = data.findIndex(user => user.id == userId);
    data[userIndex] = userToChange;

    localStorage.setItem("data", JSON.stringify(data));

    indexPagina();
}



