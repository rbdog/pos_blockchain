import { Tx } from "./tx.ts";
import { Validator } from "./validator.ts";

// ブロック
export type Block = {
  // 何番目のブロックか
  index: number;
  // ブロックを作った 時刻
  time: string;
  // 1つ前のブロック の ハッシュ
  prev_hash: string;
  // このブロック の ハッシュ
  hash: string;
  // トランザクション (ブロックの中に閉じ込めておくデータ)
  tx: Tx;
  // このブロックを保証してくれるバリデーター
  validator: Validator;
};
