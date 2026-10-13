import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

import type { AuthService } from "./auth.service";
import type { LoginRequestDto } from "./dto/login-request.dto";
import { LocalAuthGuard } from "./guards/local-auth.guard";

@ApiTags("login")
@Controller("login")
export class LoginController {
  constructor(private authService: AuthService) {}

  @Post()
  @UseGuards(LocalAuthGuard)
  login(@Body() req: LoginRequestDto) {
    return this.authService.login(req);
  }
}
