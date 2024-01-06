import { TxIn } from './dtos/txin.dto';
import { TxOut } from './dtos/txout.dto';

export interface ITransaction {
  version: Buffer;
  tx_in_count: number;
  tx_in: Array<TxIn>;
  tx_out_count: number;
  tx_out: Array<TxOut>;
  lock_time: number;
}

export class Transaction implements ITransaction {
  public version = Buffer.from('01000000', 'hex');
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

  public toRawTx() {
    let txstr: string =
      this.version.toString('hex') +
      this.tx_in_count.toString(16).padStart(2, '0');

    // mount tx input part
    for (let i = 0; i < this.tx_in_count; i++) {
      txstr += this.tx_in[i].previous_output.hash;
      txstr += this.tx_in[i].previous_output.index;
      txstr += this.tx_in[i].script_bytes.toString(16);
      txstr += this.tx_in[i].sig_script;
      txstr += this.tx_in[i].sequence.toString(16);
    }

    txstr += this.tx_out_count.toString(16).padStart(2, '0');

    for (let i = 0; i < this.tx_out_count; i++) {
      txstr += this.tx_out[i].value;
      txstr += this.tx_out[i].pk_script_bytes.toString(16);
      txstr += this.tx_out[i].pk_script;
    }

    txstr += this.lock_time.toString(16);

    return txstr;
  }
}
