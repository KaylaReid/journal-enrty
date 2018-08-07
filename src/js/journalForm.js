"use strict";

const formManager = Object.create(null, {
    clearForm: {
        value: () => {
            document.querySelector("#entryTitle").value = "";
            document.querySelector("#entryContent").value = "";
        }
    },
    makeForm: {
        value: () => {
            return `<h2>Make a New Entry</h2>
            <input type="text" placeholder="Title of Entry" id="entryTitle" required>
            <textarea placeholder="What's on your mind?" id="entryContent"></textarea>
            <button id="add-entry-btn">Add Your Thoughts</button>`;
        }
    }
});

module.exports = formManager;