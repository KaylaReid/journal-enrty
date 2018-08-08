console.log("dope");

const formManager = require("./journalForm.js");
const dataManager = require("./dataManager");
const enrtyCards = require("./entryComponet");
const editManager = require("./editEntry");

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
    if(document.querySelector("#entryTitle").value === "" || document.querySelector("#entryContent").value === ""){
        alert("Please fill out fields");
    } else {
        // Post to API
        dataManager.saveJournalEntry(newEntry).then((result) =>{
            // clear the form fields 
            formManager.clearForm();
            
            // write to dom new entry
            document.querySelector(".entry-container").innerHTML = ""

            dataManager.getEntries().then(result =>{
                result.forEach(item =>{
                    // console.log(item);
                    document.querySelector(".entry-container").innerHTML += enrtyCards(item)
                })
            });
        });
    }
});

dataManager.getEntries().then(result =>{
    result.forEach(item =>{
        // console.log(item);
        document.querySelector(".entry-container").innerHTML += enrtyCards(item)
       

    })
});

document.querySelector(".entry-container").addEventListener("click", (e) =>{
    if(e.target.className.includes("delete-button")){
        let deleteId = e.target.className.split("--")[1]
        dataManager.deleteEntry(deleteId).then(() => {
            e.target.parentElement.remove();
        });
    }  
    if(e.target.className.includes("edit-button")){
        let editID = e.target.className.split("--")[1]
        editManager.editEntry(editID);
    }
    if(e.target.id.includes("save-button")){
        let entry = editManager.saveEditedEntry();
        let id = e.target.id.split("--")[1];
        dataManager.replaceEntry(id, entry)
        .then(() => {
            document.querySelector(".entry-container").innerHTML = "";
            dataManager.getEntries().then(result =>{
                result.forEach(item =>{
                    document.querySelector(".entry-container").innerHTML += enrtyCards(item)
                });
            });
        }); 
    }
});
