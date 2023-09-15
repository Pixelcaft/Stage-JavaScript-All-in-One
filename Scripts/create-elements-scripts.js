const infoContainer = document.getElementById('info-container');

const opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

for (var i = 0; i < opgeslagenGegevens.length; i++) {

    addUser(opgeslagenGegevens[i])
}

form();

function form() {
if (infoContainer) {
    const formElement = createFormField();
    infoContainer.className = '';

    infoContainer.appendChild(formElement);
}
}

function addUser(user) {
    if (infoContainer) {
        const userText = "#" + user.id + " " + " " + user.voorletters + " " + user.tussenvoegsel + " " + user.achternaam;

        const userListElement = createUserList(userText, user.id);
        addClass(userListElement, 'inside-container');
        infoContainer.appendChild(userListElement);
    }
}

function clickUserId() {
    const urlParams = new URLSearchParams(window.location.search);

    const userIdUrl = urlParams.get("id");

    const userId = opgeslagenGegevens.find(user => user.id == userIdUrl);

    if (userId) {
        infoUser(userId);
    }
}
// data-atribute

function infoUser(userId) {
    if (infoContainer) {
        formRemove(); 

        const userText = userId.voornaam + " " + 
        userId.tussenvoegsel + " " + userId.achternaam + "<br> " + 
        userId.straatnaam + " " + userId.huisnummer + " " + userId.toevoeging + "<br>" + 
        userId.postcode + " " + userId.woonplaats;

        const userInfoElement = createInformationField(userText, 'back-button');

        infoContainer.appendChild(userInfoElement);
    }
}


function createElement(element, id = null) {
    const el = document.createElement(element);
    if (id) {
        el.id = id
    }
    return el;
}

function addClass(element, classStr) {
    element.className += (' ' + classStr);
}

function createInformationField(text, id) {
    const container = createElement("DIV");
    const textContainer = createElement("DIV");
    const buttonContainer = createElement("DIV");
    const backButton = createElement("BUTTON", id);

    addClass(textContainer, 'information-view-text');
    addClass(buttonContainer, 'information-button');
    addClass(backButton, 'back-button');


    textContainer.innerHTML = text;
    backButton.innerHTML = 'Terug';

    container.appendChild(textContainer);
    container.appendChild(buttonContainer);
    return container;
}

function createUserList(text, id) {
    const container = createElement("DIV");
    const textContainer = createElement("DIV");
    const buttonContainer = createElement("DIV")

    const deleteButton = createElement("BUTTON", id);
    const changeButton = createElement("BUTTON");
    const infoButton = createElement("BUTTON");

    addClass(deleteButton, 'delete-button');
    addClass(changeButton, 'change-button');
    addClass(infoButton, 'read-button');
    addClass(textContainer, 'view-text');

    textContainer.innerHTML = text;

    // deleteButton.id = id;
    changeButton.id = id;
    infoButton.id = id;

    deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
    changeButton.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;
    infoButton.innerHTML = `<i class="fa fa-info" aria-hidden="true"></i>`;

    deleteButton.addEventListener('click', onDeleteButtonClick);
    changeButton.addEventListener('click', onChangeButtonClick);
    infoButton.addEventListener('click', onReadButtonClick);

    buttonContainer.appendChild(infoButton);
    buttonContainer.appendChild(changeButton);
    buttonContainer.appendChild(deleteButton);

    container.appendChild(textContainer);
    container.appendChild(buttonContainer)
    return container;
}

function formRemove() {
    let removeElements = document.querySelectorAll('.inside-container');
    removeElements.forEach(function (removeElements) {
        removeElements.remove();
    })
}


