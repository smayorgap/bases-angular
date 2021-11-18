import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Captain America', 'Black Widow', 'Dr. Strange'];
  heroeEliminado: string = '';

  borrarHeroe() {
    console.log(this.heroes)
    this.heroeEliminado = this.heroes.shift() || '';
  }

}
