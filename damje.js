function createElement(type, classes, text) {
    let elem = document.createElement(String(type));
    if (classes !== undefined) {
        if (Array.isArray(classes)) {
            classes.forEach(e => {
                elem.classList.add(e)
            })
        }
        elem.classList.add(classes)

    }
    if (text !== undefined) {
        elem.innerText = text

    }
    return elem;

}

function createAlternate(startDir, events) {
    let directions = ["right", "left"]
    let pos = 2;
    if (startDir == "left") {
        directions.reverse();
    }
    var tl = document.getElementsByClassName("timeline")[0];

    for (let i = 0; i < events.length; i++) {
        tl.appendChild(createTimeCard(directions[i % pos], events[i][0], events[i][1]))

    }

}

function createTimeCard(direction, header, para) {
    let container = createContainer(direction);
    container.appendChild(createContent(header, para))
    return container;
}

function createContainer(direction) {
    return createElement("div", ["container", String(direction)]);
}

function createHeader(level, text) {
    return createElement("h" + Number(level), undefined, text);
}

function createParagraph(text) {
    return createElement("p", undefined, text);
}

function createContent(header, para) {
    let content = createElement("div", "content");
    content.appendChild(createHeader(2, header));
    content.appendChild(createParagraph(para));
    return content;
}