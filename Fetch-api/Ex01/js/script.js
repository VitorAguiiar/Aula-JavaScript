const jsAutores = document.getElementById('autores');

//esta variavel armazena a url base do web service do randomuser

fetch('https://randomuser.me/api/?results=5')
.then((resp) => resp.json())
.then(function(data) {
    let autores = data.results;
     return autores.map(function(autor) {
        let li = createNode('li');
        let img = createNode('img');
        let span = createNode('span');
        img.src = autor.picture.medium;
        span.innerHTML = `${autor.name.first} ${autor.name.last}`;
        append(li, img);
        append(li, span);
        append(jsAutores, li);
     })
    })
    
.catch(function(error) {
    console.log(error);
});

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}
