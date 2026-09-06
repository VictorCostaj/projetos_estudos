import listUsers from "../database/ListUsers";
import userMiddlewares from "../middleware/userMiddllewares";
import { User } from "../classes/User";

class ControllerDoUser {
  public RegisterUser(
    name: string,
    email: string,
    username: string,
    password: string
  ) {
    // Verifica se o username já está em uso através de middlewares
    const userExisting = userMiddlewares.validateUser(username);
    if (userExisting) {
      console.log("O username já está em uso. Por favor, escolha outro.");
      return;
    }
    // Criando usuário no data users
    const UserNew = new User(name, email, username, password);
    listUsers.push(UserNew);
    console.log("Usuário cadastrado com sucesso!");
    return UserNew;
  }
  getUserById(id: string) {
    const user = listUsers.find((user) => user.getDetalis().id === id);
    if (user) {
      return user.getDetalis();
    }
  }

  //parte de seguidores
  public UserFollow(idFollower: string, idUser: string) {
    const follower = listUsers.find(
      (user) => user.getDetalis().id === idFollower
    );
    const user = listUsers.find((user) => user.getDetalis().id === idUser);

    if (!follower || !user) {
      console.log("Usuário não encontrado.");
      return;
    }

    if (follower === user) {
      console.log("Você não pode seguir a si mesmo.");
      return;
    }

    return follower.follower(user);
  }
}

export default new ControllerDoUser();
