import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  elementos =[{
    icono: 'alarm-outline',
    ruta: '/pagina1',
    titulo: 'PAGINA 1'
  },
  {
    icono: 'bandage-outline',
    ruta: '/pagina2',
    titulo: 'PAGINA 2'
  }
  
  ]
  constructor() {}

}
