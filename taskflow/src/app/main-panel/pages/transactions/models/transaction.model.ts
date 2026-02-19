import { TransactionTypes } from '../constants/transaction-types.enum';

export interface Transaction {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: TransactionTypes;
}
