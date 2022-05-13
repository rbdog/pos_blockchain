import { Input } from "./input.ts";
import { Output } from "./output.ts";

// トランザクション 取引の記録
export type Tx = {
  // 取引の ID
  id: string;
  // 取引のお金はどこからきたのか 入金
  inputs: Input[];
  // 取引のお金はどうなるのか 出金
  outputs: Output[];
};
