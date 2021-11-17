import { Injectable, Logger } from "@nestjs/common";
import { User } from "../controllers/models/user.interface";
import {LazyModuleLoader} from "@nestjs/core";

@Injectable()
export class UsersService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {
  }

  private users: User[] = [
    { id: 1, fName: "Jakub", lName: "Radzik", age: 21 },
    { id: 2, fName: "Piotr", lName: "Patolus", age: 21 },
    { id: 3, fName: "Kamil", lName: "Herbatko", age: 20 },
    { id: 4, fName: "Karol", lName: "Miedziak", age: 21 },
    { id: 5, fName: "Karol", lName: "Wojtkiewicz", age: 21 },
  ];

  private currentID = this.users.length || 0;

  public getAll() {
    return this.users;
  }

  public getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  public addUser(user: User) {
    user.id = ++this.currentID;
    this.users.push(user);
    return user;
  }

  public updateUser(id: number, user: User) {
    this.deleteUserById(id);
    user.id = +id;
    this.users.push(user);
  }

  public deleteUserById(id: number) {
    let userToDelete = this.getUserById(id);
    this.users = this.users.filter((user) => user.id != id);
    return userToDelete;
  }
}
