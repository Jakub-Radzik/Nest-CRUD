import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import {CounterService} from "./services/counter/counter.service";
import {LifehookService} from "./services/lifehook/lifehook.service";

@Module({
  controllers: [UsersController],
  providers: [UsersService, CounterService, LifehookService]
})
export class UsersModule {}
