import { Outpoint } from './outpoint.dto';

export type TxIn = {
  previous_output: Outpoint;
  script_bytes: number;
  sig_script: string;
  sequence: 0xffffffff;
};

export type CoinbaseTxIn = {
  hash: '';
  index: 0xffffffff;
  script_bytes: number;
  height: number;
  coinbase_script: string;
  sequence: number;
};
