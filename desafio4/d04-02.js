var repos = [];

var inputElement = document.querySelector('div#app input[name=user]');
var buttonElement = document.querySelector('div#app button');
var listElement = document.querySelector('div#app ul');

function search(nome) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.github.com/users/' + nome + '/repos');
    xhr.send(null);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject('Usuário não encontrado!');
        }
      }
    }
  });
}

function renderList() {
  listElement.innerHTML = '';

  for(repo of repos) {
    var repoElement = document.createElement('li');
    var repoText = document.createTextNode(repo.name);

    repoElement.appendChild(repoText);
    listElement.appendChild(repoElement);
  }
}

function add() {
  var inputText = inputElement.value;

  search(inputText)
  .then(function (response) {
    repos = response;

    renderList();
  })
  .catch(function (error) {
    console.warn(error);
  });

  inputElement.value = '';
}

buttonElement.onclick = add;