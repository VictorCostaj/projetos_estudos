#!/bin/bash

REPOSITORIOS=(
"https://github.com/VictorCostaj/backendEad.git"
"https://github.com/VictorCostaj/pokedexz.git"
"https://github.com/VictorCostaj/GrowTwitter.git"
"https://github.com/VictorCostaj/Api--The-Rick-and-Morty.git"
"https://github.com/VictorCostaj/spotify-interface-tailwind.git"
"https://github.com/VictorCostaj/api-rick-morty-font-II.git"
"https://github.com/VictorCostaj/final-modulo-back-end.git"
"https://github.com/VictorCostaj/pagina-login-completo.git"
"https://github.com/VictorCostaj/Atividade-Pratica-form.git"
"https://github.com/VictorCostaj/Atividade-Pr-tica-09---Arrays-2-e-Objetos.git"
"https://github.com/VictorCostaj/Atvidade-Pr-tica-08---Arrays-e-Objetos.git"
"https://github.com/VictorCostaj/Atividade-Pr-tica-07---Arrays.git"
"https://github.com/VictorCostaj/Atividade-Pr-tica-06----Estrutura-Condicionais-e-Repeti--o-02.git"
"https://github.com/VictorCostaj/Atividade-Pr-tica-Ilha-growdev.git"
"https://github.com/VictorCostaj/Atividade-Pr-tica-02---L-gica-simples-e-condicionais.git"
"https://github.com/VictorCostaj/Exercicios-logica-js.git"
"https://github.com/VictorCostaj/Front-End-II.git"
"https://github.com/VictorCostaj/recadosebilhetes.git"
"https://github.com/VictorCostaj/exercicio-spa-reactjs.git"
"https://github.com/VictorCostaj/Nikel-Projeto.git"
"https://github.com/VictorCostaj/Final-Modulo-introdu--o-programa--o.git"
"https://github.com/VictorCostaj/Modulo-Final-I.git"
)

for repo in "${REPOSITORIOS[@]}"; do
  git clone "$repo"
done
