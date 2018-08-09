console.log("dope");

const formManager = require("./journalForm.js");
const dataManager = require("./dataManager");
const enrtyCards = require("./entryComponet");
const editManager = require("./editEntry");
const $ = require("jquery");

$(".form").html(formManager.makeForm());

const $saveButton = $("#add-entry-btn");
$saveButton.click(() =>{
    const $newEntry = {
        title: $("#entryTitle").val(),
        content: $("#entryContent").val(),
        date: Date(Date.now())
    };
    if($("#entryTitle").val() === "" || $("#entryContent").val() === ""){
        alert("Please make an enrty before saving!");
    } else {
        // Post to API
        dataManager.saveJournalEntry($newEntry).then((result) =>{
            // clear the form fields 
            formManager.clearForm();
            $(".entry-container").html("")

            dataManager.getEntries().then(result =>{
                result.forEach(item =>{
                    $(".entry-container").append(enrtyCards(item))
                })
            });
        });
    }
});

dataManager.getEntries().then(result =>{
    result.forEach(item =>{
        $(".entry-container").append(enrtyCards(item))
    })
});

$(".entry-container").click((e) =>{
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
            $(".entry-container").html("");
            dataManager.getEntries().then(result =>{
                result.forEach(item =>{
                    $(".entry-container").append(enrtyCards(item))
                });
            });
        }); 
    }
});
