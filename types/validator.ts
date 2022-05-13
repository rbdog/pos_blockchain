// ブロックをチェックするバリデーター
export type Validator = {
  // アドレス
  addr: string;
  // サイン (署名)
  signature: string;
  // 賭け金
  token: number;
};
