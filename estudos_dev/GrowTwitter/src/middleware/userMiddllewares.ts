import users from "../database/ListUsers";

class userMiddllewares {
  public validateUser(username: string) {
    const userExisting = users.some((user) => user._username === username);
    return userExisting;
  }
}

export default new userMiddllewares();
