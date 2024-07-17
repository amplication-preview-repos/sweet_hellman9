import { ShowtimeWhereInput } from "./ShowtimeWhereInput";
import { ShowtimeOrderByInput } from "./ShowtimeOrderByInput";

export type ShowtimeFindManyArgs = {
  where?: ShowtimeWhereInput;
  orderBy?: Array<ShowtimeOrderByInput>;
  skip?: number;
  take?: number;
};
