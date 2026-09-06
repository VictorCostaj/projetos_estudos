// import express from "express";
const express = require("express");

const app = express();

app.use(express.json());

app.listen(8080, () => console.log("Servidor iniciado"));

app.get("/", (request, response) => {
  return response
    .status(200)
    .send(
      "<h1>Bem vindo à API de Recados</h1> <p><b>## CRIANDO USUÁRIOS##</b>  <br> rota : /users <br><br>   <b>##LOGIN##</b>  <br> rota : /login </p>  <b>## CRIAR RECADOS ##</b><br> rota: /recados <br><p><b>## ATUALIZAR RECADOS##</b>  <br> rota : /recados/:id <br> <p><b>## DELETAR RECADOS##</b>  <br> rota : /recados/delete/:id<br><br>"
    );
});

//##### DATABASE ###

const listaUsuarios = [];

// ## CRIANDO USUÁRIOS ###
app.post("/users", (request, response) => {
  const dados = request.body;

  if (
    !dados.email ||
    !dados.email.includes("@") ||
    !dados.email.includes(".com")
  ) {
    return response.status(400).json({
      sucesso: false,
      dados: null,
      mensagem: "É obrigatório informar um e-mail válido para cadastro.",
    });
  }

  if (listaUsuarios.some((users) => users.email === dados.email)) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Usuario já cadastrado.",
    });
  }

  if (!dados.password || dados.password.length < 6) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "É obrigatório informar uma senha com no minimo 6 caracteres.",
    });
  }

  const novoUsuario = {
    id: new Date().getTime(),
    nome: dados.nome,
    email: dados.email,
    password: dados.password,
    logado: false,
    recados: [],
  };

  listaUsuarios.push(novoUsuario);

  return response.status(201).json({
    sucesso: true,
    mensagem: "Usuario cadastrado com sucesso!",
  });
});

// ## LOGIN ###
app.post("/login", (request, response) => {
  const login = request.body;

  const emailCorreto = listaUsuarios.some((user) => user.email === login.email);

  const passwordCorreta = listaUsuarios.some(
    (user) => user.password === login.password
  );

  if (!emailCorreto || !passwordCorreta) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Email ou senha estão incorretos",
    });
  }

  listaUsuarios.forEach((usuario) => (usuario.logado = false));

  const user = listaUsuarios.find((user) => user.email === login.email);

  user.logado = true;

  return response.status(200).json({
    sucesso: true,
    mensagem: "usuario conectado , XABLAU!",
    data: {},
  });
});

// ## CRIAR RECADOS ###

const listaRecados = [];

app.post("/recados", (request, response) => {
  const usuario = listaUsuarios.find((user) => user.logado === true);

  if (!usuario) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Necessário fazer login para criar um post",
    });
  }

  const recado = request.body;

  if (!recado.titulo || !recado.descricao) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Dados obrigatórios: Título e descrição",
    });
  }

  const novoRecado = {
    id: new Date().getTime(),
    titulo: recado.titulo,
    descricao: recado.descricao,
    autor: usuario,
  };

  listaUsuarios.push(novoRecado);
  return response.status(201).json({
    sucesso: true,
    mensagem: "Recado criado com sucesso!",
    data: novoRecado,
  });
});

// ## LISTAR RECADOS ###
app.get("/recados", (request, response) => {
  const usuario = listaUsuarios.find((user) => user.logado === true);

  if (!usuario) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Necessário fazer login para criar um post",
    });
  }

  const recados = listaRecados.recados;

  return response.status(200).json({
    sucesso: true,
    dados: recados,
    mensagem: "Recados listados!",
  });
});

// ## ATUALIZAR RECADOS ###
app.put("/recados/:id", (request, response) => {
  const usuario = listaUsuarios.find((user) => user.logado === true);
  const recadoId = request.params.id;
  const atualizarRecado = request.body;

  if (!usuario) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Necessário fazer login para ATUALIZAR um post",
    });
  }

  listaRecados.forEach((recado) => {
    if (recadoId == recadoId) {
      recado.titulo = atualizarRecado.titulo;
      recado.descricao = atualizarRecado.descricao;
    }
  });

  return response.status(200).json({
    sucesso: true,
    dados: atualizarRecado,
    mensagem: "O seu recado foi atualizado com sucesso!",
  });
});

// ## DELETAR RECADOS ###
app.delete("/recados/delete/:id", (request, response) => {
  const recadoId = request.params.id;
  const usuario = listaRecados.find((user) => user.logado === true);

  if (!usuario) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Necessário fazer login para criar um post",
    });
  }

  const indexRecado = listaRecados.findIndex((recado) => recado.id == recadoId);

  if (indexRecado < 0) {
    return response.status(400).json({
      sucesso: false,
      mensagem: "Recado não localizado",
    });
  }
  listaRecados.splice(indexRecado, 1);
  return response.status(200).json({
    sucesso: true,
    mensagem: "Recado Apagado",
  });
});
