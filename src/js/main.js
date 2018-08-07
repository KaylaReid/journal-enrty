console.log("dope");

const formManager = require("./journalForm.js");
const saveJournalEntry = require("./dataManager");
const enrtyCards = require("./entryComponet");

document.querySelector(".form").innerHTML = formManager.makeForm();


const saveButton = document.querySelector("#add-entry-btn");
saveButton.addEventListener("click", () =>{
    
    // get form field values 
    // create object out of it
    // add timestamp

    const newEntry = {
        title: document.querySelector("#entryTitle").value,
        content: document.querySelector("#entryContent").value,
        date: Date(Date.now())
    };

    // Post to API
    saveJournalEntry(newEntry)
    
    .then(() =>{
        // clear the form fields 
        formManager.clearForm();
        
        // write to dom do tonight, maybe
        document.querySelector(".entry-container").innerHTML += enrtyCards(newEntry.title, newEntry.date, newEntry.content);
    });
});
