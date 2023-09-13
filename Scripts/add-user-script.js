
const addUserButton2 = document.getElementById("add-user-button");

addUserButton2.addEventListener("click", formSubmit);

function formSubmit() {

    let removeElements = document.querySelectorAll('.inside-container');
    removeElements.forEach(function (removeElements) {
        removeElements.remove();
    })

    const button = document.getElementById("form-button-change").innerText = "Verstuur";

    const button2 = document.getElementById("form-button-change").addEventListener("click", submitform);

    const button3 = document.getElementById("form-button-change").addEventListener("click", indexPagina);

}

function submitform() {
    // Gegevens ophalen van de ingevulde velden
    const voorletters = document.getElementById("voorletters").value;
    const tussenvoegsel = document.getElementById("tussenvoegsel").value;
    const achternaam = document.getElementById("achternaam").value;
    const voornaam = document.getElementById("voornaam").value;
    const straatnaam = document.getElementById("straatnaam").value;
    const huisnummer = document.getElementById("huisnummer").value;
    const toevoeging = document.getElementById("toevoeging").value;
    const postcode = document.getElementById("postcode").value;
    const woonplaats = document.getElementById("woonplaats").value;

    // Controleer of er al gegevens zijn opgeslagen in de localStorage
    let opgeslagenGegevens = JSON.parse(localStorage.getItem("gegevens")) || [];

    const uniekID = genereerUniekNummer();

    const nieuwObject = { id: uniekID, voorletters, tussenvoegsel, achternaam, voornaam, straatnaam, huisnummer, toevoeging, postcode, woonplaats };

    // Voeg de nieuwe gegevens toe aan de opgeslagen gegevens
    opgeslagenGegevens.push(nieuwObject);

    // Sla de gegevens op in de localStorage
    localStorage.setItem("gegevens", JSON.stringify(opgeslagenGegevens));

    // Wis de ingevulde velden
    document.getElementById("voorletters").value = "";
    document.getElementById("tussenvoegsel").value = "";
    document.getElementById("achternaam").value = "";
    document.getElementById("voornaam").value = "";
    document.getElementById("straatnaam").value = "";
    document.getElementById("huisnummer").value = "";
    document.getElementById("toevoeging").value = "";
    document.getElementById("postcode").value = "";
    document.getElementById("woonplaats").value = "";
}


function genereerUniekNummer() {
    let teller = parseInt(localStorage.getItem("teller")) || 0;
    teller++;
    localStorage.setItem("teller", teller.toString());
    return teller;
}



