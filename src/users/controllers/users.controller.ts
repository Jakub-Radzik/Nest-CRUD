import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Scope, UseFilters, UseInterceptors,
  UsePipes,
} from "@nestjs/common";
import {UsersService} from "../services/users.service";
import {User} from "./models/user.interface";
import {CounterService} from "../services/counter/counter.service";
import {REQUEST} from "@nestjs/core";
import {Request} from "express";
import {ContextInterceptor} from "../interceptors/context.interceptor";
import {ContextFilter} from "../filters/context.filter";
import {LifehookService} from "../services/lifehook/lifehook.service";

@Controller({
  path: "user",
  scope: Scope.REQUEST
})
@UseFilters(ContextFilter)
export class UsersController {
  constructor(
    private usersService: UsersService,
    private counterService: CounterService,
    private lifehookService: LifehookService,
    @Inject(REQUEST) private request: Request
  ) {}

  c = "a";

  @Get()
  findAll() {
    // this.counterService.show();
    // console.log(this.c)
    // this.c = this.c + this.c;
    // console.dir(this.request);
    throw new Error();
    return this.usersService.getAll();
  }

  @Get(":id")
  @UsePipes(ParseIntPipe)
  findById(@Param("id") id: number) {
    // this.counterService.increment();
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.addUser(user);
  }

  @Patch(":id")
  updateUser(@Body() user: User, @Param("id") id: number) {
    this.usersService.updateUser(id, user);
  }

  @Delete(":id")
  @UsePipes(ParseIntPipe)
  deleteUser(@Param("id") id: number) {
    return this.usersService.deleteUserById(id);
  }
}
