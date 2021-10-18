const API_URL = 'https://whispering-brushlands-70493.herokuapp.com/';

const createProductList = async() => {
    const searchField = document.getElementById('search_field').value;
    var searchUrl = '';
    var clearSearch = false;
    if (searchField) {
        searchUrl = `${API_URL}/product?q=${searchField}`;
        clearSearch = true;
    } else {
        searchUrl = `${API_URL}/product`;
    }
    fetch(searchUrl)
        .then((response) => {
            if (clearSearch) {
                document.getElementById('product-list').textContent = '';
                document.getElementById('search_field').value = '';
            }
            return response.json();
        })
        .then((products) => {
            products.forEach((product) => {
                let list = document.getElementById('product-list');
                list.appendChild(createCard(product));
            });
        });
};

function createCard(product) {
    // Crea un Nuevo Div y añade contenido.
    let card = document.createElement('div');
    let content = document.createElement('div');
    let body = document.createElement('div');
    let image = document.createElement('img');
    let title = document.createElement('h7');
    let price = document.createElement('h6');
    let comprar = document.createElement('button');

    // Añade el texto al div creado.
    content.setAttribute('class', 'card h-100 ');
    card.setAttribute(
        'style',
        'margin: 16px;border: 1px solid black;',
        'class',
        'col d-flex align-items-end',
    );
    body.setAttribute(
        'class',
        'card-body',
        'style',
        'position:absolute; bottom:10%;',
    );
    title.setAttribute('class', 'card-title text-center');
    title.setAttribute('style', 'text-align:end;');
    price.setAttribute('class', 'card-text text-center');
    image.setAttribute(
        'src',
        product.url_image,
        'class',
        'card-img-top',
        'alt',
        `image-${product.name}`,
    );
    image.setAttribute('class', 'card-img-top');
    image.setAttribute('alt', `image-${product.name}`);
    title.appendChild(document.createTextNode(product.name));
    price.appendChild(
        document.createTextNode(`$${product.price - product.discount}`),
    );
    comprar.setAttribute('class', 'btn btn-outline-success', 'type', 'button');
    comprar.innerHTML = 'Compar';
    body.appendChild(title);
    body.appendChild(price);
    content.appendChild(image);
    content.appendChild(body);
    body.appendChild(comprar);
    card.appendChild(content);
    return card;
}
createProductList();