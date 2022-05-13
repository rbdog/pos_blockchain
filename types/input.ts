// お金を払う人の情報
export type Input = {
  // 時刻
  time: string;
  // アドレス (この人のサイフを表す)
  from: string;
  // サイン (お金を払う同意の署名)
  signature: string;
};
