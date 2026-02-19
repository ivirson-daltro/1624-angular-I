import { Component, inject, OnInit } from '@angular/core';
import { Pages } from '../constants/pages.enum';
import { RouterService } from '../core/services/router.service';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TransactionsListComponent } from './pages/transactions/transactions-list.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-main-panel',
  imports: [DashboardComponent, TransactionsListComponent, AsyncPipe],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.css',
})
export class MainPanelComponent implements OnInit {
  private readonly routerService = inject(RouterService);

  // page!: Pages;
  page$ = this.routerService.getCurrentPage();
  pagesEnum = Pages;

  ngOnInit(): void {
    // this.routerService.getCurrentPage().subscribe((page: Pages) => {
    //   this.page = page;
    // });
  }
}
