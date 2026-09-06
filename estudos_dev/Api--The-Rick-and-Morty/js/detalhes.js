// Recupera o ID do personagem armazenado na sessionStorage
const personagemId = sessionStorage.getItem("personagemId");

// Verifica se o ID do personagem existe na sessionStorage
if (personagemId) {
  // Função para buscar os detalhes do personagem pelo ID
  async function buscarDetalhesPersonagem(personagemId) {
    try {
      const resposta = await axios.get(
        `https://rickandmortyapi.com/api/character/${personagemId}`
      );
      return resposta.data;
    } catch (erro) {
      console.log(erro);
    }
  }

  // Função para renderizar o card com os detalhes do personagem
  async function renderizarCardPersonagem (personagem) {
    // Cria a div do card
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "card w-50 col-12 col-md-6 col-lg-4");

    // Cria a imagem do card
    const imgCard = document.createElement("img");
    imgCard.setAttribute("class", "card-img rounded-top-4 w-75");
    imgCard.setAttribute("src", personagem.image);
    imgCard.setAttribute("alt", personagem.name);

    // Cria o corpo do card
    const divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    // Cria o título do card
    const h5 = document.createElement("h5");
    h5.setAttribute("class", "card-title");
    h5.innerText = personagem.name;

    // // Cria o texto do card
    // const p = document.createElement("p");
    // p.setAttribute("class", "card-text");
    // p.innerText = `Status: ${personagem.status}\nEspécie: ${personagem.species}`;

     // CRIA PARAGRAFO
     const descricaoPersonagem = document.createElement("p");
     descricaoPersonagem.setAttribute("class", "card-text");
 
     switch (personagem.status) {
       case "Alive":
         descricaoPersonagem.innerHTML = `
                     <span class="text-success">
                         <i class="bi bi-caret-right-fill"></i>
                     </span>
                     Vivo - ${personagem.species}
                 `;
         break;
 
       case "Dead":
         descricaoPersonagem.innerHTML = `
                     <span class="text-danger">
                         <i class="bi bi-caret-right-fill"></i>
                     </span>
                     Morto - ${personagem.species}
                 `;
         break;
 
       default:
         descricaoPersonagem.innerHTML = `
                     <span class="text-secondary">
                         <i class="bi bi-caret-right-fill"></i>
                     </span>
                     Desconhecido - ${personagem.species}
                 `;
     }
 

    const dadosEpisodio = await buscarDadosEpisodio(
      personagem.episode[personagem.episode.length - 1]
    );

    const detalhamentoPersonagem = document.createElement("dl");
    detalhamentoPersonagem.innerHTML = `
            <dt>Última localização conhecida:</dt>
            <dd>${personagem.location.name}</dd>

            <dt>Visto a última vez em:</dt>
            <dd>${dadosEpisodio.nomeEpisodio}</dd>

            <dt>Foi ao ar em:</dt>
            <dd>${dadosEpisodio.dataLancamento}</dd>
        `;
  
    // Anexa os elementos ao card
    divCardBody.appendChild(h5);
    divCardBody.appendChild(descricaoPersonagem);
    divCardBody.appendChild(detalhamentoPersonagem)
    divCard.appendChild(imgCard);
    divCard.appendChild(divCardBody);
    

    // Adiciona o card à página
    const container = document.getElementById("espaco-cards");
    container.appendChild(divCard);
  }

  async function buscarDadosEpisodio(url) {
    try {
      const resposta = await axios.get(url);
  
      // resposta.data
      return {
        id: resposta.data.id,
        nomeEpisodio: resposta.data.name,
        dataLancamento: resposta.data.air_date,
      };
    } catch (erro) {
      console.log("Erro ao buscar dados do episódio:", erro);
      return {};
    }
  }
  
 

  // Função principal para buscar os detalhes do personagem e renderizar o card
  async function exibirDetalhesPersonagem() {
    try {
      const personagem = await buscarDetalhesPersonagem(personagemId);
      renderizarCardPersonagem(personagem);
    } catch (erro) {
      console.log(erro);
    }
  }

  // Chama a função para exibir os detalhes do personagem
  exibirDetalhesPersonagem();
}
