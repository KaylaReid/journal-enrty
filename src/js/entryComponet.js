
const enrtyCards = (title, date, content) =>{
    return `<h2>${title}</h2>
            <h5>${date}</h5>
            <p>${content}</p>
            <button id="delete-button">Delete Enrty</button>`;
};

module.exports = enrtyCards;