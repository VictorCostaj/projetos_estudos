import { randomUUID } from "crypto";
import { Type } from "../types/typesTweet";
import listUser from "../database/ListUsers";
import { Reply } from "../database/Reply";

export class Tweet {
  private _id: string;
  private _content: string;
  private _type: Type;
  private _userID: string;
  private _likes: string[];
  private _replies: Reply[];

  constructor(content: string, type: Type, userID: string) {
    this._id = randomUUID();
    this._userID = userID;
    this._content = content;
    this._type = type;
    this._likes = [];
    this._replies = [];
    this.setUser(userID);
  }

  public getDetalis() {
    return {
      id: this._id,
      content: this._content,
      type: this._type,
      userID: this._userID,
      likes: this._likes,
      replies: this._replies,
    };
  }

  public addReply(reply: Reply) {
    this._replies.push(reply);
    return reply;
  }

  public addLikeTweet(userID: string) {
    if (!this._likes.includes(userID)) {
      this._likes.push(userID);
    }
  }

  public dislikeTweet(userID: string) {
    const index = this._likes.indexOf(userID);
    if (index !== -1) {
      this._likes.splice(index, 1);
    }
  }

  public geNumberLikes(): number {
    return this._likes.length;
  }

  public setUser(userID: string) {
    const user = listUser.find((user) => user.getDetalis().id === userID);
    if (user) {
      return (this._userID = user.getDetalis().id);
    } else {
      throw new Error("Esse usuário não existe");
    }
  }
}
