import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  personas= [{
    nombre: 'Ana',
    apellido: 'Martinez',
    dni: '71369169P'
  },
  {
    nombre: 'Marcos',
    apellido: 'Sánchez',
    dni: '15487549L'
  }
  ]

  abrirYoutube(){
    window.open("https://www.youtube.com/");
  }
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }
  
  constructor(public toastController: ToastController) { }

 
  ngOnInit() {
  }

}
