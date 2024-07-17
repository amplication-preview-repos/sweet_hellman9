import { Module } from "@nestjs/common";
import { TheaterModuleBase } from "./base/theater.module.base";
import { TheaterService } from "./theater.service";
import { TheaterController } from "./theater.controller";
import { TheaterResolver } from "./theater.resolver";

@Module({
  imports: [TheaterModuleBase],
  controllers: [TheaterController],
  providers: [TheaterService, TheaterResolver],
  exports: [TheaterService],
})
export class TheaterModule {}
