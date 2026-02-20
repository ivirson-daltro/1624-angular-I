import { Component } from '@angular/core';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';
import { ListTransactionsComponent } from './components/list-transactions/list-transactions.component';

@Component({
  selector: 'app-transactions',
  imports: [CreateTransactionComponent, ListTransactionsComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  // private readonly destroyRef = inject(DestroyRef);
  // obs = new Observable((observer) => {
  //   let count = 0;
  //   setInterval(() => {
  //     observer.next(count);
  //     count++;
  //   }, 1000);
  // });
  // ngOnInit(): void {
  //   this.obs.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log('Finalizou');
  //     },
  //   });
  // }

  showCreateForm = false;

  redirectToCreate(): void {
    this.showCreateForm = !this.showCreateForm;
  }
}
