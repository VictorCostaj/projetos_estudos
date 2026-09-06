import { randomUUID } from "crypto";
import { Tweet } from "./Tweet";
import allTwetts from "../database/Tweets";

export class User {
  private _id: string;
  private _name: string;
  public _username: string;
  private _email: string;
  private _password: string;
  private _followers: string[];

  constructor(name: string, username: string, email: string, password: string) {
    this._id = randomUUID();
    this._name = name;
    this._username = username;
    this._email = email;
    this._password = password;
    this._followers = [];
  }

  public addTweet(tweet: Tweet) {
    tweet.setUser(this._id);
    allTwetts.push(tweet);
  }

  public getName(): string {
    return this._name;
  }

  public getUsername(): string {
    return this._username;
  }

  public getDetalis() {
    return {
      id: this._id,
      name: this._name,
      username: this._username,
      email: this._email,
      password: this._password,
      followers: this._followers,
      Tweet: allTwetts.map((tweet) => tweet.getDetalis()),
    };
  }

  public follower(user: User) {
    if (user !== this && !this._followers.includes(user.getFollowing())) {
      this._followers.push(user.getDetalis().id);
      console.log(`${this._name} começou a seguir ${user.getName()}`);
    } else {
      console.log("Você não pode seguir a si mesmo");
    }
  }
  public getFollowing() {
    return this._followers.join("");
  }
  public getReplys() {
    return allTwetts.map((tweet) => tweet.getDetalis().content);
  }

  /* adicionando Tweet  */

  //Cadastrando um novo usuário

  //Cadastro de tweets
}
