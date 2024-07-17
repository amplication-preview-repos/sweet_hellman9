import { TheaterWhereInput } from "./TheaterWhereInput";

export type TheaterListRelationFilter = {
  every?: TheaterWhereInput;
  some?: TheaterWhereInput;
  none?: TheaterWhereInput;
};
