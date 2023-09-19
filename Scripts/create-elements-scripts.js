const infoContainer = document.getElementById('info-container');

// savedat => userData
const saveData = JSON.parse(localStorage.getItem("data")) || [];
const data = JSON.parse(localStorage.getItem("data")) || [];

init();

function init() {
    addUsers();
}

function addUser(user) {
    if (infoContainer) {
        const userText = user.firstname + " " + user.infix + " " + user.lastname;
        const userListElement = createUserList(userText, user.id);

        addClass(userListElement, 'inside-container');
        infoContainer.appendChild(userListElement);
    }
}

function addUsers() {
    for (var i = 0; i < saveData.length; i++) {
        addUser(saveData[i])
    }
}

function removeUserList() {
    let removeElements = document.querySelectorAll('.inside-container');
    removeElements.forEach(function (removeElements) {
        removeElements.remove();
    })

    if (getElement("add-user-button")) {

        let removeButtonElement = getElement("add-user-button");
        removeButtonElement.remove();
    }
}





function showUserDetailsComponent(userId) {
    if (userId) {
        const user = saveData.find(user => user.id == userId);
        if (user) {
            if (infoContainer) {
                    const textElement = document.getElementById("info-page");
                    if (textElement) {
                        textElement.innerHTML = "Info User";

                        const userText = user.firstname + " " +

                        user.infix + " " + user.lastname + "<br> " +
                        user.streetname + " " + user.housenumber + " " + user.addition + "<br>" +
                        user.postalcode + " " + user.residence;
        
                    const userInfoElement = createUserDetailsComponent(userText, 'annuleren-button');
        
                    infoContainer.appendChild(userInfoElement);     
                    }                   
            }
        }
    }


}

function addClass(element, classStr) {
    element.className += (' ' + classStr);
}

function createElement(element, dataset = null) {
    const el = document.createElement(element);
    if (dataset) {
        el.dataset.userId = dataset
    }
    return el;
}

function createHtmlElement(element, parent, innnerText = "", type = "", dataset = null) {
    const el = createElement(element, dataset);
    parent.appendChild(el);
    el.textContent = innnerText;
    if (type) {
        el.type = type;
    }
    return el;
}
function createUserDetailsComponent(text) {
    const container = createElement("DIV");
    const textContainer = createElement("DIV");
    const buttonContainer = createElement("DIV");

    addClass(textContainer, 'information-view-text');
    addClass(buttonContainer, 'information-button');

    textContainer.innerHTML = text;

    container.appendChild(textContainer);
    container.appendChild(buttonContainer);
    return container;
}

function createUserList(text, dataset) {
    const container = createElement("DIV");
    const textContainer = createHtmlElement("DIV", container);
    const buttonContainer = createHtmlElement("DIV", container)

    const infoButton = createHtmlElement("BUTTON", buttonContainer, "", "", dataset);
    const changeButton = createHtmlElement("BUTTON", buttonContainer, "", "", dataset);
    const deleteButton = createHtmlElement("BUTTON", buttonContainer, "", "", dataset);

    addClass(deleteButton, 'delete-button');
    addClass(changeButton, 'change-button');
    addClass(infoButton, 'read-button');
    addClass(textContainer, 'view-text');

    textContainer.innerHTML = text;

    deleteButton.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
    changeButton.innerHTML = `<i class="fa fa-pencil" aria-hidden="true"></i>`;
    infoButton.innerHTML = `<i class="fa fa-info" aria-hidden="true"></i>`;

    deleteButton.addEventListener('click', deleteUser);
    changeButton.addEventListener('click', updateUser);
    infoButton.addEventListener('click', showUserDetails);

    return container;
}

// createform... => createUserForm
function createUserForm() {

    const container = createElement("DIV");

    const formContainer = createHtmlElement("FORM", container);
    const dataFormContainer = createHtmlElement("DIV", formContainer);
    const columnLeftContainer = createHtmlElement("DIV", dataFormContainer);
    const columnMidContainer = createHtmlElement("DIV", dataFormContainer);
    const columnRightContainer = createHtmlElement("DIV", dataFormContainer);
    const formButtonContainer = createHtmlElement("DIV", container);
    const submitButton = createHtmlElement("BUTTON", formButtonContainer);

    const firstnameLabelElement = createHtmlElement("LABEL", columnLeftContainer, "firstname")
    const firstnameInputElement = createHtmlElement("INPUT", columnLeftContainer, "", "text", "firstname")
    const streetnameLabelElement = createHtmlElement("LABEL", columnLeftContainer, "street name")
    const streetnameInputElement = createHtmlElement("INPUT", columnLeftContainer, "", "text", "streetname")
    const residenceLabelElement = createHtmlElement("LABEL", columnLeftContainer, "residence")
    const residenceInputElement = createHtmlElement("INPUT", columnLeftContainer, "", "text", "residence")
    const postalcodeLabelElement = createHtmlElement("LABEL", columnLeftContainer, "postal code")
    const postalcodeInputElement = createHtmlElement("INPUT", columnLeftContainer, "", "text", "postalcode")
    const infixLabelElement = createHtmlElement("LABEL", columnMidContainer, "infix")
    const infixInputElement = createHtmlElement("INPUT", columnMidContainer, "", "text", "infix")
    const housenumberLabelElement = createHtmlElement("LABEL", columnMidContainer, "house number")
    const housenumberInputElement = createHtmlElement("INPUT", columnMidContainer, "", "number", "housenumber")
    const lastnameLabelElement = createHtmlElement("LABEL", columnRightContainer, "lastname")
    const lastnameInputElement = createHtmlElement("INPUT", columnRightContainer, "", "text", 'lastname')
    const additionLabelElement = createHtmlElement("LABEL", columnRightContainer, "addition")
    const additionInputElement = createHtmlElement("INPUT", columnRightContainer, "", "text", 'addition')

    addClass(dataFormContainer, 'data-form');
    addClass(columnLeftContainer, 'left-column');
    addClass(columnMidContainer, 'mid-column');
    addClass(columnRightContainer, 'right-column');
    addClass(formButtonContainer, 'form-button');
    addClass(submitButton, 'submit');

    submitButton.id = 'form-submit';
    submitButton.innerHTML = 'Submit';
    submitButton.name = 'submit';


    if (infoContainer) {
        infoContainer.className = '';
        infoContainer.appendChild(container);
    }
}

