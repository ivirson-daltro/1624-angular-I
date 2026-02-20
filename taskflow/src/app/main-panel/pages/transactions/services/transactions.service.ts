import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root',
})
export class TransactionsService {
  private readonly http = inject(HttpClient);

  apiUrl = 'http://localhost:3000';

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  createTransaction(transaction: Transaction): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/transactions`, transaction);
  }
}
