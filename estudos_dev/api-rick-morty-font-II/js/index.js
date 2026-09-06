let currentPage = 1;
let totalPages;

function getCharacterData(page, name) {
  var url = "https://rickandmortyapi.com/api/character?page=" + page;
  if (name) {
    url += "&name=" + name;
  }

  axios
    .get(url)
    .then(function (response) {
      var data = response.data;
      totalPages = data.info.pages;

      // Chama a função para criar os cards dos personagens
      createCharacterCards(data.results);
      createPaginationButtons();
      createPaginationButtons();
    })
    .catch(function (error) {
      console.log("Ocorreu um erro: ", error);
    });
}

// Função para lidar com o evento de digitar no campo de pesquisa
function handleSearch(event) {
  var name = event.target.value;
  currentPage = 1; // Reinicia a página para a primeira ao fazer uma nova pesquisa
  getCharacterData(currentPage, name);
}

// Adiciona evento ao campo de pesquisa
var searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", handleSearch);


function createCharacterCards(characters) {
  const characterList = document.getElementById("character-list");
  characterList.innerHTML = "";

  // Percorre a lista de personagens e cria os cards
  characters.forEach(function (character) {
    const card = document.createElement("div");
    card.className = "card";

    const characterImage = document.createElement("img");
    characterImage.src = character.image;
    characterImage.alt = "Imagem de " + character.name;

    const cardContent = document.createElement("div");
    cardContent.className = "card-content";

    const characterName = document.createElement("h2");
    characterName.textContent = character.name;

    const characterStatus = document.createElement("h3");
    characterStatus.textContent = "Status: " + character.status;

    const characterNameLoc = document.createElement("h4");
    characterNameLoc.textContent = "Última Localização:";

    const characterLocation = document.createElement("h4");
    characterLocation.textContent = character.location.name;
    characterLocation.style.color = "black";

    const characterNameAppearance = document.createElement("h5");
    characterNameAppearance.textContent = "Visto pela primeira vez em:";
    characterNameAppearance.style.paddingTop = "30px";

    const characterFirstAppearance = document.createElement("p");
    characterFirstAppearance.textContent = character.origin.name;
    // characterFirstAppearance.style.color = "black";
    characterFirstAppearance.style.fontWeight = "bold";

    cardContent.appendChild(characterName);
    cardContent.appendChild(characterStatus);
    cardContent.appendChild(characterNameLoc);
    cardContent.appendChild(characterLocation);
    cardContent.appendChild(characterNameAppearance);
    cardContent.appendChild(characterFirstAppearance);
    card.appendChild(characterImage);
    card.appendChild(cardContent);

    characterList.appendChild(card);
  });
}

// Função para criar os botões de paginação
function createPaginationButtons() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.className = "page-btn";
    button.dataset.page = i;
    button.addEventListener("click", goToPage);

    paginationContainer.appendChild(button);
  }
}

// Função para ir para uma página específica
function goToPage(event) {
  const page = parseInt(event.target.dataset.page);
  if (!isNaN(page) && page !== currentPage) {
    currentPage = page;
    getCharacterData(currentPage);
  }
}

// Chama a função para obter os dados dos personagens ao carregar a página
window.onload = function () {
  getCharacterData(currentPage);
};
