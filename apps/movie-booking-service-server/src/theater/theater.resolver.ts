import * as graphql from "@nestjs/graphql";
import { TheaterResolverBase } from "./base/theater.resolver.base";
import { Theater } from "./base/Theater";
import { TheaterService } from "./theater.service";

@graphql.Resolver(() => Theater)
export class TheaterResolver extends TheaterResolverBase {
  constructor(protected readonly service: TheaterService) {
    super(service);
  }
}
