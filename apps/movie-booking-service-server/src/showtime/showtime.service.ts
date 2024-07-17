import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ShowtimeServiceBase } from "./base/showtime.service.base";

@Injectable()
export class ShowtimeService extends ShowtimeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
