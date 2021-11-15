import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common";
import { UsersService } from "../services/users.service";
import { User } from "./models/user.interface";

@Controller("user")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.getAll();
  }

  @Get(":id")
  @UsePipes(ParseIntPipe)
  findById(@Param("id") id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  createUser(@Body() user: User) {
    return this.usersService.addUser(user);
  }

  @Patch(":id")
  updateUser(@Body() user: User, @Param('id') id: number) {
    this.usersService.updateUser(id, user);
  }

  @Delete(":id")
  @UsePipes(ParseIntPipe)
  deleteUser(@Param("id") id: number) {
    return this.usersService.deleteUserById(id);
  }
}
