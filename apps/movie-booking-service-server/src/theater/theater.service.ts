import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TheaterServiceBase } from "./base/theater.service.base";

@Injectable()
export class TheaterService extends TheaterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
