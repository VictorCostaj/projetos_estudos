import allTwetts from "../database/Tweets";
import { User } from "../classes/User";
import { Reply } from "../database/Reply";
import { Tweet } from "../classes/Tweet";
import { Type } from "../types/typesTweet";
import UserController from "./ControllerDoUser";
import listUser from "../database/ListUsers";

class ControllerDoTwets {
  public ToCreatTweet(idUser: string, content: string, type: Type) {
    const user = listUser.find((user) => user.getDetalis().id === idUser);
    if (!user) {
      console.log("Usuário não encontrado");
      return;
    }
    const newTweet = new Tweet(content, type, user.getDetalis().id);
    user.addTweet(newTweet);
    return newTweet;
  }
  public getTweetById(id: string) {
    const tweet = this.getAll().find((tweet) => tweet.getDetalis().id === id);
    if (!tweet) {
      console.log(" Não foi possivel encontrar o seu Tweet");
      return;
    }
    const user = UserController.getUserById(tweet.getDetalis().userID)!.username;
    const numberLikes = tweet.geNumberLikes();
    let likesExhibition = "";
    if (numberLikes === 0) {
      likesExhibition = "";
    } else if (numberLikes === 1) {
      likesExhibition = `@${user} curtiu`;
    } else {
      const otherUsers = numberLikes - 1;
      likesExhibition = `@${user} e mais ${otherUsers} usuário curtiram`;
    }

    console.log(`@${user}: ${tweet.getDetalis().content}`);
    console.log("likesExhibition");
    return likesExhibition;
  }

  public getAll() {
    return allTwetts;
  }

  public getUser(idUser: string) {
    return this.getAll().find((tweet) => tweet.getDetalis().id === idUser);
  }
  public likeTweet(id: string, userId: string): void {
    const tweet = this.getAll().find((tweet) => tweet.getDetalis().id === id);
    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }

    if (userId === tweet.getDetalis().userID) {
      console.log("Você não pode dar like no seu tweet");
    }
    tweet.addLikeTweet(userId);
  }

  public unlikeTweet(id: string, userId: string): void {
    const tweet = this.getAll().find((tweet) => tweet.getDetalis().id === id);
    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }
    tweet.dislikeTweet(userId);
  }
  public getTweetInstanceByid(id: string): Tweet | undefined {
    return this.getAll().find((tweet) => tweet.getDetalis().id === id);
  }

  public responderTweet(idUser: string, idTweet: string, content: string) {
    const user = listUser.find((user) => user.getDetalis().id === idUser);
    if (!user) {
      console.log("Usuário não encontrado");
      return;
    }
    const tweet = this.getTweetInstanceByid(idTweet);
    if (!tweet) {
      console.log("Tweet não encontrado");
      return;
    }

    const novaReply = new Reply(user.getDetalis().id, content);
    tweet.addReply(novaReply);
    return tweet;
  }
}
export default new ControllerDoTwets();
