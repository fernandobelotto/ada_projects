import { PartialType } from "@nestjs/mapped-types";
import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty } from "class-validator";

import { CreateCardDto } from "./create-card.dto";

export class UpdateCardDto extends PartialType(CreateCardDto) {
  @IsUUID()
  @ApiProperty()
  @IsNotEmpty()
  id: string;
}
