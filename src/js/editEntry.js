function saveEditedEntry(){
    let newEntry = {
        title: document.querySelector("#edited-title").value,
        content: document.querySelector("#edited-content").value,
        date: `Edited - ${Date(Date.now())}`
    };
    return newEntry
}

function editEntry(ID) {
    document.querySelector(`.edit-button--${ID}`).remove();
    let deleteButton = document.querySelector(`.delete-button--${ID}`)
    let newButton = document.createElement("button")
    newButton.setAttribute("id", `save-button--${ID}`)
    newButton.textContent = "Save changes"
    document.querySelector(`#entry-id--${ID}`).insertBefore(newButton, deleteButton)
    const enrtyCard = document.querySelector(`#entry-id--${ID}`);
    let saveButton = document.querySelector(`#save-button--${ID}`);
    let title = document.querySelector(`#title--${ID}`);
    let content = document.querySelector(`#content--${ID}`);
    let date = document.querySelector(`#date--${ID}`);
    let titleText = title.textContent;
    let contentText = content.textContent;
    console.log(titleText, contentText);
    title.remove();
    content.remove();
    let input = document.createElement("input");
    input.type = "text";
    input.value = titleText;
    input.id = "edited-title"
    enrtyCard.insertBefore(input, date);
    let textArea = document.createElement("textarea");
    textArea.textContent = contentText;
    textArea.id = "edited-content";
    enrtyCard.insertBefore(textArea, saveButton);
}

module.exports = {editEntry, saveEditedEntry};