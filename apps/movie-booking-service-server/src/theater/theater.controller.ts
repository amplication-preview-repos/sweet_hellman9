import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TheaterService } from "./theater.service";
import { TheaterControllerBase } from "./base/theater.controller.base";

@swagger.ApiTags("theaters")
@common.Controller("theaters")
export class TheaterController extends TheaterControllerBase {
  constructor(protected readonly service: TheaterService) {
    super(service);
  }
}
