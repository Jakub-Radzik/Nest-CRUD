import { Module } from "@nestjs/common";
import { PhotoService } from "./photo.service";
import { PhotoController } from "./photo.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Person } from "../persons/entities/person.entity";
import { Photo } from "./entities/photo.entity";
import { PersonsService } from "../persons/persons.service";

@Module({
  imports: [TypeOrmModule.forFeature([Photo]), PersonsService],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
