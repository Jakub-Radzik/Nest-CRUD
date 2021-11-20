import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "../../persons/entities/person.entity";

@Entity()
export class Photo {
  constructor(url: string) {
    this.url = url;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @ManyToOne(() => Person, (person) => person.photos)
  user: Person;
}
