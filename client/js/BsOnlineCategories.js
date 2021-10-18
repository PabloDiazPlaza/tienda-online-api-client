const API_URLC = 'https://whispering-brushlands-70493.herokuapp.com/'; // 'http://localhost:3000';

const createCategoryList = async() => {
    fetch(`${API_URLC}/category`)
        .then((response) => {
            return response.json();
        })
        .then((categories) => {
            categories.forEach((category) => {
                let list = document.getElementById('dropdownBD');
                list.appendChild(createDropDown(category));
            });
        });
};

function createDropDown(category) {
    // Crea un Nuevo Div y añade contenido.
    let content = document.createElement('div');
    let li = document.createElement('li');
    let a = document.createElement('a');

    // Añade el texto al div creado.
    a.setAttribute('class', 'dropdown-item', 'href', `${category.id}`);

    a.appendChild(document.createTextNode(category.name));
    content.appendChild(li);
    content.appendChild(a);
    return content;
}
createCategoryList();