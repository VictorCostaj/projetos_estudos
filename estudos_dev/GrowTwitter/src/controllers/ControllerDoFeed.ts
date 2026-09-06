import allTwetts from "../database/Tweets";
import { User } from "../classes/User";
import listUser from "../database/ListUsers";
import { Tweet } from "../classes/Tweet";
import ControllerDoTwets from "./ControllerDoTwets";

class ControllerDoFeed {
  public displayFeed(idUser: string) {
    const user = listUser.find((user) => user.getDetalis().id === idUser);
    if (!user) {
      console.log("Usuário não existe");
      return;
    }
    const tweets = allTwetts.filter(
      (tweet) =>
        tweet.getDetalis().userID === idUser ||
        user.getFollowing().includes(tweet.getDetalis().userID)
    );

    tweets.forEach((tweets) => {
      const tweetUser = listUser.find(
        (user) => user.getDetalis().id === tweets.getDetalis().userID
      );
      console.log(
        `@${tweetUser!.getDetalis().username}: ${tweets!.getDetalis().content}`
      );
      if (tweets.getDetalis().likes.length > 0) {
        const FristName = tweetUser!.getName();
        console.log(
          `@${FristName} e mais ${
            tweets.getDetalis().likes.length - 1
          } usuário curtiram`
        );
      }

      if (tweets.getDetalis().replies.length > 0) {
        console.log("replies:");
        tweets.getDetalis().replies.forEach((reply) => {
            const replayUser = listUser.find(
                (user) => user.getDetalis().id === reply.userId
            )
            console.log(`>@${replayUser!.getDetalis().username}: ${reply.conteudo}`);
        });
      }
      console.log("--------------------------------");
    });
  }
}

export default new ControllerDoFeed