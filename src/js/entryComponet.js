
const entryCards = (entryObject) =>{
    return `<div id="entry-id--${entryObject.id}">
            <h2>${entryObject.title}</h2>
            <h5>${entryObject.date}</h5>
            <p>${entryObject.content}</p>
            <button id="delete-button">Delete Enrty</button>
            </div>`;
};

module.exports = entryCards;