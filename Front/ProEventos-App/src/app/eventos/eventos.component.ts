import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent {
  public eventos: any = [
    {
      Tema: 'Angular',
      Local: 'São Paulo',
    },
    {
      Tema: '.NET5',
      Local: 'Belo horizonte'
    },
    {
      Tema: 'Angular e suas novidades',
      Local: 'São paulo'
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
