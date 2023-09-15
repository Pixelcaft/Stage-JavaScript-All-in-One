
const addUserButton2 = document.getElementById("add-user-button");

addUserButton2.addEventListener("click", formSubmit);

function formSubmit() {

    let removeElements = document.querySelectorAll('.inside-container');
    removeElements.forEach(function (removeElements) {
        removeElements.remove();
    })

    form();

    const button = document.getElementById("form-button-change").innerText = "Verstuur";

    const button2 = document.getElementById("form-button-change").addEventListener("click", submitform);

    const button3 = document.getElementById("form-button-change").addEventListener("click", indexPagina);

}

function submitform() {
    const voorlettersElement = getElement('voorletters');
    if (voorlettersElement) {
        const voorletters = voorlettersElement.value
    }
    // const voorletters = document.getElementById("voorletters").value;
    const tussenvoegsel = document.getElementById("tussenvoegsel").value;
    const achternaam = document.getElementById("achternaam").value;
    const voornaam = document.getElementById("voornaam").value;
    const straatnaam = document.getElementById("straatnaam").value;
    const huisnummer = document.getElementById("huisnummer").value;
    const toevoeging = document.getElementById("toevoeging").value;
    const postcode = document.getElementById("postcode").value;
    const woonplaats = document.getElementById("woonplaats").value;

    let opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

    const uniekID = genereerUniekNummer();

    const nieuwObject = { id: uniekID, voorletters, tussenvoegsel, achternaam, voornaam, straatnaam, huisnummer, toevoeging, postcode, woonplaats };

    opgeslagenGegevens.push(nieuwObject);

    localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));

}


function genereerUniekNummer() {
    let teller = parseInt(localStorage.getItem("teller")) || 0;
    teller++;
    localStorage.setItem("teller", teller.toString());
    return teller;
}






function getElement(id) {

    return document.getElementById(id)

}


