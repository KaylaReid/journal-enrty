
function saveJournalEntry(entry) {
    return fetch("http://localhost:8088/entries",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json());
}

// in this function we query the API for the data in desending order 
function getEntries() {
    return fetch("http://localhost:8088/entries?_order=desc&_sort=id")
    .then(result => result.json())
}

function deleteEntry(entryID) {
    return fetch(`http://localhost:8088/entries/${entryID}`, {
        method: "DELETE"
    })
    .then(response => response.json());
}


function replaceEntry(entryToEditID, entry) {
    return fetch(`http://localhost:8088/entries/${entryToEditID}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(response => response.json());
}

module.exports = {saveJournalEntry, getEntries, deleteEntry, replaceEntry};