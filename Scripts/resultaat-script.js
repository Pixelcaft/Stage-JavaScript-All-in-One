const opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

for (var i = 0; i < opgeslagenGegevens.length; i++) {

    addUser(opgeslagenGegevens[i])
}
 
function addUser(user) {

    const infoContainer = document.getElementById("info-container").className = "container";

    console.log(user)

    const userListElement = document.getElementById("info-container");

    if (userListElement != null) {
        // maak de div en zet het op de website
        const divElement = document.createElement("DIV");

        const hElement = document.createElement("DIV");

        const buttonDevElement = document.createElement("DIV")
        
        const deleteButtonElement = document.createElement("BUTTON");
        
        const changeButtonElement = document.createElement("BUTTON");

        const readButtonElement = document.createElement("Button");
        
        deleteButtonElement.setAttribute("id", user.id);

        changeButtonElement.setAttribute("id", user.id);

        readButtonElement.setAttribute("id", user.id);

        deleteButtonElement.innerHTML = `
        <i class="fa fa-trash" aria-hidden="true"></i>
    `;

        changeButtonElement.innerHTML = `
        <i class="fa fa-pencil" aria-hidden="true"></i>
    `;

    readButtonElement.innerHTML = `
    <i class="fa fa-info" aria-hidden="true"></i>
`;

        deleteButtonElement.className += 'delete-button';

        changeButtonElement.className += 'change-button';

        readButtonElement.className += 'read-button';

        divElement.className += 'inside-container';


        hElement.className += 'view-text';

        hElement.innerHTML = user.voorletters + " " + user.tussenvoegsel + " " + user.achternaam;

        divElement.appendChild(hElement);

        buttonDevElement.appendChild(readButtonElement);

        buttonDevElement.appendChild(changeButtonElement);
        
        buttonDevElement.appendChild(deleteButtonElement);

       

        divElement.appendChild(buttonDevElement);
        

        userListElement.appendChild(divElement);

        deleteButtonElement.addEventListener('click', onDeleteButtonClick);
        changeButtonElement.addEventListener('click', onChangeButtonClick);
        readButtonElement.addEventListener('click', onReadButtonClick);

    }

}


function onDeleteButtonClick(event) {
    const userId = event.currentTarget.id;
    console.log(`Delete button clicked for user with ID: ${userId}`);
    console.log(userId);

    // Zoek het object in opgeslagenGegevens op basis van userId
    const userToRemove = opgeslagenGegevens.find(user => user.id == userId);
    // console.log(userToRemove);
    console.log(opgeslagenGegevens);

    if (userToRemove) {

        const userIndexToRemove = opgeslagenGegevens.indexOf(userToRemove);

        // Verwijder het object op basis van de gevonden index
        opgeslagenGegevens.splice(userIndexToRemove, 1);
        console.log(`User with ID ${userId} removed.`);

        // Bijwerken van localStorage
         localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));

        const parentDiv = event.currentTarget.parentNode.parentNode;
        parentDiv.remove();
    
    
    }
}


function onChangeButtonClick(event) {

    clearUrl();

    form();

    changeButton = document.getElementById('form-button-change').id = 'change-submit';

    const button = document.getElementById("change-submit").innerText = "Terug";

    activateChangeUserScript();

}

function onReadButtonClick(event) {

    clearUrl();

    form();

    changeButton = document.getElementById('form-button-change').id = 'change-submit';

    const button = document.getElementById("change-submit").innerText = "Terug";

    activateInfoScript();
}

function clearUrl() {
    const userId = event.currentTarget.id;

    let  currentUrl = window.location.href;

    let clearUrl = currentUrl.split('?')[0];

    let newUrl = clearUrl + `?activate=true&id=${userId}`;

    history.pushState({}, '', newUrl);
}
 