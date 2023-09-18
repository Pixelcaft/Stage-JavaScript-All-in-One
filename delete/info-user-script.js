function activateInfoScript() {



    const changeButtonNameInfo = document.getElementById('add-user-button').innerText = 'Info Persoon';

    let inputElements = document.querySelectorAll('input');

    inputElements.forEach(function (inputElement) {
        inputElement.setAttribute('readonly', true);
    });

    const returnButton = document.getElementById('change-submit');

    // returnButton.addEventListener("click", indexPagina);

    const urlParams = new URLSearchParams(window.location.search);

    const userId = urlParams.get("id");

    let gegevens = JSON.parse(localStorage.getItem("gegevens")) || [];
    console.log("Waarde van 'id' parameter:", userId);

    const userToChange = gegevens.find(user => user.id == userId);

    console.log("de goed user:", userToChange)

    // document.getElementById("voorletters").value = userToChange.voorletters;
    // document.getElementById("tussenvoegsel").value = userToChange.tussenvoegsel;
    // document.getElementById("achternaam").value = userToChange.achternaam;
    // document.getElementById("voornaam").value = userToChange.voornaam;
    // document.getElementById("huisnummer").value = userToChange.huisnummer;
    // document.getElementById("toevoeging").value = userToChange.toevoeging;
    // document.getElementById("straatnaam").value = userToChange.straatnaam;
    // document.getElementById("postcode").value = userToChange.postcode;
    // document.getElementById("woonplaats").value = userToChange.woonplaats;


    return userToChange;
};


function informationUserPlace() {

    formRemove();

    const infoListElement = document.getElementById("info-container");

    const {
        infoElement,
        infoDivButtonElement,
        infoHeaderElement,
        buttonInfoElement

    } = createInfoElement();

    infoListElement.appendChild(infoElement);

    infoListElement.appendChild(infoDivButtonElement);

    infoListElement.appendChild(infoHeaderElement);

    infoDivButtonElement.appendChild(buttonInfoElement);

}


function createInfoElement() {

    const userToChange = activateInfoScript();

    const infoElement = document.createElement("DIV");

    const infoDivButtonElement = document.createElement("DIV")

    const infoHeaderElement = document.createElement("H1");

    const buttonInfoElement = document.createElement("BUTTON")

    infoDivButtonElement.className += 'information-button'

    buttonInfoElement.className += 'back-button';

    buttonInfoElement.innerHTML = 'Terug';

    buttonInfoElement.id = 'back-button'

    infoElement.className += 'information-view-text';

    infoElement.innerHTML = userToChange.voornaam + " " + 
    userToChange.tussenvoegsel + " " + userToChange.achternaam + "<br> " + 
    userToChange.straatnaam + " " + userToChange.huisnummer + " " + userToChange.toevoeging + "<br>" + 
    userToChange.postcode + " " + userToChange.woonplaats;


    return {
        infoElement,
        infoDivButtonElement,
        infoHeaderElement,
        buttonInfoElement
    }
}