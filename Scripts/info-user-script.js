


function activateInfoScript() {

    let removeElements = document.querySelectorAll('.inside-container');
    removeElements.forEach(function (removeElements) {
        removeElements.remove();
    })

    const changeButtonNameInfo = document.getElementById('add-user-button').innerText = 'Info User';

    // Selecteer alle inputelementen op de pagina
    let inputElements = document.querySelectorAll('input');

    // Loop door de geselecteerde inputelementen en maak ze readonly
    inputElements.forEach(function (inputElement) {
        inputElement.setAttribute('readonly', true);
    });

    const returnButton = document.getElementById('change-submit');

    returnButton.addEventListener("click", indexPagina);

    const urlParams = new URLSearchParams(window.location.search);

    const userId = urlParams.get("id");

    let gegevens = JSON.parse(localStorage.getItem("gegevens")) || [];
    console.log("Waarde van 'id' parameter:", userId);

    const userToChange = gegevens.find(user => user.id == userId);

    console.log("de goed user:", userToChange)

    document.getElementById("voorletters").value = userToChange.voorletters;
    document.getElementById("tussenvoegsel").value = userToChange.tussenvoegsel;
    document.getElementById("achternaam").value = userToChange.achternaam;
    document.getElementById("voornaam").value = userToChange.voornaam;
    document.getElementById("huisnummer").value = userToChange.huisnummer;
    document.getElementById("toevoeging").value = userToChange.toevoeging;
    document.getElementById("straatnaam").value = userToChange.straatnaam;
    document.getElementById("postcode").value = userToChange.postcode;
    document.getElementById("woonplaats").value = userToChange.woonplaats;
};