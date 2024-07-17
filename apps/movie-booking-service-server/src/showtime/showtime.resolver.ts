import * as graphql from "@nestjs/graphql";
import { ShowtimeResolverBase } from "./base/showtime.resolver.base";
import { Showtime } from "./base/Showtime";
import { ShowtimeService } from "./showtime.service";

@graphql.Resolver(() => Showtime)
export class ShowtimeResolver extends ShowtimeResolverBase {
  constructor(protected readonly service: ShowtimeService) {
    super(service);
  }
}
