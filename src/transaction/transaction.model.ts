import { TxIn } from './dtos/txin.dto';

export class Transaction {
  version: 1 | 2;
  tx_in_count: number;
  tx_in: Array<TxIn>;
}
