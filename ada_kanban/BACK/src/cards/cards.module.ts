import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { CardsController } from "./cards.controller";
import { CardsService } from "./cards.service";
import { Card } from "./models/card.model";

@Module({
  controllers: [CardsController],
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [CardsService],
})
export class CardsModule {}
