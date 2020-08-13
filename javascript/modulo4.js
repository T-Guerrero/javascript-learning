function checaIdade (idade) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (idade >= 18)
            resolve();
        reject();
      }, 2000);  
    })
}

checaIdade(18)
.then(() => {console.log("Maior que 18")})
.catch(() => {console.log("Menor que 18")})


//##########################################################################

function addRepo(repo){
    const newElement = document.createElement('li');
    newElement.appendChild(document.createTextNode(repo.name));
    listElement.appendChild( newElement);
}

let xhr = new XMLHttpRequest();
const buttonElement = document.querySelector('button');
const inputElement = document.querySelector('input');
const listElement = document.querySelector('ul');

buttonElement.addEventListener('click', async() => {
    xhr.open('GET', `https://api.github.com/users/${inputElement.value}/repos`);
    xhr.send(null);
    let repos = [];
    
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 2 || xhr.readyState === 3){
            listElement.innerHTML = '';
            const newElement = document.createElement('li');
            newElement.appendChild(document.createTextNode('Carregando'));
            listElement.appendChild(newElement);
        }
        else if (xhr.readyState === 4 && xhr.status === 200){
            listElement.innerHTML = '';
            repos = JSON.parse(xhr.responseText);
            repos.forEach(el => {
                addRepo(el);
            });
        }
        else{
            listElement.innerHTML = '';
            console.log(xhr.responseText)
        }
    }
})