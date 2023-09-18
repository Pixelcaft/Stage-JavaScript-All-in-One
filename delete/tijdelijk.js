const testDiv = document.getElementById('test');
if (testDiv) {
    const firstNameElement = createFormField('firstName', 'firstName');
    addClass(firstNameElement, 'test');
    testDiv.appendChild(firstNameElement);
}

function createElement2(element) {
    return document.createElement(element);
}

function addClass(element, classStr) {
    element.className += (' ' + classStr);
}

function createFormField(label, id) {
    const container = createElement2("DIV")
    const input = createElement2("INPUT");
    const labelElement = createElement2("LABEL");
    labelElement.innerText = label;
    input.id = id;
    console.log(input);
    // const container = document.getElementById('test');

    container.appendChild(labelElement);
    container.appendChild(input);
    return container;
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

    inputFields.forEach(function (inputFields) {
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

    tfc("BUTTON", "", container);

    return container;
}












function createUserList(text, id) {
    const container = createElement("DIV");
    const textContainer = createElement("DIV");
    const buttonContainer = createElement("DIV")

    const deleteButton = createElement("BUTTON", id);
    const changeButton = createElement("BUTTON", id);
    const infoButton = createElement("BUTTON", id);

    addClass(deleteButton, 'delete-button');
    addClass(changeButton, 'change-button');
    addClass(infoButton, 'read-button');
    addClass(textContainer, 'view-text');

    textContainer.innerHTML = text;

    // deleteButton.id = id;
    // changeButton.id = id;
    // infoButton.id = id;

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






const firstname = document.querySelector('[data-user-id="firstname"]').value;
const infix = document.querySelector('[data-user-id="infix"]').value;
const lastname = document.querySelector('[data-user-id="lastname"]').value;
const streetname = document.querySelector('[data-user-id="streetname"]').value;
const residence = document.querySelector('[data-user-id="residence"]').value;
const housenumber = document.querySelector('[data-user-id="housenumber"]').value;
const addition = document.querySelector('[data-user-id="addition"]').value;
const postalcode = document.querySelector('[data-user-id="postalcode"]').value;










const voornaam = document.querySelector('[data-user-id="voornaam"]').value;
const tussenvoegsel = document.querySelector('[data-user-id="tussenvoegsel"]').value;
const achternaam = document.querySelector('[data-user-id="achternaam"]').value;
const straatnaam = document.querySelector('[data-user-id="straatnaam"]').value;
const woonplaats = document.querySelector('[data-user-id="woonplaats"]').value;
const huisnummer = document.querySelector('[data-user-id="huisnummer"]').value;
const toevoeging = document.querySelector('[data-user-id="toevoeging"]').value;
const postcode = document.querySelector('[data-user-id="postcode"]').value;



    // const voorlettersElement = getElement('voorletters');
    // if (voorlettersElement) {
    //     const voorletters = voorlettersElement.value
    // }


voorletters => voornaam
voornaam => straatnaam
straatnaam => woonplaats