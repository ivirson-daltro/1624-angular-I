import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs';
import { TransactionTypes } from '../../constants/transaction-types.enum';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-create-transaction',
  imports: [ReactiveFormsModule],
  templateUrl: './create-transaction.component.html',
  styleUrl: './create-transaction.component.css',
})
export class CreateTransactionComponent implements OnInit {
  private readonly transactionsService = inject(TransactionsService);

  form!: FormGroup;
  transactionTypesEnum = TransactionTypes;
  // today = new Date().toISOString().substring(0, 10);
  todayLocale = new Date().toLocaleDateString().split('/');
  todayISO = `${this.todayLocale[2]}-${this.todayLocale[1]}-${this.todayLocale[0]}`;

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(this.todayISO),
      description: new FormControl('Descrição da transação'),
      amount: new FormControl(1500.85),
      type: new FormControl(TransactionTypes.EXPENSE),
    });
  }

  onSubmit(): void {
    this.transactionsService
      .createTransaction(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          console.log('Sucesso!');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
