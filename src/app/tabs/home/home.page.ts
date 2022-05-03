import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mijnAlberHeijnSlides = [
    [
      {
        title: 'Mijn Bonus Box',
        subtitle: '1/10 geactiveerd',
      },
      {
        title: 'Koopzegels',
        subtitle: '458/490 zegels',
      },
    ],
    [
      {
        title: 'Premium',
        subtitle: 'bekijk je besparingen',
      },
      {
        title: 'Efteling',
        subtitle: '3/4 zegels',
      },
    ],
    [
      {
        title: 'Messenzegels',
        subtitle: 'b6/25 zegels',
      },
      {
        title: 'Mijn AH Miles',
        subtitle: 'activeer nu',
      },
    ],
  ];
  constructor() {}
}
