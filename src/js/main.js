console.log("dope");

const formManager = require("./journalForm.js");
const dataManager = require("./dataManager");
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
    dataManager.saveJournalEntry(newEntry)
    
    .then(() =>{
        // clear the form fields 
        formManager.clearForm();
        
        // write to dom new entry
        document.querySelector(".newest-entry").innerHTML += enrtyCards(newEntry);
    });
});

dataManager.getEntries().then(result =>{
    result.forEach(item =>{
        // console.log(item);
        document.querySelector(".entry-container").innerHTML += enrtyCards(item)
    })
});

document.querySelector(".all-entries").addEventListener("click", (e) =>{
    if(e.target.id === "delete-button"){
        let enrtyId = e.target.parentElement.id.split("--")[1]
        dataManager.deleteEntry(enrtyId).then(() => {
            e.target.parentElement.remove();
        });
    }
});
