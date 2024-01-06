import { TxIn } from './dtos/txin.dto';
import { TxOut } from './dtos/txout.dto';

export interface ITransaction {
  version: 1 | 2;
  tx_in_count: number;
  tx_in: Array<TxIn>;
  tx_out_count: number;
  tx_out: Array<TxOut>;
  lock_time: number;
}

export class Transaction implements ITransaction {
  public readonly version = 2;
  public tx_in_count = 0;
  public tx_out_count = 0;
  public lock_time;
  constructor(
    public readonly tx_in: Array<TxIn>,
    public readonly tx_out: Array<TxOut>,
  ) {
    if (tx_in.length) {
      this.tx_in_count = tx_in.length;
    }
    if (tx_out.length) {
      this.tx_out_count = tx_in.length;
    }
    this.setLockTime();
  }

  private setLockTime() {
    this.lock_time = Date.now();
  }
}
