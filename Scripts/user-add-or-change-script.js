const addUserButton2 = document.getElementById("add-user-button");

addUserButton2.addEventListener("click", formSubmit);

let data = JSON.parse(localStorage.getItem("data")) || [];

function formSubmit() {
    document.getElementById("info-page").innerHTML = "Add User";
    formRemove();
    form();

    document.getElementById("form-submit").addEventListener("click", submitform);

    document.getElementById("form-submit").addEventListener("click", indexPagina);
}

function submitform() {
    const firstname = document.querySelector('[data-user-id="firstname"]').value;
    const infix = document.querySelector('[data-user-id="infix"]').value;
    const lastname = document.querySelector('[data-user-id="lastname"]').value;
    const streetname = document.querySelector('[data-user-id="streetname"]').value;
    const residence = document.querySelector('[data-user-id="residence"]').value;
    const housenumber = document.querySelector('[data-user-id="housenumber"]').value;
    const addition = document.querySelector('[data-user-id="addition"]').value;
    const postalcode = document.querySelector('[data-user-id="postalcode"]').value;

    let saveData = JSON.parse(localStorage.getItem("data")) || [];

    const uniekID = generateUniqueNumber();

    const newObject = { id: uniekID, firstname, infix, lastname, streetname, residence, housenumber, addition, postalcode, residence };

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
    return { userToChange, userId };
}

function insertData() {
    document.getElementById("info-page").innerHTML = "Old User";
    formRemove();
    form();
    const {userToChange} = getUser();

    document.querySelector('[data-user-id="firstname"]').value = userToChange.firstname;
    document.querySelector('[data-user-id="infix"]').value = userToChange.infix;
    document.querySelector('[data-user-id="lastname"]').value = userToChange.lastname;
    document.querySelector('[data-user-id="streetname"]').value = userToChange.streetname;
    document.querySelector('[data-user-id="residence"]').value = userToChange.residence;
    document.querySelector('[data-user-id="housenumber"]').value = userToChange.housenumber;
    document.querySelector('[data-user-id="addition"]').value = userToChange.addition;
    document.querySelector('[data-user-id="postalcode"]').value = userToChange.postalcode;

    document.getElementById("form-submit").addEventListener("click", function () {
        saveChanges(userToChange);
    });
}

function saveChanges(userToChange) {
    const {userId} = getUser();
    
    userToChange.firstname = document.querySelector('[data-user-id="firstname"]').value;
    userToChange.infix = document.querySelector('[data-user-id="infix"]').value;
    userToChange.lastname = document.querySelector('[data-user-id="lastname"]').value;
    userToChange.streetname = document.querySelector('[data-user-id="streetname"]').value;
    userToChange.residence = document.querySelector('[data-user-id="residence"]').value;
    userToChange.housenumber = document.querySelector('[data-user-id="housenumber"]').value;
    userToChange.addition = document.querySelector('[data-user-id="addition"]').value;
    userToChange.postalcode = document.querySelector('[data-user-id="postalcode"]').value;

    const userIndex = data.findIndex(user => user.id == userId);
    data[userIndex] = userToChange;

    localStorage.setItem("data", JSON.stringify(data));

    indexPagina();
}