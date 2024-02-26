import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  constructor(private router: Router) {
    const data = router.getCurrentNavigation().extras.state['data'];
  }
}
