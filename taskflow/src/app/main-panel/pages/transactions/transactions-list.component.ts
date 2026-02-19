import { Component } from '@angular/core';
import { CreateTransactionComponent } from './components/create-transaction/create-transaction.component';

@Component({
  selector: 'app-transactions-list',
  imports: [CreateTransactionComponent],
  templateUrl: './transactions-list.component.html',
  styleUrl: './transactions-list.component.css',
})
export class TransactionsListComponent {
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

  showCreateForm = true;

  redirectToCreate(): void {
    this.showCreateForm = !this.showCreateForm;
  }
}
