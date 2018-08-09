const entryCards = (entryObject) =>{
    return `<div id="entry-id--${entryObject.id}">
            <h2 id="title--${entryObject.id}">${entryObject.title}</h2>
            <h5 id="date--${entryObject.id}">${entryObject.date}</h5>
            <p id="content--${entryObject.id}">${entryObject.content}</p>
            <button class="edit-button--${entryObject.id}">Edit Enrty</button>
            <button class="delete-button--${entryObject.id}">Delete Enrty</button>
            </div>`;
};

module.exports = entryCards;