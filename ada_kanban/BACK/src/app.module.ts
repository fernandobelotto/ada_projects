import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { AuthModule } from "./auth/auth.module";
import { CardsModule } from "./cards/cards.module";
import { Card } from "./cards/models/card.model";

@Module({
  imports: [
    CardsModule,
    TypeOrmModule.forRoot({
      database: "db",
      entities: [Card],
      synchronize: true,
      type: "sqlite",
    }),
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