function createFormField() {
    const container = createElement("DIV");
    const formContainer = createElement("FORM");
    const gegevensFormContainer = createElement("DIV");
    const columnLeftContainer = createElement("DIV");
    const columnMidContainer = createElement("DIV");
    const columnRightContainer = createElement("DIV");
    const formButtonContainer = createElement("DIV");
    const submitButton = createElement("BUTTON");

    const voorlettersLabelElement = createElement("LABEL");
    const voornaamLabelElement = createElement("LABEL");
    const straatnaamLabelElement = createElement("LABEL");
    const postcodeLabelElement = createElement("LABEL");

    const tussenvoegselLabelElement = createElement("LABEL");
    const huisnummerLabelElement = createElement("LABEL");

    const achternaamLabelElement = createElement("LABEL");
    const toevoegingLabelElement = createElement("LABEL");

    const voorlettersInputElement = createElement("INPUT");
    const voornaamInputElement = createElement("INPUT");
    const straatnaamInputElement = createElement("INPUT");
    const postcodeInputElement = createElement("INPUT");

    const tussenvoegselInputElement = createElement("INPUT");
    const huisnummerInputElement = createElement("INPUT");

    const achternaamInputElement = createElement("INPUT");
    const toevoegingInputElement = createElement("INPUT");

    addClass(gegevensFormContainer, 'gegevens-formulier');
    addClass(columnLeftContainer, 'links');
    addClass(columnMidContainer, 'midden');
    addClass(columnRightContainer, 'rechts');
    addClass(formButtonContainer, 'form-button');
    addClass(submitButton, 'submit');

    submitButton.innerHTML = 'Submit';

    voorlettersLabelElement.textContent = 'Voorletters';
    voornaamLabelElement.textContent = 'Voornaam';
    straatnaamLabelElement.textContent = 'Straatnaam';
    postcodeLabelElement.textContent = 'Postcode';
    tussenvoegselLabelElement.textContent = 'Tussenvoegsel';
    huisnummerLabelElement.textContent = 'Huisnummer';
    achternaamLabelElement.textContent = 'Achternaam';
    toevoegingLabelElement.textContent = 'Toevoeging';

 const inputFields = [
    voorlettersInputElement,
    voornaamInputElement,
    straatnaamInputElement,
    postcodeInputElement,
    tussenvoegselInputElement,
    achternaamInputElement,
    toevoegingInputElement
 ];

 inputFields.forEach(function(inputFields) {
    inputFields.type = "text";
 });

huisnummerInputElement.type = "number";


    container.appendChild(formContainer);
    container.appendChild(formButtonContainer);
    formButtonContainer.appendChild(submitButton);
    formContainer.appendChild(gegevensFormContainer);
    gegevensFormContainer.appendChild(columnLeftContainer);
    gegevensFormContainer.appendChild(columnMidContainer);
    gegevensFormContainer.appendChild(columnRightContainer);

    columnLeftContainer.appendChild(voorlettersLabelElement);
    columnLeftContainer.appendChild(voorlettersInputElement);
    columnLeftContainer.appendChild(voornaamLabelElement);
    columnLeftContainer.appendChild(voornaamInputElement);
    columnLeftContainer.appendChild(straatnaamLabelElement);
    columnLeftContainer.appendChild(straatnaamInputElement);
    columnLeftContainer.appendChild(postcodeLabelElement);
    columnLeftContainer.appendChild(postcodeInputElement);

    columnMidContainer.appendChild(tussenvoegselLabelElement);
    columnMidContainer.appendChild(tussenvoegselInputElement);
    columnMidContainer.appendChild(huisnummerLabelElement);
    columnMidContainer.appendChild(huisnummerInputElement);

    columnRightContainer.appendChild(achternaamLabelElement);
    columnRightContainer.appendChild(achternaamInputElement);
    columnRightContainer.appendChild(toevoegingLabelElement);
    columnRightContainer.appendChild(toevoegingInputElement);

    return container;
}

function tfc(element, innnerText, parent) {
    const el = createElement(element);
    el.innnerText = innnerText;
    parent.appendChild(el);
}

tfc("DIV", "TONY", container )
