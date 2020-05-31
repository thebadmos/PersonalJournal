const button = document.querySelector('#submitPost');
const counter = document.querySelector('#count');
let note = document.querySelector('main').children.length;
counter.textContent = `There are ${note} articles`;

const counterHandler = () => {
    counter.textContent = `There are ${note} articles`;
}

button.addEventListener('click', () => {
    const main = document.querySelector('main');
    let article = document.createElement('article');
    let header = document.createElement('h2');
    let parag = document.createElement('p');

    let date = new Date().toLocaleDateString()
    
    const title = prompt('Write the note title');
    const body = prompt('Write the note body');

    header.textContent = `${date}: ${title}`;
    article.appendChild(header);
    parag.textContent = body;
    article.appendChild(parag);

    main.insertBefore(article, main.firstChild);
    note = document.querySelector('main').children.length;
    counterHandler();
});