import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { ProductsModule } from "./products/products.module";
import { PersonsModule } from "./persons/persons.module";
import { OneService } from "./circular dependencies/one/one.service";
import { TwoService } from "./circular dependencies/two/two.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Connection } from "typeorm";
import { Person } from "./persons/entities/person.entity";

@Module({
  imports: [
    UsersModule,
    ProductsModule,
    PersonsModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "user",
      password: "password",
      database: "db",
      entities: [Person],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, OneService, TwoService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
