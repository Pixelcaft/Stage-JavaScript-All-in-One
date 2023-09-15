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

