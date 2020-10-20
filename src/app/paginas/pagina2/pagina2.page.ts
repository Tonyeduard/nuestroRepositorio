import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
