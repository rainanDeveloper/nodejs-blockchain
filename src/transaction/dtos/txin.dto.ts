import { Outpoint } from './outpoint.dto';

export type TxIn = {
  previous_output: Outpoint;
  script_bytes: number;
  sig_script: string;
  sequence: 0xffffffff;
};
