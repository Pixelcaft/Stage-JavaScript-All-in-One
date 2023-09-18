const addUserButton = document.getElementById("add-user-button");

addUserButton.addEventListener("click", form);

let formisgemaakt = false;

function form() {

    const infoContainerRemoveClass = document.getElementById("info-container").className = "";

    const infoListElement = document.getElementById("info-container");

    console.log(formisgemaakt);

    if (!formisgemaakt) {

        formisgemaakt = true;
        console.log(formisgemaakt);

        if (infoListElement != null) {

            const {
                formElement,

                buttonElement,

                formButtonElement,
                gegevensDivElement,
                linksDivElement,
                middenDivElement,
                rechtsDivElement,

                voorlettersDivElement,
                voorlettersLabelElement,
                voorlettersInputElement,

                voornaamDivElement,
                voornaamLabelElement,
                voornaamInputElement,

                straatnaamDivElement,
                straatnaamLabelElement,
                straatnaamInputElement,

                postcodeDivElement,
                postcodeLabelElement,
                postcodeInputElement,

                woonplaatsDivElement,
                woonplaatsLabelElement,
                woonplaatsInputElement,

                tussenvoegselDivElement,
                tussenvoegselLabelElement,
                tussenvoegselInputElement,

                huisnummerDivElement,
                huisnummerLabelElement,
                huisnummerInputElement,

                achternaamDivElement,
                achternaamLabelElement,
                achternaamInputElement,

                toevoegingDivElement,
                toevoegingLabelElement,
                toevoegingInputElement
            } = createElement();



            infoListElement.appendChild(formElement);

            infoListElement.appendChild(formButtonElement);

            formButtonElement.appendChild(buttonElement);

            formElement.appendChild(gegevensDivElement);

            gegevensDivElement.appendChild(linksDivElement);

            gegevensDivElement.appendChild(middenDivElement);

            gegevensDivElement.appendChild(rechtsDivElement);


            voorlettersDivElement.appendChild(voorlettersLabelElement);

            voorlettersDivElement.appendChild(voorlettersInputElement);

            linksDivElement.appendChild(voorlettersDivElement);


            voornaamDivElement.appendChild(voornaamLabelElement);

            voornaamDivElement.appendChild(voornaamInputElement);

            linksDivElement.appendChild(voornaamDivElement);


            straatnaamDivElement.appendChild(straatnaamLabelElement);

            straatnaamDivElement.appendChild(straatnaamInputElement);

            linksDivElement.appendChild(straatnaamDivElement);


            postcodeDivElement.appendChild(postcodeLabelElement);

            postcodeDivElement.appendChild(postcodeInputElement);

            linksDivElement.appendChild(postcodeDivElement);


            woonplaatsDivElement.appendChild(woonplaatsLabelElement);

            woonplaatsDivElement.appendChild(woonplaatsInputElement);

            linksDivElement.appendChild(woonplaatsDivElement);


            tussenvoegselDivElement.appendChild(tussenvoegselLabelElement);

            tussenvoegselDivElement.appendChild(tussenvoegselInputElement);

            middenDivElement.appendChild(tussenvoegselDivElement);


            huisnummerDivElement.appendChild(huisnummerLabelElement);

            huisnummerDivElement.appendChild(huisnummerInputElement);

            middenDivElement.appendChild(huisnummerDivElement);


            achternaamDivElement.appendChild(achternaamLabelElement);

            achternaamDivElement.appendChild(achternaamInputElement);

            rechtsDivElement.appendChild(achternaamDivElement);


            toevoegingDivElement.appendChild(toevoegingLabelElement);

            toevoegingDivElement.appendChild(toevoegingInputElement);

            rechtsDivElement.appendChild(toevoegingDivElement);


        }
    }
}



