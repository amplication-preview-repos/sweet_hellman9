import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ShowtimeService } from "./showtime.service";
import { ShowtimeControllerBase } from "./base/showtime.controller.base";

@swagger.ApiTags("showtimes")
@common.Controller("showtimes")
export class ShowtimeController extends ShowtimeControllerBase {
  constructor(protected readonly service: ShowtimeService) {
    super(service);
  }
}
