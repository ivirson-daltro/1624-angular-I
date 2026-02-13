import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions-list',
  imports: [],
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
}