function createElement() {

    const formElement = document.createElement("FORM");

    const formButtonElement = document.createElement("DIV");

    const buttonElement = document.createElement("BUTTON");

    const gegevensDivElement = document.createElement("DIV");

    const linksDivElement = document.createElement("DIV");

    const middenDivElement = document.createElement("DIV");

    const rechtsDivElement = document.createElement("Div");

    formButtonElement.className += 'form-button';

    buttonElement.className += 'submit';

    gegevensDivElement.className += 'gegevens-formulier';

    linksDivElement.className += 'links';

    middenDivElement.className += 'midden';

    rechtsDivElement.className += 'rechts';

    buttonElement.id = 'form-button-change';


    // ========================INPUT AND LABEL/DIVS==============================================


    // --------------------------LINKS-----------------------------------------------------------------

    const voorlettersDivElement = document.createElement("DIV");

    const voornaamDivElement = document.createElement("DIV");

    const straatnaamDivElement = document.createElement("DIV");

    const postcodeDivElement = document.createElement("DIV");

    const woonplaatsDivElement = document.createElement("DIV");


    const voorlettersLabelElement = document.createElement("LABEL");

    const voornaamLabelElement = document.createElement("LABEL");

    const straatnaamLabelElement = document.createElement("LABEL");

    const postcodeLabelElement = document.createElement("LABEL");

    const woonplaatsLabelElement = document.createElement("LABEL");


    voorlettersLabelElement.textContent = 'Voorletters';

    voornaamLabelElement.textContent = 'Voornaam';

    straatnaamLabelElement.textContent = 'Straatnaam';

    postcodeLabelElement.textContent = 'Postcode';

    woonplaatsLabelElement.textContent = 'Woonplaats';


    const voorlettersInputElement = document.createElement("INPUT");

    const voornaamInputElement = document.createElement("INPUT");

    const straatnaamInputElement = document.createElement("INPUT");

    const postcodeInputElement = document.createElement("INPUT");

    const woonplaatsInputElement = document.createElement("INPUT");


    voorlettersInputElement.placeholder = "Voorletters...";

    voornaamInputElement.placeholder = "Voornaam...";

    straatnaamInputElement.placeholder = "Straatnaam...";

    postcodeInputElement.placeholder = "Postcode...";

    woonplaatsInputElement.placeholder = "Woonplaats...";


    voorlettersInputElement.setAttribute("type", "text");

    voornaamInputElement.setAttribute("type", "text");

    straatnaamInputElement.setAttribute("type", "text");

    postcodeInputElement.setAttribute("type", "text");

    woonplaatsInputElement.setAttribute("type", "text");


    voorlettersInputElement.id = 'voorletters';

    voornaamInputElement.id = 'voornaam';

    straatnaamInputElement.id = 'straatnaam';

    postcodeInputElement.id = 'postcode';

    woonplaatsInputElement.id = 'woonplaats'




    // ------------------LINKS EINDE-------------------------------------------------------------
    // ------------------MIDDEN-------------------------------------------------------------

    const tussenvoegselDivElement = document.createElement("DIV");

    const huisnummerDivElement = document.createElement("DIV");


    const tussenvoegselLabelElement = document.createElement("LABEL");

    const huisnummerLabelElement = document.createElement("LABEL");


    tussenvoegselLabelElement.textContent = 'Tussenvoegsel';

    huisnummerLabelElement.textContent = 'huisnummer';


    const tussenvoegselInputElement = document.createElement("INPUT");

    const huisnummerInputElement = document.createElement("INPUT");


    tussenvoegselInputElement.placeholder = "Tussenvoegsel...";

    huisnummerInputElement.placeholder = "Huisnummer...";


    tussenvoegselInputElement.setAttribute("type", "text");

    huisnummerInputElement.setAttribute("type", "number");


    tussenvoegselInputElement.id = 'tussenvoegsel';

    huisnummerInputElement.id = 'huisnummer';

    // ------------------MIDDEN EINDE-------------------------------------------------------------
    // ------------------RECHTS-------------------------------------------------------------

    const achternaamDivElement = document.createElement("DIV");

    const toevoegingDivElement = document.createElement("DIV");


    const achternaamLabelElement = document.createElement("LABEL");

    const toevoegingLabelElement = document.createElement("LABEL");


    achternaamLabelElement.textContent = 'Achternaam';

    toevoegingLabelElement.textContent = 'Toevoeging';


    const achternaamInputElement = document.createElement("INPUT");

    const toevoegingInputElement = document.createElement("INPUT");


    achternaamInputElement.placeholder = "Achternaam...";

    toevoegingInputElement.placeholder = "Toevoeging...";


    achternaamInputElement.setAttribute("type", "text");

    toevoegingInputElement.setAttribute("type", "text");


    achternaamInputElement.id = 'achternaam';

    toevoegingInputElement.id = 'toevoeging';

    // ------------------RECHTS EINDE-------------------------------------------------------------

    return {
        formElement,

        buttonElement,

        formButtonElement,
        gegevensDivElement,
        linksDivElement,
        middenDivElement,
        rechtsDivElement,

        voorlettersDivElement,
        voorlettersLabelElement,
        voorlettersInputElement,

        voornaamDivElement,
        voornaamLabelElement,
        voornaamInputElement,

        straatnaamDivElement,
        straatnaamLabelElement,
        straatnaamInputElement,

        postcodeDivElement,
        postcodeLabelElement,
        postcodeInputElement,

        woonplaatsDivElement,
        woonplaatsLabelElement,
        woonplaatsInputElement,

        tussenvoegselDivElement,
        tussenvoegselLabelElement,
        tussenvoegselInputElement,

        huisnummerDivElement,
        huisnummerLabelElement,
        huisnummerInputElement,

        achternaamDivElement,
        achternaamLabelElement,
        achternaamInputElement,

        toevoegingDivElement,
        toevoegingLabelElement,
        toevoegingInputElement
    };
}

