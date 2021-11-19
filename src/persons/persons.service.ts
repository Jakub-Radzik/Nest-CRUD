import { Injectable } from "@nestjs/common";
import { CreatePersonDto } from "./dto/create-person.dto";
import { UpdatePersonDto } from "./dto/update-person.dto";
import { Repository } from "typeorm";
import { Person } from "./entities/person.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class PersonsService {
  constructor(
    @InjectRepository(Person)
    private userRepository: Repository<Person>
  ) {}

  create(createPersonDto: CreatePersonDto) {
    return this.userRepository.insert(createPersonDto);
  }

  findAll(): Promise<Person[]> {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return this.userRepository.update(id, updatePersonDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
