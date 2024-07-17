import { TheaterWhereInput } from "./TheaterWhereInput";
import { TheaterOrderByInput } from "./TheaterOrderByInput";

export type TheaterFindManyArgs = {
  where?: TheaterWhereInput;
  orderBy?: Array<TheaterOrderByInput>;
  skip?: number;
  take?: number;
};
