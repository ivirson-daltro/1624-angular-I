import { Component, inject, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Transaction } from '../../models/transaction.model';
import { TransactionsService } from '../../services/transactions.service';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { TransactionTypes } from '../../constants/transaction-types.enum';
import { NegativeValuesPipe } from '../../../../../shared/pipes/negative-values.pipe';

@Component({
  selector: 'app-list-transactions',
  imports: [DatePipe, CurrencyPipe, NegativeValuesPipe],
  templateUrl: './list-transactions.component.html',
  styleUrl: './list-transactions.component.css',
})
export class ListTransactionsComponent implements OnInit {
  private readonly transactionsService = inject(TransactionsService);

  transactions: Transaction[] = [];
  transactionTypesEnum = TransactionTypes;

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.transactionsService
      .getTransactions()
      .pipe(first())
      .subscribe({
        next: (res) => {
          this.transactions = res;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
