import { Module } from "@nestjs/common";
import { ShowtimeModuleBase } from "./base/showtime.module.base";
import { ShowtimeService } from "./showtime.service";
import { ShowtimeController } from "./showtime.controller";
import { ShowtimeResolver } from "./showtime.resolver";

@Module({
  imports: [ShowtimeModuleBase],
  controllers: [ShowtimeController],
  providers: [ShowtimeService, ShowtimeResolver],
  exports: [ShowtimeService],
})
export class ShowtimeModule {}
