import ControllerDoFeed from "./controllers/ControllerDoFeed";
import ControllerDoTwets from "./controllers/ControllerDoTwets";
import ControllerDoUser from "./controllers/ControllerDoUser";
import allTweets from "./database/Tweets";
import listUsers from "./database/ListUsers";
import { Tweet } from "./classes/Tweet";
import { User } from "./classes/User";

/* ######  Para Criar um usuário ######### */
const user = ControllerDoUser.RegisterUser(
  "everton",
  "everton@teste.com",
  "Everton97",
  "teste"
);
const user2 = ControllerDoUser.RegisterUser(
  "joao",
  "joao@teste.com",
  "João95",
  "teste"
);
const user3 = ControllerDoUser.RegisterUser(
  "bruno",
  "bruno@teste.com",
  "Bruno90",
  "teste"
);

/* ###### Armazenar os id dos usuários ######### */

const idUser = user!.getDetalis().id;
const idUser2 = user2!.getDetalis().id;
const idUser3 = user3!.getDetalis().id;

/* ###### Criando twitter ######### */

ControllerDoTwets.ToCreatTweet(idUser, "ola mundo!", "normal");
ControllerDoTwets.ToCreatTweet(idUser, "Hoje esta frio", "normal");
ControllerDoTwets.ToCreatTweet(idUser, "Hoje esta frio e chovendo", "normal");

ControllerDoTwets.ToCreatTweet(idUser2, "i am user2", "normal");
ControllerDoTwets.ToCreatTweet(idUser2, "i liked car", "normal");
ControllerDoTwets.ToCreatTweet(idUser2, "realy?", "normal");

ControllerDoTwets.ToCreatTweet(idUser3, "meu nome e Gabriel", "normal");
ControllerDoTwets.ToCreatTweet(idUser3, "i disliked car", "normal");
ControllerDoTwets.ToCreatTweet(idUser3, "maneiro", "normal");

/* ###### salvando os id's do  twitter ######### */

const idTwiterUser = user!.getDetalis().Tweet[0].id;
const idTwiterUser2 = user2!.getDetalis().Tweet[0].id;
const idTwiterUser3 = user3!.getDetalis().Tweet[0].id;

/* ###### Apresentando atraves do id do twitter ######### */

// ControllerDoTwets.getTweetById(idTwiterUser)

/* ###### Seguindo outro usuário com id ######### */

ControllerDoUser.UserFollow(idUser, idUser2);
ControllerDoUser.UserFollow(idUser, idUser3);

ControllerDoUser.UserFollow(idUser3, idUser);
ControllerDoUser.UserFollow(idUser3, idUser2);

ControllerDoUser.UserFollow(idUser2, idUser);
ControllerDoUser.UserFollow(idUser2, idUser3);

/* ###### Curtindo através do ID ######### */

ControllerDoTwets.likeTweet(idTwiterUser, idUser);
ControllerDoTwets.likeTweet(idTwiterUser, idUser2);
ControllerDoTwets.likeTweet(idTwiterUser, idUser3);

/* ###### Mostrando a quantidade de Curtidas ######### */

// ControllerDoTwets.getTweetById(idTwiterUser);

/* ###### Descurtindo ######### */

ControllerDoTwets.unlikeTweet(idTwiterUser, idUser3);

/* ###### Respondendo ######### */

ControllerDoTwets.responderTweet(idUser2, idTwiterUser, "isso e a vida");

ControllerDoTwets.responderTweet(idUser2, idTwiterUser2, "uau");

ControllerDoTwets.responderTweet(idUser, idTwiterUser3, "legal");

/* ###### Exibindo o feed ######### */

ControllerDoFeed.displayFeed(idUser);
