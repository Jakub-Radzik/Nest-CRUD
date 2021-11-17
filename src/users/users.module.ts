import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import {CounterService} from "./services/counter/counter.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, CounterService]
})
export class UsersModule {}
